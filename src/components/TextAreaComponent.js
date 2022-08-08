//estilos
import { TextArea, LeyendaError } from "../elementos/Formularios";

export default function TextAreaComponent({
  name,
  id,
  cols,
  rows,
  placeholder,
  error,
  regex,
  state,
  setState,
}) {
  const onChange = (e) => {
    setState({ ...state, campo: e.target.value });
  };

  const validacion = () => {
    if (regex) {
      if (regex.test(state.campo)) {
        setState({ ...state, valido: "true" });
      } else {
        setState({ ...state, valido: "false" });
      }
    }
  };
  return (
    <>
      <TextArea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        error={error}
        regex={regex}
        value={state.campo}
        onChange={onChange}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={state.valido}
      ></TextArea>
      <LeyendaError valido={state.valido}>{error}</LeyendaError>
    </>
  );
}
