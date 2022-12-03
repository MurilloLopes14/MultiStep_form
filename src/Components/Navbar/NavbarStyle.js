import styled from "styled-components";

export const NavbarStyle = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 2rem;

  h1 {
    user-select: none;
    span {
      color: var(--color-1);
    }
  }

  .btn_theme {
    padding: 0.5rem 0.4rem;
    border-radius: 20px;
    font-weight: 700;
    letter-spacing: 0.5px;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;
