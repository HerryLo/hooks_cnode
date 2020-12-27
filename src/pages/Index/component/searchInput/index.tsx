import * as React from 'react';
import './index.scss'
export function SearchInput(): React.ReactElement {
    return (
        <div className="index-search-input">
            <input className="input" placeholder="redux"/>
        </div>
    )
}