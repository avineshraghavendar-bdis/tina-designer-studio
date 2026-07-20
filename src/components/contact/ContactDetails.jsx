"use client";

import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { contactInfo, studioLocation } from "@/constants/content";

const contactItems = [
  {
    icon: faPhone,
    label: "Phone",
    value: contactInfo.phone || "Available on WhatsApp",
    href: contactInfo.phone ? `tel:${contactInfo.phone}` : contactInfo.whatsapp,
  },
  {
    icon: faEnvelope,
    label: "Email",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: faLocationDot,
    label: "Studio",
    value: studioLocation.address,
    href: studioLocation.mapsUrl,
  },
];

export default function ContactDetails() {
  return (
    <Stack spacing={2.5}>
      {contactItems.map((info, index) => (
        <Box
          key={info.label}
          component="a"
          href={info.href}
          target={info.label === "Studio" ? "_blank" : undefined}
          rel={info.label === "Studio" ? "noopener noreferrer" : undefined}
          data-aos="fade-right"
          data-aos-delay={index * 100}
          sx={{
            display: "flex",
            gap: 2.5,
            alignItems: "flex-start",
            p: 2.5,
            border: "1px solid",
            borderColor: "divider",
            textDecoration: "none",
            color: "inherit",
            transition: "border-color 0.3s",
            "&:hover": { borderColor: "secondary.main" },
          }}
        >
          <Box
            sx={{
              width: 48,
              height: 48,
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "common.black",
              color: "secondary.main",
            }}
          >
            <FontAwesomeIcon icon={info.icon} />
          </Box>
          <Box>
            <Typography variant="subtitle1" sx={{ color: "secondary.dark", mb: 0.5, fontSize: "0.7rem" }}>
              {info.label}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {info.value}
            </Typography>
          </Box>
        </Box>
      ))}
    </Stack>
  );
}
