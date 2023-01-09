import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { AuthProvider } from "./context/auth.context";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
