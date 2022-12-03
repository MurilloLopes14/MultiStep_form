//* Styles
import { ThanksStyle } from "./ThanksStyle";

//* React-icons
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

export const Thanks = ({ data }) => {
  const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />,
  };

  return (
    <ThanksStyle>
      <h2>Falta pouco . . .</h2>
      <p>
        A sua opinião é muito importante, em breve você receberá um cupom de 10%
        de desconto para a sua próxima compra.
      </p>
      <p>Para concluir sua avaliação, clique no botão de Enviar abaixo.</p>
      <h3>Aqui está um resumo da sua avaliação: {data.name}</h3>
      <p className="review_data">
        <span>Satisfação com o produto:</span>
        {emojiData[data.review]}
      </p>
      <p className="review_data">
        <span>Comentário: </span>
        {data.comment}
      </p>
    </ThanksStyle>
  );
};
