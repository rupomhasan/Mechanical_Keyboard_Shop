export type TOrder = {
  items: [
    { productId: '123', quantity: 2 },
    { productId: '456', quantity: 1 }
  ],
  shippedAddress: {
    customerName: 'John Doe',
    states: 'Rangpur',
    contactNo: '01712345678',
    zipCode: 1234,
    address: 'Main Street',
    note: 'Please deliver on Tuesday'
  }
}