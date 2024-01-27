import React from 'react';
import { MDBFooter} from 'mdb-react-ui-kit';
import { FaYoutube } from "react-icons/fa";
import { GrSpotify } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";


import './Footer.css';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between border-bottom' style={{backgroundColor: '#56ccf2' , paddingLeft: '100px'}}>
        <div className='me-5 d-none d-lg-block'>
          <span className='footer-title' style={{textAlign: 'center' , color: 'white' , width: '50%' ,fontSize: '50px' , fontWeight: 'bold' , margin: '0 auto'}}>The Generics</span>
        </div>

        <div className='footer-icons'>
         <ul>
          <li>
            <a href='https://www.youtube.com'>
            <FaYoutube style={{width: '100px' , fontSize: '40px'}} />
            </a>
          </li>
          <li>
            <a href='https://www.spotify.com'>
            <GrSpotify style={{width: '100px' , fontSize: '40px'}} />
            </a>
          </li>
          <li>
            <a href='https://www.facebook.com'>
            <FaFacebook style={{width: '100px' , fontSize: '40px'}} />
            </a>
          </li>
         </ul>
        </div>
      </section>
    </MDBFooter>
  );
}
