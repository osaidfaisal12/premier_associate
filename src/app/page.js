import FollowUs from "./Components/FollowUs";
import KeyServices from "./Components/KeyServices";
import Navbar from "./Components/Navbar";
import OurEdge from "./Components/OurEdge";
import ReadyToHire from "./Components/ReadyToHire";
import Slider from "./Components/Slider";
import Testimonials from "./Components/Testimonials";
import WhyHire from "./Components/WhyHire";

export default function Home() {
  return (
    <div className="flex flex-col mb-20">
      <Navbar />
      <Slider />
      <WhyHire />
      <KeyServices />
      <Testimonials />
      <ReadyToHire />
      <OurEdge />
      <FollowUs />
    </div>
  );
}
