import React, { useState }from 'react';
import Carousel from 'react-elastic-carousel';
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 }
];


const Main = () => {
  const [items, setItems] = useState([
    {id:1,image:'../image/slider1.jpg'}
  ]);

 

  return (
    <div>
       {/* <div className="controls-wrapper">
        <button onClick={removeItem}>Remove Item</button>
        <button onClick={addItem}>Add Item</button>
      </div> */}
      <hr className="seperator" />
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <div key={item.id}>{item.image}</div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Main;
