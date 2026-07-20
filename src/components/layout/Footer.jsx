"use client";

import Link from "next/link";
import {
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import {
  brand,
  footerHighlights,
  socialLinks,
  whyChooseUs,
} from "@/constants/content";
import { routes } from "@/constants/routes";
import StudioLogo from "@/components/brand/StudioLogo";
import DeliveryBadge from "@/components/ui/DeliveryBadge";

const socialIconMap = {
  instagram: faInstagram,
  whatsapp: faWhatsapp,
};

function FooterColumn({ title, children }) {
  return (
    <Box>
      <Typography
        variant="subtitle1"
        sx={{ color: "secondary.main", mb: 2.5 }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

function HighlightsList() {
  return (
    <Stack spacing={1.5} component="ul" sx={{ listStyle: "none", pl: 0 }}>
      {footerHighlights.map((item) => (
        <Box
          key={item}
          component="li"
          sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
        >
          <Box
            sx={{
              width: 6,
              height: 6,
              bgcolor: "secondary.main",
              transform: "rotate(45deg)",
              flexShrink: 0,
            }}
          />
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}
          >
            {item}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
}

function FeaturesList() {
  return (
    <Stack spacing={1.25} component="ul" sx={{ listStyle: "none", pl: 0 }}>
      {whyChooseUs.map((item) => (
        <Typography
          key={item.title}
          component="li"
          variant="body2"
          sx={{ color: "rgba(255,255,255,0.78)", lineHeight: 1.7 }}
        >
          <Box component="span" sx={{ color: "secondary.main", fontWeight: 600 }}>
            {item.title}
          </Box>
          {" — "}
          {item.description}
        </Typography>
      ))}
    </Stack>
  );
}

function SocialLinks() {
  return (
    <Stack direction="row" spacing={1}>
      {socialLinks.map((social) => (
        <IconButton
          key={social.label}
          component="a"
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.label}
          sx={{
            color: "secondary.main",
            border: "1px solid",
            borderColor: "rgba(201, 169, 98, 0.4)",
            borderRadius: 0,
            "&:hover": {
              bgcolor: "secondary.main",
              color: "text.primary",
            },
          }}
        >
          <FontAwesomeIcon icon={socialIconMap[social.icon]} />
        </IconButton>
      ))}
    </Stack>
  );
}

function FooterAccordion({ title, children, defaultExpanded = false }) {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      sx={{
        bgcolor: "transparent",
        color: "common.white",
        borderBottom: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <AccordionSummary
        expandIcon={
          <Typography sx={{ color: "secondary.main", fontSize: "1.25rem" }}>
            +
          </Typography>
        }
        sx={{ px: 0 }}
      >
        <Typography variant="subtitle1" sx={{ color: "secondary.main" }}>
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ px: 0, pt: 0, pb: 2 }}>{children}</AccordionDetails>
    </Accordion>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "common.black",
        color: "common.white",
        mt: "auto",
      }}
    >
      <Container maxWidth="lg" sx={{ py: { xs: 5, md: 8 } }}>
        <Box
          data-aos="fade-up"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            justifyContent: "space-between",
            gap: 3,
            mb: { xs: 4, md: 6 },
            pb: { xs: 4, md: 6 },
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <Box>
            <Typography variant="subtitle1" sx={{ color: "secondary.main", mb: 1 }}>
              Express Service
            </Typography>
            <Typography variant="h4" sx={{ mb: 2, maxWidth: 420 }}>
              Your dream outfit, delivered with speed & elegance
            </Typography>
            <DeliveryBadge large />
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.65)", maxWidth: 320, lineHeight: 1.8 }}
          >
            From consultation to creation — experience boutique fashion with the
            promise of swift delivery without compromising on quality.
          </Typography>
        </Box>

        <Box sx={{ display: { xs: "block", md: "none" } }}>
          <FooterAccordion title="Highlights" defaultExpanded>
            <HighlightsList />
          </FooterAccordion>
          <FooterAccordion title="Why Choose Us">
            <FeaturesList />
          </FooterAccordion>
          <FooterAccordion title="Connect With Us">
            <SocialLinks />
            <Typography
              variant="body2"
              sx={{ color: "rgba(255,255,255,0.65)", mt: 2, lineHeight: 1.8 }}
            >
              Follow us for the latest collections, bridal inspirations, and
              behind-the-scenes craftsmanship.
            </Typography>
          </FooterAccordion>
          <FooterAccordion title="Quick Links">
            <Stack spacing={1}>
              {routes.map((route) => (
                <Typography
                  key={route.path}
                  component={Link}
                  href={route.path}
                  variant="body2"
                  sx={{
                    color: "rgba(255,255,255,0.78)",
                    "&:hover": { color: "secondary.main" },
                  }}
                >
                  {route.label}
                </Typography>
              ))}
            </Stack>
          </FooterAccordion>
        </Box>

        <Grid container spacing={4} sx={{ display: { xs: "none", md: "flex" } }}>
          <Grid size={{ md: 3 }}>
            <FooterColumn title="Highlights">
              <HighlightsList />
            </FooterColumn>
          </Grid>
          <Grid size={{ md: 5 }}>
            <FooterColumn title="Why Choose Us">
              <FeaturesList />
            </FooterColumn>
          </Grid>
          <Grid size={{ md: 2 }}>
            <FooterColumn title="Quick Links">
              <Stack spacing={1}>
                {routes.map((route) => (
                  <Typography
                    key={route.path}
                    component={Link}
                    href={route.path}
                    variant="body2"
                    sx={{
                      color: "rgba(255,255,255,0.78)",
                      "&:hover": { color: "secondary.main" },
                    }}
                  >
                    {route.label}
                  </Typography>
                ))}
              </Stack>
            </FooterColumn>
          </Grid>
          <Grid size={{ md: 2 }}>
            <FooterColumn title="Connect With Us">
              <SocialLinks />
              <Typography
                variant="body2"
                sx={{ color: "rgba(255,255,255,0.65)", mt: 2, lineHeight: 1.8 }}
              >
                Follow us for the latest collections, bridal inspirations, and
                behind-the-scenes craftsmanship.
              </Typography>
            </FooterColumn>
          </Grid>
        </Grid>
      </Container>

      <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />

      <Container maxWidth="lg">
        <Box
          sx={{
            py: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            textAlign: { xs: "center", sm: "left" },
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <StudioLogo size={44} />
            <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.55)" }}>
              © {new Date().getFullYear()} {brand.name}. All rights reserved.
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{ color: "secondary.main", letterSpacing: "0.1em" }}
          >
            Crafted with passion & elegance
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
