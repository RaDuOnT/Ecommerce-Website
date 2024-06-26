import styled from "styled-components";

// Create a Wrapper component that'll render a <section> tag with some styles
export const ContentPage = styled.section`
  padding: 4% 20%;
  height: 100%;
  margin: 0 auto;
  @media (max-width: 1024px) {
    padding: 8% 5%;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 40px;
  }
  &:not(:last-child) {
    margin-bottom: 120px;
    @media (min-width: 768px) and (max-width: 1440px) {
      margin-bottom: 80px;
    }
    @media (max-width: 767px) {
      margin-bottom: 50px;
    }
  }
`;

export const ReviewsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column-reverse;
    gap: 40px;
  }
  &:not(:last-child) {
    margin-bottom: 120px;
    @media (min-width: 768px) and (max-width: 1440px) {
      margin-bottom: 80px;
    }
    @media (max-width: 767px) {
      margin-bottom: 50px;
    }
  }
`;

export const LeftColumnDiv = styled.div`
  text-align: left;
  width: 35%;
  margin: auto;
  width: 45%;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const RightColumnDiv = styled.div`
  width: 45%;
  text-align: left;
  margin: auto;
  margin: 0 auto;
  @media (max-width: 767px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const DescriptionColumnDiv = styled(RightColumnDiv)`
  margin-top: 0;
  margin-bottom: 0;
`;

export const Image = styled.img`
  text-align: center;
  width: 100%;
  max-width: 540px;
`;

export const ParfumeName = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  margin: 0;
  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: 2rem;
  }
  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
  color: black;
`;

export const ParfumeManufacturer = styled.p`
  font-size: 1.5rem;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 30px;
  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: 1.5rem;
  }
  @media (max-width: 767px) {
    font-size: 1rem;
  }
  color: black;
`;

export const ParfumeType = styled.p`
  font-size: 1.2rem;
  margin: 0;
  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (max-width: 767px) {
    font-size: 1rem;
  }
  color: gray;
`;

export const ParfumePrice = styled.p`
  font-size: 2rem;
  margin: 0;
  @media (min-width: 768px) and (max-width: 1440px) {
    font-size: 1.5rem;
  }
  text-align: center;
  color: black;
`;

export const StyledLine = styled.hr`
  margin-bottom: 20px;
  margin-top: 20px;
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(63, 57, 89, 0.75),
    rgba(0, 0, 0, 0)
  );
`;

export const StyledLine2 = styled(StyledLine)`
  margin-top: 10px;
  margin-bottom: 10px;
  max-width: 150px;
`;

export const SliderDiv = styled.div`
  width: 100%;
`;

export const AddToCartButton = styled.button`
  display: block;
  background-color: rgb(63, 57, 89);
  color: #fff;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ffbf33;
    color: #000;
  }
  @media (max-width: 350px) {
  }
`;

export const QuantityButton = styled.button`
  text-align: left;
  font-size: 1rem;
  padding: 0.5em 1em;
  width: 100px;
  outline: none;
  color: black;
  border: none;
  border-radius: 0.25em;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  background-color: #fff;

  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export const QuantityButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }
  @media (max-width: 767px) {
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  @media (max-width: 390px) {
  }
`;

export const SelectNumberDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  // margin-top: 30px;
  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
    gap: 20px;
  }
  @media (max-width: 767px) {
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
  }
`;

export const FragranceNotes = styled.div`
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const FragranceReviews = styled.div`
  margin: 0 auto;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  @media (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  height:185px;
  margin: 12px auto;
  resize: none;
  @media (max-width: 768px) {
    height: 100px;
  }
`;

export const MyUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  li {
    margin-bottom: 10px;
    font-size: 1rem;
  }
  li:last-of-type{
    color: darkgray;
    font-weight: 500;
  }
`;

export const CompositionTitle = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;

  @media (max-width: 1440px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.9rem;
  }
  @media (max-width: 767px) {
    font-size: 1rem;
  }
  color: black;
`;

export const DescriptionTitle = styled(CompositionTitle)`
  margin: 0;
`;

export const DescriptionText = styled.p`
  font-size: 1rem;
  margin: 0;
  line-height: 30px;
  height: 320px;
  @media (max-width: 1440px) {
    font-size: 0.9rem;
  }
  color: black;
  overflow-y: auto;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 0 1em 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  @media (max-width: 767px) {
    padding: 10px;
  }
`;

export const ShowMoreButton = styled.button`
  display: block;
  background-color: white;
  color: black;
  padding: 10px 20px;
  margin-top: 20px;
  border: 2px solid rgb(63, 57, 89);
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    border: 2px solid #ffbf33;
    color: #000;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledLabel = styled.label``;