import React from 'react'
import { Link } from 'react-router-dom';
import Logo from "../assets/images/Logo.png";
import Stack from '@mui/material/Stack';

const Navbar = () => {
  return (
    <div>
      <Stack>
        <Link tp="/">
          <img src={Logo} />
        </Link>
      </Stack>
    </div>
  )
}

export default Navbar;
