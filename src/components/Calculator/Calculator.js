import React from 'react';

import './calculator.scss';

import CalcInput from '../../containers/CalcInput';
import Numbers from '../../containers/Numbers';
import Actions from '../../containers/Actions';

const Calculator = () => { 
    //console.log('data',data);
       
    return (
        <div className="calculator">
            <CalcInput  />
            <Numbers />
            <Actions />
        </div>
    )
};


export default Calculator;
