import React, { useState } from "react";
import PropTypes from "prop-types";

const App = ({ initialCount }) => {
  // We use the initialCount prop to set the initial value but it never changes
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <h1>Hello Worlds Best React Workshop</h1>
      <span className="number">{count}</span>{" "}
      <button onClick={() => setCount(count + 1)}>ADD 1</button>
      <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
        SUBTRACT 1
      </button>
      <button onClick={() => setCount(initialCount)}>RESET</button>
      {count > 10 && <h2>The count is over 10</h2>}
    </>
  );
};

App.propTypes = {
  initialCount: PropTypes.number.isRequired
};

export default App;
