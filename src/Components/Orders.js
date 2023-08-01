import "./Orders.css";
import bambooImg from "../Components/Assets/bamboo.jpg";
import bedImg from "../Components/Assets/bed.jpg";
import carromImg from "../Components/Assets/carrom.jpg";
import doorImg from "../Components/Assets/door.jpg";
import numberImg from "../Components/Assets/number.jpg";
import tableImg from "../Components/Assets/dining.jpg";
import { FiFacebook } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Orders = () => {
  const Data = [
    {
      image: bambooImg,
      name: "Wood Panel",
      Order: "3456754",
      Price: "₹ 4000",
      Quantity: 3,
    },
    {
      image: bedImg,
      name: "Wood Bed",
      Order: "3456754",
      Price: "₹ 4000",
      Quantity: 3,
    },
    {
      image: carromImg,
      name: "Carrom Board",
      Order: "3456754",
      Price: "₹ 4000",
      Quantity: 3,
    },
    {
      image: doorImg,
      name: "Safari Doors",
      Order: "3456754",
      Price: "₹ 4000",
      Quantity: 3,
    },
    {
      image: tableImg,
      name: "Dining Table",
      Order: "3456754",
      Price: "₹ 4000",
      Quantity: 3,
    },
    {
      image: numberImg,
      name: "Number Blocks",
      Order: "3456754",
      Price: "₹ 4000",
      Quantity: 3,
    },
  ];

  return (
    <div>
      <nav class="navbar m-auto bg-light">
        <div class="container ">
          <a class="navbar-brand ">My Orders</a>
        </div>
      </nav>

      <div>
        <div class="container row row-cols-1 row-cols-md-2 m-auto g-4">
          {Data.map((item) => {
            return (
              <div class="col">
                <div
                  class="card "
                  style={{
                    width: "500px",
                    marginBottom: "10px",
                    marginTop: "10px",
                    boxShadow: "2px 3px 4px gray",
                  }}
                >
                  <div class="card-body">
                    <div class="d-flex p-3">
                      <img
                        src={item.image}
                        style={{
                          height: "100px",
                          width: "80px",
                          borderRadius: "10px",
                        }}
                      />
                      <div>
                        <ul key={item} style={{ listStyle: "none" }}>
                          <li>{item.name}</li>
                          <li>
                            Order:{" "}
                            <span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                            </span>{" "}
                            {item.Order}
                          </li>
                          <li>
                            Price:{" "}
                            <span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>{" "}
                            {item.Price}
                          </li>
                          <li>
                            Quantity:{" "}
                            <span>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>{" "}
                            {item.Quantity}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <footer class="page-footer font-small indigo text-light">
          <div class="container text-center text-md-left">
            <div class="row mb-5">
              <div class="col-md-2  mx-auto">
                <p class="font-weight-bold text-uppercase mt-3 mb-4 d-">
                  STORE INFORMATION
                </p>

                <a>Office:12,(531)ct road,</a>
                <br />
                <a>Trademark number:9876543</a>
                <br />
                <a>chennai</a>
                <br />
                <a>india</a>
              </div>

              <div class="col-md-2 mx-auto">
                <p class="font-weight-bold text-uppercase mt-3 mb-4">
                  INFORMATION
                </p>

                <ul class="list-unstyled">
                  <li>
                    <a>ABOUT US</a>
                  </li>
                  <li>
                    <a>PRIVACY POLICY</a>
                  </li>
                  <li>
                    <a>PAYMENT POLICY</a>
                  </li>
                  <li>
                    <a>TERMS & CONDITIONS</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-2 mx-auto">
                <p class="font-weight-bold text-uppercase mt-3 mb-4">
                  CATEGORIES
                </p>

                <ul class="list-unstyled">
                  <li>
                    <a>PLY WOOD & BOARDS</a>
                  </li>
                  <li>
                    <a>SAWN TIMER</a>
                  </li>
                  <li>
                    <a>LAMINATES</a>
                  </li>
                  <li>
                    <a>HANFICRAFTS</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-2 mx-auto">
                <p class="font-weight-bold text-uppercase mt-3 mb-4">
                  CATEGORIES
                </p>

                <ul class="list-unstyled">
                  <li>
                    <a>KID TOYS</a>
                  </li>
                  <li>
                    <a>SPORTS WEAR</a>
                  </li>
                  <li>
                    <a>ADHESIVE</a>
                  </li>
                  <li>
                    <a>BEADINGS</a>
                  </li>
                </ul>
              </div>

              <div class="col-md-2 mx-auto">
                <p class="font-weight-bold text-uppercase mt-3 mb-4">
                  FOLLOW US ON
                </p>

                {/* <ul class="d-flex  list-unstyled ">
  <li>
    <a st><FiFacebook /></a>
  </li>
  <li>
    <a ><AiOutlineYoutube /></a>
  </li>
  <li>
    <a ><AiOutlineInstagram /></a>
  </li>

</ul> */}
                <div>
                  <a style={{ padding: "10px" }}>
                    <FiFacebook size={25} />
                  </a>
                  <a style={{ padding: "10px" }}>
                    <AiOutlineYoutube size={25} />
                  </a>
                  <a style={{ padding: "10px" }}>
                    <AiOutlineInstagram size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="footer text-center" style={{ background: "#642d03" }}>
            <p>Copyright © 2022 woodmarts All rights reserved</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Orders;
