import Test123 from "./test";

export default function App() {
  return (
    <div>
      <button id="clickme">Click Me!</button>
      <Test123 />
      <TestABC />
      <Test123 />
      <TestABC />
      <div id="afterclicked">{/*  */}</div>
    </div>
  );
}

function TestABC() {
  return (
    <div>
      <h3>I am learning React</h3>
    </div>
  );
}

// const abc = document.getElementById("clickme");

// abc?.addEventListener("click", (event) => {
//   event.preventDefault();

//   const xyz = document.getElementById("afterclicked");
//   xyz.appendChild(document.createElement("h1"));
// });
