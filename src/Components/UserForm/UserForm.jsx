//* Styles
import { UserFormStyle } from "./UserFormStyle";

export const UserForm = ({ data, updateFieldHandler }) => {
  return (
    <UserFormStyle>
      <div className="form_control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          placeholder="Digite seu nome"
          name="name"
          id="name"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="form_control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="email"
          placeholder="Digite seu email"
          name="email"
          id="email"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </UserFormStyle>
  );
};
