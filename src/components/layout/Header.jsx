"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { routes } from "@/constants/routes";
import StudioLogo from "@/components/brand/StudioLogo";

const HEADER_YELLOW = "#FFD21F";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  const navLink = (path) => ({
    color: pathname === path ? "common.white" : "rgba(255,255,255,0.88)",
    fontWeight: pathname === path ? 700 : 500,
    position: "relative",
    display: "inline-block",
    lineHeight: 1,
    pb: "5px",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: 0,
      width: pathname === path ? "100%" : 0,
      height: 2,
      bgcolor: "common.black",
      transition: "width 0.3s ease",
    },
    "&:hover": {
      color: "common.white",
    },
    "&:hover::after": {
      width: "100%",
    },
  });

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: HEADER_YELLOW,
          color: "common.white",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ minHeight: { xs: 88, md: 108 }, py: { xs: 1, md: 1.25 } }}>
            <Box
              component={Link}
              href="/"
              aria-label={`${routes[0]?.label || "Home"} — Tina Designer Studio`}
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <Box
                sx={{
                  width: { xs: 88, sm: 104, md: 120 },
                  height: { xs: 88, sm: 104, md: 120 },
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  "& img": {
                    width: { xs: 88, sm: 104, md: 120 },
                    height: { xs: 88, sm: 104, md: 120 },
                    transform: "scale(1.45)",
                    transformOrigin: "center center",
                  },
                }}
              >
                <StudioLogo size={120} priority />
              </Box>
            </Box>

            <Box
              component="nav"
              aria-label="Main navigation"
              sx={{ display: { xs: "none", lg: "flex" }, gap: 4, alignItems: "center" }}
            >
              {routes.map((route) => (
                <Typography
                  key={route.path}
                  component={Link}
                  href={route.path}
                  variant="button"
                  sx={{
                    ...navLink(route.path),
                    fontSize: "0.75rem",
                    textDecoration: "none",
                  }}
                >
                  {route.label}
                </Typography>
              ))}
              <Button
                component={Link}
                href="/contactus"
                variant="contained"
                color="primary"
                size="small"
              >
                Book Consultation
              </Button>
            </Box>

            <IconButton
              edge="end"
              aria-label="open menu"
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", lg: "none" }, color: "common.black" }}
            >
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {open ? (
        <Box
          role="presentation"
          onClick={closeMenu}
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0, 0, 0, 0.45)",
            zIndex: 1400,
            display: { xs: "block", lg: "none" },
          }}
        />
      ) : null}

      <Box
        component="nav"
        aria-label="Mobile navigation"
        aria-hidden={!open}
        sx={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          width: { xs: "min(88vw, 320px)", sm: 340 },
          bgcolor: HEADER_YELLOW,
          color: "#000000",
          zIndex: 1401,
          display: { xs: "flex", lg: "none" },
          flexDirection: "column",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.28s ease",
          boxShadow: open ? "0 8px 32px rgba(0,0,0,0.22)" : "none",
          pointerEvents: open ? "auto" : "none",
          borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
        }}
        onClick={(event) => event.stopPropagation()}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
            py: 1.5,
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
            flexShrink: 0,
          }}
        >
          <Typography
            variant="subtitle1"
            sx={{ letterSpacing: "0.14em", color: "#000000", fontWeight: 700 }}
          >
            Menu
          </Typography>
          <IconButton onClick={closeMenu} aria-label="close menu" sx={{ color: "#000000" }}>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </Box>

        <Box sx={{ flex: 1, overflowY: "auto", py: 1 }}>
          {routes.map((route) => {
            const isActive = pathname === route.path;
            return (
              <Box
                key={route.path}
                component={Link}
                href={route.path}
                onClick={closeMenu}
                sx={{
                  display: "block",
                  px: 2.5,
                  py: 1.75,
                  color: "#000000",
                  textDecoration: "none",
                  fontSize: "0.82rem",
                  fontWeight: isActive ? 700 : 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  borderLeft: "3px solid",
                  borderColor: isActive ? "#000000" : "transparent",
                  bgcolor: isActive ? "rgba(0, 0, 0, 0.1)" : "transparent",
                  "&:hover": {
                    bgcolor: "rgba(0, 0, 0, 0.06)",
                  },
                }}
              >
                {route.label}
              </Box>
            );
          })}
        </Box>

        <Box
          sx={{
            p: 2,
            pt: 1.5,
            borderTop: "1px solid rgba(0, 0, 0, 0.12)",
            flexShrink: 0,
          }}
        >
          <Button
            component={Link}
            href="/contactus"
            variant="contained"
            fullWidth
            size="large"
            onClick={closeMenu}
            sx={{
              py: 1.35,
              bgcolor: "#000000",
              color: "#FFFFFF",
              "&:hover": { bgcolor: "#1a1a1a" },
            }}
          >
            Book Consultation
          </Button>
        </Box>
      </Box>
    </>
  );
}
