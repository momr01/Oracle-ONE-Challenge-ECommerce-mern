//componentes, pages, js
import Contacto from "../Contacto";
import Footer from "../Footer";
import NavComponent from "../NavComponent";
import CookiesMensaje from "../CookiesMensaje";

export default function Layout({ children }) {
  return (
    <>
      <NavComponent />
      <div>{children}</div>
      <CookiesMensaje />
      <Contacto />
      <Footer />
    </>
  );
}