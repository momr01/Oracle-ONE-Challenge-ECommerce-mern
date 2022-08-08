//estilos
import { LeyendaError, Select } from "../elementos/Formularios";

export default function SelectComponent({ name, id, error, state, setState }) {
  const options = ["TV-Series", "Movies", "Music"];
  const onChange = (e) => {
    setState({ ...state, campo: e.target.value });
  };

  const validacion = () => {
    if (state.campo.length > 0) {
      setState({ ...state, valido: "true" });
    } else {
      setState({ ...state, valido: "false" });
    }
  };
  return (
    <>
      <Select
        name={name}
        id={id}
        error={error}
        value={state.campo}
        onChange={onChange}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={state.valido}
      >
        <option value="">Categoría</option>
        {options.map((option, index) => (
          <option value={option} key={index}>
            {option}
          </option>
        ))}
      </Select>
      <LeyendaError valido={state.valido}>{error}</LeyendaError>
    </>
  );
}
