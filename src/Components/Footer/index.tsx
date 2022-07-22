import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Typography } from '@mui/material';

export default function App() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
    

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', height: '140px' }}>
        © 2022 Copyright:

        <Typography>
        <a className='text-white' href='https://clinto.netlify.app/'>
          Developed by Clinto Abraham  @TOC
        </a>
        </Typography>
       
      </div>
    </MDBFooter>
  );
}