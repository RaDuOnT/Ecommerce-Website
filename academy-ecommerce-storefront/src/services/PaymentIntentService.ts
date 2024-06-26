import axios from "axios"

export const createPaymentIntent = (cart:any, currency:string) => {
    const products = cart.map((item: { id: any; title: any; price: any; quantity: any }) => {
        return {
            item: item.id,
            title: item.title,
            price: item.price,
            quantity: item.quantity
        }
    })
    return axios.post("http://localhost:3000/payments", {
        products: products,
        currency: currency
    })
}