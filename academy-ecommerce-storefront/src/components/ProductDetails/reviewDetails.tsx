import { useEffect, useRef, useState } from 'react'
import React from 'react'
import {
  ContentPage,
  Wrapper,
  LeftColumnDiv,
  RightColumnDiv,
  FragranceNotes,
  MyUL,
  ParfumeName,
  SliderDiv,
  AddToCartButton,
  QuantityButton,
  QuantityButtonContainer,
  SelectNumberDiv,
  ParfumeManufacturer,
  ParfumeType,
  StyledLine,
  ParfumePrice,
  CompositionTitle,
  Card,
  DescriptionColumnDiv,
  DescriptionTitle,
  StyledLine2,
  DescriptionText,
  ShowMoreButton,
  FlexContainer,
  StyledLabel,
  FragranceReviews,
  StyledTextArea,
  ReviewsWrapper,
} from './StyledComponents'
import { SimpleSlider } from '../SimpleSlider/Slider'
import './style.css'
import { StyledInput } from '../ApplyDiscount/ApplyDiscount.styled'
import { productStore } from '../../api/store/productStore'
import { useParams } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { reviewStore } from '../../api/store/reviewStore'
import { FlexContainerBetween } from '../homepage/styledComp/styledComponents'
import { ReviewInt } from '../../api/models/review'
import { FaStar } from 'react-icons/fa'

const ReviewDetails = inject('reviewStore')(
  observer(() => {
    const userID = reviewStore.review.userId
    // const productID = reviewStore.review.productId
    const rating = reviewStore.review.rating
    const message = reviewStore.review.message
    const createdAt = reviewStore.review.createdAt

    const [loading, setLoading] = useState(true)
    const { id } = useParams()

    console.log(id)
    const textAreaRef = useRef<HTMLTextAreaElement>(null)
    const ratingRef = useRef<HTMLSelectElement | null>(null)
    const user = 'Anonim'

    const createR = () => {
      if (textAreaRef.current && ratingRef.current) {
        const review: ReviewInt = {
          userId: user,
          productId: id || '',
          rating: Number(ratingRef.current.value),
          message: textAreaRef.current.value,
          createdAt: new Date().toLocaleString().toString(),
        }
        reviewStore.createReview(review)
        textAreaRef.current.value = "";
        window.location.reload();
      }
    }

    useEffect(() => {
      setLoading(true)
      reviewStore.getReview(id).then(() => setLoading(false))
    }, [])

    console.log('recenzii', reviewStore.reviews)

    return (
      <div>
        {/* product feedback section */}

        <ReviewsWrapper>
          <DescriptionColumnDiv>
            <DescriptionTitle>
              Scrie o recenzie despre acest produs:
            </DescriptionTitle>
            <StyledLine />

            <StyledTextArea ref={textAreaRef} name="reviews" />

            <FlexContainerBetween>
              <SelectNumberDiv>
                <div>
                  <select ref={ratingRef} className="review-rating">
                    <option value="5">⭐⭐⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="1">⭐</option>
                  </select>
                </div>
              </SelectNumberDiv>
              <AddToCartButton onClick={createR}>Trimite</AddToCartButton>
            </FlexContainerBetween>
          </DescriptionColumnDiv>

          <LeftColumnDiv>
            <DescriptionTitle>
              Ce spun cei ce au cumparat acest produs?
            </DescriptionTitle>
            <StyledLine />
            <FragranceReviews className="reviews-card">
              {reviewStore.reviews.length > 0 ? (
                reviewStore.reviews.map((props) => (
                  <Card>
                    <CompositionTitle>{props.userId}</CompositionTitle>
                    <StyledLine2 />
                    <MyUL>
                      <li className="review-card-rating">
                        {[...Array(5)].map((star, i) => {
                          const ratingValue = i + 1
                          return (
                            <FaStar
                              key={i}
                              style={{
                                color:
                                  ratingValue <= props.rating
                                    ? '#ffc107'
                                    : '#e4e5e9',
                              }}
                            />
                          )
                        })}
                      </li>
                      <li>{props.message}</li>
                      <li className="review-card-date">
                        {props.createdAt
                          ? props.createdAt
                          : '05/01/2023, 12:30'}
                      </li>
                    </MyUL>
                  </Card>
                ))
              ) : (
                <div>Nu sunt recenzii</div>
              )}
            </FragranceReviews>
          </LeftColumnDiv>
        </ReviewsWrapper>
      </div>
    )
  }),
)

export default ReviewDetails