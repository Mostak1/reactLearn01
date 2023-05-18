import React from 'react'

export const Props = () => {
  return (
    <>
    <h2 className='text-center'>Props Content Here</h2>
    <Car brand="Food" />
    </>
  )
}
function Car({brand}) {
  return <h2>I likes masala { brand }!</h2>;
}
function Car1(props) {
  return <h2>I am a { props.brand.model } !</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car1 brand={ carInfo } />
    </>
  );
}

export default Props;
