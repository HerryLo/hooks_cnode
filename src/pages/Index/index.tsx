import * as React from 'react';
import IndexModel, { IndexModelClass } from '../../model/Index'
import { searchApiResponse, searchHitsItem } from '../../utils/request/searchResponse'
import { ContentItem } from './component/contentItem';
import { SearchInput } from './component/searchInput';
import './index.scss';

interface IProp {

}
interface IState {
    data: Array<searchHitsItem>
    key: string,
    prekey: string
}

const model = new IndexModel();

class IndexPage extends React.Component<IProp, IState>{
    constructor(props: IProp) {
        super(props);
        this.state = {
            data: [],
            key: "react",
            prekey: "react"
        }

        this.onChangeKey = this.onChangeKey.bind(this);
        this.getSearchList = this.getSearchList.bind(this);
        this.onSeachSubmit = this.onSeachSubmit.bind(this);
    }

    componentDidMount() {
        this.getSearchList();
    }

    componentDidCatch(error: any) {
        console.log(error);
    }
    
    public getSearchList = async (key?: string) => {
        try {
            const query = key || this.state.key;
            const result: searchApiResponse  = await model.getAlgoliaSearch({query});
            const newData: Array<searchHitsItem> = result.hits;
            this.setState({
                data: newData
            })
        }catch(e) {
            console.log(e);
        }
    }

    public onChangeKey(event: any) {
        const key = this.state.key;
        const newKey = event;
        if(key !== newKey) {
            this.setState({
                key: newKey,
                prekey: key
            })
        }
    }

    public onSeachSubmit(event: any) {
        const { key, prekey } = this.state;
        if(key !== prekey) {
            this.getSearchList(key);
        }
    }
    
    render() {
        const { data, key } = this.state;
        return (
            <div className="index-search">
                <SearchInput 
                    defaultKey={key}
                    onSeachChange={this.onChangeKey}
                    onSeachSubmit={this.onSeachSubmit} />
                <div className="content-wrap">
                    {
                        data.map((item: searchHitsItem)=> {
                            return (
                                <ContentItem item={item} key={item.objectID} />
                            )
                        })
                    }
                </div>
            </div>
        )
    
    }
}

export default IndexPage;