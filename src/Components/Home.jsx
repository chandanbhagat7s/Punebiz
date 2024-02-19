import TwoCards from "./TwoCards";
import Categories from "./Categores";
import DailyService from "./DailyService";
import Register from "./Register";
import SLBox from "./SLBox";
import Slider from "./CarouselMain";

export default function Home() {
  return (
    <>
      <Slider />
      <TwoCards />
      <SLBox />
      <Categories />
      <DailyService />
      <Register />
    </>
  );
}
