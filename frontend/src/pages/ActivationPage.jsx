
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { server } from "../server";

const ActivationPage = () => {
  const { activation_token } = useParams();
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (activation_token) {
      const activateEmail = async () => {
        try {
          console.log("Sending activation token:", activation_token);
          const res = await axios.post(
            `${server}/user/activation`,
            { activation_token },
            { headers: { "Content-Type": "application/json" } }
          );
          console.log("Server response:", res.data.message);
          setSuccess(true);
        } catch (err) {
          console.error("Activation error:", err.response);
          setError(
            err.response?.data?.message || "An unexpected error occurred."
          );
        }
      };
      
      activateEmail();
    }
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.2rem",
        fontWeight: "bold",
        color: success ? "green" : "red",
      }}
    >
      {success ? (
        <p>✅ Your account has been activated successfully!</p>
      ) : error ? (
        <p>❌ Activation failed: {error}</p>
      ) : (
        <p>⏳ Activating your account...</p>
      )}
    </div>
  );
};

export default ActivationPage;
