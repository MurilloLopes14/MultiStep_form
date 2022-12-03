import styled from "styled-components";

export const ReviewFormStyle = styled.section`
  .form_control.score_container {
    flex-direction: row;
    gap: 2rem;
    justify-content: center;
  }

  .score_container {
    svg {
      font-size: 1.6rem;
      cursor: pointer;
      transition: 0.3s;

      :hover {
        fill: var(--color-1);
      }
    }

    input:checked ~ svg {
      fill: var(--color-1);
    }
  }

  .radio_container {
    user-select: none;
    text-align: center;
    position: relative;

    input {
      opacity: 0;
      position: absolute;
      top: 15px;
      left: 35px;
    }

    p {
      font-style: italic;
      font-weight: 300;
      font-size: 0.7rem;
      margin-top: 0.4rem;
    }
  }
`;
