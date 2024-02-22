import img1 from "../../public/imgs/milad-fakurian-PGdW_bHDbpI-unsplash.jpg";
import img2 from "../../public/imgs/li-zhang-K-DwbsTXliY-unsplash.jpg";
import "../App.css";

function LandingPage1() {
  return (
    <div className="flex w-full flex-wrap justify-center gap-4">
      <div className="flex w-[40%] flex-col flex-wrap items-center">
        <p className="wrap-two-line my-4 text-center text-[60px]/[70px] font-bold text-[#252525]">
          Discover the beauty around the world
        </p>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget diam.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="my-6 cursor-pointer rounded-lg bg-gray-800 px-8 py-3 text-2xl text-white transition-all duration-300 hover:scale-110 hover:bg-gray-900">
          Explore
        </div>
      </div>
      <div className="mb-2 flex w-full flex-wrap justify-center">
        <div className="grid w-3/5 grid-cols-4 gap-4">
          <img
            className="aspect-square h-full w-full cursor-pointer rounded-lg bg-auto transition-all duration-300 hover:rotate-1 hover:scale-105"
            src={img1}
            alt="img1"
          />
          <img
            className="aspect-square h-full w-full cursor-pointer rounded-lg bg-auto transition-all duration-300 hover:rotate-1 hover:scale-105"
            src={img1}
            alt="img1"
          />
          <img
            className="aspect-square h-full w-full cursor-pointer rounded-lg bg-auto transition-all duration-300 hover:rotate-1 hover:scale-105"
            src={img2}
            alt="img1"
          />
          <img
            className="aspect-square h-full w-full cursor-pointer rounded-lg bg-auto transition-all duration-300 hover:rotate-1 hover:scale-105"
            src={img1}
            alt="img1"
          />
          <img
            className="aspect-square h-full w-full cursor-pointer rounded-lg bg-auto transition-all duration-300 hover:rotate-1 hover:scale-105"
            src={img2}
            alt="img1"
          />
          <img
            className="aspect-square h-full w-full cursor-pointer rounded-lg bg-auto transition-all duration-300 hover:rotate-1 hover:scale-105"
            src={img1}
            alt="img1"
          />
          <img
            className="aspect-square h-full w-full cursor-pointer rounded-lg bg-auto transition-all duration-300 hover:rotate-1 hover:scale-105"
            src={img1}
            alt="img1"
          />
          <img
            className="aspect-square h-full w-full cursor-pointer rounded-lg bg-auto transition-all duration-300 hover:rotate-1 hover:scale-105"
            src={img1}
            alt="img1"
          />
        </div>
      </div>
    </div>
  );
}

export default LandingPage1;
