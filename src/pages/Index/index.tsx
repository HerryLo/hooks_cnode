import * as React from 'react';
import IndexModel, { IndexModelClass } from '../../model/Index'
// import { IndexTopicsResponse, IndexTopicsItem } from '../../utils/request/IndexTopicsResponse'

const model: IndexModelClass = new IndexModel();

function IndexPage(): React.ReactElement {
    // eslint-disable-next-line
    const [data, setData] = React.useState<Array<any>>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await model.getAlgoliaSearch({query: 'redex'});
            const newData = result.hits;
            setData(newData);
        };
        fetchData();
    }, [])

    return (
        <div className="Home">
            {
                data.map((item )=> {
                    return (
                        <div key={item.objectID}>{item.title}</div>
                    )
                })
            }
        </div>
    )
}

export default IndexPage;