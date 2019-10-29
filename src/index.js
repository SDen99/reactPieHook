import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import AnimatedPieHooks from "./AnimatedPieHooks";

import "./styles.css";

function App() {
  const generateData = (value, length = 1000) =>
    d3.range(length).map((item, index) => ({
      date: index,
      value: value === null || value === undefined ? Math.random() * 100 : value
    }));

  const [data, setData] = useState(generateData(0));
  const changeData = () => {
    setData(generateData());
  };

  useEffect(() => {
    setData(generateData());
  }, [!data]);

  return (
    <div className="App">
      <div>
        <button onClick={changeData}>Transform</button>
      </div>

      <AnimatedPieHooks
        data={data}
        width={600}
        height={600}
        innerRadius={200}
        outerRadius={300}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
