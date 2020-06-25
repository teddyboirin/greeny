import React from "react";

function Category(props){
  return(
    <div className="defis_categ_bloc">
      <div></div>
      <h2>{props.categ}</h2>
    </div>
  );
}

export default Category;