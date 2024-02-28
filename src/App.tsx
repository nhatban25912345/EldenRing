import "./App.css";
import Banner from "./components/Banner";
import GameDetailInformation from "./components/GameDetailInformation";
import KeyFeatures from "./components/KeyFeatures";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import SliderCharacter from "./components/SliderCharacter/SliderCharacter";

function App() {
  return (
    <div className="flex w-full flex-wrap">
      <Navbar />
      <Banner />
      <Overview />
      {/* <GameDetailInformation /> */}
      {/* <KeyFeatures /> */}
      <SliderCharacter />
    </div>
  );
}

export default App;
