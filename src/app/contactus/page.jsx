import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import LocationMap from "@/components/contact/LocationMap";
import FaqSection from "@/components/seo/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactInfo } from "@/constants/content";
import {
  getBreadcrumbSchema,
  getContactPageSchema,
  getFAQSchema,
} from "@/constants/schema";
import { buildPageMetadata, pageSeo } from "@/constants/seo";

export const metadata = buildPageMetadata({
  ...pageSeo.contact,
  keywords: pageSeo.contact.keywords,
});

export default function ContactUsPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contactus" },
          ]),
          getContactPageSchema(),
          getFAQSchema(),
        ]}
      />
      <PageHero
        eyebrow="Get in Touch"
        title="Contact Us"
        description="Ready to begin your bespoke fashion journey? Reach out for consultations, measurements, or any enquiries — we'd love to hear from you."
        showBadge
        badgeLarge
      />

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <SectionHeading
                eyebrow="Reach Out"
                title="Let's Create Something Beautiful"
                align="left"
                aos="fade-right"
              />
              <ContactDetails />
              <Box
                data-aos="fade-right"
                data-aos-delay="400"
                sx={{
                  mt: 5,
                  p: 3,
                  bgcolor: "common.black",
                  color: "common.white",
                  borderLeft: "3px solid",
                  borderColor: "secondary.main",
                }}
              >
                <Typography variant="subtitle1" sx={{ color: "secondary.main", mb: 1 }}>
                  Studio Hours
                </Typography>
                <Typography variant="body2" sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
                  {contactInfo.studioHours.weekdays}
                  <br />
                  {contactInfo.studioHours.sunday}
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                data-aos="fade-left"
                sx={{
                  p: { xs: 3, md: 5 },
                  bgcolor: "#F7F7F7",
                  border: "1px solid",
                  borderColor: "divider",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    bgcolor: "secondary.main",
                  },
                }}
              >
                <Typography variant="h5" sx={{ mb: 1 }}>
                  Send a Message
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                  Fill in the form below and we&apos;ll get back to you within 24 hours.
                </Typography>
                <ContactForm />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: "#FAFAFA" }}>
        <Container maxWidth="md">
          <FaqSection
            title="Frequently Asked Questions"
            subtitle="Quick answers about our services, delivery, and consultations at Tina Designer Studio Chennai."
          />
        </Container>
      </Box>

      <LocationMap />
    </>
  );
}
