import React from 'react';
import './Cards.css';
import Images from '../images/Images';


const Cards  = (props) => {
    const {name} = props;
    return(
        <div className="o-categorie">
           <Images lab={name}/>
           <div className="o-titleCategorie">
              <span>{`LABORATORIO DE `}</span>  {name}
           </div>
        </div> 
    ); 
};
export default Cards