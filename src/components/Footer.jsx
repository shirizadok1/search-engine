import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';



function Footer() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer className='footer'>
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.facebook.com/shiri.zadok' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </a>
        
          <a className='btn btn-outline-light btn-floating m-1' href='https://www.linkedin.com/in/shiri-zadok-868096116/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>

          <a className='btn btn-outline-light btn-floating m-1' href='https://github.com/shirizadok1' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer>
      
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © {year} Copyright: Shiri Zadok
      </div>
    </MDBFooter>
    </footer>
  );
}
    

export default Footer;