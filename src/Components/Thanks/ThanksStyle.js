import styled from "styled-components";

export const ThanksStyle = styled.section`
  text-align: center;

  h2,
  p,
  h3 {
    user-select: none;
  }

  h2 {
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }

  h3 {
    margin: 1rem 0;
  }

  .review_data {
    display: flex;
    align-items: center;
    text-align: left;

    span {
      font-weight: bold;
    }

    svg {
      margin-left: 5px;
      transition: 0.2s;

      :hover {
        fill: var(--color-1);
      }
    }
  }
`;
