import Image from "next/image";
import { useCampusSelection } from "../../view-model/CampusSelectionContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SeriesCarrosel = () => {
  const { currentCampus } = useCampusSelection();

  if (!currentCampus) {
    return (
      <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] bg-gray-200 animate-pulse rounded-xl flex items-center justify-center">
        <span className="text-gray-400 text-sm">Carregando séries...</span>
      </div>
    );
  }

  if (!currentCampus.series || currentCampus.series.length === 0) {
    return null;
  }

  return (
    <div className="w-full block">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        grabCursor={true}
        className="w-full h-auto rounded-xl shadow-sm group"
        style={{ width: "80%" }}
      >
        {currentCampus.series.map((serie, index) => {
          const bannerSrc = serie.banner
            ? serie.banner
            : "/placeholder-banner.jpg";

          return (
            <SwiperSlide key={serie.day || index}>
              <div className="relative w-full h-[150px] md:h-[400px] lg:h-[500px] bg-gray-100">
                <Image
                  src={bannerSrc}
                  alt={serie.title || "Banner da série"}
                  fill
                  className="object-cover center"
                  sizes="100vw"
                  priority={index === 0}
                  onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                  }
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />

                {!serie.banner && (
                  <div className="absolute inset-0 flex items-center justify-center z-[-1]">
                    <span className="text-gray-400">Sem Series divulgadas</span>
                  </div>
                )}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SeriesCarrosel;
