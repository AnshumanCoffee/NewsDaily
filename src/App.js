import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import TextForm from "./Components/TextForm";

function App() {
  return (
    <>
      {/* <Navbar  /> */}
      <Navbar title="NewsDaily" />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze below..." />
        <About />
        <News heading="Newsdaily - Top Headline"/>
      </div>
    </>
  );
}

export default App;

//props are always read only.
