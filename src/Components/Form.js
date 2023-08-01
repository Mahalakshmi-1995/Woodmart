import image from "../Components/Assets/pic.jpg";
import { BsPerson } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineWallet } from "react-icons/ai";
import { AiFillUnlock } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const Form = () => {
const navigate = useNavigate()

  return (
    <div>
      <div class="container mt-5">
        <div class="row">
          <div class="col-sm-3">
           
            <div class="card  p-2 " style={{boxShadow:'2px 3px 4px gray'}}>
              <div style={{marginLeft: "65px"}}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    borderRadius: "20px",
                    background: "#EC822F",
                    textAlign: "center",
                    position: "absolute",
                    zIndex: 1,
                    top: "16%",
                    left: "50%",
                  }}
                >
                  <MdEdit
                    style={{ marginTop: "9px", color: "whitesmoke" }}
                    size="25px"
                  />
                </div>
                <img
                  src={image}
                  class="card-img-top"
                  alt="..."
                  style={{
                    height: "100px",
                    width: "100px",
                    borderRadius: "50px",
                    // background: "#EC822F",
                    textAlign: "center",
                    position: "relative",
                    // zIndex: -1
                  }}
                />
              </div>
              <div class="card-body mt-5 ">
                <div class="card-link d-flex">
                  <BsPerson size="20px" />
                  <p style={{ marginLeft: "15px" }}>Chandresekar</p>
                </div>
                <br />
                <div class="card-link d-flex">
                  <BiMobileAlt size="20px" />
                  <p style={{ marginLeft: "15px" }}>987654321</p>
                </div>
                <br />
                <div class="card-link d-flex">
                  <AiOutlineMail size="20px" />
                  <p style={{ marginLeft: "15px" }}>Chand@gmail.com</p>
                </div>
                <br />
                <div class="card-link d-flex">
                  <CiLocationOn size="20px" />
                  <p style={{ marginLeft: "15px" }}>Chennai</p>
                </div>
                <br />
              </div>
            </div>
          </div>
          <div class="col-sm-9">
         
            <div class="card m-auto p-4 " style={{boxShadow:'2px 3px 4px gray'}}>
              <div class="card-body">
                <form>
                  <div class="mb-3 ">
                    <input
                      type="name"
                      class="form-control m-auto "
                      placeholder="Name"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="number"
                      class="form-control  m-auto"
                      placeholder="Mobile"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control  m-auto"
                      placeholder="Address"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="dropdowm"
                      class="form-control m-auto"
                      placeholder="State"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      type="text"
                      class="form-control  m-auto"
                      placeholder="City"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div class="mb-3">
                    <input
                      type="number"
                      class="form-control m-auto"
                      placeholder="Pincode"
                      id="exampleInputPassword1"
                    />
                  </div>

                  <div class="text-center">
                    <button type="submit" class="btn w-25  text-light" >
                      UPDATE
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="divison mt-5">
        <div class="row row-cols-1 row-cols-md-2 mt-5 w-75 m-auto g-4">
          <div class="col">
            <div class="card" style={{boxShadow:'2px 3px 4px gray'}}>
              <div class="card-body">
                <h5 class="card-title">Woodmart Wallet</h5>
                <div class="d-flex">
                  <div
                    class="icons"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "20px",
                      background: "#EC822F",
                      textAlign: "center",
                    }}
                  >
                    <AiOutlineWallet
                      style={{ marginTop: "7px", color: "whitesmoke" }}
                      size="20px"
                    />
                  </div>
                  <p style={{ marginTop: "7px", marginLeft: "7px" }}>
                    RS. 450.000
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style={{boxShadow:'2px 3px 4px gray'}}>
              <div class="card-body">
                <h5 class="card-title">Security</h5>
                <div class="d-flex">
                  <div
                    class="icons"
                    style={{
                      height: "40px",
                      width: "40px",
                      borderRadius: "20px",
                      background: "#EC822F",
                      textAlign: "center",
                    }}
                  >
                    <AiFillUnlock
                      style={{ marginTop: "7px", color: "whitesmoke" }}
                      size="20px"
                    />
                  </div>
                  <p style={{ marginTop: "7px", marginLeft: "7px" }}>
                    Change Password
                  </p>{" "}
                  <IoIosArrowForward
                    style={{ marginTop: "9px", marginLeft: "17px" }}
                    size={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;

{
  /* <img src={image} class="card-img-top" style={{borderRadius: '50%'}} />

  <ul class="list-unstyled m-auto">
  <li>  <BsPerson /> Hnaish Kumar<li>
       </li>  <BiMobileAlt /> 987654321</li>
<li> <AiOutlineMail /> hanish@gmail.com</li>
<li> <CiLocationOn /> chennai</li>



</ul>

</div>
</div>
 */
}
