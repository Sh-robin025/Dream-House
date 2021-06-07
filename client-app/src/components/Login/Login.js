import React from "react";
import { useHistory, useLocation } from "react-router";
// import { UserContext } from "../../App";
import { handleGoogleSignIn, initialization } from "./LoginManage";
import "./Login.css";
import GLogo from "../../Images/g.png";
import { userLogin } from "../../Redux/actions/actions";
import { useDispatch } from "react-redux";

const Login = () => {
  // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  initialization();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const dispatch = useDispatch()

  const googleSignIn = () => {
    handleGoogleSignIn()
      .then(res => {
        localStorage.setItem("user", JSON.stringify(res))
        dispatch(userLogin(res))
        history.replace(from);
      }
        // setLoggedInUser(res);
      );
  };

  return (
    <div className="">
      <div className="otherLogin mt-5">
        <div className="signInButton p-2" onClick={googleSignIn}
          style={{ background: '#f47629' }}>
          <img src={GLogo} alt="" />
          <p className="text-light"><b>Continue with Google</b></p>
        </div>
      </div>
    </div>
  );
};
export default Login;

