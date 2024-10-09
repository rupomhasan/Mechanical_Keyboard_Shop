const Community = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    console.log(email);
  };
  return (
    <div>
      <div className="bg-blue-100 py-10 px-3  rounded-md ">
        <div className="space-y-1 mb-3">
          <h3 className="text-center text-2xl font-semibold text-gray-600">
            Join Our Community
          </h3>
          <p className="">
            Subscribe to our newsletter fo exclusive deals,product launches ,and
            tips from the pros!
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <input
              placeholder="Enter your email..."
              type="email"
              name="email"
              className="w-full py-2 px-5 rounded-md "
            />
            <button
              type="submit"
              className="btn bg-blue-500 text-white text-lg font-serif hover:bg-blue-700"
            >
              SubsCribe
            </button>
          </div>
        </form>
      </div>
      <div>
        <h2 className="mt-10 text-xl">Get in Touch,</h2>
        <p className="text-gray-600">
          If you have any questions or need assistance, feel free to contact our
          customer support:
        </p>
        <ul>
          <li>
            Email:
            <span className=" font-bold hover:link">
              {" "}
              rupom.hasan607299@gmail.com
            </span>
          </li>
          <li>
            Phone: <span className="font-bold hover:link">01318044328</span>
          </li>
        </ul>

        <p className="my-5  text-center">
          Thank you for choosing Our Shop- your one-stop shop for the best
          mechanical keyboards in the world!
        </p>
      </div>
    </div>
  );
};

export default Community;
