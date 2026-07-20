import Box from "@mui/material/Box";

export default function LogoEngraveBackground({ children, sx }) {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        ...sx,
      }}
    >
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        <Box
          component="img"
          src="/images/engrave-bg.png"
          alt=""
          sx={{
            width: { xs: "96%", sm: "88%", md: "72%" },
            maxWidth: 720,
            height: "auto",
            opacity: 0.14,
            userSelect: "none",
          }}
        />
      </Box>
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
}
