import React from "react";
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';

const GridComponent = () => {
  return (
    <div className="gridContainer">
      <div className="gridItem1"><Card1/></div>
      <div className="gridItem2"><Card2/></div>
      <div className="gridItem3"><Card3/></div>
    </div>
  );
};

export default GridComponent;
