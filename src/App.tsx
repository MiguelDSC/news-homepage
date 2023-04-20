import "./App.css";
import Article from "./components/Article";
import Content1 from "./components/Content1";
import Content2 from "./components/Content2";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import retroIMG from "./assets/images/image-retro-pcs.jpg";
import LaptopIMG from "./assets/images/image-top-laptops.jpg";
import GamingIMG from "./assets/images/image-gaming-growth.jpg";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Header />
      <Sidebar />
      <Content1 />
      <Content2 />
      <Article
        cssId="content3"
        id={1}
        title={"Reviving Retro PCs"}
        desc={"What happends when old PCs are given modern upgrades?"}
        img={retroIMG}
      />
      <Article
        cssId="content4"
        id={2}
        title={"Top 10 Laptops of 2022"}
        desc={"Our best picks for various needs and budgets"}
        img={LaptopIMG}
      />
      <Article
        cssId="content5"
        id={3}
        title={"The Growth of Gaming"}
        desc={"How the pandemic had sparked fresh opportunities"}
        img={GamingIMG}
      />
    </div>
  );
}

export default App;
