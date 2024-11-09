import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar/ProgressBar";
import "./styles/PaymentDetails.css";

const PaymentDetails = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [formValues, setFormValues] = useState({
    planType: "",
    validity: "",
    subjects: "",
    class: "",
    board: "",
    state: "",
    coupon: "6000",
    finalPrice: "6000",
  });

  const handleChange = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleNext = () => {
    navigate("/payment-status");
  };

  return (
    <div className="payment-details-container">
      <div className="header-section">
        <h2>Payment Details</h2>
        <p className="subtitle">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."
        </p>
      </div>
      <div className="payment-details-container">
        <ProgressBar currentStep={currentStep} />
      </div>

      <div className="row1">
        <div className="form-control">
          <label>Plan Type</label>
          <select
            name="planType"
            value={formValues.planType}
            onChange={handleChange}
          >
            <option value="">Select Plan Type</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annual">Annual</option>
          </select>
        </div>

        <div className="form-control">
          <label>Validity</label>
          <select
            name="validity"
            value={formValues.validity}
            onChange={handleChange}
          >
            <option value="">Select Validity</option>
            <option value="1 month">1 Month</option>
            <option value="3 months">3 Months</option>
            <option value="1 year">1 Year</option>
          </select>
        </div>

        <div className="form-control">
          <label>Subjects</label>
          <select
            name="subjects"
            value={formValues.subjects}
            onChange={handleChange}
          >
            <option value="">Select Subjects</option>
            <option value="math">Math</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="languages">Languages</option>
          </select>
        </div>
      </div>

      <div className="row2">
        <div className="form-control">
          <label>Class</label>
          <select name="class" value={formValues.class} onChange={handleChange}>
            <option value="">Select Class</option>
            <option value="10">Class 10</option>
            <option value="12">Class 12</option>
            <option value="undergraduate">Undergraduate</option>
          </select>
        </div>

        <div className="form-control">
          <label>Board</label>
          <select name="board" value={formValues.board} onChange={handleChange}>
            <option value="">Select Board</option>
            <option value="cbse">CBSE</option>
            <option value="icse">ICSE</option>
            <option value="state">State Board</option>
          </select>
        </div>

        <div className="form-control">
          <label>State</label>
          <select name="state" value={formValues.state} onChange={handleChange}>
            <option value="">Select State</option>
            <option value="maharashtra">Maharashtra</option>
            <option value="karnataka">Karnataka</option>
            <option value="delhi">Delhi</option>
          </select>
        </div>
      </div>

      <div className="coupon-finalprice-section">
        <div className="form-control">
          <label>Coupon</label>
          <input
            type="text"
            name="coupon"
            value={formValues.coupon}
            onChange={handleChange}
          />
        </div>

        <div className="coupon-finalprice-section-box">
          <div className="price-section-control">
            <div className="form-control">
              <label>Final Price</label>
              <input
                type="text"
                name="finalPrice"
                value={formValues.finalPrice}
                onChange={handleChange}
              />
            </div>
            <div>
              <span className="min" style={{ color: "green" }}>
                min 5999
              </span>
              <span>-</span>
              <span className="max" style={{ color: "red" }}>
                max 7999
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="button-section">
        <button className="back-button">Back</button>
        <button
          className="next-button"
          onClick={handleNext}
          style={{
            color: "white",
            backgroundColor: "#0b3059",
            borderradius: "4px",
            cursor: "pointer",
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentDetails;
