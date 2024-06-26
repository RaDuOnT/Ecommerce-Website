import styled from "styled-components";

export const Table = styled.table`
  border-collapse: collapse;
  border: none;
  width: 100%;
  background-color: #f4f7fc;
`;

export const TableHead = styled.th`
  border: none;
  padding: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  /* line-height: 15px; */
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #2e3b52;
  background-color: #f4f7fc;
`;

export const TableData = styled.td`
  border: none;
  padding: 8px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #2e3b52;
  text-align: center;
`;

export const TableRow = styled.tr`
  &:nth-child(2n) {
    background-color: #f4f7fc;
  }
  &:nth-child(2n + 1) {
    background-color: #ffffff;
  }
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #2e3b52;
  text-align: center;
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f4f7fc;
  padding: 1rem 2rem;
  border-top-right-radius: 2rem;
  border-top-left-radius: 2rem;
`;

export const InputContainer = styled.div`
  display: flex;
`;

export const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;

export const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  color: #464646;
  &:focus {
    border: none;
    outline: none;
  }
`;

//create a blue button
export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #0a65ff;
  border: none;
  border-radius: 0.5rem;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const ButtonText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 17px;
  color: #ffffff;
  text-align: center;
  margin: 0;
  margin-left: 10px;
`;

export const PaginationWrapper = styled.div`
  margin-top: 1rem;
`;
