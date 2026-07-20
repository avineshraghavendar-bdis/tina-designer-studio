"use client";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { faqItems } from "@/constants/faq";

export default function FaqSection({ title = "Frequently Asked Questions", subtitle }) {
  return (
    <Box component="section" aria-labelledby="faq-heading">
      <Typography
        id="faq-heading"
        variant="h2"
        sx={{
          fontSize: { xs: "1.85rem", md: "2.35rem" },
          mb: subtitle ? 1.5 : 3,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
      {subtitle ? (
        <Typography
          color="text.secondary"
          sx={{ mb: 4, lineHeight: 1.85, maxWidth: 640 }}
        >
          {subtitle}
        </Typography>
      ) : null}

      <Box>
        {faqItems.map((item, index) => (
          <Accordion
            key={item.question}
            data-aos="fade-up"
            data-aos-delay={index * 60}
            disableGutters
            elevation={0}
            sx={{
              border: "1px solid",
              borderColor: "divider",
              mb: 1.5,
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary
              expandIcon={
                <Typography sx={{ color: "secondary.main", fontWeight: 700 }}>
                  +
                </Typography>
              }
              aria-controls={`faq-panel-${index}`}
              id={`faq-header-${index}`}
            >
              <Typography
                component="h3"
                sx={{
                  fontFamily: "var(--font-display)",
                  fontSize: { xs: "1rem", md: "1.1rem" },
                  pr: 2,
                }}
              >
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails id={`faq-panel-${index}`}>
              <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
                {item.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}
