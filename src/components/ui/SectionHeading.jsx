import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GoldOrnament from "@/components/ui/GoldOrnament";

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
  aos = "fade-up",
}) {
  return (
    <Box
      data-aos={aos}
      sx={{
        textAlign: align,
        mb: { xs: 5, md: 7 },
        maxWidth: align === "center" ? 760 : "none",
        mx: align === "center" ? "auto" : 0,
      }}
    >
      {eyebrow && (
        <>
          <Typography
            variant="subtitle1"
            sx={{
              color: "secondary.main",
              mb: 1,
            }}
          >
            {eyebrow}
          </Typography>
          <GoldOrnament align={align} sx={{ mb: 2.5 }} />
        </>
      )}
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: "2rem", md: "2.85rem" },
          color: light ? "common.white" : "text.primary",
          mb: subtitle ? 2.5 : 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{
            color: light ? "rgba(255,255,255,0.82)" : "text.secondary",
            fontSize: { xs: "1rem", md: "1.125rem" },
            lineHeight: 1.9,
            maxWidth: align === "center" ? 640 : "none",
            mx: align === "center" ? "auto" : 0,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
}
