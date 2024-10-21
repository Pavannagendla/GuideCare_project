import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './subscribe.css';

function Subscribe() {
  return (
    <>
    <section id="subscribe" className="block">
        <div className="subscribe-title">
          <h3>Subscribe to our newsletter</h3>
        </div>
        <Form className="contact-form">
          <div className='contact-input'>
          <input type='text' placeholder='FullName' className="input-field1" />
          <input type='email' placeholder='Email Address' className="input-field2" />
          </div>
          <Button type="subscribe" className="subscribe-btn">Subscribe Now</Button>
        </Form>
        <div className='circle1' />
        <div className='circle2' />
    </section>
    </>
  );
}

export default Subscribe;
