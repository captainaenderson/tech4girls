import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import { Navigate } from "react-router-dom";
import Loading from "../Loading/Loading";


function IsAnon({ children }) {
  const { isLoggedIn, isLoading, user } = useContext(AuthContext);

  // If the authentication is still loading ⏳
  if (isLoading) {
    return <Loading />;
  }

  if (isLoggedIn) {
    // If the user is logged in, navigate to quiz start page with the user id ✅
    console.log(user.profile);

    return <Navigate to={`/quiz-startpage/${user._id}`} />;
  }

  // If the user is not logged in, allow to see the page ✅
  return children;
}


export default IsAnon;
