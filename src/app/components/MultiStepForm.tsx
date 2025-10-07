"use client";

import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const MultiStepForm = ({
  onSubmit,
}: {
  onSubmit: (data: { firstName: string; email: string }) => void;
}) => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else onSubmit({ firstName, email });
  };

  return (
    <section style={{ justifyContent: "space-between" }}>
      <form onSubmit={handleSubmit}>
        <div className="form-block">
          {step === 1 && (
            <>
              <h4>Let’s start with the basics. Type in your first name.</h4>
              <div style={{ flexGrow: 1 }}></div>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 350,
                  margin: "0 auto",
                }}
              >
                <input
                  id="firstName"
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <button className="btn-form" type="submit">
                  <FaArrowUp style={{ color: "var(--foreground)" }} />
                </button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <h4>How should we contact you? Type in your email address.</h4>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 350,
                  margin: "0 auto",
                }}
              >
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button className="btn-form" type="submit">
                  <FaArrowUp style={{ color: "var(--foreground)" }} />
                </button>
              </div>
            </>
          )}
        </div>
      </form>
    </section>
  );
};

export default MultiStepForm;
