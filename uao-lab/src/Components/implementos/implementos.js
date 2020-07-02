import React from 'react';
import Images from '../images/Images';
import './implementos.css';


const implementos = (props) => {

    const {name} = props;
    const {description} = props;
    const {cuantity} = props;
    return(
        <div className="o-implemento">
           <div>
              <Images Imp = {name}/>
              <span className="o-name">{name} </span>
              <span className="o-descrption"> {description} </span> 
              <span>hay {cuantity} disponibles</span>    
           </div>
        </div> 
    );  
 };

export default implementos;
