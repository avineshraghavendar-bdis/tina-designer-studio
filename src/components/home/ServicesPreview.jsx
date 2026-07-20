"use client";

import Link from "next/link";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { serviceItems } from "@/constants/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesPreview() {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#F7F7F7" }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Our Expertise"
          title="Signature Services"
          subtitle="From concept to completion — every service is designed to deliver a personalised, luxury experience."
        />
        <Grid container spacing={3}>
          {serviceItems.map((service, index) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                component={Link}
                href="/services"
                data-aos="fade-up"
                data-aos-delay={index * 80}
                sx={{
                  display: "block",
                  p: 4,
                  height: "100%",
                  bgcolor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.35s ease",
                  "&:hover": {
                    borderColor: "secondary.main",
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 50px rgba(0,0,0,0.07)",
                    "& .service-arrow": {
                      opacity: 1,
                      transform: "translateX(4px)",
                    },
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{ color: "secondary.dark", mb: 1.5, fontSize: "0.7rem" }}
                >
                  0{index + 1}
                </Typography>
                <Typography variant="h5" sx={{ mb: 1.5 }}>
                  {service.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ lineHeight: 1.8, mb: 2 }}
                >
                  {service.description.slice(0, 100)}...
                </Typography>
                <Typography
                  className="service-arrow"
                  variant="button"
                  sx={{
                    color: "secondary.dark",
                    fontSize: "0.7rem",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                    opacity: 0.7,
                    transition: "all 0.3s ease",
                  }}
                >
                  Learn More
                  <FontAwesomeIcon icon={faArrowRight} size="sm" />
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 6 }} data-aos="fade-up">
          <Button
            component={Link}
            href="/services"
            variant="outlined"
            endIcon={<FontAwesomeIcon icon={faArrowRight} />}
            sx={{
              borderColor: "common.black",
              color: "common.black",
              px: 4,
              "&:hover": {
                borderColor: "secondary.main",
                bgcolor: "rgba(201,169,98,0.08)",
              },
            }}
          >
            View All Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
