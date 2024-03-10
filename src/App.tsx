import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import GameDetailInformation from "./components/GameDetailInformation";
import KeyFeatures from "./components/KeyFeatures";
import MediaArtGallerys from "./components/MediaArtGallery";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import SliderCharacter from "./components/SliderCharacter/SliderCharacter";
import SliderMediaGallery from "./components/SliderMediaGallery/SliderMediaGallery";
import SuggesttionCard from "./components/SuggestionCard";

function App() {
  return (
    <div className="flex w-full flex-wrap">
      <Navbar />
      <Banner />
      <Overview />
      <GameDetailInformation />
      <KeyFeatures />
      <SliderCharacter />
      <SliderMediaGallery />
      <MediaArtGallerys />
      <SuggesttionCard />
      <Footer />
    </div>
  );
}

export default App;
