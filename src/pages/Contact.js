import React from 'react'

export const Contact = () => {
  return (

    <div>
      <Welcome text="Welcome to React" />
    </div>
  );
};

const Welcome = ({ text }) => {
  return <h1>{text}</h1>;
};
    

export default Contact;