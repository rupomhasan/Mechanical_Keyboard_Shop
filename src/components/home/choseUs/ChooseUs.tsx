import img from "../../../assets/whyChooseUs.jpg";
import { whyChooseUs } from "./data";

const ChooseUs = () => {
  return (
    <div className=" px-1  ">
      <img
        src={img}
        alt="whyChooseUs"
        className="rounded-t-lg max-h-[600px] w-full   object-cover "
      />
      <div className="bg-[#071827f2] px-1 py-10 rounded-b-lg">
        <div className="md:px-7 ">
          <div className="py-5">
            <h2 className="text-4xl mb-2 font-bold text-white">
              Why Choose Us
            </h2>
            <p className="max-w-md text-gray-400 font-semibold">
              Our keyboards combine performance, durability, and customization
              for a superior typing experience.
            </p>
          </div>
        </div>
        <div className=" grid md:grid-cols-2  justify-between gap-10  md:m-7 items-center ">
          {whyChooseUs?.map((item, idx) => (
            <div key={idx} className="flex gap-3">
              <figure>
                <img
                  className="size-14 object-contain"
                  src={item.icon}
                  alt="logos"
                />
              </figure>
              <div className=" text-white font-extrabold font-serif">
                <h3 className="text-xl">{item.title}</h3>
                <p className=" text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
