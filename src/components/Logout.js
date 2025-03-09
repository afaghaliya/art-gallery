import { auth } from "../firebase";
import { signOut } from "firebase/auth";

export default function Logout() {
  const handleLogout = async () => {
    await signOut(auth);
    alert("Logged out successfully!");
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">
      Logout
    </button>
  );
}
