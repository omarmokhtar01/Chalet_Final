import { Container, Row, Col,Form ,Button} from "react-bootstrap";
import loginImg from "../../assets/images/login.svg";
import './Login.css'
import { createLoginUser, createUserOwnerChalet } from "../../features/Auth/AuthSlicle";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Login = () => {

   const dispatch = useDispatch();
  //const navigate = useNavigate();
  const [state, setState] = useState({
    Registration_code: ""
   
  }); 

  // Destructure state object for easier access
  const { Registration_code } = state;

  // Function to handle input changes
  const handleInputChange = (fieldName) => (e) => {
    setState((prevState) => ({ ...prevState, [fieldName]: e.target.value }));
  };


  // const res = useSelector((state) => state.auth.userLogin);

  // const isLoading = useSelector((state) => state.auth.isLoading);
  // const error = useSelector((state) => state.auth.error);

  // console.log(res);


  const ownerLocalStorage = localStorage.getItem('owner')


  const resOwner = useSelector((state) => state.auth.userOwnerChalet);

  const isLoadingOwner = useSelector((state) => state.auth.isLoadingOwner);
  const errorOwner = useSelector((state) => state.auth.error);

  const resBroker = useSelector((state) => state.auth.userLogin)
  const isLoadingBroker = useSelector((state) => state.auth.isLoadingBroker);

  const ownerDataStr =  localStorage.getItem("owner")
  const brokerDataStr = localStorage.getItem("broker")

useEffect(()=>{
  if (isLoadingOwner===false) {
    if (resOwner && resOwner.data) {
        console.log(resOwner.data);
        if (ownerDataStr || brokerDataStr) {
          // Data exists, so perform removal
          if (ownerDataStr) {
              localStorage.removeItem("owner"); // Remove owner data from localStorage
          }
          if (brokerDataStr) {
              localStorage.removeItem("broker"); // Remove broker data from localStorage
          }
        }
        localStorage.setItem("owner", JSON.stringify(resOwner.data))

        setTimeout(() => {
        window.location.href=`/view-chalet-owner/${resOwner.data.id}`
      }, 1000);

      }else{
        console.log("no data available");
      }
  }



},[dispatch,resOwner,isLoadingOwner])




useEffect(()=>{
  if (isLoadingBroker===false) {
    if (resBroker && resBroker.data) {
        console.log(resBroker.data);
        if (ownerDataStr || brokerDataStr) {
          // Data exists, so perform removal
          if (ownerDataStr) {
              localStorage.removeItem("owner"); // Remove owner data from localStorage
          }
          if (brokerDataStr) {
              localStorage.removeItem("broker"); // Remove broker data from localStorage
          }
        }
        localStorage.setItem("broker", JSON.stringify(resBroker.data))
        setTimeout(() => {
          window.location.href="/home"
        }, 1000);
      }else{
        console.log("no data available");
      }
  }
},[dispatch,resBroker,isLoadingBroker])
  //  console.log(res.data.token)
  // if (res && res.data) {
  //   console.log(res.data.token);
  // }
  // // console.log(res.message);
  // console.log(res.success);

  //save data auth broker
  const OnSubmitBroker = async (e) => {
    e.preventDefault();
    // Assuming dispatch is a function available in your component
    await dispatch(
      createLoginUser({
        Registration_code
      })
    );
  };

  const OnSubmitOwner = async (e) => {
    e.preventDefault();
    // Assuming dispatch is a function available in your component
    await dispatch(
      createUserOwnerChalet({
        Registration_code
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption === 'option1') {
      OnSubmitBroker(e);
    } else if (selectedOption === 'option2') {
      OnSubmitOwner(e);
    }
  };
  const [selectedOption, setSelectedOption] = useState('option1');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };



  return (
    <Container>
        <Row className="justify-content-center text-center">
            <Col xs={12} lg={12} style={{width:'30%'}} className="login-page">
            <Col xs={12} lg={12}>
                <img src={loginImg} alt='login' className="w-100 mt-5"/>
                </Col>
                <Col xs={12} lg={12}>
                <h3>ادخل كود التسجيل</h3></Col>

                 <Form.Control  onChange={handleInputChange("Registration_code")}
                    value={Registration_code}
                 type="password" maxLength={6} placeholder="ادخل كود التسجيل"  className='w-100 my-5' 
                  style={{textAlignLast:'start',borderRadius:'20px',backgroundColor:'rgb(249 249 249 / 41%)'}}/>

                <Col xs={12} lg={12}>
                <Form onSubmit={handleSubmit}>
      <Form.Check
        type="radio"
        label="سمسار"
        name="radioGroup"
        value="option1"
        checked={selectedOption === "option1"}
        onChange={handleOptionChange}
      />
      <Form.Check
        type="radio"
        label="مالك"
        name="radioGroup"
        value="option2"
        checked={selectedOption === "option2"}
        onChange={handleOptionChange}
      />
      <Button className='w-100 mt-2' type="submit">تسجيل الدخول</Button>
    </Form>
                    {/* style={{backgroundColor:'#547AFF',borderRadius:'20px'}}>تسجيل الدخول</Button> */}
                </Col>

            </Col>
            </Row>
    </Container>
  )
}

export default Login