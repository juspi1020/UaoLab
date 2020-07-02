import React from 'react';
import './Student.css';
import Cards from '../cards/Cards';
import GeneralHead from '../../Components/GeneralHead/GeneralHead.js'

const Student = () => (
    <div className="o-container">
            <GeneralHead/>
        <div className="o-bodystudent">
            <Cards name={"MULTIMEDIA"} />
            <Cards name={"MECANICA"} />
            <Cards name={"BIOMEDICA"} />
            <Cards name={"IDIOMAS"} />
        </div>
    </div>
);
export default Student;

