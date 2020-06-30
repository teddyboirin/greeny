import React from "react";
import './category.scss';

function Category(props){
  return(
    <div className="defis_categ_bloc">
      <div></div>
      <h2>{props.categ}</h2>
      <h1>{props.points}pts</h1>
    </div>
  );
}

export default Category;