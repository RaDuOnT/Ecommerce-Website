export interface Order {
  userId: string;
  itemId: string;
  date: Date;
  quantity: number;
  price: number;
  status: string;
  address: string;
  firstName: string;
  lastName: string;
  phone: string;
  zipcode: string;
  city: string;
  country: string;
  items: [];
}
