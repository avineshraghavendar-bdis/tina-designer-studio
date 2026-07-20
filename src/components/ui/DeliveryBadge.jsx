import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const sizeStyles = {
  default: {
    px: { xs: 3, md: 3.5 },
    py: { xs: 1.5, md: 1.75 },
    fontSize: "0.75rem",
    letterSpacing: "0.2em",
    dot: 10,
  },
  large: {
    px: { xs: 3.5, md: 4.5 },
    py: { xs: 1.75, md: 2.25 },
    fontSize: { xs: "0.95rem", md: "1.15rem" },
    letterSpacing: "0.2em",
    dot: 10,
  },
  hero: {
    px: { xs: 4, sm: 5, md: 6.5 },
    py: { xs: 2.25, sm: 2.75, md: 3.25 },
    fontSize: { xs: "1.15rem", sm: "1.45rem", md: "1.85rem" },
    letterSpacing: { xs: "0.16em", md: "0.22em" },
    dot: 14,
  },
};

export default function DeliveryBadge({
  aos = "zoom-in",
  large = false,
  size,
}) {
  const variant = size || (large ? "large" : "default");
  const styles = sizeStyles[variant] || sizeStyles.default;
  const isHero = variant === "hero";

  return (
    <Box
      data-aos={aos}
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: isHero ? { xs: 2, md: 2.5 } : 2,
        px: styles.px,
        py: styles.py,
        background: isHero
          ? "linear-gradient(135deg, #FFE9A8 0%, #FFD21F 28%, #C9A962 68%, #A88B4A 100%)"
          : "linear-gradient(135deg, #D9C48A 0%, #C9A962 50%, #A88B4A 100%)",
        color: "common.black",
        border: isHero
          ? "2px solid rgba(255,255,255,0.45)"
          : "1px solid rgba(255,255,255,0.2)",
        boxShadow: isHero
          ? "0 20px 56px rgba(255, 210, 31, 0.45), 0 8px 24px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.55)"
          : "0 16px 48px rgba(201, 169, 98, 0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
        position: "relative",
        ...(isHero && {
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 4,
            border: "1px solid rgba(0,0,0,0.18)",
            pointerEvents: "none",
          },
        }),
      }}
    >
      <Box
        component="span"
        sx={{
          width: styles.dot,
          height: styles.dot,
          borderRadius: "50%",
          bgcolor: "common.black",
          flexShrink: 0,
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%, 100%": { opacity: 1, transform: "scale(1)" },
            "50%": { opacity: 0.5, transform: "scale(1.3)" },
          },
        }}
      />
      <Typography
        component="span"
        sx={{
          fontFamily: "var(--font-display), serif",
          letterSpacing: styles.letterSpacing,
          fontWeight: 700,
          fontSize: styles.fontSize,
          textTransform: "uppercase",
          lineHeight: 1.15,
          position: "relative",
        }}
      >
        Delivery in 2 Days
      </Typography>
    </Box>
  );
}
