
import React, { useState } from "react";
import Button from "./componenten/Button";
import { Upload } from "./componenten/Upload";

const App: React.FunctionComponent = () => {
/*
  const [clickedButton, setClickedButton] = useState('');
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log('buttonHandler');
    const button: HTMLButtonElement = event.currentTarget;
    console.log(button)
    setClickedButton(button.name);
    console.log(clickedButton);
  };
*/
  return (
    <div className="container">
      <div className="container2">
        <Upload />
      </div>
    </div>
    
  );
};


export default App;
