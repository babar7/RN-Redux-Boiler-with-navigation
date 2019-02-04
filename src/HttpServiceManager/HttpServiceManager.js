import axios from 'axios';
import {
    getUserObject
} from '../singleton/Singleton';
import {
    isEmpty
} from '../utility/utility';
import {
    getUserToken
} from '../userPreference';

class HttpServiceManager {

    static myInstance = null;
    static axiosInstance = null;
    userToken = "";
    static getInstance() {
        if (HttpServiceManager.myInstance == null) {
            HttpServiceManager.myInstance = new HttpServiceManager();
        }
        return this.myInstance;
    }

    static initialize = (baseURL, authHeader) => {

        HttpServiceManager.getInstance().axiosInstance = axios.create({
            baseURL: baseURL,
            timeout: 60000,
            headers: authHeader
        });
        HttpServiceManager.getInstance().axiosInstance.interceptors.request.use(
            function (config) {
                config.headers["user-token"] = HttpServiceManager.getInstance().userToken
                return config
            },
            function (error) {
                return error
            }
        );
    }

    multipleRequest = (RequestArray) => {
        if (HttpServiceManager.getInstance().axiosInstance !== null) {
            return new Promise((resolve, reject) => {
                axios.all(RequestArray)
                    .then((response) => {
                        resolve(response)
                    }).catch((error) => {
                        reject(checkError(error));
                    })
            })
        } else {
            console.warn('HttpServiceManager method "initialize" is not called, call it in App.js componentDidMount');
        }
    }


    getRequestObject = (requestName, parameters, method) => {
        if (HttpServiceManager.getInstance().axiosInstance !== null) {
            return HttpServiceManager.getInstance().axiosInstance.request({
                method: method,
                url: requestName,
                params: parameters
            });
        } else {
            console.warn('HttpServiceManager method "initialize" is not called, call it in App.js componentDidMount');
        }
    }

    request = (requestName, parameters, method, multipart = false) => {
        if (HttpServiceManager.getInstance().axiosInstance !== null) {
            return new Promise((resolve, reject) => {
                let reqParam = {
                    method: method,
                    url: requestName,
                    data: parameters,
                    params: parameters
                }
                const req = HttpServiceManager.getInstance().axiosInstance.request(reqParam)
                    .then((response) => {
                        console.log("HttpServiceManager-RequestName: " + requestName + " Method : " + method +  " Response : ",response )
                        if (response.data.code === 200) {
                            resolve({response : response.data.data ,meta: response.data.meta});
                        } else {
                            reject('We have e-mailed your password reset link!');
                        }
                        // showLoader(false);
                    }).catch((error) => {
                        console.log("HttpServiceManager-error: ", error.response)
                        reject(HttpServiceManager.checkError(error));
                        // showLoader(false);
                    });
            })
        } else {
            console.warn('HttpServiceManager method "initialize" is not called, call it in App.js componentDidMount');
        }
    }

    static checkError = (error) => {
        if (error.response === undefined) {
            return error.message
        } else if (error.response.status === 500) {
            return "Html cannot be parsed"
        } else if (error.response.status === 503) {
            return error.message
        } else if (error.response.status === 403) {
            return error.message
        } else if (error.response.status === 404) {
            var values = Object.keys(error.response.data.data).map((key) => {
                return error.response.data.data[key];
            });
            return ('• ' + values.join('\n• '));
        } else {
            return error.message
        }
    }
}

export default HttpServiceManager;