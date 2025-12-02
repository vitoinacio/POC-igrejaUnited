import AnnouncementsSection from "./sections/AnnouncementsSection"
import HeroSection from "./sections/HeroSection"
import SeriesSection from "./sections/SeriesSection"

const HomeView = () => {
  return (
    <div>
      <HeroSection />
      <SeriesSection />
      <AnnouncementsSection />
    </div>
  )
}

export default HomeView