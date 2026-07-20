"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { routes } from "@/constants/routes";
import StudioLogo from "@/components/brand/StudioLogo";

const HEADER_YELLOW = "var(--brand-yellow)";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

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
              sx={{ display: { xs: "none", md: "flex" }, gap: 4, alignItems: "center" }}
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
              sx={{ display: { xs: "flex", md: "none" }, color: "common.white" }}
            >
              <FontAwesomeIcon icon={faBars} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            bgcolor: HEADER_YELLOW,
            color: "common.white",
            borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 2,
            borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
          }}
        >
          <Typography variant="h6" sx={{ letterSpacing: "0.1em", color: "common.white" }}>
            Menu
          </Typography>
          <IconButton onClick={() => setOpen(false)} aria-label="close menu" sx={{ color: "common.white" }}>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </Box>
        <List>
          {routes.map((route) => (
            <ListItem key={route.path} disablePadding>
              <ListItemButton
                component={Link}
                href={route.path}
                onClick={() => setOpen(false)}
                selected={pathname === route.path}
                sx={{
                  py: 2,
                  color: "common.white",
                  "&.Mui-selected": {
                    bgcolor: "rgba(0, 0, 0, 0.12)",
                    borderLeft: "3px solid",
                    borderColor: "common.black",
                  },
                }}
              >
                <ListItemText
                  primary={route.label}
                  primaryTypographyProps={{
                    variant: "button",
                    fontSize: "0.8rem",
                    sx: { color: "common.white" },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Box sx={{ p: 2 }}>
          <Button
            component={Link}
            href="/contactus"
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => setOpen(false)}
          >
            Book Consultation
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
