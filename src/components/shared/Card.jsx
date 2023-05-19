//a style component,
//a component used for only styling (card component)
//instead of doing className = 'card'
//Kindof like a custon HTML tag

import React from "react";
//What ever is passed in as props (in this case children)
//Gets displayed (<Card> {children} <Card/>)
function Card({ children }) {
  return <div className="card">{children}</div>;
}
//All this bullshit just so we dont do className="card"??
export default Card;
