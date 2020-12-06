import * as React from 'react';
import IndexModel, { IndexModelClass } from '../../model/Index'
import { searchApiResponse, searchHitsItem } from '../../utils/request/searchResponse'

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
            {
                data.map((item )=> {
                    return (
                        <div className="title" key={item.objectID}>{item.title}</div>
                    )
                })
            }
        </div>
    )
}

export default IndexPage;