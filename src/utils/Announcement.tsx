import Marquee from "react-fast-marquee";

const Announcement = () => {
  return (
    <Marquee gradient={false} speed={50} className="my-3">
      🚨 Every order comes with its own discount! Plus, enjoy free delivery on
      your first order! 🚨
    </Marquee>
  );
};

export default Announcement;
