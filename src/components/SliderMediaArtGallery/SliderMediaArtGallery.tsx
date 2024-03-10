// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import PropTypes from "prop-types";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

// interface SliderMediaArtGalleryProps {
//   mediaSrcs: string[];
// }

function SliderMediaArtGallery({
  mediaSrcs = [],
  classname = "",
  reverse = false,
}: {
  mediaSrcs: Array<string>;
  classname: string;
  reverse: boolean;
}) {
  const SliderSize = styled.div`
    .swiper-slide {
      height: 210px;
      width: auto;
      aspect-ratio: 1/1;
    }
    @media (max-width: 768px) {
      .swiper-slide {
        height: 100px;
        width: auto;
        aspect-ratio: 1/1;
      }
    }
    .swiper-slide:nth-child(2n) {
      aspect-ratio: 16/9;
    }
    .swiper {
      padding: 0 2px;
    }
  `;
  const SliderSizeReverse = styled.div`
    .swiper-slide {
      height: 210px;
      width: auto;
      aspect-ratio: 16/9;
    }
    .swiper-slide:nth-child(2n) {
      aspect-ratio: 1/1;
    }
    .swiper {
      padding: 0 20px;
    }
    @media (max-width: 768px) {
      .swiper-slide {
        height: 100px;
        width: auto;
        aspect-ratio: 1/1;
      }
      .swiper {
        padding: 0 10px;
      }
    }
  `;

  const SwiperWrapper = reverse ? SliderSizeReverse : SliderSize;

  return (
    <div className={classname + " w-full"}>
      <SwiperWrapper className="w-full ">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={8}
          // loop
          className="mySwiper w-full"
          dir={reverse ? "rtl" : "ltr"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            // reverseDirection: reverse,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              spaceBetween: 12,
            },
            768: {
              spaceBetween: 16,
            },
            1024: {
              spaceBetween: 20,
            },
          }}
        >
          {mediaSrcs.map((src: string | undefined) => (
            <SwiperSlide className="overflow-hidden rounded-[10px] md:rounded-[20px]">
              <img
                className="cursor-grab rounded-[10px] transition-all duration-300 hover:scale-125 md:rounded-[20px]"
                src={src}
                alt="SliderMediaGallery"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </div>
  );
}

// Add PropTypes for type checking
SliderMediaArtGallery.propTypes = {
  mediaSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SliderMediaArtGallery;
