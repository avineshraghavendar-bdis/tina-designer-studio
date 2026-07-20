import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function FeatureCard({
  index,
  title,
  description,
  aos = "fade-up",
  aosDelay = 0,
  variant = "default",
}) {
  const isDark = variant === "dark";

  return (
    <Box
      data-aos={aos}
      data-aos-delay={aosDelay}
      sx={{
        position: "relative",
        p: { xs: 3.5, md: 4 },
        height: "100%",
        bgcolor: isDark ? "common.black" : "background.paper",
        color: isDark ? "common.white" : "text.primary",
        border: "1px solid",
        borderColor: isDark ? "rgba(201,169,98,0.2)" : "divider",
        overflow: "hidden",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          bgcolor: "secondary.main",
          transform: "scaleX(0)",
          transformOrigin: "left",
          transition: "transform 0.4s ease",
        },
        "&:hover": {
          borderColor: "secondary.main",
          transform: "translateY(-8px)",
          boxShadow: isDark
            ? "0 24px 60px rgba(0,0,0,0.4)"
            : "0 24px 60px rgba(0,0,0,0.08)",
          "&::before": { transform: "scaleX(1)" },
        },
      }}
    >
      {index !== undefined && (
        <Typography
          sx={{
            position: "absolute",
            top: 16,
            right: 20,
            fontFamily: "var(--font-display)",
            fontSize: "3.5rem",
            fontWeight: 600,
            color: isDark ? "rgba(201,169,98,0.12)" : "rgba(201,169,98,0.2)",
            lineHeight: 1,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </Typography>
      )}
      <Typography
        variant="h5"
        sx={{
          mb: 1.5,
          color: isDark ? "secondary.main" : "text.primary",
          pr: 6,
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: isDark ? "rgba(255,255,255,0.7)" : "text.secondary",
          lineHeight: 1.85,
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
