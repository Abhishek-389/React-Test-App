import React from "react";
import ReactDom from "react-dom";

//Rendering multiple element
//method1==>Using a div
// ReactDom.render(
//   <div>
//     <h1>Top 10 Netflix shows</h1>
//     <p>These are my top ten Netflix seried</p>
//     <ol>
//       <li>Never Have I Ever</li>
//       <li>The Baby-Sitters Club</li>
//       <li>The Umbrella Academy</li>
//       <li>Russian Doll</li>
//       <li>Unbreakable Kimmy Schmidt</li>
//     </ol>
//   </div>,
//   document.getElementById("root")
// );

//method2==>Using an array  only on above react 16 version
/*ReactDom.render(
  [
    <h1>Top 10 Netflix shows</h1>,
    <p>These are my top ten Netflix seried</p>,
    <ol>
      <li>Never Have I Ever</li>
      <li>The Baby-Sitters Club</li>
      <li>The Umbrella Academy</li>
      <li>Russian Doll</li>
      <li>Unbreakable Kimmy Schmidt</li>
      <li>Breakable Kimmy Schmidt</li>
    </ol>,
  ],
  document.getElementById("root")
); */

//method3==>Using  --React.Fragment--
// ReactDom.render(
//   <React.Fragment>
//     <h1>Top 10 Netflix shows</h1>
//     <p>These are my top ten Netflix seried</p>
//     <ol>
//       <li>Never Have I Ever</li>
//       <li>The Baby-Sitters Club</li>
//       <li>The Umbrella Academy</li>
//       <li>Russian Doll</li>
//       <li>Unbreakable Kimmy Schmidt</li>
//     </ol>
//   </React.Fragment>,
//   document.getElementById("root")
// );

//method4==>Using  --React.Fragment Syntactic sugar --
ReactDom.render(
  <>
    <h1>Top 10 Netflix shows</h1>
    <p>These are my top ten Netflix seried</p>
    <ol>
      <li>Never Have I Ever</li>
      <li>The Baby-Sitters Club</li>
      <li>The Umbrella Academy</li>
      <li>Russian Doll</li>
      <li>Breakable Kimmy Schmidt</li>
    </ol>
  </>,
  document.getElementById("root")
);
