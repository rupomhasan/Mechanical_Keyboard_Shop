import Slider from "react-slick";
import OrderItem from "./OrderItem";

const OrderDetails = ({ items }) => {
  const settings = {
    infinite: false, // Disable infinite loop
    speed: 500,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2500,
    autoplay: true,
  };

  const closeModal = () => {
    const modal = document.getElementById("my_modal_5") as HTMLDialogElement;

    if (modal) {
      modal.close();
    }
  };

  return (
    <div className="relative modal-box h-fit">
      <div className="overflow-x-auto">
        <Slider {...settings} className="overflow-hidden mx-1">
          {items?.map((item, idx) => (
            <OrderItem item={item} idx={idx} key={idx} />
          ))}
        </Slider>
        <div style={{ textAlign: "center" }}>
         {/*  <button className="btn" onClick={previous}>
            Previous
          </button>
          <button className="btn" onClick={next}>
            Next
          </button> */}
        </div>
      </div>

      <button
        onClick={closeModal}
        className="absolute top-1 text-2xl font-bold hover:text-blue-500 right-3 text-black "
      >
        X
      </button>
    </div>
  );
};

export default OrderDetails;