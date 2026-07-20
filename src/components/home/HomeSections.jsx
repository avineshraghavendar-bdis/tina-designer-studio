"use client";

import Link from "next/link";
import {
  faArrowRight,
  faGem,
  faScissors,
  faWandMagicSparkles,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { brand, whyChooseUs } from "@/constants/content";
import DeliveryBadge from "@/components/ui/DeliveryBadge";
import FeatureCard from "@/components/ui/FeatureCard";
import GoldOrnament from "@/components/ui/GoldOrnament";
import SectionHeading from "@/components/ui/SectionHeading";

const heroFeatures = [
  { icon: faWandMagicSparkles, label: "Custom Design", desc: "Bespoke creations tailored to you" },
  { icon: faGem, label: "Bridal Elegance", desc: "Unforgettable occasion wear" },
  { icon: faScissors, label: "Expert Tailoring", desc: "Precision in every stitch" },
];

export default function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "90vh", md: "95vh" },
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        bgcolor: "common.black",
        color: "common.white",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 15% 60%, rgba(201,169,98,0.22) 0%, transparent 50%), radial-gradient(ellipse at 85% 15%, rgba(201,169,98,0.12) 0%, transparent 40%), linear-gradient(180deg, #000 0%, #0A0A0A 100%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.03,
          backgroundImage: `linear-gradient(rgba(201,169,98,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,98,1) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          right: { xs: "-30%", md: "-10%" },
          transform: "translateY(-50%)",
          width: { xs: 400, md: 600 },
          height: { xs: 400, md: 600 },
          borderRadius: "50%",
          border: "1px solid rgba(201,169,98,0.1)",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, py: { xs: 10, md: 12 } }}>
        <Grid container spacing={{ xs: 6, md: 8 }} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              data-aos="fade-down"
              variant="subtitle1"
              sx={{ color: "secondary.main", mb: 1 }}
            >
              Bespoke Fashion Atelier
            </Typography>
            <GoldOrnament align="left" sx={{ mb: 3 }} />
            <Typography
              data-aos="fade-up"
              data-aos-delay="100"
              variant="h1"
              sx={{
                fontSize: { xs: "2.75rem", sm: "3.75rem", md: "4.75rem" },
                lineHeight: 1.08,
                mb: 2,
              }}
            >
              {brand.name}
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-delay="150"
              sx={{
                fontFamily: "var(--font-script), cursive",
                fontSize: { xs: "1.5rem", md: "1.85rem" },
                fontWeight: 400,
                color: "secondary.main",
                mb: 3,
                lineHeight: 1.4,
                background: "linear-gradient(135deg, #F0E2B8, #C9A962, #D9C48A)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {brand.tagline}
            </Typography>
            <Typography
              data-aos="fade-up"
              data-aos-delay="200"
              sx={{
                color: "rgba(255,255,255,0.72)",
                mb: 4,
                maxWidth: 500,
                lineHeight: 1.9,
                fontSize: { xs: "1rem", md: "1.1rem" },
              }}
            >
              Discover couture that celebrates your story — handcrafted with
              passion, precision, and timeless elegance.
            </Typography>
            <Stack
              data-aos="fade-up"
              data-aos-delay="300"
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                mb: 4,
                alignItems: { xs: "stretch", sm: "center" },
              }}
            >
              <Button
                component={Link}
                href="/services"
                variant="contained"
                color="secondary"
                endIcon={<FontAwesomeIcon icon={faArrowRight} />}
                sx={{ color: "text.primary" }}
              >
                Explore Services
              </Button>
              <Button
                component={Link}
                href="/contactus"
                variant="outlined"
                sx={{
                  borderColor: "rgba(255,255,255,0.35)",
                  color: "common.white",
                  "&:hover": {
                    borderColor: "secondary.main",
                    bgcolor: "rgba(201,169,98,0.1)",
                  },
                }}
              >
                Book Consultation
              </Button>
            </Stack>
            <Box data-aos="zoom-in" data-aos-delay="400">
              <DeliveryBadge size="hero" />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              data-aos="fade-left"
              data-aos-delay="200"
              sx={{
                position: "relative",
                p: { xs: 3, md: 4 },
                border: "1px solid rgba(201,169,98,0.25)",
                bgcolor: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(12px)",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: -1,
                  left: "20%",
                  right: "20%",
                  height: 2,
                  background: "linear-gradient(90deg, transparent, #C9A962, transparent)",
                },
              }}
            >
              <Typography variant="subtitle1" sx={{ color: "secondary.main", mb: 3 }}>
                The Atelier Experience
              </Typography>
              <Stack spacing={0}>
                {heroFeatures.map((feature, index) => (
                  <Box
                    key={feature.label}
                    data-aos="fade-up"
                    data-aos-delay={300 + index * 100}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2.5,
                      py: 3,
                      borderBottom:
                        index < heroFeatures.length - 1
                          ? "1px solid rgba(255,255,255,0.08)"
                          : "none",
                    }}
                  >
                    <Box
                      sx={{
                        width: 52,
                        height: 52,
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "linear-gradient(135deg, rgba(201,169,98,0.2), rgba(201,169,98,0.05))",
                        border: "1px solid rgba(201,169,98,0.4)",
                        color: "secondary.main",
                      }}
                    >
                      <FontAwesomeIcon icon={feature.icon} />
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ fontSize: "1.05rem", mb: 0.25 }}>
                        {feature.label}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.55)" }}>
                        {feature.desc}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
          opacity: 0.4,
        }}
      >
        <Typography variant="caption" sx={{ letterSpacing: "0.2em", fontSize: "0.65rem" }}>
          SCROLL
        </Typography>
        <Box
          sx={{
            width: 1,
            height: 40,
            bgcolor: "secondary.main",
            animation: "scrollLine 2s ease-in-out infinite",
            "@keyframes scrollLine": {
              "0%, 100%": { transform: "scaleY(0.3)", opacity: 0.3 },
              "50%": { transform: "scaleY(1)", opacity: 1 },
            },
          }}
        />
      </Box>
    </Box>
  );
}

export function WhyChooseSection() {
  return (
    <Box sx={{ py: { xs: 8, md: 14 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="The Art of Personalised Fashion"
          subtitle="Every stitch tells your story. We blend artisan craftsmanship with contemporary design to create garments that feel unmistakably yours."
        />
        <Grid container spacing={3}>
          {whyChooseUs.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <FeatureCard
                index={index}
                title={item.title}
                description={item.description}
                aosDelay={index * 80}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export function CTASection() {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 10, md: 14 },
        bgcolor: "common.black",
        color: "common.white",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(201,169,98,0.15) 0%, transparent 70%)",
        }}
      />
      <Container maxWidth="md" sx={{ position: "relative" }}>
        <Typography
          data-aos="fade-up"
          variant="subtitle1"
          sx={{ color: "secondary.main", mb: 1 }}
        >
          Begin Your Journey
        </Typography>
        <GoldOrnament sx={{ mb: 3 }} />
        <Typography
          data-aos="fade-up"
          data-aos-delay="100"
          variant="h2"
          sx={{ mb: 3, fontSize: { xs: "2rem", md: "2.85rem" } }}
        >
          Ready to wear something extraordinary?
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-delay="200"
          sx={{ mb: 5, color: "rgba(255,255,255,0.72)", lineHeight: 1.9, maxWidth: 520, mx: "auto" }}
        >
          Schedule a consultation and let our designers bring your vision to life
          — from the first sketch to the final fitting.
        </Typography>
        <Button
          data-aos="zoom-in"
          data-aos-delay="300"
          component={Link}
          href="/contactus"
          variant="contained"
          color="secondary"
          size="large"
          endIcon={<FontAwesomeIcon icon={faArrowRight} />}
          sx={{ color: "text.primary" }}
        >
          Get in Touch
        </Button>
      </Container>
    </Box>
  );
}
