import Marquee from "react-fast-marquee";
const Announcement = () => {
  return (
    <Marquee gradient={false} speed={50} className="my-3">
      🚨 Get 10% off on all mechanical keyboards! Limited time offer. Use code:
      KEYBOARD10 🚨
    </Marquee>
  );
};

export default Announcement;
