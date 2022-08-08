//dependencias
import { Spin } from "antd";

//estilos
import { Spinner } from "../elementos/Spin";

export default function Loading() {
  return (
    <Spinner>
      <Spin size="large" tip="Cargando..." />
    </Spinner>
  );
}
