import './App.css';
import Wrapper from './component/Wrapper';
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import MainSlide from "./component/MainSlide";
import MainError from "./component/MainError";
import MainError_Sub from "./component/MainError_Sub";
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
      <MainError_Sub/>
      <MainSolution/>
      <MainService/>
      <Footer />
    </Wrapper>
  );
}

export default App;
