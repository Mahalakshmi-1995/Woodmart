import {CiMobile4} from 'react-icons/ci'
import {ImEye} from 'react-icons/im'
import {AiOutlineYoutube} from 'react-icons/ai'
import './Login.css'
import { useNavigate } from 'react-router-dom'

const Login = ()=> {
const navigate = useNavigate()

return (
    <div class='mt-5'>
        <div class="card m-auto p-4 w-50  " >
  <div class="card-body">
    <h5 class="card-title text-center">Seller Login</h5>
    <form>
  <div class="mb-3 ">
    {/* <CiMobile4 />  */}
    <input type="email" class="form-control w-50 m-auto " placeholder='Email id' id="exampleInputEmail1" aria-describedby="emailHelp" />
    
  </div>
  <div class="mb-3">
    {/* <ImEye /> */}
     <input type="password" class="form-control w-50 m-auto" placeholder='Password' id="exampleInputPassword1" />
     <div class="col-md-6  ml-auto ">
 <h6>Forgot Password?</h6>

 </div>
  </div>



 <div class="text-center">
  <button type="submit" class="btn w-25  text-light"  >LOGIN</button>
  </div>
  <div class=" text-center ">
  <ul class=" d-flex justify-content-center mb-2 mb-lg-0">
       
   <a class=" text-dark mr-2"  href="#">Don't have an account?</a>
  <a class="text-new text-dark mr-5" href="#"> New Registration </a>       

      </ul>

 </div>

</form>
  </div>
</div>
    </div>
)

}
export default Login