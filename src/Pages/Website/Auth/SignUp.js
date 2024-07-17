import Forms from "../../../Components/Form";
import Header from "../../../Components/Header";


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
