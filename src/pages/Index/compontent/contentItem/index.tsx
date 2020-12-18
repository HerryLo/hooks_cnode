import * as React from 'react';
import './index.scss';
import { searchHitsItem } from '../../../../utils/request/searchResponse'

interface props {
    item: searchHitsItem
}

export function ContentItem(props: props): React.ReactElement {
    const item:searchHitsItem  = props.item;
    return (
        <div className="item-content" key={item.objectID}>
            <div className="author">
                {item.author} · {item.created_at}
            </div>
            <div className="title" >{item.title}</div>
        </div>
    )
}