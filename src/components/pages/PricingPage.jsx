import React, { useContext, useState } from "react";
import HeaderPage from "./HeaderPage";
import { authContext } from "@/context/AuthContext";
import MarquePage from "./MarquePage";
import { Currency, Variable } from "lucide-react";

const PricingPage = () => {
  const { logOut } = useContext(authContext);
  const [price, setPrice] = useState(59)
  const [prices, setPrices] = useState(99)


  const handleLogOut = () => {
    logOut();
  };

   const handlePayment = () => {
    if (!window.PaystackPop) {
      toast.error("Paystack script is not loaded")
    }
    
    const Paystack = new window.PaystackPop()
    Paystack.newTransaction({
      key:import.meta.env.VITE_PAYSTACK_API,
      amount:price * 100,
      currency:"NGN",
      ref:`AS-${Date.now()}`,
      metadata:{
        custom_fields:[
          {
            display_name:"Premium",
            variable_name:"Premium",
            value:"naira"
          }
        ]
      }
    })
  }
  return (
    <div>
      <div className="prompt-container">
        <HeaderPage
          headerLogin={"Pricing"}
          headerSignUp={"Logout"}
          headerLinks={"/pricing"}
          onClickButton={handleLogOut}
        />
        <div className="my-container">
          <h1>Pricing Plan</h1>
        </div>
      </div>
       <div className="subcription-container">
        <div className="subcription-content">
          <div className="subcription-text-container">
            <p>Pricing Plans</p>
            <h1>Choose the Perfect Pricing Plan</h1>
          </div>
          <div className="subcription-grid-container">
            <div>
              <h4>Basic Plan</h4>
              <h1>Free</h1>
              <hr />
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                50 AI-generated images/month
              </p>
              <p>
                {" "}
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Standard resolution (1080p)
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Basic customization options
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Commercial usage rights
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Email support
              </p>
              <hr />
              {/* <button>Subcribe Now </button> */}
            </div>
            <div>
              <h4>Pro Plan</h4>
              <h1>{`$${price}`}</h1>
              <hr />
              <p>
                {" "}
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                200 AI-generated images/month
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                High resolution (4k)
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Advanced customization options
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Commercial usage rights
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Priority support
              </p>
              <hr />
              <button onClick={handlePayment}>Subcribe Now</button>
            </div>
            <div>
              <h4>Enterprize Plan</h4>
              <h1>{`$${prices}`}</h1>
              <hr />
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Unlimited AI-generated images
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Ultra HD resolution (8K)
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Custom AI model training
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                Dedicated account manager
              </p>
              <p>
                <span class="material-symbols-outlined relative top-2">
                  check
                </span>
                API access & integrations
              </p>
              <hr />
              <a href="https://paystack.shop/pay/z4hf25fupr"><button>Subcribe Now</button></a>
            </div>
          </div>
        </div>
      </div>
      <MarquePage />
    </div>
  );
};

export default PricingPage;
