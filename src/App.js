import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Logout from "./components/Logout";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-3xl font-bold mb-5">Art Sharing Website</h1>
        <Routes>
          <Route path="/" element={<h2>Welcome to Art Sharing Website</h2>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Logout />
      </div>
    </Router>
  );
}

