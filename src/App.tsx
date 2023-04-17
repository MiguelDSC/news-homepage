import "./App.css";
import Article from "./components/Article";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Sidebar />
      <Content1 />
      <Content2 />
      <Article cssId="content3" id={1} title={""} desc={""} />
      <Article cssId="content4" id={2} title={""} desc={""} />
      <Article cssId="content5" id={3} title={""} desc={""} />
    </div>
  );
}

export default App;
