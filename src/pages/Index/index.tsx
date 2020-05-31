import * as React from 'react';
import IndexModel from '../../model/Index'

const model: any = new IndexModel();

function IndexPage(): React.ReactElement {

    React.useEffect(() => {
        const fetchData = async () => {
            const result = await model.getIndexData();
            console.log(result);
        };
        fetchData();
    }, [])

    return (
        <div className="Home">
            Home
        </div>
    )
}

export default IndexPage;