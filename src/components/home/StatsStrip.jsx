import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const stats = [
  { value: "2", label: "Day Delivery", suffix: "" },
  { value: "5", label: "Core Services", suffix: "+" },
  { value: "100", label: "Custom Designs", suffix: "%" },
];

export default function StatsStrip() {
  return (
    <Box
      sx={{
        py: { xs: 5, md: 6 },
        bgcolor: "common.black",
        borderTop: "1px solid rgba(201,169,98,0.2)",
        borderBottom: "1px solid rgba(201,169,98,0.2)",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
              <Box
                data-aos="fade-up"
                data-aos-delay={index * 80}
                sx={{
                  textAlign: "center",
                  py: 2,
                  borderRight: {
                    xs: "none",
                    sm: index < stats.length - 1 ? "1px solid rgba(201,169,98,0.15)" : "none",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "var(--font-display)",
                    fontSize: { xs: "2.5rem", md: "3rem" },
                    color: "secondary.main",
                    lineHeight: 1,
                    mb: 1,
                  }}
                >
                  {stat.value}
                  <Box component="span" sx={{ fontSize: "0.6em" }}>
                    {stat.suffix}
                  </Box>
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ color: "rgba(255,255,255,0.65)", fontSize: "0.7rem" }}
                >
                  {stat.label}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
