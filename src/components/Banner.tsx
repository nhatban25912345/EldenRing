import background from "../../public/imgs/banner.jpg";
import logo from "../../public/imgs/logo-text.png";

function Banner() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center bg-black text-white">
      <img
        className="absolute left-0 top-0 z-0 h-full w-full object-cover"
        src={background}
        alt="banner"
      />
      <div className="z-1 absolute left-0 top-0 z-0 h-full w-full bg-black opacity-50" />
      <div className="text-red container absolute flex flex-col flex-wrap items-center">
        <img src={logo} alt="logo" />
        <div className="my-5 text-center text-xl text-[#ffb648] sm:text-2xl">
          EXPERIENCE NEW GAME FROM FROMSOFTWARE
        </div>
        <div className="backface-visibility-hidden my-2 flex cursor-pointer select-none items-center justify-between rounded bg-gradient-to-t from-[#F3AF34] to-[#FFB548] p-4 font-bold text-black duration-300 hover:scale-110">
          <div className="backface-visibility-hidden">Buy Now on Steam</div>
          <div className="mx-2 h-6 w-[2px] bg-black "></div>
          <div className="backface-visibility-hidden">$79.90</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
