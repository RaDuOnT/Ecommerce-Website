import React from "react";
import styled from "styled-components";
import { themeColor } from "../utils";

interface BadgeProps {
  content: string;
  clean?: boolean;
  glow?: boolean;
  paid?: boolean;
  late?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ content, clean = false, glow = false, paid = false, late = false }) => {
  return (
    <Div clean={clean} glow={glow} paid={paid} late={late}>
      {content}
    </Div>
  );
};

interface DivProps {
  clean?: boolean;
  glow?: boolean;
  paid?: boolean;
  late?: boolean;
}

const Div = styled.span<DivProps>`
  padding: 0.3rem 1rem;
  border-radius: 1rem;
  font-weight: 500;
  color: white;
  background-color: ${themeColor};
  ${({ clean }) =>
    clean &&
    `background-color: transparent;
    border: 0.05rem solid ${themeColor};
     color:${themeColor};`}
  ${({ glow }) =>
    glow &&
    `
        font-size:0.8rem;
        padding:0.2rem 0.5rem;
        font-weight:normal;
          background-color: rgba(109, 134, 245, 0.192);
        color:#2f233d;
    `}
    ${({ paid }) =>
    paid &&
    `
        background-color:#70e00041;
        color:#70e000;
    `}

  ${({ late }) =>
    late &&
    `
        background-color:#ff595e41;
        color:#ff595e;
    `}
`;

export default Badge;