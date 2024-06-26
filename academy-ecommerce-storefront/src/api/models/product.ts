export interface ProductInt {
    _id?: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string[];
    quantity: number;
    manufacturer: string;
    category: string;
    type: string;
    topNotes: string[];
    heartNotes: string[];
    baseNotes: string[];
    perfumeGroup: string[];
}