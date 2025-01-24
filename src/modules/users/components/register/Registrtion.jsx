import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

const Registration = () => {

    let dataRegistration = {
        name: '',
        email: '',
        password: '',
        ConfirmPassword: ''





    }


    let [Registration, setRegistration] = useState(dataRegistration)




    let Registrationfun = (e) => {

        setRegistration({ ...Registration, [e.target.name]: e.target.value })



    }



    let checkname = () => {

    
        if (Registration.name.trim()===""){

            // alert('name is required')
            nameFeedback.textContent = "name is required";
            name1.classList.add("is-form-invalid");
            name1.classList.remove("is-form-valid");
            }
            
            else{
                nameFeedback.textContent = "";
                name1.classList.add("is-form-valid");
                name1.classList.remove("is-form-invalid");

            }
    }


    let checkEmail = () => {

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (Registration.email.trim() === "") {
            emailFeedback.textContent = "Email is required";
            email1.classList.add("is-form-invalid");
            email1.classList.remove("is-form-valid");
        } else if (!emailRegex.test(Registration.email)) {
            emailFeedback.textContent = "Enter a valid email address";
            email1.classList.add("is-form-invalid");
            email1.classList.remove("is-form-valid");
        } else {
            emailFeedback.textContent = "";
            email1.classList.add("is-form-valid");
            email1.classList.remove("is-form-invalid");
        }


    }


    let checkPassword = () => {

        if (Registration.password.trim() === "") {
            passwordFeedback.textContent = "Password is required";
            password1.classList.add("is-form-invalid");
            password1.classList.remove("is-form-valid");
        } else if (Registration.password.length < 6) {
            passwordFeedback.textContent = "Password must be at least 6 characters";
            password1.classList.add("is-form-invalid");
            password1.classList.remove("is-form-valid");
        } else {
            passwordFeedback.textContent = "";
            password1.classList.add("is-form-valid");
            password1.classList.remove("is-form-invalid");
        }



    }

    let checkConfirmPassword = () => {


        if (Registration.ConfirmPassword.trim() === "") {
            c_passwordFeedback.textContent = "Confirm password is required";
            c_password.classList.add("is-form-invalid");
            c_password.classList.remove("is-form-valid");
        } else if (Registration.ConfirmPassword !== Registration.password) {
            c_passwordFeedback.textContent = "Passwords do not match";
            c_password.classList.add("is-form-invalid");
            c_password.classList.remove("is-form-valid");
        } else {
            c_passwordFeedback.textContent = "";
            c_password.classList.add("is-form-valid");
            c_password.classList.remove("is-form-invalid");
        }



    }






    let sendUserdata = (e) => {
      
        e.preventDefault();
        checkname();
        checkEmail();
        checkPassword();
        checkConfirmPassword()

        // let url="http://127.0.0.1:5000/api/users/registration"
        axios.post('http://127.0.0.1:5000/api/users/registration',Registration).then((response)=>{
            console.log(response)
            navigate('/login')
        }).catch((error)=>{
            console.log('error is',error)

        })
       



    }

    return (
        <>
            {/* <pre>{JSON.stringify(Registration.name)}</pre> */}
            <div className='conatiner   m-3'>
                <div className='row  d-flex  justify-content-center'>
                    <div className='col-md-3 '>
                        <div className='card    '>
                            <div className='card-header  ' id='cardcolor'>

                                <h1 className='fs-3 '>Registration</h1>
                            </div>
                            <form onSubmit={sendUserdata}>
                                <div className='card-body warmlight'>




                                    <div class="form-group mt-3">
                                        <input id="name1" name='name' type="text" value={Registration.name} onChange={Registrationfun} class="form-control" placeholder="Name" />
                                        <div id="nameFeedback" name='name-feedback' class="form-text"></div>
                                    </div>




                                    <div class="form-group mt-3">
                                        <input id="email1" type="email" name='email' value={Registration.email} onChange={Registrationfun} class="form-control" placeholder="Email" />
                                        <div id="emailFeedback" class="form-text"></div>
                                    </div>


                                    <div class="form-group mt-3">
                                        <input id="password1" type="password" name='password' value={Registration.password} onChange={Registrationfun} class="form-control" placeholder="Password" />
                                        <div id="passwordFeedback" class="form-text"></div>
                                    </div>

                                    <div class="form-group mt-3">
                                        <input id="c_password" type="password" name='ConfirmPassword' value={Registration.ConfirmPassword} onChange={Registrationfun} class="form-control" placeholder="Confirm Password" />
                                        <div id="c_passwordFeedback" class="form-text"></div>
                                    </div>





                                    <div class="mt-3">

                                        <button className='btn' type="submit" id='cardcolor'>Register</button>

                                        <br />
                                    </div>


                                    <span>Have an account? <b className='text-info' > <a href='#'>Login</a></b> </span>
                                </div>
                            </form>
                            <div className='card-footer  text-center' id='cardcolor'>

                                <div className='box '>     <span className='boxinside '>DIGITALBAZAR</span>  </div>



                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </>
    );
}

export default Registration;








