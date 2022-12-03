//* Styles
import { StepsStyle } from "./StepsStyle";

//* React-icons
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

export const Steps = ({ currentStep }) => {
  return (
    <StepsStyle>
      <div className="step active">
        <AiOutlineUser />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <AiOutlineStar />
        <p>Avaliação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <FiSend />
        <p>Envio</p>
      </div>
    </StepsStyle>
  );
};
