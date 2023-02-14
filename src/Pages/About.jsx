import React, { useState } from "react";

const About = () => {
  const [data, setData] = useState([]);
  function handleClick() {
    import("../utils/payme.js").then((module) => {
      const t = module.default(2, 2);
      alert(t);
    });
  }

  function handleShowData() {
    import("../data/products.json").then((module) => {
      setData(module.default);
    });
  }

  return (
    <div>
      About
      <ul>
        {data.map((p, index) => (
          <li key={index}>{p.name}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click me</button>
      <button onClick={handleShowData}>Show Data</button>
    </div>
  );
};

export default About;
