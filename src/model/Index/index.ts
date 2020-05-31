import Request from '../../utils/request';
import { IndexTopicsResponse } from '../../utils/request/IndexTopicsResponse'

export default class IndexModel {
    async getIndexData(): Promise<IndexTopicsResponse | undefined> {
        try {
            const res: IndexTopicsResponse = await Request.get('/api/v1/topics');
            console.log(res);
            if(res.success == true) {
                return res;
            }
        }catch(err) {
            console.log(err);
        }
    }
}