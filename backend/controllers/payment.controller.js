const axios = require("axios");
require("dotenv").config();
module.exports = {
  generatePayment: async (req, res) => {
    try {
      const { amount, developerTrackingId } = req.body;
      console.log(typeof amount, "amount is heeeere");

      const response = await axios.post(
        "https://developers.flouci.com/api/generate_payment",
        {
          app_token: process.env.FLOUCI_APP_TOKEN,
          app_secret: process.env.FLOUCI_APP_SECRET,
          amount: amount,
          accept_card: "true",
          session_timeout_secs: 1200,
          success_link: `http://localhost:5173/payment-success`,
          fail_link: `http://localhost:5173/payment-failure`,
          developer_tracking_id: developerTrackingId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      res.json(response.data);
    } catch (error) {
      console.error("Error generating payment:", error);
      res.status(500).json({ error: "Failed to generate payment" });
    }
  },

  verifyPayment: async (req, res) => {
    try {
      const { paymentId } = req.params;

      const response = await axios.get(
        `https://developers.flouci.com/api/verify_payment/${paymentId}`,
        {
          headers: {
            "Content-Type": "application/json",
            apppublic: process.env.FLOUCI_APP_TOKEN,
            appsecret: process.env.FLOUCI_APP_SECRET,
          },
        }
      );

      res.json(response.data);
    } catch (error) {
      console.error("Error verifying payment:", error);
      res.status(500).json({ error: "Failed to verify payment" });
    }
  },
};
