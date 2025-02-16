import React from 'react'

const Footer = () => {
  const date = new Date();
  return (
    <>

    <div className="col-sm-12 col-md-12 p-5 bg-primary text-light">
      <div className="container">
        <h4 className='fs-5'>Product Table {date.getFullYear()}</h4>
      </div>
    </div>
    
    </>
  )
}

export default Footer;