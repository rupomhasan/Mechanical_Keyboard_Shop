import { serviceData } from "./servictData";

const Service = () => {
  return (
    <div className="grid  md:grid-cols-2 lg:grid-cols-4 gap-5 mx-1 my-10">
      {serviceData.map((item, idx) => (
        <div
          className={`
        ${idx === 0 && "bg-yellow-200"} 
        ${idx === 1 && "bg-[#e9effc]"}
        ${idx === 2 && "bg-green-200"}
        ${idx === 3 && "bg-[#eaeed6]"}
        p-3 rounded hover:cursor-pointer `}
        >
          <img src={item.image} className="size-10 mb-3" />
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className=" text-xs">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
