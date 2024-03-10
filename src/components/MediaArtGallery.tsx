import SliderMediaArtGallery from "./SliderMediaArtGallery/SliderMediaArtGallery";
import { MediaArtGallery } from "../../src/MediaArtGallery";

function MediaArtGallerys() {
  return (
    <div className="w-screen overflow-x-hidden pb-4 pt-10 lg:pb-10 lg:pt-[100px]">
      <SliderMediaArtGallery
        classname="lg:mb-6 mb-2"
        mediaSrcs={MediaArtGallery}
        reverse={false}
      />
      <SliderMediaArtGallery
        classname=""
        mediaSrcs={MediaArtGallery}
        reverse={true}
      />
    </div>
  );
}

export default MediaArtGallerys;
