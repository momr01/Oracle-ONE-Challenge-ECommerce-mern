import AppRouter from "./routers/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import { AuthProvider } from "./auth/authProvider";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Layout>
            <AppRouter className={styles} />
          </Layout>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
