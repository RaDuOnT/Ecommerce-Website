import styled from "styled-components";

export const NotificationContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  width: clamp(200px, 50%, 700px);

  position: absolute;
  top: 2rem;
  left: 50%;
  padding: 0.5rem;
  z-index: 9999;
  transform: translateX(-50%);
  animation: fadein 2s;
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const NotificationHeader = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  padding: 1rem 0;
`;
export const NotificationDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 1rem;
`;

export const NotificationImage = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

export const NotificationTitle = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
`;
