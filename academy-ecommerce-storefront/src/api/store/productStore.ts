import { observable} from 'mobx';
import { ProductInt } from '../models/product';

class ProductStore {
    @observable products: ProductInt[] = [];
    @observable product: ProductInt = {} as ProductInt;

    async getProducts(itemsPerPage: number, gender?: string): Promise<ProductInt[]> {
        let url = `http://localhost:3000/products?limit=${itemsPerPage + 1}`;
        if (gender) {
            url += `&gender=${gender}`;
        }
        const response = await fetch(url, {
            method: "GET"
        });
    
        const data = await response.json();
        this.products = data;
        return data;
    }

    async getProduct(id?: string): Promise<ProductInt[]> {
        const response = await fetch(`http://localhost:3000/products/${id}`, {
            method: "GET"
        });
        const data = await response.json();
        this.product = data;
        return data;
    }

    async createProduct(product: ProductInt): Promise<ProductInt> {
        const response = await fetch(`http://localhost:3000/products`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        });
        const data = await response.json();
        const productsCopy = this.products;
        productsCopy.push(data);
        this.products = productsCopy;
        return data;
    }

}

export const productStore = new ProductStore();