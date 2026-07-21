"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { absoluteUrl, siteConfig } from "@/constants/seo";

const EMAILJS_SERVICE_ID = "service_65u83zw";
const EMAILJS_TEMPLATE_ID = "template_ax4maxh";
const EMAILJS_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!EMAILJS_PUBLIC_KEY) {
      setStatus("error");
      setErrorMessage(
        "Email service is not configured yet. Please add your EmailJS public key."
      );
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          phone: form.phone.trim(),
          from_email: form.email.trim() || "Not provided",
          service: form.service.trim() || "General enquiry",
          message: form.message.trim(),
          reply_to: form.email.trim() || undefined,
          to_email: "tinadesignerstudiochennai@gmail.com",
          brand_name: siteConfig.name,
          site_url: absoluteUrl("/"),
          submitted_at: new Date().toLocaleString("en-IN", {
            dateStyle: "medium",
            timeStyle: "short",
            timeZone: "Asia/Kolkata",
          }),
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMessage(
        "Something went wrong while sending your message. Please try again or WhatsApp us."
      );
    }
  };

  return (
    <Stack spacing={3} component="form" onSubmit={handleSubmit}>
      {status === "success" ? (
        <Alert severity="success">
          Thank you! Your message has been sent. We&apos;ll get back to you soon.
        </Alert>
      ) : null}

      {status === "error" ? (
        <Alert severity="error">{errorMessage}</Alert>
      ) : null}

      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="name"
            label="Your Name"
            variant="outlined"
            required
            value={form.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            name="phone"
            label="Phone Number"
            variant="outlined"
            required
            value={form.phone}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        name="email"
        label="Email Address"
        type="email"
        variant="outlined"
        value={form.email}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        name="service"
        label="Service Interested In"
        variant="outlined"
        placeholder="e.g. Bridal Styling, Custom Designing"
        value={form.service}
        onChange={handleChange}
      />
      <TextField
        fullWidth
        name="message"
        label="Your Message"
        variant="outlined"
        multiline
        rows={5}
        required
        value={form.message}
        onChange={handleChange}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        size="large"
        fullWidth
        disabled={status === "sending"}
        sx={{ py: 1.75 }}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </Button>
    </Stack>
  );
}
