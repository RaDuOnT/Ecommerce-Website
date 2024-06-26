import { useEffect, useState } from "react";
import React from "react";
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
} from './StyledComponents'
import { SimpleSlider } from '../SimpleSlider/Slider'
import './style.css'
import { productStore } from '../../api/store/productStore'
import { useParams } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { reviewStore } from '../../api/store/reviewStore'
import cartStore from '../../api/store/cartStore'
import  ReviewDetails  from './reviewDetails'


const ProductDetails = inject('productStore')(
  observer(() => {
    const productImage = productStore.product.image; // image of the product
    const name = productStore.product.name; // name of the product (Sauvage, Chanel No. 5, etc)
    const manufacturer = productStore.product.manufacturer; // manufacturer of the product (Dior; Chanel; Gucci; etc)
    const type = productStore.product.type; // type of product (eau the toilette, eau de parfum, eau de cologne, eau de toiconstte)
    const description = productStore.product.description; // description of the product
    const displayedPrice = productStore.product.price; // price of the product per quantity
    const topNotes = productStore.product.topNotes; // fragrance notes of the product
    const heartNotes = productStore.product.heartNotes; // fragrance notes of the product
    const baseNotes = productStore.product.baseNotes; // fragrance notes of the product
    const parfumeGroup = productStore.product.baseNotes; // fragrance group of the product
    const quantity = productStore.product.quantity; // quantity of the product

    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    // console.log(id)

    useEffect(() => {
      setLoading(true)
      productStore.getProduct(id).then(() => setLoading(false))
      reviewStore.getReview(id).then(() => setLoading(false))
    }, [])
    const [showMore, setShowMore] = useState(false)

    const imageNotFound = [
      "https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg",
    ];

    const text = "Descrierea nu este disponibila";
    return (
      <div>
        <ContentPage>
          <Wrapper>
            <LeftColumnDiv>
              <SliderDiv>
                <SimpleSlider
                  images={productImage ? productImage : imageNotFound}
                />
              </SliderDiv>
            </LeftColumnDiv>
            <RightColumnDiv>
              <ParfumeName>{name ? name : "Sauvage"}</ParfumeName>
              <ParfumeManufacturer>
                {manufacturer ? manufacturer : "Dior"}
              </ParfumeManufacturer>
              <ParfumeType>{type ? type : "Eau du parfume"}</ParfumeType>
              <StyledLine />
              <ParfumePrice>
                {displayedPrice}
                <span className="ronSpan">RON / {quantity} ml</span>
              </ParfumePrice>
              <StyledLine />

              {/* range for how many products */}

              <SelectNumberDiv>
                <div>
                  <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <AddToCartButton
                    onClick={() => {
                      console.log("clicked");
                      const newProduct = {
                        _id: id,
                        image: productImage,
                        name: name,
                        manufacturer: manufacturer,
                        price: displayedPrice,
                        total: displayedPrice,
                      }
                      cartStore.addProductInCart(newProduct);
                    }}
                >
                  Cumpara
                </AddToCartButton>
              </SelectNumberDiv>
            </RightColumnDiv>
          </Wrapper>

          <Wrapper>
            <LeftColumnDiv>
              <FragranceNotes>
                <Card>
                  <CompositionTitle>Note varf</CompositionTitle>
                  <StyledLine2 />
                  {topNotes ? (
                    <MyUL>
                      {topNotes.map((index: any) => (
                        <li>{index}</li>
                      ))}
                    </MyUL>
                  ) : (
                    <MyUL>
                      <li>Informatii lipsa</li>
                    </MyUL>
                  )}
                </Card>

                <Card>
                  <CompositionTitle>Note inima</CompositionTitle>
                  <StyledLine2 />
                  {heartNotes ? (
                    <MyUL>
                      {heartNotes.map((index: any) => (
                        <li>{index}</li>
                      ))}
                    </MyUL>
                  ) : (
                    <MyUL>
                      <li>Informatii lipsa</li>
                    </MyUL>
                  )}
                </Card>

                <Card>
                  <CompositionTitle>Note baza</CompositionTitle>
                  <StyledLine2 />
                  {baseNotes ? (
                    <MyUL>
                      {baseNotes.map((index: any) => (
                        <li>{index}</li>
                      ))}
                    </MyUL>
                  ) : (
                    <MyUL>
                      <li>Informatii lipsa</li>
                    </MyUL>
                  )}
                </Card>
                <Card>
                  <CompositionTitle>Grupe</CompositionTitle>
                  <StyledLine2 />

                  {parfumeGroup ? (
                    <MyUL>
                      {parfumeGroup.map((index: any) => (
                        <li>{index}</li>
                      ))}
                    </MyUL>
                  ) : (
                    <MyUL>
                      <li>Informatii lipsa</li>
                    </MyUL>
                  )}
                </Card>
              </FragranceNotes>
            </LeftColumnDiv>
            <DescriptionColumnDiv>
              <DescriptionTitle>Descriere</DescriptionTitle>
              <StyledLine />

              {description ? (
                <DescriptionText>
                  {showMore
                    ? description
                    : description.length > 400
                    ? description.slice(0, 400) + "..."
                    : description}

                  {description.length < 400 ? null : (
                    <ShowMoreButton onClick={() => setShowMore(!showMore)}>
                      {showMore ? "Vezi mai putin" : "Vezi mai mult"}
                    </ShowMoreButton>
                  )}
                </DescriptionText>
              ) : (
                <DescriptionText>
                  {showMore ? text : text.substring(0, 400) + "..."}
                  <ShowMoreButton onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Vezi mai putin" : "Vezi mai mult"}
                  </ShowMoreButton>
                </DescriptionText>
              )}
            </DescriptionColumnDiv>
          </Wrapper>
          <ReviewDetails />
        </ContentPage>
      </div>
    );
  })
);

export default ProductDetails;
