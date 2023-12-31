import FollowUs from "./Components/FollowUs";
import Footer from "./Components/Footer";
import KeyServices from "./Components/KeyServices";
import Navbar from "./Components/Navbar";
import OurEdge from "./Components/OurEdge";
import Powered from "./Components/Powered";
import ReadyToHire from "./Components/ReadyToHire";
import Slider from "./Components/Slider";
import WhyHire from "./Components/WhyHire";
import CallToAction from "./Components/CallToAction";

export const metadata = {
  title: "Premier Associates | Best Virtual Assistant Services",
  description: "Best Virtual Assistant Services",
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Slider />
      <WhyHire />
      <KeyServices />
      {/* <Testimonials /> */}
      <CallToAction />
      <ReadyToHire />
      <OurEdge />
      <FollowUs />
      <Footer />
      <Powered />
    </div>
  );
}
