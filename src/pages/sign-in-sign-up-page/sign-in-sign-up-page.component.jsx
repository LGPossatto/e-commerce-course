import "./sign-in-sign-up-page.style.scss";

import SingIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

const SignInSignUpPage = () => {
  return (
    <div className="sign-in-sign-up">
      <SingIn></SingIn>
      <SignUp></SignUp>
    </div>
  );
};

export default SignInSignUpPage;
