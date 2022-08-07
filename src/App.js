import React, { useState } from "react";
import 'antd/dist/antd.css';
import { Input, Button } from "antd";
import "./index.css";


function App() {

  const [number, setNumber] = useState();

  const handleEvent = (e) => {
    setNumber(number + (e.currentTarget.name))
    // console.log(event.target.name);
}

  const clearEvent = () => {
    setNumber("");
  }

  const calulate = () =>{
    setNumber(eval(number).toString());
  }
  
  const backspaceEvent = () => {
    setNumber(number.slice(0,-1));
  }



  return (
    <>
      <div className="container">
        <Input type="text" placeholder="0" value={number} />

        <div className="keypad">
          <Button onClick={clearEvent}  id="clear" className="highlight" size="large">Clear</Button>
          <Button onClick={backspaceEvent}  id="backspace"className="highlight" size="large">Del</Button>

          <Button name="=" onClick={calulate} className="highlight" size="large">=</Button>

          <Button name="/" onClick={handleEvent} className="highlight" size="large">&divide;</Button>

          <Button name='9' onClick={handleEvent} size="large">9</Button>
          <Button name="8" onClick={handleEvent} size="large">8</Button>
          <Button name="7" onClick={handleEvent} size="large">7</Button>
          <Button name="*" onClick={handleEvent} className="highlight" size="large">&times;</Button>

          <Button name="6" onClick={handleEvent} size="large">6</Button>
          <Button name="5" onClick={handleEvent} size="large">5</Button>
          <Button name="4" onClick={handleEvent} size="large">4</Button>
          <Button name="-" onClick={handleEvent} className="highlight" size="large">&ndash;</Button>

          <Button name="3" onClick={handleEvent} size="large">3</Button>
          <Button name="2" onClick={handleEvent} size="large">2</Button>
          <Button name="1" onClick={handleEvent} size="large">1</Button>
          <Button name="+" onClick={handleEvent} className="highlight" size="large">+</Button>

          <Button name="0" onClick={handleEvent} size="large">0</Button>
          <Button name="." onClick={handleEvent} size="large">.</Button>
          <Button name="%" onClick={handleEvent} className="highlight" size="large">%</Button>
          <Button name="/" onClick={handleEvent} className="highlight" size="large">/</Button>
        </div>
      </div>

    </>

  )
}
export default App;
