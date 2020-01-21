import React from 'react';
import PropTypes from 'prop-types';
import './Numbers.scss';

function Numbers({ putInput, clear }) {
  // const handleClick = (num) => () => {
  //   console.log('id =>', num);
  //   putInput(num);

    
  // }
  return (
    <div className="Numbers">
     <div className="Numbers-clear" onClick={()=>clear()}>
      <div>clear</div>
     </div>
     <div className="Numbers-nums">
       <div className="Numbers-nums-7 num">
        <div className="Numbers-nums-7-field" onClick={putInput(7)}>7</div>
       </div>
       <div className="Numbers-nums-8 num">
        <div className="Numbers-nums-8-field" onClick={putInput(8)}>8</div>
       </div>
       <div className="Numbers-nums-9 num">
        <div className="Numbers-nums-9-field" onClick={putInput(9)}>9</div>
       </div>
       <div className="Numbers-nums-4 num">
        <div className="Numbers-nums-4-field" onClick={putInput(4)}>4</div>
       </div>
       <div className="Numbers-nums-5 num">
        <div className="Numbers-nums-5-field" onClick={putInput(5)}>5</div>
       </div>
       <div className="Numbers-nums-6 num">
        <div className="Numbers-nums-6-field" onClick={putInput(6)}>6</div>
       </div>
       <div className="Numbers-nums-1 num">
        <div className="Numbers-nums-1-field" onClick={putInput(1)}>1</div>
       </div>
       <div className="Numbers-nums-2 num">
          <div className="Numbers-nums-2-field" onClick={putInput(2)}>2</div>
       </div>
       <div className="Numbers-nums-3 num">
        <div className="Numbers-nums-3-field" onClick={putInput(3)}>3</div>
       </div>
     </div>
    </div>
  );
}

Numbers.propTypes = {
  clear: PropTypes.func.isRequired,
  putInput: PropTypes.func.isRequired,
};

export default Numbers;
