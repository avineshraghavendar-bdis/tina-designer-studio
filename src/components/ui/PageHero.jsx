import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DeliveryBadge from "@/components/ui/DeliveryBadge";
import GoldOrnament from "@/components/ui/GoldOrnament";

export default function PageHero({
  eyebrow,
  title,
  description,
  showBadge = false,
  badgeLarge = false,
  children,
}) {
  return (
    <Box
      sx={{
        position: "relative",
        py: { xs: 12, md: 16 },
        bgcolor: "common.black",
        color: "common.white",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(rgba(201,169,98,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(201,169,98,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: "linear-gradient(90deg, transparent, #C9A962, transparent)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: -80,
          right: -80,
          width: 300,
          height: 300,
          borderRadius: "50%",
          border: "1px solid rgba(201,169,98,0.12)",
        }}
      />

      <Container maxWidth="md" sx={{ position: "relative", textAlign: "center" }}>
        {eyebrow && (
          <Typography
            data-aos="fade-down"
            variant="subtitle1"
            sx={{ color: "secondary.main", mb: 1 }}
          >
            {eyebrow}
          </Typography>
        )}
        <GoldOrnament sx={{ mb: 3 }} data-aos="fade-up" />
        <Typography
          data-aos="fade-up"
          data-aos-delay="100"
          variant="h1"
          sx={{
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.75rem" },
            lineHeight: 1.15,
            mb: description ? 3 : showBadge ? 4 : 0,
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            data-aos="fade-up"
            data-aos-delay="200"
            sx={{
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.9,
              fontSize: { xs: "1rem", md: "1.125rem" },
              maxWidth: 680,
              mx: "auto",
              mb: showBadge ? 4 : 0,
            }}
          >
            {description}
          </Typography>
        )}
        {showBadge && (
          <Box data-aos="zoom-in" data-aos-delay="300">
            <DeliveryBadge large={badgeLarge} />
          </Box>
        )}
        {children}
      </Container>
    </Box>
  );
}
