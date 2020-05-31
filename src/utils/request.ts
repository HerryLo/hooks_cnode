import axios, { AxiosResponse } from 'axios';
import { RequestHost } from './config'

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