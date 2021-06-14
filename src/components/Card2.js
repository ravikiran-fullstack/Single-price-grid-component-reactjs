import React from "react";

const Card2 = () => {
  return (
    <div className="card2">
      <div>
        <h6 className="subscriptionHeading">Monthly Subscription</h6>
      </div>

      <div>
        <span className="subscriptionPrice">$29 </span>
        <span className="subscriptionText">per month</span>
      </div>

      <div>
        <p className="subscriptionInfo">Full access for less than $1 a day</p>
      </div>

      <div>
        <button className="signUpButton">Sign Up</button>
      </div>
    </div>
  );
};

export default Card2;
