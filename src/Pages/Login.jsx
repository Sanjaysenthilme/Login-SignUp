import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const Login = () => {
    var navigate = useNavigate();


    const [API, setAPI] = useState([]);
    
    useEffect(() => {
        GetApi();
      }, [])

    const GetApi = () => {
        fetch('https://631198c6f5cba498da81cc4b.mockapi.io/details/Signup')
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            setAPI(result)
          })
      }


    const LoginSubmit = () => {
        console.log()
        navigate('/signup')
    }

    const NoBack=()=>{
        window.history.forward()
    }
    NoBack();
    window.onload=NoBack();
    window.onpageshow = function (event){
        if(event.persisted) NoBack()
    }
    window.onunload = function () {void (0)}
    return (
        <div>

            <div className="container">

                <div className="row d-flex justify-content-center">
                    <div className="col-md-4">
                        <h1>LoginPage</h1><br />
                        <form id="loginform" onSubmit={LoginSubmit}>
                            <div className="form-group">
                                <label>Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="EmailInput"
                                    name="EmailInput"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter email"
                                />
                            </div>

                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"

                                />
                            </div>
                            <small>Do You Want?&nbsp;<Link to='/signup'>sign up</Link></small><br/>
                             <br/>   
                            <button type="submit" className="btn btn-primary" onClick={NoBack}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default Login