import './App.css';
import Accordion from "./components/accordion/accordion";
import Editable from "./components/editable";

function App() {
  return (
      <div className="App">
        <>
          <Accordion header={"Accordion 1"}>
            <div>Content for Accordion 1</div>
          </Accordion>
          <Accordion header="Accordion 2">
            <div>Content for Accordion 2</div>
          </Accordion>
          <Accordion header="Accordion 3">
            <div>Content for Accordion 3</div>
            <p>Test Paragraph</p>
          </Accordion>
        </>
        <hr/>
        <Editable/>
      </div>
  );
}

export default App;
