import React from 'react';

const Item = (props) => {
  return (
    <>
      <div className="categories_item"
        style={{
          borderImageSource: props.borderImage,
          borderImageSlice: 1,
          borderWidth: '15px',
          borderStyle: 'solid',
          borderRadius: '5px',
          padding: '0px',
          background: 'transparent',
        }}>
        <div className="categories_item_inner" >
          <div className="box">
            <span>{props.discount}</span>
            <i> {props.icon}</i>
            <div className="grocery_item">
              <a href="#">{props.name}</a>
              <p>{props.item}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
