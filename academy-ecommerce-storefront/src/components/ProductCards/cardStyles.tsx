import styled from 'styled-components'
import addToCart from '../../images/add-to-cart.png'

export const CardWrapper = styled.div`
  grid-template-areas: 'image' 'text';
  border-radius: 5px;
  background-color: white;
  &:hover {
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  }
  padding: 20px;
  text-align: left;
`

export const CardImage = styled.div<{ background: string }>`
  grid-area: image;
  background-image: url(${({ background }) => background});
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  margin: auto;
  cursor: pointer;
`

export const CardPriceAndShop = styled.div`
  grid-area: text;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`

export const CardPrice = styled.span`
  color: #2f4858;
  font-size: 13px;
`

export const CardTextTitle = styled.h2`
  font-size: 24px;
  margin-top: 10px;
  color: black;
  cursor: pointer;
`

export const AddToCartBtn = styled.button`
  background-image: url(${addToCart});
  background-color: transparent;
  background-size: cover;
  background-position: center;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
`
export const CardRating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`