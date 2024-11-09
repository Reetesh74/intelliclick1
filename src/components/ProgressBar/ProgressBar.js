import React from "react";
import { FaUserCheck, FaCreditCard, FaCheckCircle } from "react-icons/fa";
import "./ProgressBar.css";

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { label: "Enrollment Details", icon: <FaUserCheck /> },
    { label: "Payments Verification", icon: <FaCreditCard /> },
    { label: "Confirm Order", icon: <FaCheckCircle /> },
  ];

  return (
    <div className="progress-bar">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${currentStep >= index ? "active" : ""}`}
        >
          <div className="icon">{step.icon}</div>
          <span className="step-label">{step.label}</span>
        </div>
      ))}
    </div>
  );
};

export default ProgressBar;
