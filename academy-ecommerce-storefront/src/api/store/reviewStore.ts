import { observable} from 'mobx';
import { ReviewInt } from '../models/review';

class ReviewStore {
    @observable reviews: ReviewInt[] = [];
    @observable review: ReviewInt = {} as ReviewInt;
    

    async getReviews(): Promise<ReviewInt[]> {
        const response = await fetch(`http://localhost:3000/reviews`, {
            method: "GET"
    });
        const data = await response.json();
        this.reviews = data;
        return data;
    }

    async getReview(productId?: string): Promise<ReviewInt[]> {
        const response = await fetch(`http://localhost:3000/reviews?productId=${productId}`, {
            method: "GET"
        });
        const data = await response.json();
        this.reviews = data;
        return data;
    }
    async createReview(review: ReviewInt): Promise<ReviewInt> {
        const response = await fetch(`http://localhost:3000/reviews`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        });
        const data = await response.json();
        const reviewsCopy = this.reviews;
        reviewsCopy.push(data);
        this.reviews = reviewsCopy;
        return data;
    }

}

export const reviewStore = new ReviewStore();