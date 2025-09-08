import { baseUrl } from "../index";


export const initiatePayment = async (initiatePaymentData) => {
  try {
    const response = await fetch(`${baseUrl}/initiate-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),
      },
      body: JSON.stringify(initiatePaymentData),
    });
    if (response.ok) {
      return await response.json();
    }
  
  } catch (error) {
    console.error("Error initiating payment:", error);
  }
};


export const verifyPayment = async (verifyPaymentData) => {
  try {
    const response = await fetch(`${baseUrl}/verify-payment`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(verifyPaymentData),
    });
    if (response.ok) {
      return await response.json();
    }
  
  } catch (error) {
    console.error("Error creating user:", error);
  }
};

