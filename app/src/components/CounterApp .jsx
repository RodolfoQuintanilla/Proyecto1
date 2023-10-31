import PropTypes from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {
  const [primerp, setPrimerp] = useState(0);

 

  function handleAdd(event) {
    console.log(event);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {primerp} </h2>

      <button onClick={() => setPrimerp(primerp + 1)}>+1</button>
      <button onClick={() => setPrimerp(primerp - 1)}>-1</button>

      <button onClick={() => setPrimerp(0)}>Recet</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
