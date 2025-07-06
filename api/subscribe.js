import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { email } = req.body;

  const apiKey = process.env.BREVO_API_KEY;
  const listId = parseInt(process.env.BREVO_LIST_ID);

  try {
    const response = await axios.post(
      "https://api.sendinblue.com/v3/contacts",
      {
        email: email,
        listIds: [listId],
      },
      {
        headers: {
          "Content-Type": "application/json",
          "api-key": apiKey,
        },
      }
    );

    console.log("Response from Brevo:", response.data);
    res.status(200).json({ message: "Subscription successful" });
  } catch (error) {
    const brevoMessage = error.response?.data?.message;
    const status = error.response?.status;

    console.error("Error subscribing:", brevoMessage || error.message);

    if (
      status === 400 &&
      brevoMessage &&
      brevoMessage.toLowerCase().includes("email is already associated")
    ) {
      return res.status(409).json({ message: "Email already subscribed" });
    }

    res.status(500).json({ message: "Failed to subscribe" });
  }
}
