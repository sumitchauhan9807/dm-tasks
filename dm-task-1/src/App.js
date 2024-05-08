//  1. Send a POST request to the url https://mazutech.online/api/user/login with "userNameEmail" and "password" in the body.
// If Credentials are wrong show the error message at the bottom of the form
// On Login success Show the Fullname and email of the user in the bottom
// Correct credentials for login are following :- 
// userNameEmail= "flirttool",password="12345678"
// You can use axios or inbuild fetch API

function App() { 
  return (
    <div classname="App">
        <div className="container" style={{background:"lightblue",padding:"20px",marginTop:"20px"}}>
          <br/>
          <div className="card">
            <div className="card-body"><center>Login Form</center></div>
          </div>
          <br/>
          <form action="/action_page.php">
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
        </div>
      </div>
  );
}

export default App;
