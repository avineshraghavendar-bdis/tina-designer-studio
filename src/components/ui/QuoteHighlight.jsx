import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function QuoteHighlight({
  children,
  component = "p",
  align = "left",
  light = false,
  size = "medium",
  sx,
}) {
  const sizes = {
    small: { xs: "1.35rem", md: "1.65rem" },
    medium: { xs: "1.65rem", md: "2.15rem" },
    large: { xs: "1.85rem", md: "2.45rem" },
  };

  return (
    <Box
      sx={{
        position: "relative",
        textAlign: align,
        ...sx,
      }}
    >
      <Typography
        component={component}
        sx={{
          fontFamily: "var(--font-script), cursive",
          fontSize: sizes[size],
          lineHeight: 1.55,
          fontWeight: 400,
          color: light ? "#E8D5A3" : "secondary.main",
          textShadow: light
            ? "0 2px 24px rgba(201, 169, 98, 0.35)"
            : "0 1px 0 rgba(255,255,255,0.35)",
          background: light
            ? "linear-gradient(135deg, #F0E2B8 0%, #C9A962 45%, #D9C48A 100%)"
            : "linear-gradient(135deg, #A88B4A 0%, #C9A962 50%, #D9C48A 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {children}
      </Typography>
    </Box>
  );
}
