import Box from "@mui/material/Box";

export default function GoldOrnament({ align = "center", sx }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: align === "center" ? "center" : "flex-start",
        gap: 1.5,
        ...sx,
      }}
    >
      <Box sx={{ width: { xs: 32, md: 48 }, height: 1, bgcolor: "secondary.main" }} />
      <Box
        sx={{
          width: 7,
          height: 7,
          bgcolor: "secondary.main",
          transform: "rotate(45deg)",
        }}
      />
      <Box sx={{ width: { xs: 32, md: 48 }, height: 1, bgcolor: "secondary.main" }} />
    </Box>
  );
}
