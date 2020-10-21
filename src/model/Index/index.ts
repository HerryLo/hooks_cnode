import Request from '../../utils/request';
// import { IndexTopicsResponse } from '../../utils/request/IndexTopicsResponse'

/**
 * IndexModel 抽象类
 */
export abstract class IndexModelClass {
    /**
     * 获取首页话题数据
     */
    // abstract getIndexData(): Promise<IndexTopicsResponse> 

    /**
     * 获取首页话题数据
     */
    // eslint-disable-next-line
    abstract getAlgoliaSearch(option: any): Promise<any>
}

/**
 * 首页 IndexPage Model
 * 
 */
export default class IndexModel extends IndexModelClass {
    // public async getIndexData(): Promise<IndexTopicsResponse> {
    //     const res: IndexTopicsResponse = await Request.get<IndexTopicsResponse>('/api/v1/topics');
    //     return res;
    // }

    // eslint-disable-next-line
    public async getAlgoliaSearch(option: any): Promise<any> {
        // eslint-disable-next-line
        const res = await Request.get<any>(`/api/v1/search?query=${option.query}`);
        return res;
    }
}