import Community from "./Community";
import Faq from "./Faq";

const AboutUs = () => {
  return (
    <div>
      {/* Hero section */}
      <div className="mx-2">
        <div>
          <h3 className="text-4xl font-serif text-center font-bold text-gray-600 mb-3">
            About Us
          </h3>
          <div className="max-w-3xl mx-auto font-semibold text-gray-500">
            <p className="text-justify   md:text-center">
              Welcome to [Your Shop Name], your ultimate destination for
              high-quality mechanical keyboards. Whether you're a gamer, typist,
              or keyboard enthusiast, we offer a curated selection of premium
              mechanical keyboards designed to elevate your typing experience.
            </p>
          </div>
        </div>
        <figure className="my-5">
          <img
            className="w-full rounded"
            src="https://i.ytimg.com/vi/mC5P7IGR8-M/maxresdefault.jpg"
            alt="keyboard service"
          />
        </figure>
      </div>

      {/* Faq  */}
      <Faq />
      {/* Community  */}
      <Community />
    </div>
  );
};

export default AboutUs;
