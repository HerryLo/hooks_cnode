import axios from 'axios';
import { RequestHost } from './config'

class Request {
    host = RequestHost

    get(url: string): Promise<any> {
        return new Promise((resolve, reject)=> {
            axios.get(this.host+url)
            .then(function (response: any) {
                return resolve(response);
            })
            .catch(function (error: any) {
                return reject(error);
            });
        })
    }
}

export default new Request();