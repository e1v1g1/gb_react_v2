import React from "react";

export const ListGroupItem =(props) => {


    //Массиве перечисление классов. Объединяеются в одну строку через пробел при помощи join
    const classes = [
        "list-group-item",
        (props.active ? 'active' : ''), //Проверяем, если active то меняем на disabled
        (props.disabled ? 'disabled' : ''),
    ].join(' ');

    return React.createElement(props.tag || 'li', {
        className: classes,
    }, props.children )



    // return <li className={classes}>
    //     {props.children}
    // </li>


}