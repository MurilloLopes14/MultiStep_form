import styled from "styled-components";

export const FormContainerStyle = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadow};
  border-radius: 10px;

  form {
    max-width: 400px;
    margin: 0 auto;
  }

  .inputs_container {
    min-height: 280px;
  }

  .form_control {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    margin-bottom: 2rem;

    label {
      font-weight: bold;
      font-size: 0.9rem;
      color: ${({ theme }) => theme.subText};
    }

    input,
    textarea {
      padding: 0.6rem;
      border: none;
      border-radius: 3px;
      outline: none;
      box-shadow: ${({ theme }) => theme.inputShadow};
    }

    textarea {
      height: 120px;
      max-height: 300px;
      min-height: 120px;
      border-radius: 10px;
      resize: vertical;
      background-color: transparent;
      border: 2px solid ${({ theme }) => theme.text};
      color: ${({ theme }) => theme.subText};
    }
  }
  .actions {
    display: flex;
    justify-content: flex-end;
    gap: 1rem;

    button {
      display: flex;
      font-size: 0.9rem;
      padding: 0.5rem 1rem;
      gap: 0.5rem;
      align-items: center;
      border-radius: 3px;
      background-color: var(--color-1);
      color: ${({ theme }) => theme.text};
      cursor: pointer;
      border: none;
      transition: 0.3s;

      :hover {
        filter: brightness(1.5);
      }
    }
  }
`;
