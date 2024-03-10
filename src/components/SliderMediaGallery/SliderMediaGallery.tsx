import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import SliderMediaGallery1 from "../../../public/imgs/SliderMediaGallery1.jpg";
import SliderMediaGallery2 from "../../../public/imgs/SliderMediaGallery2.webp";
import SliderMediaGallery3 from "../../../public/imgs/SliderMediaGallery3.webp";
import SliderMediaGallery4 from "../../../public/imgs/SliderMediaGallery4.jpg";
import SliderMediaGallery5 from "../../../public/imgs/SliderMediaGallery5.webp";
import SliderMediaGallery6 from "../../../public/imgs/SliderMediaGallery6.webp";
import PlayIcon from "../../../public/icons/play.svg";

function SliderMediaGallery() {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  const mediaGalleryVideoSrcs = [
    "https://www.youtube.com/embed/a8k8R0Q2ubY?si=a-HLB2k3_fxXluq-",
    "https://www.youtube.com/embed/wIB5J8awJGI?si=RuG9ugeoPX9jytbw",
    "https://www.youtube.com/embed/k5XqXaILk3Y?si=qiP72QQZLvsFulfA",
    "https://www.youtube.com/embed/Avn2hKZ0cmo?si=ykgeiAU5k4wQzcnJ",
    "https://www.youtube.com/embed/KepHem-dYro?si=CLwL4DUcZxNG2N0p",
    "https://www.youtube.com/embed/O0EBsGVsslQ?si=ff2GVqYCtZrbLbGm",
  ];

  const mediaGalleryThumbnailSrcs = [
    SliderMediaGallery1,
    SliderMediaGallery2,
    SliderMediaGallery3,
    SliderMediaGallery4,
    SliderMediaGallery5,
    SliderMediaGallery6,
  ];

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  const setting1 = {
    slicesToShow: 1,
    centerMode: true,
    focusOnSelect: true,
    infinite: false,
    centerPadding: "25%",
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "15%",
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "10%",
        },
      },
    ],
  };
  const setting2 = {
    slidesToShow: 5.2,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.2,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3.2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <div className="flex w-full flex-wrap bg-[#1e1e1e] pb-10 pt-[100px] !text-white">
      <div className="container">
        <h2 className="second-title container mb-10 text-center text-white">
          Media gallery
        </h2>
      </div>
      <div className="slider-container w-full overflow-x-hidden">
        <Slider
          asNavFor={nav2}
          arrows={false}
          ref={(slider) => (sliderRef1 = slider)}
          {...setting1}
        >
          {mediaGalleryVideoSrcs.map((src) => (
            <div className="px-2 md:px-3">
              <div className="">
                <iframe
                  className="aspect-video w-full rounded-[20px]"
                  src={src}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={true}
                ></iframe>
              </div>
              <div className="mt-3 text-sm sm:mt-6 sm:text-base">
                ELDEN RING – Official Gameplay Reveal
              </div>
            </div>
          ))}
        </Slider>
        <div className="ml-[20px] py-5">
          <h4 className="ml-1 py-2 font-semibold">Media gallery</h4>
          <Slider
            asNavFor={nav1}
            arrows={false}
            ref={(slider) => (sliderRef2 = slider)}
            {...setting2}
          >
            {mediaGalleryThumbnailSrcs.map((imageSrc) => (
              <div className="relative w-full overflow-hidden px-1 focus:hidden">
                <div className="cursor-pointer">
                  <img
                    className="aspect-video w-full rounded-xl lg:rounded-[20px] "
                    src={imageSrc}
                    alt="Thumb-nail"
                  />
                  <div className="absolute bottom-1/2 left-1/2 flex h-14 w-14 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full bg-white/25">
                    <img className="h-5 w-4" src={PlayIcon} alt="play-icon" />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SliderMediaGallery;
