
import React, { useEffect, useState } from 'react';
// material ui
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
// redux
import { connect } from 'react-redux'
import { register } from '../../actions/auth.js'

const Register = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmP, setConfirmP] = useState("");
  let navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmP) {
      return alert('Passwords do not match')
    }
    let user = {
      username: name,
      password: password,

    }
    
    let isSuccess = false
    isSuccess = await props.register(user)
    
    if (isSuccess == true){
     navigate("/homepage")
   
    }

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
          <label>
            Password:
            <TextField id="matchpassword" variant="filled" onChange={(e) => setConfirmP(e.target.value)} />
          </label>
          <Button type="submit">
            Create
          </Button>
        </form>
        <Button onClick={() => navigate("/")}>
          Return
        </Button>
      </Container>

    </>
  )

}
const mapStateToProps = state => {
  return {
    token: state.userReducer.token,
    error: state.userReducer.error
  }
}

export default connect(mapStateToProps, { register })(Register);
