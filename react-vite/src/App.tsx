import EmptyParagraph, { Test123 as HelloWorldIntro, HelloAgain } from "./test";

export default function App() {
  return (
    <div>
      <button id="clickme">Click Me!</button>
      <HelloWorldIntro />
      <IAmLearningReact />
      <HelloAgain />
      <HelloWorldIntro />
      <IAmLearningReact />
      <HelloAgain />
      <EmptyParagraph />
      <div id="afterclicked">{/*  */}</div>
    </div>
  );
}

function IAmLearningReact() {
  return (
    <div>
      <h3>I am learning React</h3>
    </div>
  );
}
