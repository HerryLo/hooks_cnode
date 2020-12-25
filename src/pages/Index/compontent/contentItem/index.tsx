import * as React from 'react';
import './index.scss';
import { searchHitsItem } from '../../../../utils/request/searchResponse'
import dateformat from 'dateformat';
interface props {
    item: searchHitsItem
}

export function ContentItem(props: props): React.ReactElement {
    const item:searchHitsItem  = props.item;
    const created_time  = dateformat(item.created_at, "yyyy/mm/dd hh:MM ")
    return (
        <div className="item-content" key={item.objectID}>
            <div className="author">
                {item.author} · {created_time}
            </div>
            <div className="title" >{item.title}</div>
        </div>
    )
}