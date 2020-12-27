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
}

const model = new IndexModel();

class IndexPage extends React.Component<IProp, IState>{
    constructor(props: IProp) {
        super(props);
        this.state = {
            data: []
        }
    }
    
    public getSearchList = async () => {
        const result: searchApiResponse  = await model.getAlgoliaSearch({query: 'redux'});
        const newData: Array<searchHitsItem> = result.hits;
        this.setState({
            data: newData
        })
    }

    componentDidMount() {
        this.getSearchList();
    }
    
    render() {
        const { data } = this.state;
        return (
            <div className="index-search">
                <SearchInput />
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

// function IndexPage(): React.ReactElement {
//     const model: IndexModelClass = new IndexModel();
//     const [data, setData] = React.useState<Array<searchHitsItem>>([]);
//     const [key, setKey] = React.useState<string>('redex');

//     React.useEffect(() => {
//         const fetchData = async () => {
//             const result: searchApiResponse  = await model.getAlgoliaSearch({query: key});
//             const newData: Array<searchHitsItem> = result.hits;
//             setData(newData);
//         };
//         fetchData();
//     }, [])

//     return (
//         <div className="index-search">
//             <SearchInput />
//             <div className="content-wrap">
//             {
//                 data.map((item )=> {
//                     return (
//                         <ContentItem item={item} key={item.objectID} />
//                     )
//                 })
//             }
//             </div>
//         </div>
//     )
// }

export default IndexPage;