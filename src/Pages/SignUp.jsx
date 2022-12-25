import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {

    const [Name, setName] = useState('')
    const [MailID, setMailID] = useState('');
    const [Password, setPassword] = useState('')
    const [ConfirmPassword, setConfirmPassword] = useState('')

    const SubmitBtn = (e) => {
        e.preventDefault();
        var pass1 = Password;
        var pass2 = ConfirmPassword;

        // console.log('Hi this is signup btn');
        if (pass1 === pass2) {
            fetch(`https://631198c6f5cba498da81cc4b.mockapi.io/details/Signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        name: Name,
                        mail: MailID,
                        pass: Password,
                        confirmpass: ConfirmPassword
                    })
            }).then((res) => {
                window.location.reload();
            })

        }
        else{
            alert("Please Check Your Password...!")
        }

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
    // const Show =()=>{
    //     console.log("hai ");

    // }
    return (
        <div>
            <h1>SignUP Page</h1>
            <form onSubmit={SubmitBtn}>
                <div className="form-group">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Name"
                        onChange={(e) => setName(e.target.value)}
                    /><br/>
                </div>

                <div className="form-group">

                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setMailID(e.target.value)}
                    /><br/>
                </div>

                <div className="form-group">

                    <input
                        type="text"
                        className="form-control"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    /><br/>

                </div>

                <div className="form-group">

                    <input
                        type="password"
                        className="form-control"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    /><br/>
                </div>

                <small className='form-text text-muted' >Do You Want to <Link to='/'>Login</Link></small>
               <br/>

                <button type="submit" className="btn btn-primary" onClick={NoBack}>Submit</button>

            </form>

        </div>
    )
}

export default SignUp