import imgMain from "../../public/imgs/Elden_Ring_Multi2.webp";
import media1 from "../../public/imgs/elden-ring-media-gallery-img-1.webp";
import media2 from "../../public/imgs/elden-ring-media-gallery-img-2.webp";
import media3 from "../../public/imgs/elden-ring-media-gallery-img-3.webp";
import media4 from "../../public/imgs/elden-ring-media-gallery-img-4.webp";
import media5 from "../../public/imgs/elden-ring-media-gallery-img-5.webp";
import media6 from "../../public/imgs/elden-ring-media-gallery-img-6.webp";
import media7 from "../../public/imgs/elden-ring-media-gallery-img-7.webp";
import useWindowDimensions from "../Hooks/useWindowDimensions ";

function AnimationGallery() {
  const { height, width } = useWindowDimensions();
  const mainArtWidth = width * 0.5742;
  const mainArtHeight = height * 0.7;
  return (
    <div className="relative flex w-full flex-col">
      <div className="flex h-screen w-full items-end justify-center">
        {/* left block */}
        <div
          className="absolute left-0 top-0 z-[2] "
          style={{ width: width * 0.1979 }}
        >
          <div
            className="absolute right-0 z-10 aspect-[1.46]"
            style={{ top: height - mainArtHeight, width: width * 0.303 }}
          >
            <img className="w-full rounded-[20px] " src={media3} alt="media" />
          </div>
          <div
            className="absolute right-0 aspect-square"
            style={{
              width: width * 0.1315,
              top: height - mainArtHeight + (width * 0.303) / 1.46 + 14,
              right: width * 0.1315 + 20,
            }}
          >
            <img
              className="aspect-square rounded-[20px] "
              src={media1}
              alt="media"
              style={{}}
            />
          </div>
          <div
            className="absolute right-0 aspect-square"
            style={{
              width: width * 0.1315,
              top: height - mainArtHeight + (width * 0.303) / 1.46 + 14,
              right: 0,
            }}
          >
            <img
              className="aspect-square rounded-[20px]"
              src={media2}
              alt="media"
              style={{ width: width * 0.1315 }}
            />
          </div>
          <div
            className="absolute right-0 aspect-[1.18] "
            style={{
              width: width * 0.303,
              top:
                height -
                mainArtHeight +
                (width * 0.303) / 1.46 +
                14 +
                width * 0.1315 +
                19,
            }}
          >
            <img className="rounded-[20px] " src={media6} alt="media" />
          </div>
        </div>
        {/* middle block */}
        <div
          className="relative overflow-hidden rounded-[20px]"
          style={{ width: mainArtWidth, height: mainArtHeight }}
        >
          <img src={imgMain} alt="game-art" />
        </div>
        {/* right block */}
        <div
          className="absolute right-0 top-0 z-[2] h-full overflow-x-clip"
          style={{ width: width * 0.1979, scrollbarWidth: "none" }}
        >
          <div
            className="absolute left-0 aspect-square"
            style={{
              width: width * 0.1315,
              top: height - mainArtHeight,
            }}
          >
            <img
              className="aspect-square rounded-[20px] "
              src={media5}
              alt="media"
              style={{}}
            />
          </div>
          <div
            className="absolute right-0 aspect-square"
            style={{
              width: width * 0.1315,
              top: height - mainArtHeight,
              left: width * 0.1315 + 20,
            }}
          >
            <img
              className="aspect-square rounded-[20px]"
              src={media7}
              alt="media"
              style={{ width: width * 0.1315 }}
            />
          </div>

          <div
            className="absolute left-0 z-10 aspect-[1.46]"
            style={{
              top: height - mainArtHeight + width * 0.1315 + 14,
              width: width * 0.303,
            }}
          >
            <img className="w-full rounded-[20px] " src={media6} alt="media" />
          </div>

          <div
            className="absolute left-0 aspect-[1.46] "
            style={{
              width: width * 0.303,
              top:
                height -
                mainArtHeight +
                (width * 0.303) / 1.46 +
                14 +
                width * 0.1315 +
                19,
            }}
          >
            <img className="rounded-[20px] " src={media4} alt="media" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnimationGallery;
