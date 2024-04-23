import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/SearchPage";
import AuthProvider from "./hooks/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
