import React from 'react';
import Item from './Item'
import './List.css';

const List = (props) => {
    return (
        <div className="col s5 push-s2 side-seperater">
            {props.list.map((item, index) =>
                <Item
                    key={item.id}
                    item={item}
                    index={index}
                    itemClick={props.listClick}
                    itemRemove={props.onRemoveItem}/>
            )}
        </div>
    )
}

export default List;
