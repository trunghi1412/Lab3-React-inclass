import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const array = ["First", "Second", "Third"];

const object = {
  first:1,
  second:2,
  third:3,
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <section>
    <h1>Array</h1>
    <ul>
      {array.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>

    <h1>object</h1>
    <ul>
      {Object.keys(object).map((i) => (
        <li key={i}>
          <strong>{i}: </strong>
        </li>
      ))}
    </ul>
  </section>
);
