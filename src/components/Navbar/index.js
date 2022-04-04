import { useAuthContext } from "../../context/AuthContext";
import Navbar_patient from "./Navbar_patient";
import Navbar_doctor from "./Navbar_doctor";
import Navbar_hospital from "./Navbar_hospital";

export const Navbar = () => {
  const { auth } = useAuthContext();

  if (auth.role === "patient") {
    return <Navbar_patient />;
  }
  if (auth.role === "doctor") {
    return <Navbar_doctor />;
  }
  if (auth.role === "hospital") {
    return <Navbar_hospital />;
  }
  return null;
};
