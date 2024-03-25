import React, { useEffect } from "react";
import MyNavbar from "../Navbar/MyNavbar";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyFooter from "../Footer/MyFooter";
import { getAllChalet } from "../../features/allChalet/allChaletSlice";
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Home = () => {
const dispatch = useDispatch()


  // const dispatch = useDispatch()
//   const getChaletAll = useSelector((state) => state.AllChalet.allCahlet);
//   const isLoading = useSelector((state) => state.AllChalet.isLoading);
//   useEffect(()=>{
//     dispatch(getAllChalet())
//   },[dispatch])
//   console.log(getChaletAll.image_array.map((item,index)=>{
// <img src={item} key={index} alt=""/>
//   }))


  
  // const getAllchaletBook = useSelector((state) => state.AllChalet.allBookChalet);
  // const isLoading = useSelector((state) => state.AllChalet.isLoading);
 
  // console.log(getAllchaletBook)



  const ownerDataStr =  localStorage.getItem("owner")
  const brokerDataStr = localStorage.getItem("broker");
  
  let brokerData = [];
  if (brokerDataStr) {
    try {
      brokerData = JSON.parse(brokerDataStr);
    } catch (error) {
      console.error("Error parsing broker data from localStorage:", error);
    }
  }


  let ownerData = [];
  if (ownerDataStr) {
    try {
      ownerData = JSON.parse(ownerDataStr);
    } catch (error) {
      console.error("Error parsing owner data from localStorage:", error);
    }
  }

  return (
    <>
      <Container>
        <MyNavbar />
        <div style={{ display: "flex", justifyContent: "space-between", marginTop:'50px'}}>
          <span style={{fontSize:'18px',fontWeight:'500'}}>الشاليهات المتاحة الان <span  style={{color:'#547AFF'}}>( ايجار )</span></span>
          <span style={{color:'#547AFF',cursor:'pointer'}}>عرض الكل</span>

        </div>
        <Row>
          {
             (ownerData && Array.isArray(ownerData)) ? (
            ownerData.map((item)=>{
return(
              <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }} key={item.id}>
              <Link to={`/view-chalet/${item.id}`} style={{textDecoration:'none',color:'black'}}>
        <Col xs={12} lg={12}>
          <img
            // src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
            src={item.image_area}
            width={150}
            height={150}
            style={{ borderRadius: '50%' }}
            alt="Chalet"
          />
        </Col>
        <Col xs={12} lg={12}>
          <span>شالية رقم 1
            {item.title}
          </span>
        </Col>
        </Link>
      </Col>
      )
            })
            ):null
          }


{
           (brokerData && Array.isArray(brokerData)) ? (
            brokerData.map((item,index)=>{
return(
              <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }} key={item.id}>
              <Link to={`/view-chalet/${item.id}`} style={{textDecoration:'none',color:'black'}}>
        <Col xs={12} lg={12}>
          <img
            // src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
            src={item.image_area}
            width={150}
            height={150}
            style={{ borderRadius: '50%' }}
            alt="Chalet"
          />
        </Col>
        <Col xs={12} lg={12}>
          <span>شالية رقم 1
            {item.title}
          </span>
        </Col>
        </Link>
      </Col>
    )  
            })
            ):<span>No data</span>
          }
          
          


    {/* <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col> */}

    
        

        </Row>




        {/* <div style={{ display: "flex", justifyContent: "space-between", marginTop:'50px'}}>
          <span style={{fontSize:'18px',fontWeight:'500'}}>الشاليهات المتاحة الان <span  style={{color:'#547AFF'}}>( بيع )</span></span>
          <span style={{color:'#547AFF',cursor:'pointer'}}>عرض الكل</span>

        </div>
        <Row>
            <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>

        

        </Row> */}




        {/* <div style={{ display: "flex", justifyContent: "space-between", marginTop:'50px'}}>
          <span style={{fontSize:'18px',fontWeight:'500'}}>الشاليهات المتاحة الان <span  style={{color:'#547AFF'}}>( محجوزة )</span></span>
          <span style={{color:'#547AFF',cursor:'pointer'}}>عرض الكل</span>

        </div>
        <Row>
        <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>
    <Col xs={6} md={4} lg={2} style={{ textAlign: 'center', marginTop: '50px' }}>
            <Link style={{textDecoration:'none',color:'black'}}>
      <Col xs={12} lg={12}>
        <img
          src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
          width={150}
          height={150}
          style={{ borderRadius: '50%' }}
          alt="Chalet"
        />
      </Col>
      <Col xs={12} lg={12}>
        <span>شالية رقم 1</span>
      </Col>
      </Link>
    </Col>

        

        </Row> */}
      </Container>
      <MyFooter/>

    </>
  );
};

export default Home;