import React from 'react';


const estilos={
    color: "#999",
    textAlign: "center",
    marginTop:"4rem",
}
export default ({text}) => (
  <aside   style={estilos}>
    <h1>{text}</h1>
   
  </aside>
);
