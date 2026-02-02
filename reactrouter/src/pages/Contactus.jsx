const Contactus = () => {
  return (
    <div className="containerStyle">
      <h1>Get in Touch</h1>
      <p>
        Have questions about our React Router tutorial? Whether you're stuck on
        nested routes or just want to say hi, our team is here to help.
      </p>

      <div className="cardGrid" >
        <div className="cardStyle">
          <h3>📞 Call Us</h3>
          <p>Direct line: <strong>+1 (973) 873-8890</strong></p>
          <p>Available Mon-Fri, 9am - 5pm EST</p>
        </div>

        <div className="cardStyle">
          <h3>📧 Email Us</h3>
          <p>Support: support@router-learn.com</p>
          <p>Press: media@router-learn.com</p>
        </div>

        <div className="cardStyle">
          <h3>📍 Visit Us</h3>
          <p>123 React Lane, Component City</p>
          <p>JS State, 10101</p>
        </div>
      </div>
    </div>
  );
};

export default Contactus;