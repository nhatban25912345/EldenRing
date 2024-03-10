import gameArt from "../../public/imgs/ER-2023-Keyart-Horizontal-Resized.webp";
import xboxIcon from "../../public/icons/xbox icon.svg";
import steamIcon from "../../public/icons/steam icon.svg";

function SuggesttionCard() {
  return (
    <div className="container flex w-full flex-wrap items-center justify-center py-10">
      <div className="max-w-full overflow-hidden rounded-[10px] md:max-w-[452px] md:rounded-[20px]">
        <img
          className="aspect-video w-full cursor-pointer rounded-[10px] transition-all duration-300 hover:scale-125 md:rounded-[20px]"
          src={gameArt}
          alt="SliderMediaGallery"
        />
      </div>
      <div className="mt-5 grid w-full grid-rows-subgrid gap-4 pl-0 sm:gap-6 md:max-w-[452px] lg:mt-0 lg:pl-[54px]">
        <div className="text-[32px] font-semibold tracking-[-0.8px] text-[#1e1e1e]">
          ELDEN RING
        </div>
        <div className="flex flex-wrap gap-3">
          <img
            className="h-[18px] w-[18px] cursor-pointer text-[#e3ca8e] hover:text-[#b89543]"
            src={xboxIcon}
            alt="xbox-logo"
          />
          <img
            className="h-[18px] w-[18px] cursor-pointer"
            src={steamIcon}
            alt="steam-logo"
          />
        </div>
        <div className="flex items-center gap-3">
          <a
            className="rounded-[90px] bg-[#e60000] px-12 pb-[14px] pt-[10px] font-semibold text-white duration-300 hover:bg-[#c30000]"
            href="https://store.steampowered.com/app/1245620/ELDEN_RING/"
          >
            Buy
          </a>
          <div className="grid grid-rows-2">
            <p className="">From</p>
            <p className="">S$79.90</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggesttionCard;
