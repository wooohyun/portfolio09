import './App.css';
import Wrapper from './component/Wrapper';
import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import MainSlide from "./component/MainSlide";
const App= () => {
  return (
    <Wrapper>
    <Header/>
    <MainVisual/>
<MainSlide/>
    </Wrapper>
  );
}

export default App;
