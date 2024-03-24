import './determineChalet.css'
import MyNavbar from "../Navbar/MyNavbar";
import { Container, Row, Col,Form ,FloatingLabel,Button} from "react-bootstrap";
import { FaRegCopy } from "react-icons/fa";
import { FaCalendarAlt } from 'react-icons/fa';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ar from 'date-fns/locale/ar'; // Import the Arabic locale from date-fns
import { useState } from 'react';
import MyFooter from '../Footer/MyFooter';
import { useDispatch , useSelector} from 'react-redux';
import { bookOneChalet } from '../../features/allChalet/allChaletSlice';

const Determine = () => {
  const dispatch = useDispatch();





  const [selectedDate1, setSelectedDate1] = useState(null); // State for first DatePicker
  const [selectedDate2, setSelectedDate2] = useState(null); // State for second DatePicker

  const handleDateChange1 = (date) => {
    setSelectedDate1(date); // Update state for first DatePicker
  };
  


  const handleDateChange2 = (date) => {
    setSelectedDate2(date); // Update state for second DatePicker
  };

  // Get today's date and add one day to it for the minimum selectable date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('ar', options); // Format the date in Arabic
  }






  const res = useSelector((state) => state.AllChalet.bookChalet);

  const isLoading = useSelector((state) => state.AllChalet.isLoading);
  const error = useSelector((state) => state.AllChalet.error);
   console.log(res)


   const [name, setName] = useState("");
   const [dateArrivalState, setDateArrivalState] = useState("");
   const [dateDepartureState, setDateDepartureState] = useState("");
   const [phone, setPhone] = useState("");
   
   const handleChangeName = (e) => {
    setName(e.target.value);
   };
   
   const handleChangeDateArrival = (e) => {
    setDateArrivalState(e.target.value);
   };
   
   const handleChangeDateDeparture = (e) => {
    setDateDepartureState(e.target.value);
   };
    
   const handleChangePhone = (e) => {
    setPhone(e.target.value);
   };
    
   const handleSubmit = (e) => {
     e.preventDefault();
     const formData = {
      name: name,
      date_arrival: selectedDate1,
      Departure_Date: selectedDate2,
       phone : phone
     };
     dispatch(bookOneChalet(formData));
   };







  return (
    <>
    <Container>
      <MyNavbar />
      <Row>
        <Col className=" my-3" lg={12}>
          <span style={{ fontWeight: "700" }}>
            شالية رقم <span style={{ color: "#547AFF" }}>( 1 )</span>
          </span>
        </Col>


        <Col lg={6} xs={12} md={12} sm={12} className='my-1'>
          <img
            src="https://archgalleries.com/wp-content/uploads/2020/03/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%B4%D8%A7%D9%84%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D9%8A%D8%A9-1.jpg"
            style={{ width: "100%", height: "300px", borderRadius: "10px" }}
            alt="Image"
          />
        </Col>

        <Col
          xs={12}
          lg={6}
          md={12}
          sm={12}
          style={{ textAlign: "center", height: "300px", overflow: "hidden" }}
        >
          <img
            src="https://archgalleries.com/wp-content/uploads/2020/03/%D8%AA%D8%B5%D9%85%D9%8A%D9%85-%D8%B4%D8%A7%D9%84%D9%8A%D8%A9-%D9%81%D9%8A-%D8%A7%D9%84%D8%B9%D8%B2%D9%8A%D8%B2%D9%8A%D8%A9-1.jpg"
            style={{ width: "100%", height: "300px", borderRadius: "10px" }}
            alt="Image"
          />
        </Col>

        <Col lg={12} xs={12} className="my-3">
          <span style={{fontWeight:'500'}}>تحديد المدة</span>
          <Col lg={12} xs={12}>
          <Row>
          <Col lg={6} style={{marginTop:'13px'}} >

          <DatePicker 
      dateFormat="dd/MM/yyyy"
      locale={ar} // Set the locale to Arabic
      placeholderText="تاريخ الوصول" // Use placeholderText prop for placeholder
      className='date-design'
      minDate={new Date()}
      selected={selectedDate1} // Pass the selected date state

      
      onChange={handleDateChange1} // Handle date change
      
      value={selectedDate1 ? formatDate(selectedDate1) : ''} // Displayed value

      />

          </Col>
          <Col lg={6} style={{marginTop:'13px'}}>

          <DatePicker 
      selected={selectedDate2}
      onChange={handleDateChange2}
      dateFormat="dd/MM/yyyy"
      locale="ar" // Set the locale to Arabic directly
      placeholderText="تاريخ المغادره"
      className="date-design"
      minDate={tomorrow} // Set the minimum selectable date to tomorrow
      value={selectedDate2 ? formatDate(selectedDate2) : ''} // Displayed value

    />

          </Col>

          </Row>
          </Col>
         
        </Col>

        <Col lg={12} xs={12} className="my-3">
          <span style={{fontWeight:'600'}}>تفاصيل المستأجر </span>
        </Col>

        <Col lg={12}>
  <Row>
    <Col lg={6}>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label style={{fontWeight:'500'}}>الأسم</Form.Label>
        <Form.Control 
        value={name} // Use state variable here
  onChange={(e) => handleChangeName(e)}
        type="text" placeholder="الأسم" />
      </Form.Group>
    </Col>
    <Col lg={6}>
      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label style={{fontWeight:'500'}}>رقم الهاتف</Form.Label>
        <Form.Control value={phone} // Use state variable here
  onChange={(e) => handleChangePhone(e)}
         type="tel" placeholder="رقم الهاتف"  style={{textAlignLast:'end'}}/>
      </Form.Group>
    </Col>
  </Row>
</Col>


<Col lg={12} xs={12} className="my-3">
          <span style={{fontWeight:'500'}}>تفاصيل اخري </span>
        </Col>
        <Col lg={12} xs={12}>
        <FloatingLabel controlId="floatingTextarea2" label="تفاصيل اخري " style={{right:'0px'}}>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '200px' }}
        />
      </FloatingLabel>
        </Col>

        <Col className='mt-4' style={{display:'flex',justifyContent:'space-between'}}>
        <h6>كود التسجيل</h6>
        <div style={{color:'#547AFF',cursor:'pointer'}}>
        <FaRegCopy />
            <span style={{fontWeight:'700',marginRight:'5px'}}>نسخ</span>
           

        </div>
        </Col>
        <Col lg={12} style={{display:'flex',justifyContent:'center'}}>
        <Button onClick={handleSubmit}
        style={{backgroundColor:'#547AFF',color:'white',width:'350px'}}>حجز الأن</Button>
        </Col>
      </Row>
    </Container>
              <MyFooter/>
              </>
  );
};

export default Determine;
