import "../css/Login.css";
import "../css/form.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toastText } from "../utils/toast";

const SignupPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
    const [values, setValues] = useState(
        {
            email: "",
            name: "",
            password: "",
            confirmPassword: ""
        }
    )

    const onChangeHandler = (e)=> {
        setValues((values)=>({
            ...values,
            [e.target.name]: e.target.value
        }))
    }

    const createNewUser = async(email, name, password) => {
      try {
        setErrorMessage("")
        const response = await axios.post("https://serene-lowlands-13656.herokuapp.com/signup", {
          
            email: email,
            name: name,
            password: password
         
        });
        console.log(response)
        if(response.data.success && response.status === 200){
          setValues({
            email: "",
            name: "",
            password: "",
            confirmPassword: "",
          })
          toastText("Sign up successfully!")
        }
        

      }catch(error){
        console.log(error)
        setErrorMessage("Something went wrong, Please try again!")
        toastText("Sign up was unsuccessful, Please try again!")
      }
    }

    const submitHandler = (e) => {
      const {email, name, password, confirmPassword} = values;
      e.preventDefault();
      createNewUser(email, name, password)
    }
    console.log(values)

    const passwordMatch = values.confirmPassword !== "" && values.confirmPassword === values.password
    console.log(passwordMatch)

    const checkUserInput = values.name !== "" && values.email !== "" && passwordMatch
    console.log(checkUserInput)

    const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/.test(values.password)
    console.log(isPasswordValid)



    
  return (
    <div className="card1">
      <div className="logo">
        <span>Think Store</span>
      </div>
      <div className="login-card" onSubmit={submitHandler}>
        <form className="form-container">
          <div className="form-input">
            <input className="input" placeholder="Email Address" name="email" type="email" value={values.email} onChange={onChangeHandler} required/>
          </div>
          <div className="form-input">
            <input className="input" placeholder="Name" name="name" type="text" value={values.name} onChange={onChangeHandler} required/>
          </div>
          <div className="form-input">
            <input className="input" placeholder="Password" name="password" value={values.password} type="password" onChange={onChangeHandler} required/>
          </div>
          <div className="form-input" >
            <input
              className="input"
              placeholder=" confirm Password"
              name= "confirmPassword"
              type="password"
              value={values.confirmPassword}
              onChange={onChangeHandler}
              required
            />
            <small>{}</small>
          </div>

          <button class="btn btn-dark-hover"
          disabled={!passwordMatch}>sign up</button>
          </form>
          <div>
            <small>
              Have an account? <Link to="/login">login</Link>
            </small>
          </div>
        
      </div>
    </div>
  );
};

export default SignupPage;
