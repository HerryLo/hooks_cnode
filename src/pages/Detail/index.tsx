import * as React from 'react';

function DetailPage(): React.ReactElement{
    const [num , setNum] = React.useState<number>(0);
    const [num1 , setNum1] = React.useState<number>(0);

    // useMemo 避免重复调用
    const caclValue = React.useMemo(()=> {
        console.log('num的值修改了')
        return num*2
    }, [num])

    React.useEffect(() => {
        console.log('useEffect 触发');
        return () => {
            // React 会在组件卸载的时候执行清除操作
            console.log('组件卸载清除调用');
        }
    }, [num])

    return (
        <>
            <h1>Detail</h1>
            <button onClick={()=> setNum(num+1)}>点击按钮1</button>
            <div>数字1: {num}, 倍速: {caclValue}</div> 
            <button onClick={()=> setNum1(num1+1)}>点击按钮2</button>
            <div>数字2: {num1}</div>
        </>
    )
}

export default DetailPage;