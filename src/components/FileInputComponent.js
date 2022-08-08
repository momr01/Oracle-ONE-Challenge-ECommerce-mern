//estilos
import { LeyendaError, Input } from "../elementos/Formularios";

export default function FileInputComponent({
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
    cambiarEstado(e, state, setState);
  };

  const validacion = () => {
    if (regex) {
      if (regex.test(state.campo)) {
        console.log("ok");
        setState({ ...state, valido: "true" });
      } else {
        console.log("error");
        setState({ ...state, valido: "false" });
      }
    }
  };
  return (
    <>
      <Input
        type="file"
        name={name}
        id={id}
        placeholder={placeholder}
        error={error}
        regex={regex}
        //value={state.campo}
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

const cambiarEstado = (e, state, setState) => {
  const path = e.target.value;
  const array = path.split("\\");
  const fileName = array[2];
  //setState({ ...state, campo: e.target.value });

  setState({ ...state, campo: fileName });
};
