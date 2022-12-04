import React, { useState } from "react";
import "./App.css";

// toexponential, solo cuando actualValue es mayor a 10
// tercer variable para reoperar luego de hacer una cuenta
// memo mantiene una sola operacion (concat de actuaValue)
function App() {
  const [actualValue, setActualValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [result, setResult] = useState("");
  const [memo, setMemo] = useState("");
  const [memo2, setMemo2] = useState("");
  const [operator, setOperator] = useState("");

  const handleClick = (e) => {
    if (actualValue.length > 10) return;
    setActualValue(actualValue + e.target.innerText);
  };

  const operatorHandler = (e) => {
    if (previousValue === "" && actualValue === "" && result === '' ) return;

      setOperator(e.target.innerText);
      setPreviousValue(actualValue);
      setActualValue("");
  
  };

  const clear = () => {
    setActualValue("");
    setPreviousValue("");
    setResult("");
    setMemo("");
    setMemo2("");
    setOperator("");
  };

  const backspace = () => {
    setActualValue(actualValue.slice(0, -1));
  };

  const calculate = () => {
    if (result === "") {
      let an = +previousValue + +actualValue;
      an = Number(an);
      setResult(eval(an));
      setMemo((previousValue + operator + actualValue).toString());
      setMemo2(result);
      setActualValue("");
    } else {
      let aux = `${+result}${operator}${+actualValue}`;
      
      setActualValue("");
      setMemo(previousValue + operator + "  " + actualValue);
      setMemo2(parseFloat(result).toExponential(2));
      setResult(eval(aux));
    }
  };

  return (
    <div className="body">
      <div className="calculadora">
        <div className="display">
          <div className="memory">
            <h2 className="historial_display2">{memo2}</h2>
            <h2 className="historial_display">{memo ? memo : previousValue}</h2>
          </div>
          <h2 className="numero_display">
            {!result ? operator + actualValue : result.toString().length > 9? parseFloat(result).toExponential(2): result}
          </h2>
        </div>

        <div className="botones">
          <button onClick={clear} className="operadores naranja">
            C
          </button>
          <button onClick={handleClick} className="operadores">
            %
          </button>
          <button onClick={backspace} className="operadores">
            DEL
          </button>
          <button onClick={operatorHandler} className="operadores">
            /
          </button>

          <button onClick={handleClick}>7</button>
          <button onClick={handleClick}>8</button>
          <button onClick={handleClick}>9</button>
          <button className="operadores" onClick={operatorHandler}>
            *
          </button>

          <button onClick={handleClick}>4</button>
          <button onClick={handleClick}>5</button>
          <button onClick={handleClick}>6</button>
          <button className="operadores" onClick={operatorHandler}>
            -
          </button>

          <button onClick={handleClick}>1</button>
          <button onClick={handleClick}>2</button>
          <button onClick={handleClick}>3</button>
          <button className="operadores" onClick={operatorHandler}>
            +
          </button>

          <button onClick={handleClick}>.</button>
          <button onClick={handleClick}>0</button>
          <button className="operadores col2" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
