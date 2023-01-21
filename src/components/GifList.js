import React from 'react';
import GiftList from "./GiftList"

const list = ({Lists}) => {
    return lists.map((list, index)) =>{
    return (
    <ul  key={index}>
    <li>List:{list.name}</li>
    <li>Buyer:{list.buyer}</li>
    </ul>
     );
    };
    };
export default GiftList