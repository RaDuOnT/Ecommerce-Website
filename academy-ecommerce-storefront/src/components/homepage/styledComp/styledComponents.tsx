import styled from "styled-components";


export const SubTitle = styled.h2`
    color: #222c42;
    font-size: 28px;
    margin-top: 60px;
    @media (max-width: 768px) {
        font-size: 22px;
    }
    @media (max-width: 425px) {
        font-size: 18px;
    }
`
export const Divider = styled.div`
    background-image: url("https://themes.muffingroup.com/be/perfume/wp-content/uploads/2016/04/home_perfume_sep.png");
    background-position: center;
    background-repeat: no-repeat;
    width: 75%;
    padding: 18px 0;
    @media (max-width: 768px) {
        width: 50%;
    }
    @media (max-width: 425px) {
        width: 25%;
    }
`
export const SubDescription = styled.p`
    max-width: 500px;
    color: #222c42;
    font-size: 16px;
    margin: 24px 12px 0;
    @media (max-width: 768px) {
        font-size: 14px;
    }
    @media (max-width: 425px) {
        font-size: 12px;
    }
    
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
`
export const OrizontalContainer = styled.div`
    display:flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: space-evenly;
    margin-top: 48px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        row-gap: 32px;
    }
`

export const FlexContainerBetween = styled.div`
    display:flex;
    flex-direction:row;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 0;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        row-gap: 32px;
    }
`