"use client";

import Image from "next/image";
import Link from "next/link";
import {
  faComments,
  faGem,
  faPalette,
  faRuler,
  faScissors,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FeatureCard from "@/components/ui/FeatureCard";
import GoldOrnament from "@/components/ui/GoldOrnament";
import LogoEngraveBackground from "@/components/ui/LogoEngraveBackground";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  serviceItems,
  servicesIntro,
  whyChooseUs,
} from "@/constants/content";

const iconMap = {
  palette: faPalette,
  gem: faGem,
  ruler: faRuler,
  scissors: faScissors,
  comments: faComments,
};

function ServiceRow({ service, index }) {
  const imageFirst = index % 2 === 0;

  return (
    <Box
      id={service.slug}
      data-aos="fade-up"
      sx={{
        py: { xs: 5, md: 8 },
        bgcolor: service.bgColor || "#FAFAFA",
        borderBottom: "1px solid",
        borderColor: "rgba(0,0,0,0.06)",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 4, md: 6 }}
          sx={{
            alignItems: "center",
            flexDirection: {
              xs: "column",
              md: imageFirst ? "row" : "row-reverse",
            },
          }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                aspectRatio: "4/3",
                maxWidth: { xs: "100%", md: 380 },
                ml: { md: imageFirst ? undefined : "auto" },
                overflow: "hidden",
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "common.white",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 12,
                  left: imageFirst ? 12 : "auto",
                  right: imageFirst ? "auto" : 12,
                  width: "40%",
                  height: "40%",
                  border: "2px solid",
                  borderColor: "secondary.main",
                  opacity: 0.5,
                  zIndex: 1,
                  pointerEvents: "none",
                },
              }}
            >
              <Image
                src={service.image}
                alt={service.imageAlt || `${service.title} at Tina Designer Studio`}
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ px: { md: imageFirst ? 2 : 0 } }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                <Box
                  sx={{
                    width: 56,
                    height: 56,
                    flexShrink: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "common.black",
                    color: "secondary.main",
                    fontSize: "1.2rem",
                  }}
                >
                  <FontAwesomeIcon icon={iconMap[service.icon]} />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "secondary.dark", fontSize: "0.72rem" }}
                >
                  Service {String(index + 1).padStart(2, "0")}
                </Typography>
              </Box>
              <Typography
                variant="h3"
                sx={{ fontSize: { xs: "1.65rem", md: "2.1rem" }, mb: 2 }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.95, fontSize: "1.05rem", maxWidth: 520 }}
              >
                {service.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default function ServicesContent() {
  return (
    <>
      <PageHero
        eyebrow="What We Offer"
        title="Our Services"
        description={servicesIntro}
        showBadge
        badgeLarge
      />

      <Box>
        {serviceItems.map((service, index) => (
          <ServiceRow key={service.title} service={service} index={index} />
        ))}
      </Box>

      <LogoEngraveBackground sx={{ py: { xs: 8, md: 14 }, bgcolor: "#F7F7F7" }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Tina Designer Studio Difference"
            subtitle="We go beyond tailoring — we craft experiences that celebrate your individuality with unmatched attention to detail."
          />
          <Grid container spacing={3}>
            {whyChooseUs.map((item, index) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <FeatureCard
                  index={index}
                  title={item.title}
                  description={item.description}
                  aos="flip-up"
                  aosDelay={index * 80}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </LogoEngraveBackground>

      <Box
        sx={{
          position: "relative",
          py: { xs: 10, md: 14 },
          textAlign: "center",
          bgcolor: "common.black",
          color: "common.white",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at center, rgba(201,169,98,0.12) 0%, transparent 70%)",
          }}
        />
        <Container maxWidth="sm" sx={{ position: "relative" }}>
          <GoldOrnament sx={{ mb: 3 }} />
          <Typography
            data-aos="fade-up"
            variant="h3"
            sx={{ mb: 2, fontSize: { xs: "1.75rem", md: "2.35rem" } }}
          >
            Need something made just for you?
          </Typography>
          <Typography
            data-aos="fade-up"
            data-aos-delay="100"
            sx={{ mb: 4, color: "rgba(255,255,255,0.72)", lineHeight: 1.9 }}
          >
            Let&apos;s discuss your vision — from fabric selection to the final fitting.
          </Typography>
          <Button
            data-aos="zoom-in"
            data-aos-delay="200"
            component={Link}
            href="/contactus"
            variant="contained"
            color="secondary"
            size="large"
            sx={{ color: "text.primary" }}
          >
            Contact Us
          </Button>
        </Container>
      </Box>
    </>
  );
}
