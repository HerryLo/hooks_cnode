import request from '../../utils/request';
import { searchApiResponse } from '../../utils/request/searchResponse'

interface Option {
    query: string
}

/**
 * IndexModel 抽象类
 */
export abstract class IndexModelClass {
    /**
     * 获取首页话题数据
     */
    abstract getAlgoliaSearch(option: Option): Promise<searchApiResponse>
}

/**
 * 首页 IndexPage Model
 * 
 */
export default class IndexModel extends IndexModelClass {
    public async getAlgoliaSearch(option: Option): Promise<searchApiResponse> {
        const res: searchApiResponse  = await request.get<searchApiResponse>(`/api/v1/search?query=${option.query}`);
        return res;
    }
}