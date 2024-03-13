import React from 'react';
import "./footer.css";
import { GitHub, LinkedIn, Facebook } from '@mui/icons-material';

export default function Footer() {
  return (
    <div className='footer'>
      <ul className='ulFooter'>
        <li className='contactListItemFooter'><a href="https://github.com/jorgeloaiza48"><GitHub/></a></li>
        <li className='contactListItemFooter'><a href="https://www.linkedin.com/in/fabio-andres-naranjo-morales-268006149/"><LinkedIn/></a></li>
        <li className='contactListItemFooter'><a href="https://www.facebook.com/jeloaiza2/"><Facebook/></a></li>
      </ul>
    </div>
  );
}
