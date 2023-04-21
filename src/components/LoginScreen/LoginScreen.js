import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import "./LoginScreen.scss";

const LoginScreen = () => {
    const {user} = useContext(LoginContext)
    console.log(user)
  const [values, setValues] = useState({
    email : '',
    password:''
  });
 

const handleChange = (e) =>{
    // console.log(e.target.name)

    setValues({
        ...values,
        [e.target.name]: e.target.value
    })
}

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values);

  };
  return (
    <div className="login-container">
      <div className="login">
        <h2>Login</h2>
        <hr></hr>

        <form onSubmit={handleSubmit}>
          <input
             onChange={handleChange}
             name = "email"
            value={values.email}
            type={"email"}
            className="form-control my-5"
            placeholder="Tu email"
          />
          <input
           
            value={values.password}
             onChange={handleChange}
             name = "password"
            type={"password"}
            className="form-control my-5"
            placeholder="Tu email"
          />

          <button className="btn btn-primary" type="submit">
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};
export default LoginScreen;
