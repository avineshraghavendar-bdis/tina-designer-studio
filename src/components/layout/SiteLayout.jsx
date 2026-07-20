import Box from "@mui/material/Box";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function SiteLayout({ children }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        component="a"
        href="#main-content"
        sx={{
          position: "absolute",
          left: -9999,
          top: "auto",
          width: 1,
          height: 1,
          overflow: "hidden",
          zIndex: 9999,
          bgcolor: "common.black",
          color: "common.white",
          p: 2,
          textDecoration: "none",
          "&:focus": {
            left: 16,
            top: 16,
            width: "auto",
            height: "auto",
            overflow: "visible",
          },
        }}
      >
        Skip to main content
      </Box>
      <Header />
      <Box id="main-content" component="main" sx={{ flex: 1 }}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
}
