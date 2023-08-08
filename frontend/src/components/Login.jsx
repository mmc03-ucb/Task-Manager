import { useState } from 'react';
import water from '../utils/waterfall.jpeg';
import myWindow from './Dashboard';
import axios from 'axios';

function main() {
	myWindow = window.open ('/success');
}

export function Login() {
 
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
    if (email === '' || password === '') {
      setError(true);
    } else { 
    // axios.post('/user/login', { email, password })
    // .then ((res) => main)
    // .catch((error) => setError(true));
    axios.post("http://localhost:4000/user/login", {
        password: password,
        email: email
    }).then((result) => {
            if (result.data.message === "success") { 
                let id = result.data.id
                console.log("Registered success in! Token: " + id);
                main();
                successMessage();
            }},(err) => {
                console.log("Did not register");
                errorMessage();
                setError(true);
                console.log(err)
            }
        )
    } 
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
        <h2 style={{color: "red"}}>Invalid Account</h2>
      </div>
    );
  };
  document.body.style = 'background: #E6E6FA;';

    return(

        <div className="form" style={{height: 770, backgroundImage: `url(${water})`,textAlign: "center", justifyContent: "center", verticalAlign: "baseline", verticalAlign: "middle"}}>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
      <h1 style={{ color: "blueviolet", fontSize: "28px"}}>User Log In</h1>
 
      {/* Calling to the methods */}
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div >
            <form style={{ color: "blueviolet", fontSize: "15px", textAlign: "center", justifyContent: "center", verticalAlign: "baseline", verticalAlign: "middle", marginLeft: "10"}} onSubmit={handleSubmit}> {/*Connect handleSubmit to form using onSubmit*/}
                <label for="email">Edu Email:   </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="studentname@berkeley.edu" id="email" name="email" />
                <br />
                <br />
                <label for="password">Password: </label>
                <input value={password} onChange={(e) => setPassword(e.target.value)}type="password" placeholder="******" id="password" name="password" />
                <br />
                <br />
                <button type="submit">Log In</button> {/*triggers handleSubmit function when user presses on the submit button*/}

                </form>
                <br />
                <a href="http://127.0.0.1:5173/signup">
                    <button>Click here if you want to create an account</button>
                </a>
        </div>
    )
}