import React from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from "react-bootstrap/Container"
import { Link } from "react-scroll";

// import './Header.css'
import {BsSearch}  from 'react-icons/bs'
import {MdOutlineNotifications} from 'react-icons/md'
import {IoMdContact} from 'react-icons/io'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './Navbars.css'
import { useNavigate } from "react-router-dom";

const Navbars = ()=> {

  const navigate = useNavigate()

return (
    <div  class='header'>

<nav class="navbar  bg-light">
  <div class="container-fluid">
    <a class="navbar-brand ">WOOD MART</a>
    <form class="d-flex">
      <input class="form-control  me-2 w-100" type="search" placeholder="Search" aria-label="Search" />
      <a class="btn btn-outline-none" type="submit"><BsSearch /></a>
    </form>
  </div>
</nav>
<div class='header-1'>
<nav class="navbar navbar-expand-lg navbar-light ">
  <div class="container-fluid ">
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light mr-5" aria-current="page" href="#" onClick={()=> navigate('/')}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light mr-5" href="#">Today Trending</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light mr-5" href="#">Top Sellers</a>
        </li>
        <li class="nav-item ">
          <a class="nav-link text-light mr-5" href="#" >Great Deals </a>
        </li>
      </ul>
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active text-light mr-3" aria-current="page" href="#"><MdOutlineNotifications /></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light mr-3" href="#"><IoMdContact onClick={()=> navigate('/form')}/></a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light mr-3" href="#"><AiOutlineShoppingCart onClick={()=> navigate('/order')}/></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
</div>
</div>
)
}
export default Navbars