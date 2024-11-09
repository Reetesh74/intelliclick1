import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/PaymentStatus.css";
import ProgressBar from "./ProgressBar/ProgressBar";

const PaymentStatus = () => {
  const [paymentEntries, setPaymentEntries] = useState([
    { paymentMethod: "", paymentId: "" },
  ]);
  const navigate = useNavigate();

  const steps = [
    "Enrollment Details",
    "Payments Verification",
    "Confirm Order",
  ];

  const [currentStep, setCurrentStep] = useState(1); 

  const handlePaymentMethodChange = (index, event) => {
    const newPaymentEntries = [...paymentEntries];
    newPaymentEntries[index].paymentMethod = event.target.value;
    setPaymentEntries(newPaymentEntries);
  };

  const handlePaymentIdChange = (index, event) => {
    const newPaymentEntries = [...paymentEntries];
    newPaymentEntries[index].paymentId = event.target.value;
    setPaymentEntries(newPaymentEntries);
  };

  const handleAddPayment = () => {
    setPaymentEntries([
      ...paymentEntries,
      { paymentMethod: "", paymentId: "" },
    ]);
  };

  const handleRemovePayment = (index) => {
    const newPaymentEntries = paymentEntries.filter((_, i) => i !== index);
    setPaymentEntries(newPaymentEntries);
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      navigate("/");
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      navigate("/payment-status");
    }
  };

  return (
    <div className="payment-status-container">
      <h2>Payment Details</h2>
      <p className="subtitle">
        *Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
      </p>

      <ProgressBar currentStep={currentStep} />

      <div className="stepper">
        {steps.map((label, index) => (
          <div key={index} className="step">
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="payment-section">
        {paymentEntries.map((entry, index) => (
          <div key={index} className="payment-entry">
            <div
              className="payment"
              style={{
                backgroundColor: index === 0 ? "#b7d1db" : "#de87bd6b",
              }}
            >
              <h3 className="payment-tag">Payment</h3>
              <button
                className="close-button"
                onClick={() => handleRemovePayment(index)}
                style={{ display: index > 0 ? "inline-block" : "none" }}
              >
                ✕
              </button>
            </div>
            <div className="method-id-payment">
              <div style={{ width: "420px" }}>
                Payment Method
                <select
                  value={entry.paymentMethod}
                  onChange={(event) => handlePaymentMethodChange(index, event)}
                  style={{ backgroundColor: "#edf3f5" }}
                >
                  <option value="" disabled>
                    Select
                  </option>
                  <option value="creditCard">Credit Card</option>
                  <option value="debitCard">Debit Card</option>
                  <option value="paypal">PayPal</option>
                </select>
              </div>

              <div style={{ width: "420px" }}>
                <span>Payment ID</span>
                <input
                  type="text"
                  placeholder="Payment ID"
                  value={entry.paymentId}
                  onChange={(event) => handlePaymentIdChange(index, event)}
                  style={{ backgroundColor: "#edf3f5" }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="add-payment-button" onClick={handleAddPayment}>
        +
      </button>

      <div className="button-section">
        <button className="back-button" onClick={handleBack} style={{
            color: "white",
            backgroundColor: "#0b3059",
            borderradius: "4px",
            cursor:"pointer"
          }}>
          Back
        </button>
        <button className="next-button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaymentStatus;
