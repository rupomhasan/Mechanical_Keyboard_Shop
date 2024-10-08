
const Faq = () => {
  return (
    <div className="my-20">
    <h2 className="text-4xl font-serif text-gray-600 font-bold text-center  mb-8">
      Frequently Asked Questions
    </h2>
    <div className="grid xl:grid-cols-2 gap-5">
      <div
        className="space-y-4
    "
      >
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-lg  font-medium">
            What types of mechanical keyboards do you offer?
          </div>
          <div className="collapse-content text-sm text-gray-500">
            <p>
              We offer a wide variety of mechanical keyboards, including
              full-size, tenkeyless (TKL), and compact (60%, 65%, 75%)
              models with various switch types such as linear, tactile, and
              clicky.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-medium">
            What is your return policy?
          </div>
          <div className="collapse-content text-sm">
            <p>
              We offer a 30-day return policy for unused products. If the
              product is defective, we provide an exchange or full refund
              within the same period.
            </p>
          </div>
        </div>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-medium">
            Do you ship internationally?
          </div>
          <div className="collapse-content text-sm">
            <p>
              'No, we currently provide our keyboard services only within
              this country.
            </p>
          </div>
        </div>{" "}
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-lg font-medium">
            How can I track my order?
          </div>
          <div className="collapse-content text-sm">
            <p>
              Once your order has been shipped, you will receive a tracking
              number via email. You can use this number to track the status
              of your order on our website or the shipping carrier’s site.
            </p>
          </div>
        </div>
      </div>
      <figure>
        <img
          className="w-full rounded"
          src="https://thriftworld.com/cdn/shop/articles/Donor-Questions.jpg?v=1639068395"
          alt="question"
        />
      </figure>
    </div>
  </div>
  );
};

export default Faq;