import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import HeroSection, {
  CTASection,
  WhyChooseSection,
} from "@/components/home/HomeSections";
import HomeLookbook from "@/components/home/HomeLookbook";
import ServicesPreview from "@/components/home/ServicesPreview";
import StatsStrip from "@/components/home/StatsStrip";
import JsonLd from "@/components/seo/JsonLd";
import DecorativePanel from "@/components/ui/DecorativePanel";
import QuoteHighlight from "@/components/ui/QuoteHighlight";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutContent } from "@/constants/content";
import { getBreadcrumbSchema, getHomeCollectionSchema } from "@/constants/schema";
import { buildPageMetadata, pageSeo } from "@/constants/seo";
import { homeLooks } from "@/constants/homeLooks";

export const metadata = buildPageMetadata({
  ...pageSeo.home,
  keywords: pageSeo.home.keywords,
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          getBreadcrumbSchema([{ name: "Home", path: "/" }]),
          getHomeCollectionSchema(homeLooks),
        ]}
      />
      <HeroSection />
      <StatsStrip />
      <HomeLookbook />

      <Box sx={{ py: { xs: 8, md: 14 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 5, md: 8 }} sx={{ alignItems: "center" }}>
            <Grid size={{ xs: 12, md: 6 }}>
              <DecorativePanel
                quote="Crafted with Passion, Graced with Elegance"
                label="Our Ethos"
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <SectionHeading
                eyebrow="Our Story"
                title="A Creative Fashion Destination"
                align="left"
                aos="fade-left"
              />
              <Typography
                data-aos="fade-left"
                data-aos-delay="100"
                variant="body1"
                color="text.secondary"
                sx={{ lineHeight: 1.95, fontSize: "1.05rem", mb: 3 }}
              >
                {aboutContent.description}
              </Typography>
              <Box
                data-aos="fade-left"
                data-aos-delay="200"
                sx={{
                  pl: { xs: 2.5, md: 3 },
                  py: 2,
                  borderLeft: "3px solid",
                  borderColor: "secondary.main",
                  bgcolor: "rgba(201, 169, 98, 0.06)",
                }}
              >
                <QuoteHighlight size="medium">
                  &ldquo;Fashion is about something that comes from within you.&rdquo;
                </QuoteHighlight>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <ServicesPreview />
      <WhyChooseSection />
      <CTASection />
    </>
  );
}
