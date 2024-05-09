//  Use the following form to send a POST request to the url https://mazutech.online/api/user/login with "userNameEmail" and "password" in the body.
// If Credentials are wrong show the error message at the bottom of the form
// On Login success Show the Fullname and email of the user in the bottom
// Correct credentials for login are following :- 
// userNameEmail= "flirttool",password="12345678"
// You can use axios or inbuild fetch API

import React, { useState, useEffect } from 'react';

function App() { 

const [userNameEmail, setName] = useState("")
const [password, setPassword] = useState("")
const [ran, setRan] = useState(0)
const [fullName, setFullName] = useState ("")
const [email, setEmail] = useState ("")
const [errorMsg, setError] = useState ("")



const handleSubmit = (e) => {
  if (!e) return 

  e.preventDefault()
  let userName = ""
  let passWord = ""

    if(e){
    userName = e.target.email.value
    passWord = e.target.pwd.value
    } 

    setName(userName)
    setPassword(passWord)
  }
  

  if(userNameEmail != "" && password != "" && ran === 0){
      {fetch("https://mazutech.online/api/user/login",{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userNameEmail, password })
        }).then(response => {
          if (response.ok) {return response.json()
      } else {
      console.log(response)
      setError("Error code " + response.status) 
      setFullName("")
      setEmail("")
      throw new Error
        }
      }
        
    ).then(data => {
        if(data.user.full_name != "" && data.user.last_name != "")
          {
            setFullName(data.user.first_name + data.user.last_name)
            setRan(1);
            setEmail(data.user.email)
            setError("")
            console.log(data.message)
          }else {
            
          }
      }).catch((error) => {
        console.log(error)
      })
      }
    }
    

  return (
    <div className="App">
        <div className="container" style={{background:"lightblue",padding:"20px",marginTop:"20px"}}>
          <br/>
          <div className="card">
            <div className="card-body"><center>Login Form</center></div>
          </div>
          <br/>
          <form onSubmit ={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email address:</label>
                <input type="text" className="form-control" placeholder="Enter email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input type="password" className="form-control" placeholder="Enter password" id="pwd" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>  
            <p>{fullName}</p>
            <p>{email}</p>
            <h1 style={{color: "red"}}>{errorMsg}</h1>
        </div>
        
      </div>
  );
}

export default App;
