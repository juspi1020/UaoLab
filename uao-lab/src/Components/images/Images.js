import React from 'react';
import './images.css';

import MULTIMEDIA from '../../Images/expin.png';
import MECANICA from '../../Images/mecanica.png';
import BIOMEDICA from '../../Images/biomedica.jpg';
import IDIOMAS from '../../Images/ingles.jpg';


const Images  = (props) => {
    const {lab} = props;
    return (
        <div>
          {(() => {
                switch (lab) {
                    case "MULTIMEDIA": return <img id="o-images" src={MULTIMEDIA} alt={"MULTIMEDIA"} />;
                    case "MECANICA": return <img id="o-images" src={MECANICA} alt={"MECANICA"} />;
                    case "BIOMEDICA": return <img id="o-images" src={BIOMEDICA} alt={"BIOMEDICA"} />;
                    case "IDIOMAS" : return <img id="o-images" src={IDIOMAS} alt={"IDIOMAS"} />;
                    default: return "null";
                }
            })()}
        </div>
    );
};
export default Images;