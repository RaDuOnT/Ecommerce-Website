import styled from "styled-components";

export const TableHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgb(9, 19, 34);
    padding: 1rem 2rem;
    border-top-right-radius: 2rem;
    border-top-left-radius: 2rem;
`;

export const TableHeaderTitle = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    color: #fff;
`;

//crreate a button component

export const Button = styled.button`
    background-color: #6100d4;
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;
    cursor: pointer;
    transition: all 0.2s ease-in-out;  
    &:hover {
        background-color: #e6e6e6;
        color: rgb(9, 19, 34);
    }
`;
