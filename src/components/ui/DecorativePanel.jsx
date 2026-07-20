import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import QuoteHighlight from "@/components/ui/QuoteHighlight";

export default function DecorativePanel({
  quote,
  label,
  aos = "fade-right",
  aspectRatio = "4/5",
}) {
  return (
    <Box
      data-aos={aos}
      sx={{
        position: "relative",
        aspectRatio,
        bgcolor: "common.black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 30% 70%, rgba(201,169,98,0.22) 0%, transparent 60%)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 20,
          left: 20,
          right: 20,
          bottom: 20,
          border: "1px solid rgba(201,169,98,0.35)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 28,
          left: 28,
          right: 28,
          bottom: 28,
          border: "1px solid rgba(201,169,98,0.15)",
        }}
      />
      {label && (
        <Typography
          variant="subtitle1"
          sx={{
            position: "absolute",
            top: 36,
            left: 36,
            color: "secondary.main",
          }}
        >
          {label}
        </Typography>
      )}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          px: { xs: 4, md: 6 },
          textAlign: "center",
        }}
      >
        <Typography
          component="span"
          sx={{
            display: "block",
            fontFamily: "var(--font-script), cursive",
            fontSize: { xs: "3.5rem", md: "4.5rem" },
            lineHeight: 0.6,
            mb: 1,
            background: "linear-gradient(135deg, #D9C48A, #C9A962)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          &ldquo;
        </Typography>
        <QuoteHighlight light size="large" align="center">
          {quote}
        </QuoteHighlight>
      </Box>
    </Box>
  );
}
