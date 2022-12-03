//* Styles
import { ReviewFormStyle } from "./ReviewFormStyle";

//* React-icons
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

export const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <ReviewFormStyle>
      <div className="form_control score_container">
        <label className="radio_container">
          <input
            type="radio"
            value={"unsatisfied"}
            name="review"
            required
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio_container">
          <input
            type="radio"
            value={"neutral"}
            name="review"
            required
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>Poderia ser melhor</p>
        </label>
        <label className="radio_container">
          <input
            type="radio"
            value={"satisfied"}
            name="review"
            required
            checked={data.review === "satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>
        <label className="radio_container">
          <input
            type="radio"
            value={"very_satisfied"}
            name="review"
            required
            checked={data.review === "very_satisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form_control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Conte como foi sua experiência com o produto"
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </ReviewFormStyle>
  );
};
