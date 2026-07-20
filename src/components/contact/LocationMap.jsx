import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { studioLocation } from "@/constants/content";
import SectionHeading from "@/components/ui/SectionHeading";

export default function LocationMap() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: "#F7F7F7" }}>
      <Box sx={{ maxWidth: "lg", mx: "auto", px: { xs: 2, sm: 3 } }}>
        <SectionHeading
          eyebrow="Visit Us"
          title="Find Our Studio"
          subtitle="Drop by for consultations, fittings, and to explore our latest collections in person."
        />
      </Box>

      <Box
        data-aos="fade-up"
        sx={{
          position: "relative",
          maxWidth: "lg",
          mx: "auto",
          px: { xs: 2, sm: 3 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 320, sm: 400, md: 480 },
            border: "1px solid",
            borderColor: "divider",
            overflow: "hidden",
            bgcolor: "common.black",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              bgcolor: "secondary.main",
              zIndex: 1,
            },
          }}
        >
          <Box
            component="iframe"
            src={studioLocation.embedUrl}
            title={`${studioLocation.name} location map`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            sx={{
              display: "block",
              width: "100%",
              height: "100%",
              border: 0,
            }}
          />
        </Box>

        <Box
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ mb: 0.5 }}>
              {studioLocation.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {studioLocation.address}
            </Typography>
          </Box>
          <Button
            component="a"
            href={studioLocation.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outlined"
            sx={{
              borderColor: "common.black",
              color: "common.black",
              flexShrink: 0,
              "&:hover": {
                borderColor: "secondary.main",
                bgcolor: "rgba(201,169,98,0.08)",
              },
            }}
          >
            Open in Google Maps
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
