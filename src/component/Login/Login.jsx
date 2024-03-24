import { Container, Row, Col,Form ,Button} from "react-bootstrap";
import loginImg from "../../assets/images/login.svg";
import './Login.css'
import { createLoginUser, createUserOwnerChalet } from "../../features/Auth/AuthSlicle";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

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




  const resOwner = useSelector((state) => state.auth.userOwnerChalet);

  const isLoadingOwner = useSelector((state) => state.auth.isLoading);
  const errorOwner = useSelector((state) => state.auth.error);

 console.log(resOwner);

  //  console.log(res.data.token)
  // if (res && res.data) {
  //   console.log(res.data.token);
  // }
  // // console.log(res.message);
  // console.log(res.success);

  //save data auth broker
  const OnSubmit = async (e) => {
    e.preventDefault();
   
    await dispatch(
      createLoginUser({
        Registration_code
      })
    );
  };




   //save data owner chalet
  // const OnSubmit = async (e) => {
  //   e.preventDefault();
   
  //   await dispatch(
  //     createUserOwnerChalet({
  //       Registration_code
  //     })
  //   );
  // };


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
                    <Button className='w-100'    onClick={(e) => OnSubmit(e)}
                    style={{backgroundColor:'#547AFF',borderRadius:'20px'}}>تسجيل الدخول</Button>
                </Col>

            </Col>
            </Row>
    </Container>
  )
}

export default Login