import './App.css';
import Wrapper from './component/Wrapper';
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import MainSlide from "./component/MainSlide";
import MainError from "./component/MainError";
import Footer from "./component/Footer";
const App = () => {
  return (
    <Wrapper>
      <Header />
      <MainVisual />
      <MainSlide />
      <MainError />
      <Footer />
    </Wrapper>
  );
}

export default App;
