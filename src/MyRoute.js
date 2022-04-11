import { useAuthContext } from "./context/AuthContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export const MyRoute = ({ roles, element, ...props }) => {
  const { auth } = useAuthContext();
  return (
    <Route
      {...props}
      element={
        roles.include(auth.role) ? (
          element
        ) : (
          <Route render={() => <Navigate to="/" />} />
        )
      }
    />
  );
};
