import { useState } from "react";

// Write your Color component here

const Color = (props) => {
  return <div onClick={()=>{props.setSelectedColor(props.color)}} className={props.color}></div>;
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <div id="colors-list">
          <Color color="red" setSelectedColor={setSelectedColor}/>
          <Color color="orange" setSelectedColor={setSelectedColor}/>
          <Color color="blue" setSelectedColor={setSelectedColor}/>
        </div>
      </div>
    </div>
  );
};

export default App;
