//* Styles
import { MainContentStyle } from "./MainContentStyle";

//* Components
import { FormContainer } from "../FormContainer/FormContainer";

export const MainContent = () => {
  return (
    <>
      <MainContentStyle>
        <h2>Deixe sua avaliação</h2>
        <p>
          Ficamos felizes com a sua compra, utilize o formulário abaixo para
          avaliar o produto
        </p>
      </MainContentStyle>
      <FormContainer />
    </>
  );
};
