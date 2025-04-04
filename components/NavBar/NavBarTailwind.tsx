// @ts-nocheck
// use client
import React from 'react';
import Link from 'next/link'
import Image from 'next/image';
// import { NavLink } from 'react-router-dom'

import { horizontalNavItems } from './NavBarList'
import { NavListDrawer } from './NavListDrawer';
import { DetailList } from './DetailList';
import { ServiceList } from './ServiceList';
import { useAuth } from '../../Auth';

import { ButtonNav } from '../ButtonNav'
import { IconButton, Drawer, AppBar } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


import MenuIcon from '@mui/icons-material/Menu';





const NavBar = () => {
  const activeStyle = 'underline underline-offset-4'
  const [open, setOpen] = React.useState(false)
  const [openNav, setOpenNav] = React.useState(false);
  const [openServ, setOpenServ] = React.useState(false)
  const auth = useAuth()
    
  const handleClick = () => {
    setOpenNav(!openNav);
    console.log('handleClick')
  };
  const handleClickServ = () => {
    setOpenServ(!openServ);
    console.log('handleClickServe')
  };
    

return (
<>
<AppBar>
<nav className='flex flex-col sm:flex-row justify-between items-center w-full bg-whiteser lg:py-3 top-0'>

  {/* Contenedor principal de logo y botones */}
  <div className="flex items-center justify-between w-full sm:justify-start space-x-6 px-4 sm:px-0">
    {/* Logo */}
    <Link href="/" className="flex items-center space-x-2">
      {/* Logo */}
      <Image
        src="https://res.cloudinary.com/combariza/image/upload/v1727436471/Servilla/Servilla_sin_fondo_mwigkk.png"
        alt="logo1"
        width={80}  // Ancho para móviles
        height={0}   // Mantiene la proporción del alto
        className="cursor-pointer pt-3 lg:pl-2 lg:w-24" // Ancho mayor en pantallas grandes
      />

      {/* Nombre de la empresa */}
      <span className="text-black font-bold text-lg sm:text-xl lg:text-2xl" style={{ fontFamily: 'Bodoni Moda, serif' }}>
        SERVILLA
      </span>
    </Link>

    {/* Botón de Rastreo guías */}
    <Link href="/Paqueteria"> 
      <button className='bg-green-700 hover:bg-green-300 text-white hover:text-black px-4 py-2 rounded text-xl sm:text-2xl transition-colors duration-200'>
        Rastreo guías
      </button>
    </Link>

    {/* Menú Hamburguesa para versión mobile */}
    <div className='absolute right-5 sm:relative sm:flex sm:items-center sm:gap-3 sm:ml-4 lg:invisible sm:visible'>
      <IconButton
        color='inherit'
        size='large'
        sx={{ flexGrow: 1, display: { xs: "block", sm: "none" } }}
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
    </div>
  </div>
  <ul className='hidden sm:flex items-center text-white gap-3'>
        {horizontalNavItems.map((item) => (
          (item.private === auth.authorized?
            <ButtonNav key={item.id} onClick={item.id === 1?handleClick:item.id===401?handleClickServ:undefined}>
              <li className={item.className}>
                <Link
                href={item.link}
                className={({isActive}) => isActive? activeStyle:undefined }
                >
                  {item.icon}
                  {item.title}
                  {item.nested? open ? <ExpandLess /> : <ExpandMore /> : ''}
                  {item.nestedServ? openServ ? <ExpandLess /> : <ExpandMore /> : ''}
                </Link>
            </li>
            </ButtonNav>:null
          )
        ))}
    </ul>
</nav>
</AppBar>
 <Drawer
 anchor="left"
 open={open}
 onClose={() => setOpen(false)}
 >
     <NavListDrawer />
 </Drawer>
 <Drawer
    anchor="left"
    open={openNav}
    onClose={() => setOpenNav(false)}
    >
        <DetailList />
    </Drawer>
    <Drawer
    anchor="left"
    open={openServ}
    onClose={() => setOpenServ(false)}
    >
        <ServiceList />
    </Drawer>
</>
)
}
export {NavBar}