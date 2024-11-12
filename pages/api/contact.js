import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
  if (req.method !== "POST")
    return res.status(405).json({
      sucess: false,
      message: "405: method is not allow. Please make a POST request",
    });
  const contactData = {
    fullName: "Jonas",
    email: "test",
    subject: "booking",
    message: "Hey",
  };
  const { error } = await supabase.from("contact").insert([contactData]);
  if (error)
    return res.status(500).json({
      sucess: false,
      message: "Could not send your message, please try again",
    });

  res.status(200).json({
    sucess: true,
    message: "Thanks for your message! We will be in touch soon:)",
  });
}