import * as React from 'react';
import IndexModel, { IndexModelClass } from '../../model/Index'
import { IndexTopicsResponse, IndexTopicsItem } from '../../utils/request/IndexTopicsResponse'

const model: IndexModelClass = new IndexModel();

function IndexPage(): React.ReactElement {
    const [data, setData] = React.useState<Array<IndexTopicsItem>>([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const result: IndexTopicsResponse = await model.getIndexData();
            const newData: Array<IndexTopicsItem> = result.data;
            console.log(newData);
            if(result.success == true) {
                setData(newData);
            }
        };
        fetchData();
    }, [])

    return (
        <div className="Home">
            {
                data.map((item: IndexTopicsItem )=> {
                    return (
                        <div key={item.id}>{item.title}</div>
                    )
                })
            }
        </div>
    )
}

export default IndexPage;