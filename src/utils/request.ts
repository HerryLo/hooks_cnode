import axios from 'axios';
import { RequestHost } from './config'

class Request {
    host = RequestHost

    get(url: string): Promise<any> {
        return new Promise((resolve, reject)=> {
            axios.get(this.host+url)
            .then(function (response: any) {
                resolve(response.data);
            })
            .catch(function (error: any) {
                reject(error);
            });
        })
    }
}

export default new Request();