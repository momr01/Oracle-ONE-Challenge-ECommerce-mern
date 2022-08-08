//estilos
import { LeyendaError, Input } from "../elementos/Formularios";

export default function InputComponent({
  type,
  name,
  id,
  placeholder,
  error,
  regex,
  state,
  setState,
  isDisabled,
}) {
  const onChange = (e) => {
    cambiarEstado(e, state, setState, type);
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
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        error={error}
        regex={regex}
        value={type === "file" ? undefined : state.campo}
        onChange={onChange}
        onKeyUp={validacion}
        onBlur={validacion}
        valido={state.valido}
        disabled={isDisabled && true}
      />
      <LeyendaError valido={state.valido}>{error}</LeyendaError>
    </>
  );
}

const cambiarEstado = (e, state, setState, type) => {
  if (type === "file") {
    const fileData = e.target.files[0];
    const file = obtenerNombreFile(e.target.value);
    setState({ ...state, campo: file, data: fileData });
  } else {
    setState({ ...state, campo: e.target.value });
  }
};

const obtenerNombreFile = (campo) => {
  const path = campo;
  const array = path.split("\\");
  const fileName = array[2];

  return fileName;
};
