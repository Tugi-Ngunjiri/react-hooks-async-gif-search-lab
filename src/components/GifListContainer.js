import React from "react";
import GiftListContainer from './GiftListContainer';
import GiftList  from "./GiftList";

export const exampleComponent =({ children: [GiftListContainer]}) =>{
const open = () => {
alert("You Clicked GiftList")

}
 return (
<div onClick={open}>
({[GiftList]})
</div>

 )

}






  export default GiftListContainer;
