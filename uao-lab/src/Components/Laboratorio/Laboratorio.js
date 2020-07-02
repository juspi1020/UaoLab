import React from 'react';
import Implement from '../implementos/implementos';
import './Laboratorio.css';
import GeneralHead from '../GeneralHead/GeneralHead.js'


const Laboratorio = () => (

  <div className="o-container2">
     <div className="o-header2">
     <GeneralHead/>
     </div>
     <div className="o-display">
      <Implement name={"Oculusrift"} description={"herramienta que permite acceder a contenido de realidad virtual"} cuantity={"2"}/> <button className="o-button">Agregar</button>
     </div>
  <div className="o-body2">
  <Implement name={"Oculusrift"} description={"Realidad virtual"} cuantity={"2"}/>
  <Implement name={"Oculusrift"} description={"Realidad virtual"} cuantity={"2"}/>
  </div>
  <button className="o-button" id="o-conf">Confirmar</button>
</div>
);

export default Laboratorio;
