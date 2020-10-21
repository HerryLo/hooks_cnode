import axios, { AxiosResponse } from 'axios';
import { RequestHost } from './config'

axios.interceptors.request.use(function (config) {
    return config;
}, function(err) {console.log(err)});

axios.interceptors.response.use(function (res) {
    return res;
}, function(err) {console.log(err)});

class Request {
    /**
     * 域名host
     */
    host = RequestHost

    /**
     * Get 请求
     * @param url 
     */
    async get<T>(url: string) {
        const res: AxiosResponse<T> = await axios.get(this.host+url);
        const data = res.data;
        return data;
    }
}

export default new Request();