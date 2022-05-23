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
      
    return (
        <section className="container1">
        {/* <h2 className="top-title">Contact Form</h2> */}
        <h2 className="top-title">Contact Form</h2>
        <hr></hr>
        {/* <form class="justify-content-center" id="contact-form"> */}
        <form id="contact-form">
            <div class="mt-5" >
                <label htmlFor="name">Name:</label>
                <input class="form-control" type="text" name="name"></input>
            </div>
            <div class="mt-5" >
                <label htmlFor="email">Email Address:</label>
                <input class="form-control" type="email"  name="email" />
            </div>
            <div class="mt-5" >
                <label htmlFor="message">Message:</label>
                <textarea class="form-control" name="message"  />
            </div> 
           

           
            <div class="mt-5 mb-5" > 
            <button data-testid='button' class="btn btn-outline-dark " type="submit" >Submit</button>
            </div>
        </form>
    </section>
    );
}

// if (!errorMessage) {
//     setFormState({ ...formState, [e.target.name]: e.target.value });
//   }

export default Contact;