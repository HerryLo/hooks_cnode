import * as React from 'react';
import IndexModel from '../../model/Index'

const model: any = new IndexModel();

function IndexPage(): React.ReactElement {

    React.useEffect(() => {
        model.getIndexData().then((result: any) => {
            console.log(result)
        })
    }, [])

    return (
        <div className="Home">
            Home
        </div>
    )
}

export default IndexPage;