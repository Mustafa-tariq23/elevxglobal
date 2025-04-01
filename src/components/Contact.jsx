import React from 'react'
import HeaderForPages from './HeaderForPages'
import Footer from './Footer'
import Form from './Form'
import Navbar from './Navbar'

const Contact = () => {
  return (
    <>
      {/* <HeaderForPages
        heading={"Unlock a world of possibilities with TecPartner"}
        para={
          " Thank you for considering us as your premier recruiting and consultancy partner. Whether you're a skilled professional seeking new career opportunities or an organization in need of exceptional talent, TecPartner is here to support your journey. Our expertise in talent acquisition and consulting services ensures that both job seekers and employers find the perfect match to achieve their goals."
        }
      /> */}
      <Navbar />
      <div className='pt-20'>
      <Form />
      </div>
      <Footer />
    </>
  );
}

export default Contact