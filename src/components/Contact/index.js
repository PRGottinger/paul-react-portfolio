import React from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact(props) {
//     if (e.target.name === 'email') {
//         const isValid = validateEmail(e.target.value);
//         console.log(isValid);
//         // isValid conditional statement

//         const [errorMessage, setErrorMessage] = useState('');

//         / isValid conditional statement
// if (!isValid) {
//   setErrorMessage('Your email is invalid.');
// } else {
//   setErrorMessage('');

// } else {
//     if (!e.target.value.length) {
//       setErrorMessage(`${e.target.name} is required.`);
//     } else {
//       setErrorMessage('');
//     }
//   }
// }


// Yacob
// function handleSubmit(){
//     if(validateEmail()){

//     }
// }
      
    return (
        <section className="container1">
        {/* <h2 className="top-title">Contact Form</h2> */}
        <h2 className="top-title">Contact Form</h2>
        <hr></hr>
        {/* <form class="justify-content-center" id="contact-form"> */}
        <form id="contact-form" onSubmit = {() => {validateEmail()}}>
            <div class="mt-5" >
                <label htmlFor="name">Name:</label>
                <input className="form-control" type="text" name="name"></input>
            </div>
            <div class="mt-5" >
                <label htmlFor="email">Email Address:</label>
                <input className="form-control" type="email"  name="email" />
            </div>
            <div class="message" >
                <label htmlFor="message">Message:</label>
                <textarea className="form-control" name="message"  />
            </div> 
           

           
            <div class="mt-5 mb-5" > 
            <button data-testid='button' class="btn btn-outline-dark " type="submit" >Submit</button>
            </div>
        </form>

        <span>Feel free to say hello!</span>
    </section>
    );
}

// if (!errorMessage) {
//     setFormState({ ...formState, [e.target.name]: e.target.value });
//   }

export default Contact;