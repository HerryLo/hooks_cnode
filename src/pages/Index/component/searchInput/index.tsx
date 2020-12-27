import * as React from 'react';
import './index.scss'

interface IProp {
    defaultKey: string
    onSeachChange: any
    onSeachSubmit: any
}

export function SearchInput(props: IProp): React.ReactElement {
    const { defaultKey, onSeachChange, onSeachSubmit } = props;

    const onInputChange = (event: any) => {
        const { value } = event.target;
        onSeachChange(value);
    }

    return (
        <div className="index-search-input">
            <input 
                onChange={onInputChange}
                className="input"
                value={defaultKey}
                placeholder={defaultKey}/>
            <button 
                className="button"
                onClick={(e)=> onSeachSubmit(e)}>
                    搜索
            </button>
        </div>
    )
}