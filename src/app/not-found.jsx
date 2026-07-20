import Link from "next/link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import GoldOrnament from "@/components/ui/GoldOrnament";
import { buildPageMetadata } from "@/constants/seo";

export const metadata = buildPageMetadata({
  title: "Page Not Found | Tina Designer Studio",
  description: "The page you are looking for could not be found.",
  path: "/404",
  noindex: true,
});

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        bgcolor: "common.black",
        color: "common.white",
      }}
    >
      <Container maxWidth="sm" sx={{ textAlign: "center", py: 10 }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "4rem", md: "6rem" },
            color: "secondary.main",
            lineHeight: 1,
            mb: 2,
          }}
        >
          404
        </Typography>
        <GoldOrnament sx={{ mb: 3 }} />
        <Typography variant="h4" sx={{ mb: 2, fontSize: { xs: "1.5rem", md: "2rem" } }}>
          Page Not Found
        </Typography>
        <Typography sx={{ color: "rgba(255,255,255,0.72)", mb: 4, lineHeight: 1.85 }}>
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
          Explore our services, portfolio, or contact us to begin your bespoke journey.
        </Typography>
        <Box sx={{ display: "flex", gap: 2, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 24px",
              background: "#C9A962",
              color: "#111",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Back to Home
          </Link>
          <Link
            href="/contactus"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "10px 24px",
              border: "1px solid rgba(255,255,255,0.35)",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
            }}
          >
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
}
