import styled from "styled-components";

export const StepsStyle = styled.article`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 2rem;
  position: relative;

  &::after {
    content: "";
    width: 380px;
    border-bottom: 1px solid ${({ theme }) => theme.subText};
    position: absolute;
    top: 20px;
  }

  .step {
    text-align: center;
    background-color: ${({ theme }) => theme.body};
    z-index: 1;
    width: 120px;
    padding: 0.5rem;

    svg {
      font-size: 1.6rem;
      margin-bottom: 0.2rem;
    }
  }
  .active {
    font-weight: bold;

    svg {
      fill: var(--color-1);
    }
  }
`;
