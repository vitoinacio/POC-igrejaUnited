import Image from "next/image";
import { useCampusSelection } from "../../view-model/CampusSelectionContext";

const SeriesCarrosel = () => {
  const { currentCampus } = useCampusSelection();

  const src = currentCampus.series.domingo?.banner;

  if (!src) return;

  return (
    <div className="mt-6">
      <Image
        src={src}
        width={500}
        height={500}
        className="w-full rounded-3xl"
        alt="banner da serie"
      />

      <div className="flex justify-center items-center gap-3 mt-3">
        <span className="flex w-3 h-3 rounded-full bg-united-primary-light cursor-pointer"></span>
        <span className="flex w-3 h-3 rounded-full bg-united-muted cursor-pointer"></span>
      </div>
    </div>
  );
};

export default SeriesCarrosel;
