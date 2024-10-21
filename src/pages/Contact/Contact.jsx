import React from "react";
import './contact.css'
import Hero from '../../Components/hero/Hero';
import Subscribe from '../../Components/subscribe/Subscribe'
import Info from '../../Components/info/Info'
import Footer from '../../Components/footer/Footer';

const Contact = () => {
  // const initialStateInputs = {
  //   name: "",
  //   email: "",
  //   mobileNumber: "",
  //   message: "",
  // };

  // const initialStateErrors = {
  //   name: { required: false },
  //   email: { required: false },
  //   mobileNumber: { required: false },
  //   message: { required: false },
  // };

  // const [inputs, setInputs] = useState(initialStateInputs);
  // const [errors, setErrors] = useState(initialStateErrors);
  // const [submitted, setSubmitted] = useState(false);

  // const handleInputs = (event) => {
  //   const { name, value } = event.target;
  //   setInputs({ ...inputs, [name]: value });
  //   if (submitted) {
  //     setErrors({ ...errors, [name]: { required: false } });
  //   }
  // };

  // const handleValidation = (data) => {
  //   let newErrors = { ...initialStateErrors };

  //   if (data.name === "") {
  //     newErrors.name.required = true;
  //   }
  //   if (data.email === "") {
  //     newErrors.email.required = true;
  //   }
  //   if (data.mobileNumber === "") {
  //     newErrors.mobileNumber.required = true;
  //   }
  //   if (data.message === "") {
  //     newErrors.message.required = true;
  //   }

  //   return newErrors;
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const newError = handleValidation(inputs);
  //   setErrors(newError);
  //   setSubmitted(true);
  //   const allInputsValid = Object.values(newError).every((error) => !error.required);
  //   if (allInputsValid) {
  //     Savecontact(inputs)
  //       .then((res) => {
  //         toast.success(res?.data?.message);
  //         event.target.reset();
  //         setInputs(initialStateInputs);
  //         setErrors(initialStateErrors);
  //         setSubmitted(false);
  //       })
  //       .catch((err) => {
  //         toast.error(err?.response?.data?.message);
  //       });
  //   }
  // };

  return (
    <div className='contactForm'>
      <Hero />
      <nav>
        <div className='navDetials'>
          <div className='homeContact'>
            <span><i className="bi bi-house-door-fill"></i>
              <h6>Home</h6><i className="bi bi-chevron-right"></i>
              <h6>Contact Us</h6>
            </span>
            <h3>Contact Us</h3>
          </div>
          <div className='fingerImage'>
            <img src='https://pixalivegroup.com/assets/images/bg-shape-3.png' alt='Authentication Image' />
          </div>
        </div>
      </nav>
      <div className='contactFormsDetials'>
        <div className='FormDetails'>
          <h4><a href='tel:+91 87785 84566'>+918778584566</a></h4>
          <h5>Official Email</h5>
          <p className='emailpixalive'><a href='mailto:contact@pixalive.me'>contact@pixalive.me</a></p>
          <h5>Location</h5>
          <p>Third floor, No 35/2 Konappana Agrahara, Hosur Rd, 2nd phase,<br /> Electronic City, Karnataka 560100</p>
          <span className='iconsContact'>
            <a href='https://www.facebook.com/pixalive.app.9/'><i className="bi bi-facebook"></i></a>
            <a href='https://twitter.com/pixaliveo?lang=en'><i className="bi bi-twitter-x"></i></a>
            <a href="https://in.linkedin.com/company/pixalive"><i className="bi bi-linkedin"></i></a>
          </span>
        </div>
        {/* <form onSubmit={handleSubmit}> */}
          <div className='messageBox'>
            <h6>HAVE QUESTIONS?</h6>
            <h3>Send us a Message</h3>
            <div className='NameBox'>
              <input
                type='text'
                placeholder='Name'
                maxLength={30}
                // name="name"
                // onChange={handleInputs}
              />
              {/* {errors.name?.required ? (
                <span className="text-danger form-text">This field is required.</span>
              ) : null} */}
            </div>
            <div className='NameBox phoneEmail'>
              <input
                type='email'
                placeholder='Email'
                // name="email"
                // onChange={handleInputs}
                maxLength={30}
              />
              {/* {errors.email?.required ? (
                <span className="text-danger form-text">This field is required.</span>
              ) : null} */}
              <input
                type='text'
                placeholder='Mobile Number'
                // name='mobileNumber'
                // onChange={handleInputs}
                maxLength={10}
              />
              {/* {errors.mobileNumber?.required ? (
                <span className="text-danger form-text">This field is required.</span>
              ) : null} */}
            </div>
            <div className='NameBox'>
              <textarea
                rows={5}
                placeholder='Tell Us About Project'
                // name="message"
                // onChange={handleInputs}
              />
              {/* {errors.message?.required ? (
                <span className="text-danger form-text">This field is required.</span>
              ) : null} */}
            </div>
            <button type="submit" className='getDetialsbtn'><span><i className="bi bi-telegram"></i></span>Get In Touch</button>
          </div>
        {/* </form> */}
      </div>
      <div className="mapsDetails">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9179663074456!2d77.6680843748179!3d12.848574817564112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1589d7163475%3A0xeb85ca7b7efa7262!2sPixalive!5e0!3m2!1sen!2sin!4v1714035606384!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Subscribe />
      <Info />
      <Footer />
    </div>
  )

}

export default Contact;
