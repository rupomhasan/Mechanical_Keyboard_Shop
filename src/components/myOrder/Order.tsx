import { TAddress } from "../../types/order.types";
import Form from "../form/Form";
import FormInput from "../form/FormInput";
interface OrderProps {
  onsubmit: (info: TAddress) => void;
  setNote: (value: string) => void;
}
const Order: React.FC<OrderProps> = ({ onsubmit, setNote }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold text-gray-700 mb-4">
        Customer Information
      </h3>
      <Form onSubmit={onsubmit}>
        <FormInput type="text" name="customerName" label="Customer Name" />
        <FormInput type="text" name="address" label="Address" />
        <FormInput type="tel" name="contactNo" label="Contact Number" />
        <FormInput type="text" name="states" label="State" />
        <FormInput type="number" name="zipCode" label="ZipCode" />

        <div className="mt-4">
          <label className="block text-lg font-semibold mb-2">Note</label>
          <textarea
            onChange={(e) => setNote(e.target.value)}
            rows={4}
            className="border border-gray-300 px-4 py-2 w-full rounded-md focus:outline-none focus:border-blue-400"
          />
        </div>

        <input
          className="mt-5 w-full bg-blue-500 text-white py-2 px-4 rounded-md cursor-pointer hover:bg-blue-600 transition"
          type="submit"
          value="Place Order"
        />
      </Form>
    </div>
  );
};

export default Order;
