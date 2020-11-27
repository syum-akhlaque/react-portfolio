import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome ,faEnvelope,faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'
import { faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
// import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
// import './ContactUs.css';
    


const Contact = () => {
    // const { register, handleSubmit, errors } = useForm();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_9km30ps', e.target, 'user_e6f36WjWg7x9pTfiRCaSc')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

    return (
        <>
        <h1 className='text-center py-5 big-text'>GET IN TOUCH</h1>
        <div className='row '>

            {/* ---------------left side----------------- */}

            <div className="col-md-5 offset-md-1 px-3">
                <form onSubmit={sendEmail}>
                    <div class="form-group">
                        <input name="name" class="form-control" type="text" placeholder= 'Enter Your Name'  />
                        {/* {errors.title && <span className='error'>*Required, minimum 3 charecters  </span>} */}
                    </div>

                    <div class="form-group">
                        <input name="adminEmail" class="form-control" type="email" placeholder= 'Enter Your Email'  />
                        {/* {errors.adminEmail && <span className='error'>*Required</span>} */}
                    </div>

                    <div class="form-group">
                        <textarea class="form-control" rows="8" name="message" placeholder='Your message'></textarea>
                    </div>

                    <button className="btn text-white bg-warning px-4 mr-md-5 " type='submit' >Send</button>
                </form>
            </div>

            {/* ---------------right side----------------- */}
            <div className="col-md-5 d-flex flex-column offset-md-1">
                <h1 style={{'fontWeight': '100'}}>Contact With Me</h1>
                <h3 style={{'fontWeight': '100'}}>Md. Akhlaqur Rahman Siddiqui</h3> <br/>

                <h4><FontAwesomeIcon icon={faEnvelope} /> &nbsp; arssyum@gmail.com</h4>
                <h4><FontAwesomeIcon icon={faPhoneAlt} /> 01688022039 </h4>
                <h4><FontAwesomeIcon icon={faPhoneAlt} /> 01521439811  </h4>
                <h4> <FontAwesomeIcon icon={faHome}  /> Muradnagar, Cumilla.</h4> <br/>

                <div className= 'brands-a'>
                    <a href="https://www.facebook.com/syum.akhlaque.5/"><FontAwesomeIcon icon={faFacebook} size="2x" /></a> &nbsp;  &nbsp;
                    <a href="https://www.linkedin.com/in/md-akhlaqur-rahman-siddiqui-syum-832510139/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a> &nbsp;  &nbsp;
                    <a href="https://github.com/syum-akhlaque/"><FontAwesomeIcon icon={faGithub} size="2x" /></a> 
                </div>
            </div>
        </div>
        </>
    );
};

export default Contact;