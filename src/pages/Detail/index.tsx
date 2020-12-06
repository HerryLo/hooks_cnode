import * as React from 'react';

function DetailPage(): React.ReactElement{
    const [text , setText] = React.useState<string>('初始化');

    const clickButton = () => {
        setText('12312312');
        setText('34345');
    }

    React.useEffect(() => {
        console.log('useEffect 触发');
    }, [text])

    return (
        <>
            <h1>Detail</h1>
            <button onClick={clickButton}>点击按钮</button>
            <div>{text}</div>
        </>
    )
}

export default DetailPage;