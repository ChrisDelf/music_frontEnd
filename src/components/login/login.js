import React, { useEffect, useState } from 'react';
// material ui
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
// redux
import { connect } from 'react-redux'
import { login } from '../../actions/auth.js'

import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'

const Login = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const cookies = new Cookies();

  let navigate = useNavigate()

  const handleSubmit = async(event) => {
    event.preventDefault();
    let user = {
      username: name,
      password: password
    }
    let jwt_token = null
    jwt_token = await props.login(user)

    if (jwt_token != null){
     navigate("/homepage")
    return
    }
    alert("Authenication Failed")
    
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <TextField id="username" variant="filled" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Password:
            <TextField id="userpassword" variant="filled" onChange={(e) => setPassword(e.target.value)} />
          </label>
          <Button type="submit">
            Login
          </Button>
        </form>
    <Button onClick={() => 
      navigate("/register")}>
    Register
    </Button>
      </Container>

    </>
  )

}
const mapStateToProps = state => {
  return {
    username: state.userReducer.name,
    token: state.userReducer.token,
    error: state.userReducer.error
  }
}

export default connect(mapStateToProps, { login })(Login);
