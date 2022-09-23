import './App.css';
import Wrapper from './component/Wrapper';
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import MainSlide from "./component/MainSlide";
import MainError from "./component/MainError";
import MainErrorSub from "./component/MainErrorSub";
import MainSolution from "./component/MainSolution";
import MainService from "./component/MainService";
import Footer from "./component/Footer";
const App = () => {
  return (
    <Wrapper>
      <Header />
      <MainVisual />
      <MainSlide />
      <MainError />
      <MainErrorSub/>
      <MainSolution/>
      <MainService/>
      <Footer />
    </Wrapper>
  );
}

export default App;
