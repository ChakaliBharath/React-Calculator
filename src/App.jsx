import Display from "./components/Display";
import ButtonCantainer from "./components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClicked = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculater}>
      <Display displayValue={calVal}></Display>
      <ButtonCantainer onButtonClicked={onButtonClicked}></ButtonCantainer>
    </div>
  );
}

export default App;
