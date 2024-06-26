import "./ViewChalet.css";
import MyNavbar from "../Navbar/MyNavbar";
import {
  Container,
  Row,
  Col,
  Form,
  FloatingLabel,
  Button,
  Table,
  Spinner,
  Modal,
} from "react-bootstrap";
import { FaRegCopy, FaWhatsapp } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

import DatePicker from "react-datepicker";
import { format, eachDayOfInterval } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import ar from "date-fns/locale/ar"; // Import the Arabic locale from date-fns
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import MyFooter from "../Footer/MyFooter";
import {
  getOneChaletById,
  getOneChaletByIdBroker,
} from "../../features/allChalet/allChaletSlice";
import { useParams } from "react-router-dom";
import { bookOneChalet } from "../../features/allChalet/allChaletSlice";

const ViewChalet = () => {
  //   useEffect(()=>{
  // const ownerLocalStorage = localStorage.getItem('owner')
  // const brokerLocalStorage = localStorage.getItem('broker')
  // if (ownerLocalStorage&& brokerLocalStorage&& ownerLocalStorage.length <=0 && brokerLocalStorage.length <=0) {
  // window.location.href="/login"
  // }
  // },[])
  //   const ownerLocalStorage = localStorage.getItem('owner')
  // const brokerLocalStorage = localStorage.getItem('broker')
  // if ( ownerLocalStorage.length <=0 && brokerLocalStorage.length) {
  //   window.location.href="/login"
  // }

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const startDate = new Date(2024, 3, 24); // June 1st, 2024
  const endDate = new Date(2024, 8, 1); // September 30th, 2024
  const datesArray = eachDayOfInterval({ start: startDate, end: endDate });

  const dispatch = useDispatch();
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

  const getStatusBook = useSelector((state) => state.AllChalet.oneChaletBroker);
  const isLoading = useSelector((state) => state.AllChalet.isLoadingOneChalet);

  console.log(getStatusBook);

  useEffect(() => {
    dispatch(getOneChaletByIdBroker(id));
  }, [dispatch]);

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

  let idInteger;
  if (id && !isNaN(id)) {
    idInteger = parseInt(id, 10);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      date_arrival: selectedDate1,
      Departure_Date: selectedDate2,
      phone: phone,
      other_details: text,
    };

    if (!formData.name) {
      return toast.error("الأسم مطلوب");
    }
    if (!formData.phone) {
      return toast.error("رقم الهاتف مطلوب");
    }
    if (!formData.date_arrival) {
      return toast.error("تاريخ الوصول مطلوب");
    }
    if (!formData.Departure_Date) {
      return toast.error("تاريخ المغادرة مطلوب");
    }

    // Assuming dispatch is an async function that handles the form data
    try {
      await dispatch(bookOneChalet(formData, idInteger));
      setTimeout(() => {}, 1000);
      // Handle success if needed
    } catch (error) {
      console.error("Error submitting form:", error);
      // Handle error (e.g., show error message to the user)
    }
  };

  const ownerLocalStorage = localStorage.getItem("owner");
  const brokerDataStr = localStorage.getItem("broker");

  if (!brokerDataStr) {
    setTimeout(() => {
      window.location.href = "/";
    }, 1000);
  }
  const [copiedValue, setCopiedValue] = useState("");
  const handleCopyValue = () => {
    const valueToCopy = getStatusBook.data.Registration_code;
    navigator.clipboard.writeText(valueToCopy);
    setCopiedValue(valueToCopy);

    // Hide the message after 2 seconds
    setTimeout(() => {
      setCopiedValue("");
    }, 2000);
  };

  // amr abdelaal update
  const formatArabicDate = (arabicDateString) => {
    const parts = arabicDateString.split("/");

    const day = parseInt(parts[0]);
    const arabicMonth = parts[1];

    const arabicMonths = {
      يناير: "01",
      فبراير: "02",
      مارس: "03",
      أبريل: "04",
      مايو: "05",
      يونيو: "06",
      يوليو: "07",
      أغسطس: "08",
    };

    const month = arabicMonths[arabicMonth];

    const year = new Date().getFullYear();

    const formattedDate = `${month}/${day}/${year}`;

    return formattedDate;
  };

  return (
    <>
      <Container>
        <MyNavbar />
        {!isLoading ? (
          getStatusBook && getStatusBook.data ? (
            <Row>
              <Col
                className=" my-3"
                lg={12}
                style={{ display: "flex", justifyContent: "space-around" }}
              >
                <span style={{ fontWeight: "700" }}>
                  {(() => {
                    localStorage.setItem("img", getStatusBook.data.image_area);
                    localStorage.setItem("id", JSON.stringify(id));
                    localStorage.setItem(
                      "private",
                      getStatusBook.data.Registration_code
                    );
                    // You can also return a value if needed
                    return null; // or any other JSX element
                  })()}
                  {/* شالية رقم <span style={{ color: "#547AFF" }}>( 1 )</span> */}
                  {getStatusBook.data.title}
                </span>
              </Col>
              <Row>
                {/* First column with full-height image */}
                <Col lg={6} xs={12} md={6} sm={12} className="text-center">
                  <img
                    src={getStatusBook.data.image_array[0]}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      height: "70vh",
                      borderRadius: "10px",
                      marginBottom: "32px",
                    }}
                    alt="Image"
                  />
                  {getStatusBook.data.image_array.length < 2 ? (
                    <button className="custom-button" onClick={handleOpenModal}>
                      show modal
                    </button>
                  ) : (
                    ""
                  )}
                </Col>

                {/* Second column with two images */}
                <Col lg={6} xs={12} md={6} sm={12} className="text-center">
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "70vh",
                      position: "relative",
                    }}
                  >
                    {
                      getStatusBook.data.image_array &&
                      getStatusBook.data.image_array.length > 1 ? (
                        <img
                          src={getStatusBook.data.image_array[1]}
                          style={{
                            flex: 1,
                            objectFit: "cover",
                            borderRadius: "10px",
                            marginBottom: "16px",
                            height: "32vh",
                          }}
                          alt="Image"
                        />
                      ) : null // Render null when image_array doesn't exist or doesn't have a valid image URL at index 1
                    }

                    {
                      getStatusBook.data.image_array &&
                      getStatusBook.data.image_array.length > 2 ? (
                        <img
                          src={getStatusBook.data.image_array[2]}
                          style={{
                            flex: 1,
                            objectFit: "cover",
                            borderRadius: "10px",
                            marginBottom: "16px",
                            height: "35vh",
                          }}
                          alt="Image"
                        />
                      ) : null // Render null when image_array doesn't exist or doesn't have a valid image URL at index 2
                    }
                    {getStatusBook.data.image_array.length >= 2 ? (
                      <button
                        className="custom-button"
                        onClick={handleOpenModal}
                        style={{
                          position: "absolute",
                          bottom: "50px",
                          left: "50px",
                          borderRadius: "10px",
                        }}
                      >
                        تصفح {getStatusBook.data.image_array.slice(3).length}{" "}
                        صور
                      </button>
                    ) : (
                      ""
                    )}
                  </div>
                </Col>
              </Row>

              <Modal
                show={showModal}
                onHide={handleCloseModal}
                size="lg"
                centered
              >
                <Modal.Header closeButton>
                  <Modal.Title>عرض باقي الصور</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Row>
                    {getStatusBook.data.image_array
                      .slice(3)
                      .map((image, index) => (
                        <Col key={index} lg={4} md={6} sm={12} className="mb-3">
                          <img
                            src={image}
                            alt={`Image ${index + 1}`}
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                            }}
                          />
                        </Col>
                      ))}
                  </Row>
                </Modal.Body>
              </Modal>

              {/* <Col
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
              </Col> */}

              <Col lg={12}>
                <Row>
                  <Col lg={6}>
                    <h5 style={{ textAlign: "left" }}>
                      {getStatusBook.data.title}
                      {/* شالية رقم 10 علوي */}
                    </h5>
                    <div className="my-3">
                      <span style={{ color: "rgb(27 27 27 / 25%)" }}>
                        {getStatusBook.data.description}

                        {/* شاليه مساحه 120 م + جنينه 50 م يطل علي البحر مباشر ويتميز
                        ايضا بكبر المساحه الخضراء ويتميز بلعديد من المميزات الجديده
                        انها فرضه جيده ايضا للاستثمار . */}
                      </span>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <h5>كود التسجيل:</h5>
                      <div
                        style={{ color: "#547AFF", cursor: "pointer" }}
                        onClick={handleCopyValue}
                      >
                        <FaRegCopy />
                        <span style={{ fontWeight: "700", marginRight: "5px" }}>
                          نسخ
                        </span>
                      </div>
                      {copiedValue && (
                        <span style={{ color: "green" }}>تم النسخ!</span>
                      )}
                    </div>
                    <div className="my-3">
                      <h6>معلومات عن العقار</h6>
                      <Table responsive="md">
                        <tbody>
                          <tr>
                            <td>نوع العقار</td>
                            <td style={{ fontWeight: "bold" }}>
                              {/* Table cell */}
                              {getStatusBook.data.Property_type}
                            </td>
                            <td> </td>
                            <td>تأثبث</td>
                            <td style={{ fontWeight: "bold" }}>
                              {" "}
                              {/* d */}
                              {getStatusBook.data.Furnishing}
                            </td>
                          </tr>
                          <tr>
                            <td>نوع العرض</td>
                            <td style={{ fontWeight: "bold" }}>
                              {/* Table cell */}
                              {getStatusBook.data.Display_type}
                            </td>
                            <td> </td>
                            <td>معدل الايجار</td>
                            <td style={{ fontWeight: "bold" }}>
                              {" "}
                              {/* a */}
                              {getStatusBook.data.price}ج . م سنويا
                            </td>
                          </tr>
                          <tr>
                            <td>المساحة</td>

                            <td style={{ fontWeight: "bold" }}>
                              {getStatusBook.data.space}
                              {/* a */}{" "}
                            </td>
                            <td> </td>
                            <td>حمام</td>
                            <td style={{ fontWeight: "bold" }}>
                              {" "}
                              {/* a */}
                              {getStatusBook.data.Bathroom}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </Col>

                  <Col lg={6}>
                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        boxShadow: "0px 0px 0px 3px #8888880d",
                        borderRadius: "10px",
                        padding: "25px",
                        marginTop: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "20px",
                          paddingBottom: "16px",
                          borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
                        }}
                      >
                        <img
                          src={getStatusBook.data.Image_OwnerChalet}
                          width={90}
                          height={90}
                          style={{ borderRadius: "50%", marginLeft: "20px" }}
                          alt="Owner Chalet"
                        />
                        <h6 style={{ fontWeight: "600" }}>
                          {getStatusBook.data.name_OwnerChalet}
                        </h6>
                      </div>
                      <Row>
                        <div
                          className="responsive-design"
                          style={{ display: "flex" }}
                        >
                          <Col md={6} sm={6} xs={6}>
                            <a
                              href={getStatusBook.data.phone_OwnerChalet}
                              style={{ textDecoration: "none" }}
                            >
                              <div
                                style={{
                                  color: "rgb(84, 122, 255)",
                                  border: "1px solid rgb(84, 122, 255)",
                                  height: "50px",
                                  width: "auto",
                                  borderRadius: "10px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                              >
                                <FaPhoneAlt
                                  size={15}
                                  style={{ marginLeft: "5px" }}
                                />
                                <span style={{ fontSize: "14px" }}>
                                  تواصل عبر الهاتف
                                </span>
                              </div>
                            </a>
                          </Col>
                          {/* Uncomment this section if needed */}
                          {/* <Col md={4} sm={4} xs={4}>
          <a href={getStatusBook.data.email_OwnerChalet} style={{ textDecoration: "none" }}>
            <div
              style={{
                color: "rgb(84, 122, 255)",
                border: "1px solid rgb(84, 122, 255)",
                height: "50px",
                width: "auto",
                borderRadius: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
                margin: "0px 4px",
              }}
            >
              <IoMail size={20} style={{ marginLeft: "5px" }} />
              <span style={{ fontSize: "14px" }}>تواصل عبر البريد</span>
            </div>
          </a>
        </Col> */}
                          <Col
                            md={6}
                            sm={6}
                            xs={6}
                            style={{ marginRight: "12px" }}
                          >
                            <a
                              href={getStatusBook.data.whatsapp_OwnerChalet}
                              style={{ textDecoration: "none" }}
                            >
                              <div
                                style={{
                                  color: "rgb(84, 122, 255)",
                                  border: "1px solid rgb(84, 122, 255)",
                                  height: "50px",
                                  width: "auto",
                                  borderRadius: "10px",
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  cursor: "pointer",
                                }}
                              >
                                <FaWhatsapp
                                  size={20}
                                  style={{ marginLeft: "5px" }}
                                />
                                <span style={{ fontSize: "14px" }}>
                                  تواصل عبر واتساب
                                </span>
                              </div>
                            </a>
                          </Col>
                        </div>
                      </Row>
                    </div>

                    <div
                      style={{
                        border: "1px solid rgba(0, 0, 0, 0.1)",
                        boxShadow: "0px 0px 0px 3px #8888880d",
                        borderRadius: "10px",
                        padding: "25px",
                        marginTop: "20px",
                      }}
                    >
                      <div>
                        <div style={{ display: "flex" }}>
                          <img
                            src={getStatusBook.data.image_area}
                            width={90}
                            height={90}
                            style={{ borderRadius: "10%" }}
                            alt="Area Image"
                          />
                          <div style={{ paddingRight: "15px" }}>
                            <h5 style={{ fontWeight: "400" }}>
                              {getStatusBook.data.name_area}
                            </h5>
                            <span
                              style={{
                                color: "#1717177a",
                                wordWrap: "break-word",
                                whiteSpace: "pre-wrap",
                                display: "block",
                                maxWidth: "350px",
                              }}
                              className="spanResponsive"
                            >
                              {getStatusBook.data.sub_description_area}
                            </span>
                          </div>
                        </div>

                        {/* <div>
      <span style={{ color: "#1717177a", wordWrap: "break-word", whiteSpace: "pre-wrap" }}>
  {getStatusBook.data.sub_description_area}
 
</span>

      </div> */}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col lg={12} xs={12} className="my-3">
                <span style={{ fontWeight: "500" }}>ايام حجز الشالية</span>
              </Col>

              <Row>
                {datesArray.map((date, index) => {
                  const formattedFromDate =
                    getStatusBook.data.from_day.map(formatArabicDate);

                  const formattedDate = format(date, "MM/dd/yyyy");

                  const isBooked =
                    new Date(formattedDate) >= new Date(formattedFromDate[0]) &&
                    new Date(formattedDate) <=
                      new Date(formattedFromDate[formattedFromDate.length - 1]);

                  const isToday =
                    format(date, "MM/dd/yyyy") ===
                    format(new Date(), "MM/dd/yyyy");

                  const backgroundColor = isToday
                    ? "#58CD55"
                    : isBooked
                    ? "#547AFF"
                    : "#E8E8E8";

                  const color = isToday ? "#fff" : isBooked ? "#fff" : "#000";
                  return (
                    <Col
                      key={index}
                      lg={2}
                      xs={1}
                      md={2}
                      className="mt-4 custom-col"
                    >
                      <div
                        className="circle-chalet"
                        style={{
                          width: "100px",
                          height: "100px",
                          borderRadius: "50%",
                          backgroundColor: backgroundColor, // Blue if booked, otherwise gray
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          color: color,
                        }}
                      >
                        <span style={{ fontSize: "18px", marginBottom: "5px" }}>
                          {format(date, "d")}
                        </span>
                        <span style={{ fontSize: "12px" }}>
                          {format(date, "MMM", { locale: ar })}
                        </span>
                      </div>
                    </Col>
                  );
                })}
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
              {/* <Col lg={12} xs={12} className="my-3">
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
            </Col> */}
              <Col
                lg={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Button
                  href={`/determine-chalet/${id}`}
                  style={{
                    backgroundColor: "#547AFF",
                    color: "white",
                    width: "350px",
                    marginTop: "20px",
                  }}
                >
                  حجز الأن
                </Button>
              </Col>
            </Row>
          ) : null
        ) : (
          <div style={{ height: "450px" }}>
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </Container>
      <Toaster />

      <MyFooter />
    </>
  );
};

export default ViewChalet;
