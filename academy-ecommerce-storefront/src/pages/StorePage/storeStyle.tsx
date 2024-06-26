import styled from 'styled-components'

export const StorePageContainer = styled.div`
  min-height: calc(100vh - 263px);
  background-color: #edebef;
  padding-bottom: 20px;
  @media (max-width: 768px){
    min-height: calc(100vh - 163px);
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  // grid-template-columns: 1fr 1fr 1fr 1fr;; 
  flex-wrap: wrap;
  padding: 20px 20%;
  gap: 20px;
  @media (max-width: 1024px) {
    padding: 20px 10%;
  }
`

export const PageButtonsDiv = styled.div`
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  background-color: white;
  display: flex;
  justify-content: right;
  align-items: center;
  margin: auto;
  width: 60%;
  @media (max-width: 1024px) {
    width: 80%;
  }
`
