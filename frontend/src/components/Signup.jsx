import { useState } from 'react';
import Background from '../utils/signup-pokemon.jpeg'
import myWindow from './Dashboard';
import axios from 'axios';

export function Signup() {
 
  // States for registration
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("register attempt")

    axios.post("http://localhost:4000/user/signup", {
        password: password,
        email: email
    }).then((result) => {
            if (result.data.message === "success") {
                let id = result.data.id
                console.log("Login success! Token: " + id);
                successMessage();
            } },(err) => {
                console.log("Authentication failure");
                errorMessage();
                setError(true);
                console.log(err)
            }
        )
    // axios
    //     .post('http://localhost:4000/user/signup', 
    //     { 
    //       email: {email},
    //       password: {password}
    //     })
    //     .then(
    //       (result) => {
    //         if (result.data.message === "success") {
    //           console.log("Event created successfully");
    //           setSubmitted(true);
    //           setError(false);
    //         }
    //       },
    //       (err) => {
    //         setSubmitted(false);
    //         setError(true);
    //         console.log(err)
    //       }
    //     )
    //     .catch((error) => {
    //       console.log(error);
    //     });
    };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h2 style={{color: "green"}}>User successfully registered!!</h2>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h2 style={{color: "red"}}>Please enter all the fields</h2>
      </div>
    );
  };

  const login = () => {
    myWindow = window.open ('/login');
  }

  document.body.style = 'background: #b5edf5;';
    return(
      <div className="form" style={{height: 770, backgroundImage: `url(${Background})`,textAlign: "center", justifyContent: "center", verticalAlign: "baseline", verticalAlign: "middle"}}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

      <h1 style={{ fontSize: "28px", fontStyle: "bold"}}>User Registration</h1>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div >
            <form onSubmit={handleSubmit} style={{ fontStyle: "bold", fontSize: "17px", textAlign: "center", justifyContent: "center", verticalAlign: "baseline", verticalAlign: "middle", marginLeft: "10"}} onSubmit={handleSubmit}> {/*Connect handleSubmit to form using onSubmit*/}
                <label for="email">Edu Email:   </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="studentname@berkeley.edu" id="email" name="email" />
                <br />
                <br />
                <label for="password">Password: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="******" id="password" name="password" />
                <br />
                <br />
                <button type="submit" onClick={handleSubmit}>
                  Sign Up
                </button> {/*triggers handleSubmit function when user presses on the submit button*/}

                </form>
                <br />
                <a href="http://127.0.0.1:5173/">
                    <button onClick={login}>Click here if you have created an account</button>
                 </a>
        </div>
    )
}