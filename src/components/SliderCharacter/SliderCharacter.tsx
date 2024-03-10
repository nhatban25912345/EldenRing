import { useEffect, useRef } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Warrior from "../../../public/imgs/elden-ring-character-warrior-full-new.webp";
import Vagabond from "../../../public/imgs/elden-ring-character-vagabond-full.webp";
import Prisoner from "../../../public/imgs/elden-ring-character-prisoner-full.webp";
import Bandit from "../../../public/imgs/elden-ring-character-bandit-full.webp";
import Astrologer from "../../../public/imgs/elden-ring-character-astrologer-full.webp";
import Hero from "../../../public/imgs/elden-ring-character-hero-full-new.webp";
import Confessor from "../../../public/imgs/elden-ring-character-confessor-full.webp";
import Prophet from "../../../public/imgs/elden-ring-character-prophet-full.webp";
import Wretch from "../../../public/imgs/elden-ring-character-wretch-full.webp";
import Samurai from "../../../public/imgs/elden-ring-character-samurai-full.webp";
import leftArrow from "../../../public/icons/arrow-chevron-left.svg";
import rightArrow from "../../../public/icons/arrow-chevron-right.svg";
// import { createUseStyles } from "react-jss";
import "./SliderCharacter.css";
import useWindowDimensions from "../../Hooks/useWindowDimensions ";

function SliderCharacter() {
  // const [currentSlideNumber, setCurrentSlideNumber] = useState(1);
  // const [pageCounter, setPageCounter] = useState(10);
  const pageCounter = 10;
  const currentSlideNumber = 1;
  const sliderRef = useRef<Slider>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    const paddingLeft =
      width > 1200
        ? (width - 1200) / 2
        : width > 992
          ? (width - 992) / 2
          : width > 720
            ? (width - 720) / 2
            : //   : width > 576
              //     ? (width - 576) / 2
              10;

    if (
      sliderRef.current &&
      sliderRef.current.innerSlider &&
      sliderRef.current.innerSlider.list
    ) {
      sliderRef.current.innerSlider.list.style.paddingLeft = `${paddingLeft}px`;
      // setPageCounter(
      //   sliderRef.current?.innerSlider?.track.node.childNodes.length,
      // );
      // Object.values(sliderRef.current?.innerSlider?.track.node.childNodes).map(
      //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //   (index: any, key: number) => {
      //     if (index.className.split(" ").includes("slick-current")) {
      //       setCurrentSlideNumber(key);
      //     }
      //   },
      // );
    }
  }, [sliderRef, width]);

  const handlePrevSlide = () => {
    sliderRef.current?.slickPrev();
    // currentSlideNumber > 1 && setCurrentSlideNumber(currentSlideNumber - 1);
  };
  const handleNextSlide = () => {
    sliderRef.current?.slickNext();
    // currentSlideNumber < pageCounter &&
    //   setCurrentSlideNumber(currentSlideNumber + 1);
  };
  const SliderWrap = styled.div`
    .slick-slide:not(.slick-current) {
      opacity: 0.5;
      transform: scale(0.85, 0.85);
    }
    .slick-track {
      transform: translate3d(-22px, 0px, 0px);
    }
  `;

  const settings = {
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
    // swipeToSlide: true,
    // afterChange: function (index: number) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
    //   );
    // },
    // beforeChange: (currentSlide: number, nextSlide: number) =>
    //   setCurrentSlideNumber(nextSlide),
    // afterChange: (current: number) => setCurrentSlideNumber(current + 1),
  };

  const ListSlider = [
    Warrior,
    Vagabond,
    Prisoner,
    Bandit,
    Astrologer,
    Hero,
    Confessor,
    Prophet,
    Wretch,
    Samurai,
  ];

  return (
    <div className="max-w-full translate-x-0 bg-[#F4F6F8] py-[72px] duration-300 lg:py-10">
      <div className="container flex w-full flex-row items-center justify-between">
        <div className="second-title tracking-[-0.8px] ">Characters</div>
        <div className="flex items-center ">
          <span className="font-semibold" style={{ display: "none" }}>
            {currentSlideNumber} of {pageCounter}
          </span>
          <div className="ml-2 flex flex-row gap-4 sm:ml-12">
            <div
              className="flex h-4 w-4 cursor-pointer select-none items-center justify-center rounded-full bg-black/[0.015] sm:h-16 sm:w-16"
              onClick={handlePrevSlide}
            >
              <img className="h-4 w-4 text-2xl" src={leftArrow} alt="" />
            </div>
            <div
              className="flex h-4 w-4 cursor-pointer select-none items-center justify-center rounded-full bg-black/[0.015] sm:h-16 sm:w-16"
              onClick={handleNextSlide}
            >
              <img className="h-4 w-4 text-2xl" src={rightArrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <SliderWrap className="slider-container mt-6 w-full overflow-x-hidden md:mt-10 ">
        <Slider {...settings} ref={sliderRef} className="max-w-full">
          {ListSlider.map((imageSrc, key) => (
            <div className="mr-5 max-h-[250px] w-full max-w-[50vw] transition-all duration-300 md:max-h-[300px] md:max-w-[250px] lg:max-h-[350px] lg:max-w-[280px] xl:max-h-[450px] xl:max-w-[356px]">
              <img
                className="mx-auto max-h-[250px] md:max-h-[300px] lg:max-h-[350px] xl:max-h-[450px]"
                src={imageSrc}
                alt={"character-art " + key}
              />
            </div>
          ))}
        </Slider>
      </SliderWrap>
      <div className="container mt-5 flex flex-col lg:flex-row lg:items-center">
        <div className="third-title mb-2 w-full max-w-full tracking-[-0.8px] md:mb-6 lg:max-w-[42%]">
          Warrior
        </div>
        <div className="flex max-w-full items-center text-[#737373] lg:max-w-[58%]">
          A nomad warrior who fights wielding two blades at once.
          <br />
          An origin of exceptional technique.
        </div>
      </div>
    </div>
  );
}

export default SliderCharacter;
