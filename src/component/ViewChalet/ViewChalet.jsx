import "./ViewChalet.css";
import MyNavbar from "../Navbar/MyNavbar";
import {Container,Row, Col, Form,FloatingLabel,Button,Table,} from "react-bootstrap";
import { FaRegCopy, FaWhatsapp } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar"; // Import the Arabic locale from date-fns
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import MyFooter from "../Footer/MyFooter";
// import { getOneChaletById } from "../../features/allChalet/allChaletSlice";
// import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { bookOneChalet } from '../../features/allChalet/allChaletSlice';

const ViewChalet = () => {

  // const dispatch = useDispatch()
  const { id } = useParams();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [text, setText] = useState("");

  const handleChangeName = (e) => {
   setName(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
   };
   const handleChangeTextArea = (e) => {
    setText(e.target.value);
   };
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
    const options = { day: "numeric", month: "long", year: "numeric" };
    return date.toLocaleDateString("ar", options); // Format the date in Arabic
  };

  
  const getStatusBook = useSelector((state) => state.AllChalet.oneChalet);
  const isLoading = useSelector((state) => state.AllChalet.isLoadingOneChalet);
 

  const statusBook = useSelector((state) => state.AllChalet.statusBook);

  // useEffect(()=>{
  //  dispatch(getOneChaletById(id))
  // },[dispatch])

  // useEffect(()=>{
  //  dispatch(getStatusBook(id))
  // },[dispatch])


  // getStatusBook.title
// getStatusBook.price
// getStatusBook.description
// getStatusBook.image_array
// getStatusBook.Image_OwnerChalet
// getStatusBook.name_OwnerChalet
// getStatusBook.phone_OwnerChalet
// getStatusBook.email_OwnerChalet
// getStatusBook.whatsapp_OwnerChalet
// getStatusBook.name_area
// getStatusBook.image_area
// getStatusBook.sub_description_area

// getStatusBook.Property_type
// getStatusBook.Display_type
// getStatusBook.space
// getStatusBook.number_rooms
// getStatusBook.Furnishing
// getStatusBook.Bathroom
// getStatusBook.Registration_code
// getStatusBook.days
// const handleSubmit = (e) => {
//   e.preventDefault();
//   const formData = {
//    name: name,
//    date_arrival: selectedDate1,
//    Departure_Date: selectedDate2,
//     phone : phone,
//     other_details:text
//   };
//   dispatch(bookOneChalet(formData));
// };
  return (
    <>
      <Container>
        <MyNavbar />
        <Row>
          <Col className=" my-3" lg={12} style={{display:'flex',justifyContent:'space-around'}}>
            <span style={{ fontWeight: "700" }}>
              
              شالية رقم <span style={{ color: "#547AFF" }}>( 1 )</span>
{/* {getStatusBook.title} */}

            </span>

            <span>
              حالة الشالية: 
              {/* {statusBook} */}
            </span>
          </Col>

          <Col lg={6} xs={12} md={12} sm={12} className="my-1">
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

          <Col lg={12}>
            <Row>
              <Col lg={6}>
                <h5 style={{ textAlign: "left" }}>
                  
                  {/* {getStatusBook.title} */}
                  شالية رقم 10 علوي</h5>
                <div className="my-3">
                  <span style={{ color: "rgb(27 27 27 / 25%)" }}>
                  {/* {getStatusBook.description} */}

                    شاليه مساحه 120 م + جنينه 50 م يطل علي البحر مباشر ويتميز
                    ايضا بكبر المساحه الخضراء ويتميز بلعديد من المميزات الجديده
                    انها فرضه جيده ايضا للاستثمار .
                  </span>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h5>كود التسجيل:
                     {/* {getStatusBook.Registration_code} */}
                  </h5>
                  <div style={{ color: "#547AFF",cursor:'pointer' }}>
                    <FaRegCopy />
                    <span style={{ fontWeight: "700", marginRight: "5px" }}>
                      نسخ
                    </span>
                  </div>
                </div>
                <div className="my-3">
                  <h6>معلومات عن العقار</h6>
                  <Table responsive="md">
                    <tbody>
                      <tr>
                        <td>نوع العقار</td>
                        <td style={{fontWeight:'bold'}}>Table cell
{/* {getStatusBook.Property_type} */}

                        </td>
                        <td>{" "}</td>
                        <td>تأثبث</td>
                        <td style={{fontWeight:'bold'}}>{" "}d
                        {/* {getStatusBook.Furnishing} */}
                        </td>

                      </tr>
                      <tr>
                        <td>نوع العرض</td>
                        <td style={{fontWeight:'bold'}}>Table cell
{/* {getStatusBook.Display_type} */}

                        </td>
                        <td>{" "}</td>
                        <td>معدل الايجار</td>
                        <td style={{fontWeight:'bold'}}>{" "}a
                        {/* {getStatusBook.price} */}ج . م سنويا
                        </td>

                      </tr>
                      <tr>
                        <td>المساحة</td>

                        <td style={{fontWeight:'bold'}}>
                          {/* {getStatusBook.space} */}
                          
                           a{" "}</td>
                        <td>{" "}</td>
                        <td>{" "}</td>
                        <td style={{fontWeight:'bold'}}>Table cell

                          
                        </td>
                      </tr>
                      <tr>
                        <td>عدد الغرف</td>
                        <td style={{fontWeight:'bold'}}>Table cell
{/* {getStatusBook.number_rooms} */}

                        </td>
                        <td>{" "}</td>
                        <td>حمام</td>
                        <td style={{fontWeight:'bold'}}>{" "}a
                        {/* {getStatusBook.Bathroom} */}
                        </td>
                        

                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Col>

              <Col lg={6}>
                <div
                  style={{
                    border: "1px solid rgb(0 0 0 / 10%)",
                    boxShadow: "0px 0px 0px 3px #8888880d",
                    borderRadius: "10px",
                    padding: "25px",
                    marginTop: "10px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      paddingRight: "50px",
                      alignItems: "center",
                      marginBottom: "20px",
                      borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                      paddingBottom: "16px",
                    }}
                  >
                    <img
                    // src={getStatusBook.Image_OwnerChalet}
                      src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                      width={90}
                      height={90}
                      style={{ borderRadius: "50%", marginLeft: "20px" }}
                    />
                    <h6 style={{ fontWeight: "600" }}>محمد معتصم

{/* {getStatusBook.name_OwnerChalet} */}
                    </h6>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" , gap:'3px' }}
                  >
                    {/* <a href={getStatusBook.phone_OwnerChalet}> */}
                    <div
                      style={{
                        color: "rgb(84, 122, 255)",
                        border: "1px solid rgb(84, 122, 255)",
                        height: "50px",
                        width: "150px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <FaPhoneAlt size={15} />

                      <span style={{ fontSize: "14px" }}>تواصل عبر الهاتف</span>
                    </div>
                    {/* </a> */}

{/* <a href={getStatusBook.email_OwnerChalet}> */}
                    <div
                      style={{
                        color: "rgb(84, 122, 255)",
                        border: "1px solid rgb(84, 122, 255)",
                        height: "50px",
                        width: "150px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <IoMail size={20} />

                      <span style={{ fontSize: "14px" }}>تواصل عبر البريد</span>
                    </div>
 {/* </a> */}

{/* <a href={getStatusBook.whatsapp_OwnerChalet}> */}
                    <div
                      style={{
                        color: "rgb(84, 122, 255)",
                        border: "1px solid rgb(84, 122, 255)",
                        height: "50px",
                        width: "150px",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <FaWhatsapp size={20} />

                      <span style={{ fontSize: "14px" }}>تواصل عبر واتساب</span>
                    </div>
                     {/* </a> */}
                  </div>
                </div>

                <div
                  style={{
                    border: "1px solid rgb(0 0 0 / 10%)",
                    boxShadow: "0px 0px 0px 3px #8888880d",
                    borderRadius: "10px",
                    padding: "25px",
                    marginTop: "20px",
                  }}
                >
                  <div style={{ display: "flex" }}>
                    <img
                    // src={getStatusBook.image_area}
                      src="https://ongineering.com/images/Articles_Aziz/design-of-private-chalets.jpg"
                      width={90}
                      height={90}
                      style={{ borderRadius: "50%" }}
                    />
                    <div style={{ paddingRight: "15px" }}>
                      <h5 style={{ fontWeight: "400" }}>منتجع كالي كوست
                      {/* {getStatusBook.name_area} */}
                      </h5>
                      <span style={{ color: "#1717177a" }}>
                        {/* {getStatusBook.sub_description_area} */}
                        تصفح الاماكن الحيويه واسلوب الحياه في المنطة تصفح
                        الاماكن الحيويه واسلوب الحياه في المنطة تصفح .
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>

          <Col lg={12} xs={12} className="my-3">
            <span style={{ fontWeight: "500" }}>ايام حجز الشالية</span>
          </Col>

          <Row>
{/* {
  getStatusBook && getStatusBook.days ? (
    getStatusBook.days.map((item,index)=>{
return( */}
  <Col lg={2} xs={4} md={2} className="mt-4" 
  // key={index}
  >
  <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
    
  {/* <span>{item}</span> */}
  <span>10</span>
    <span>يونيو</span>

  </div>
  </Col>
{/* )

    })
  ):null
} */}
       


       

 {/*
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div  className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2}  xs={4} md={2} className="mt-4">
          <div  className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#58CD55', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%",border:'1px solid black',  display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>

        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#58CD55', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%",border:'1px solid black',  display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'black' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col>
        <Col lg={2} xs={4} md={2} className="mt-4">
          <div className="circle-chalet" style={{ width: '100px', height: '100px', borderRadius: "50%", backgroundColor: '#547AFF', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
            <span>10</span>
            <span>يونيو</span>
          </div>
        </Col> */}
       
       
      </Row>
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
          onChange={(e)=>handleChangeTextArea(e)}
        />
      </FloatingLabel>
        </Col>
<Col lg={12} style={{display:'flex',justifyContent:'center'}}>
        <Button 
        // onClick={handleSubmit}
        style={{backgroundColor:'#547AFF',color:'white',width:'350px',marginTop:'20px'}}>حجز الأن</Button>
        </Col>
        </Row>
      </Container>
      <MyFooter />
    </>
  );
};

export default ViewChalet;
