// import useWindowDimensions from "../Hooks/useWindowDimensions ";
// import AnimationGallery from "./AnimationGallery";
import keyFeature2 from "../../public/imgs/elden-ring-key-feature-2.jpeg";
import keyFeature3 from "../../public/imgs/elden-ring-key-feature-3.jpeg";
import keyFeatureMask from "../../public/icons/key-feature-mask.svg";
import imgMain from "../../public/imgs/Elden_Ring_Multi2.webp";

function KeyFeatures() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { height, width } = useWindowDimensions();
  return (
    <div className="flex w-full flex-wrap">
      <div className="mb-[82px] flex w-full flex-wrap md:mb-[86px]">
        <h2 className="title container mb-10">Key features</h2>
        {/* <AnimationGallery /> */}
        <div className="h-screen w-full overflow-hidden">
          <img className="h-screen w-full" src={imgMain} alt="game-art" />
        </div>
        <div
          className="container flex flex-col items-center"
          // style={{ height: height * 0.608 }}
        >
          <div className="third-title mt-[50px] text-center lg:mt-[82px]">
            A new fantasy world
          </div>
          <p className="mt-2 max-w-full text-center text-[#737373] md:mt-[22px] md:max-w-[862.18px] xl:max-w-[687px]">
            Journey through the Lands Between, a new fantasy world created by
            Hidetaka Miyazaki, creator of the influential DARK SOULS video game
            series, and George R. R. Martin, author of The New York Times
            best-selling fantasy series, A Song of Ice and Fire. Unravel the
            mysteries of the Elden Ring’s power. Encounter adversaries with
            profound backgrounds, characters with their own unique motivations
            for helping or hindering your progress, and fearsome creatures.{" "}
          </p>
        </div>
      </div>
      {/* detail */}
      <div className="flex w-full flex-wrap">
        <div className="container mb-[82px] flex flex-wrap justify-center lg:mb-[86px] lg:flex-nowrap lg:justify-start">
          <div className="aspect-square max-w-[451px]">
            <img
              className="rounded-[100px]"
              src={keyFeature2}
              alt="key-feature"
            />
          </div>
          <div className="ml-0 flex max-w-[451px] flex-col justify-center pt-[46px] lg:ml-[118px] lg:max-w-[397px] lg:pt-0 xl:max-w-[451px]">
            <div className="third-title">
              World exploration in the lands between
            </div>
            <p className="mt-[22px] text-[#737373]">
              ELDEN RING features vast fantastical landscapes and shadowy,
              complex dungeons that are connected seamlessly. Traverse the
              breathtaking world on foot or on horseback, alone or online with
              other players, and fully immerse yourself in the grassy plains,
              suffocating swamps, spiraling mountains, foreboding castles and
              other sites of grandeur on a scale never seen before in a
              FromSoftware title.
            </p>
          </div>
        </div>

        <div className="container mb-[82px] flex flex-wrap justify-center lg:mb-[86px] lg:flex-row-reverse lg:flex-nowrap lg:justify-start ">
          <div className="w-full max-w-[451px]">
            <div
              className="mx-auto aspect-[0.72832] w-full max-w-[335px] bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${keyFeature3})`,
                maskSize: "100%",
                maskImage: `url(${keyFeatureMask})`,
                borderRadius: "20px",
                maskRepeat: "no-repeat",
                maskPosition: "center center",
              }}
            />
          </div>
          <div className="mr-0 flex max-w-[397px] flex-col justify-center pt-[46px] lg:mr-[118px] lg:pt-0 xl:max-w-[451px]">
            <div className="third-title">Genre-defining gameplay</div>
            <p className="mt-[22px] text-[#737373]">
              Create your character in FromSoftware’s refined action-RPG and
              define your playstyle by experimenting with a wide variety of
              weapons, magical abilities, and skills found throughout the world.
              Charge into battle, pick off enemies one-by-one using stealth, or
              even call upon allies for aid. Many options are at your disposal
              as you decide how to approach exploration and combat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KeyFeatures;
