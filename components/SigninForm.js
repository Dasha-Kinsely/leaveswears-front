import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import { emailSignin } from "../redux/actions/auth.actions";

const SigninForm = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm({
    mode: "onTouched",
  });
  const onSubmit = (data) => {
    const { email, password } = data;
    console.log(email);
    dispatch(emailSignin({ email, password }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
    </form>
  );
};

export default SigninForm;
