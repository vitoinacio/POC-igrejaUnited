import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/shared/components/ui/card";
import { useCampusSelection } from "../../view-model/CampusSelectionContext";

const AnnouncementsSection = () => {
  const { currentCampus } = useCampusSelection();

  console.log(currentCampus)

  return (
    <section className="flex w-full mt-10">
      <div className="flex flex-col gap-3 flex-[1.3]">
        <div>
          <h4 className="text-xs tracking-[0.27em] uppercase text-united-muted">
            anúncios da semana
          </h4>
          <h3 className="font-display text-xl sm:text-2xl">
            Fique por dentro do que está acontecendo
          </h3>
        </div>
        <div className="bg-zinc-400 h-[270px] w-[90%] rounded-2xl"></div>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <h3 className="text-sm font-semibold text-united-muted uppercase tracking-[0.2em]">
          nossos encontros
        </h3>
        <div className="flex flex-col gap-3">
          {currentCampus.services &&
            currentCampus.services.map((item, index) => (
              <Card key={index} className={`gap-0 w-full transition-all duration-300 hover:scale-105 ${index === 1 ? 'bg-united-primary' : ''}`}>
                <CardHeader>
                  <CardTitle className={`text-xs font-semibold text-united-muted uppercase tracking-[0.22em] ${index === 1 ? 'text-white' : ''}`}>{item.day}</CardTitle>
                </CardHeader>
                <CardContent className={`font-display text-lg ${index === 1 ? 'text-white' : ''}`}>Quinta Profética & Estudo</CardContent>
                <CardFooter className={`text-xs text-united-muted mt-1 ${index === 1 ? 'text-white' : ''}`}>
                    Culto as {item.times.join(' & ')}
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
