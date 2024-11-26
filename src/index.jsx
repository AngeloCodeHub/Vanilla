import React from "react";
import { createRoot } from "react-dom/client";
import './styles/styles.css';

console.log('Hello, Angelo Code World!');


// const container = document.getElementById('app');
const app = createRoot(document.getElementById('app'));
app.render(
  <h1>哈囉, React!</h1>
);

