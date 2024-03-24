import React from 'react'
import { Container, Row, Col, Navbar, Button,FormControl,Form } from 'react-bootstrap';
 import './MyFooter.css'
import faceIcon from "../../assets/images/facebook.svg";
import instaIcon from "../../assets/images/instgram.svg";
import twitterIcon from "../../assets/images/twitter.svg";

const MyFooter = () => {
  return (
    <div style={{backgroundColor:'#2D2D2D',height:'220px',marginTop:'150px'}} className='footer-section'>
<Container>
    <Row style={{textAlign:'center',color:'white'}}>
        <Col xs={12} lg={12} className='mt-3'><h4>الشافعي للعقارات</h4></Col>
        <Col xs={12} lg={12} className='mt-2'><span style={{color:'rgb(255 255 255 / 47%)'}}>قد سختلف توافر العناصر والاسعار والمشاركه ومناطق التواصل والرسوم ومتطلبات الشراء للتوصل</span></Col>
        <Col xs={12} lg={12} className='mt-4' style={{display:'flex',justifyContent:'center'}}><div style={{display:'flex',justifyContent:'space-around', gap:'50px'}}>
        <a href='https://www.instagram.com/'> <img src={instaIcon} /></a>  
        <a href='https://www.facebook.com/'>  <img src={faceIcon} /> </a> 
        <a href='https://twitter.com'>  <img src={twitterIcon} /> </a>  </div>
</Col>
        <Col xs={12} lg={12} className='mt-3'><span style={{color:'rgb(255 255 255 / 47%)'}}> الشافعي للعقارات جميع الحقوق محفوظه</span></Col>

    </Row>
</Container>
    </div>
  )
}

export default MyFooter