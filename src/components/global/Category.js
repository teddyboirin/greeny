import React, { useState } from "react";
import './category.scss';


function Category(props){

  const onClick = () => {
    props.onClick({
      showDefis: true,
      categoryName: props.categ
    })
  }

  return(
    <div onClick={onClick} className="defis_categ_bloc">
      <div></div>
      <h2>{props.categ}</h2>
      <h1>{props.points}</h1>
    </div>
  );
}

export default Category;