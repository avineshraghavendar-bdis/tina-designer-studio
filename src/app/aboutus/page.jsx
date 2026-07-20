import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FounderSection from "@/components/about/FounderSection";
import JsonLd from "@/components/seo/JsonLd";
import DecorativePanel from "@/components/ui/DecorativePanel";
import FeatureCard from "@/components/ui/FeatureCard";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutContent, whyChooseUs } from "@/constants/content";
import {
  getAboutPageSchema,
  getBreadcrumbSchema,
} from "@/constants/schema";
import { buildPageMetadata, pageSeo } from "@/constants/seo";

export const metadata = buildPageMetadata({
  ...pageSeo.about,
  image: "/images/founder-tina-balaji.png",
  keywords: pageSeo.about.keywords,
});

export default function AboutUsPage() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Us", path: "/aboutus" },
          ]),
          getAboutPageSchema(),
        ]}
      />
      <PageHero
        eyebrow="Who We Are"
        title={aboutContent.title}
        showBadge
      />

      <FounderSection />

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <DecorativePanel
                quote="Passion & Elegance in Every Stitch"
                label="Our Craft"
                aspectRatio="3/4"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 7 }}>
              <SectionHeading
                eyebrow="Our Philosophy"
                title="Where Creativity Meets Craftsmanship"
                align="left"
                aos="fade-left"
              />
              <Typography
                data-aos="fade-left"
                data-aos-delay="100"
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.95, fontSize: "1.1rem", mb: 3 }}
              >
                {aboutContent.description}
              </Typography>
              <Typography
                data-aos="fade-left"
                data-aos-delay="200"
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.95, fontSize: "1.05rem", mb: 4 }}
              >
                At Tina Designer Studio, we believe fashion is deeply personal.
                Every garment is a collaboration — shaped by your personality,
                your occasion, and your dreams. From the first consultation to
                the final reveal, we pour heart and artistry into every detail.
              </Typography>
              <Grid container spacing={2}>
                {["Craftsmanship", "Personalisation", "Elegance"].map((value, i) => (
                  <Grid key={value} size={{ xs: 4 }}>
                    <Box
                      data-aos="fade-up"
                      data-aos-delay={300 + i * 80}
                      sx={{
                        textAlign: "center",
                        py: 2.5,
                        border: "1px solid",
                        borderColor: "divider",
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        sx={{ color: "secondary.dark", fontSize: "0.65rem" }}
                      >
                        {value}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 8, md: 14 }, bgcolor: "#F7F7F7" }}>
        <Container maxWidth="lg">
          <SectionHeading
            eyebrow="Our Promise"
            title="Why Clients Trust Us"
            subtitle="Five pillars that define every garment we create."
          />
          <Grid container spacing={3}>
            {whyChooseUs.map((item, index) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6 }}>
                <FeatureCard
                  index={index}
                  title={item.title}
                  description={item.description}
                  aosDelay={index * 100}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
}
