import React from "react";
const numBers = [1, 2, 3, 4, 5];
const doubled = numBers.map((number) => number * 2);
console.log(doubled);
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li>{number}</li>
);
<ul>{listItems}</ul>
function NumberList(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li>{number}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  const NumbersLists = [1, 2, 3, 4, 5];
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<NumberList numbers={numbers} />);
   List(props){
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  export default Giftlist