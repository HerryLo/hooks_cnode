import * as React from 'react';
import IndexModel, { IndexModelClass } from '../../model/Index'
import { searchApiResponse, searchHitsItem } from '../../utils/request/searchResponse'
import { ContentItem } from './compontent/contentItem';
import './index.scss';

function IndexPage(): React.ReactElement {
    const model: IndexModelClass = new IndexModel();
    const [data, setData] = React.useState<Array<searchHitsItem>>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const result: searchApiResponse  = await model.getAlgoliaSearch({query: 'redex'});
            const newData: Array<searchHitsItem> = result.hits;
            setData(newData);
        };
        fetchData();
    }, [])

    return (
        <div className="Home">
            <div className="content-wrap">
            {
                data.map((item )=> {
                    return (
                        <ContentItem item={item} key={item.objectID}></ContentItem>
                    )
                })
            }
            </div>
        </div>
    )
}

export default IndexPage;