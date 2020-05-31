import * as React from 'react';
import IndexModel from '../../model/Index'

const model: any = new IndexModel();

function IndexPage(): React.ReactElement {

    // const res = await model.getIndexData();

    // console.log(res);

    return (
        <div className="Home">
            Home
        </div>
    )
}

export default IndexPage;