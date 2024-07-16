import Header from "./Components/Header";
import Forms from "./Components/Form";

export default function SignUp() {
  return (
    <>
      <Header />
      <Forms
        button="Register"
        endPoint="register"
        navigate=""
        IsLocalStorage={true}
      />
    </>
  );
}
