//* Styles
import { FormContainerStyle } from "./FormContainerStyle";

//* React-icons
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";

//* Hooks
import { useForm } from "../../Hooks/useForm";
import { useState } from "react";

//* Components
import { UserForm } from "../UserForm/UserForm";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { Thanks } from "../Thanks/Thanks";
import { Steps } from "../Steps/Steps";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

export const FormContainer = () => {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <FormContainerStyle>
      <Steps currentStep={currentStep} />
      <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
        <div className="inputs_container">{currentComponent}</div>
        <div className="actions">
          {!isFirstStep && (
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <GrFormPrevious />
              <span>Voltar</span>
            </button>
          )}
          {!isLastStep ? (
            <button type="submit">
              <span>Avançar</span>
              <GrFormNext />
            </button>
          ) : (
            <button type="button">
              <span>Enviar</span>
              <FiSend />
            </button>
          )}
        </div>
      </form>
    </FormContainerStyle>
  );
};
