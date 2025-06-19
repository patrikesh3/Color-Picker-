import React, { useState } from 'react';

function ColorPicker(){
const [ color, setColor ] = useState('#FFFFFF');

function handleColorChange(event){
    setColor(event.target.value);
}
return (<div className="color-picker">
    <h1>Color Picker</h1>
    <div className="display" style ={{backgroundColor: color}}>
 <p>selected color:{color}</p>    
    </div>
       <label>select color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
</div>
)}

export default ColorPicker