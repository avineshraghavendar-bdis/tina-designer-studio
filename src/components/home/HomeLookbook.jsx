"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  faArrowRight,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import GoldOrnament from "@/components/ui/GoldOrnament";
import { homeLooks } from "@/constants/homeLooks";

export default function HomeLookbook() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const railRef = useRef(null);
  const look = homeLooks[active];

  const goPrev = useCallback(() => {
    setActive((current) => (current - 1 + homeLooks.length) % homeLooks.length);
  }, []);

  const goNext = useCallback(() => {
    setActive((current) => (current + 1) % homeLooks.length);
  }, []);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(goNext, 4500);
    return () => window.clearInterval(timer);
  }, [paused, goNext]);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const card = rail.querySelector(`[data-look-index="${active}"]`);
    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [active]);

  return (
    <Box
      component="section"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      sx={{
        position: "relative",
        bgcolor: "common.black",
        color: "common.white",
        overflow: "hidden",
        py: { xs: 8, md: 12 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at 20% 0%, rgba(201,169,98,0.18) 0%, transparent 45%), radial-gradient(ellipse at 90% 80%, rgba(255,210,31,0.08) 0%, transparent 40%)",
          pointerEvents: "none",
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "flex-end" },
            gap: 3,
            mb: { xs: 5, md: 7 },
          }}
        >
          <Box>
            <Typography
              data-aos="fade-up"
              variant="subtitle1"
              sx={{ color: "secondary.main", mb: 1 }}
            >
              Signature Collection
            </Typography>
            <GoldOrnament align="left" sx={{ mb: 2.5 }} data-aos="fade-up" />
            <Typography
              data-aos="fade-up"
              data-aos-delay="80"
              variant="h2"
              sx={{
                fontSize: { xs: "2.35rem", md: "3.4rem" },
                lineHeight: 1.1,
                maxWidth: 560,
              }}
            >
              Looks That Steal the Room
            </Typography>
          </Box>

          <Box data-aos="fade-left" sx={{ maxWidth: 340 }}>
            <Typography
              sx={{
                color: "rgba(255,255,255,0.68)",
                lineHeight: 1.85,
                mb: 2.5,
                fontSize: "1.02rem",
              }}
            >
              A living runway of bridal, occasion, and heirloom pieces —
              stitched to measure, finished by hand.
            </Typography>
            <Button
              component={Link}
              href="/works"
              variant="outlined"
              endIcon={<FontAwesomeIcon icon={faArrowRight} />}
              sx={{
                borderColor: "rgba(201,169,98,0.55)",
                color: "secondary.main",
                "&:hover": {
                  borderColor: "secondary.main",
                  bgcolor: "rgba(201,169,98,0.1)",
                },
              }}
            >
              View Full Portfolio
            </Button>
          </Box>
        </Box>

        {/* Featured stage */}
        <Box
          data-aos="zoom-in"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1.15fr 0.85fr" },
            gap: { xs: 3, md: 4 },
            mb: { xs: 5, md: 6 },
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              position: "relative",
              minHeight: { xs: 460, sm: 560, md: 640 },
              overflow: "hidden",
              border: "1px solid rgba(201,169,98,0.35)",
              bgcolor: "#0B0B0B",
            }}
          >
            <Box
              key={look.id}
              sx={{
                position: "absolute",
                inset: 0,
                animation: "lookFade 0.7s ease",
                "@keyframes lookFade": {
                  from: { opacity: 0, transform: "scale(1.04)" },
                  to: { opacity: 1, transform: "scale(1)" },
                },
              }}
            >
              <Image
                src={look.src}
                alt={look.alt}
                fill
                priority
                sizes="(max-width: 900px) 100vw, 60vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.78) 100%)",
                pointerEvents: "none",
              }}
            />

            <Box
              sx={{
                position: "absolute",
                top: 20,
                left: 20,
                px: 1.5,
                py: 0.75,
                bgcolor: "rgba(0,0,0,0.55)",
                border: "1px solid rgba(201,169,98,0.45)",
                backdropFilter: "blur(8px)",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-display)",
                  letterSpacing: "0.28em",
                  fontSize: "0.72rem",
                  color: "secondary.main",
                }}
              >
                {String(active + 1).padStart(2, "0")} /{" "}
                {String(homeLooks.length).padStart(2, "0")}
              </Typography>
            </Box>

            <Box
              sx={{
                position: "absolute",
                left: { xs: 20, md: 28 },
                right: { xs: 20, md: 28 },
                bottom: { xs: 22, md: 28 },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "var(--font-script), cursive",
                  fontSize: { xs: "1.65rem", md: "2.1rem" },
                  color: "secondary.main",
                  mb: 0.5,
                  lineHeight: 1.2,
                }}
              >
                {look.title}
              </Typography>
              <Typography
                sx={{
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.72)",
                }}
              >
                {look.subtitle}
              </Typography>
            </Box>

            <IconButton
              aria-label="Previous look"
              onClick={goPrev}
              sx={stageNavSx("left")}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </IconButton>
            <IconButton
              aria-label="Next look"
              onClick={goNext}
              sx={stageNavSx("right")}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </IconButton>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 1.5,
              minHeight: { xs: 320, md: "auto" },
            }}
          >
            {homeLooks
              .map((item, index) => ({ item, index }))
              .filter(({ index }) => index !== active)
              .slice(0, 4)
              .map(({ item, index }) => (
                <Box
                  key={item.id}
                  role="button"
                  tabIndex={0}
                  aria-label={`Show ${item.title}`}
                  onClick={() => setActive(index)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setActive(index);
                    }
                  }}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: "1px solid rgba(255,255,255,0.12)",
                    transition: "transform 0.35s ease, border-color 0.3s ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      borderColor: "secondary.main",
                    },
                    "&:hover img": { transform: "scale(1.06)" },
                    "&:hover .look-thumb-veil": { bgcolor: "transparent" },
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="25vw"
                    style={{
                      objectFit: "cover",
                      transition: "transform 0.5s ease",
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      bgcolor: "rgba(0,0,0,0.22)",
                      transition: "background 0.3s ease",
                    }}
                    className="look-thumb-veil"
                  />
                </Box>
              ))}
          </Box>
        </Box>
      </Container>

      {/* Runway rail */}
      <Box sx={{ position: "relative", zIndex: 1 }}>
        <Container maxWidth="lg" sx={{ mb: 2.5 }}>
          <Typography
            sx={{
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              fontSize: "0.7rem",
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Drag or scroll the runway →
          </Typography>
        </Container>

        <Box
          ref={railRef}
          sx={{
            display: "flex",
            gap: { xs: 2, md: 2.5 },
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            px: { xs: 2, md: "calc((100vw - 1200px) / 2 + 24px)" },
            pb: 2,
            WebkitOverflowScrolling: "touch",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          {homeLooks.map((item, index) => {
            const isActive = index === active;
            return (
              <Box
                key={item.id}
                data-look-index={index}
                onClick={() => setActive(index)}
                sx={{
                  position: "relative",
                  flex: "0 0 auto",
                  width: { xs: 180, sm: 220, md: 260 },
                  height: {
                    xs: index % 2 === 0 ? 280 : 240,
                    md: index % 2 === 0 ? 360 : 300,
                  },
                  alignSelf: index % 2 === 0 ? "flex-start" : "flex-end",
                  mt: {
                    xs: index % 2 === 0 ? 0 : 5,
                    md: index % 2 === 0 ? 0 : 7,
                  },
                  scrollSnapAlign: "center",
                  cursor: "pointer",
                  overflow: "hidden",
                  border: "1px solid",
                  borderColor: isActive
                    ? "secondary.main"
                    : "rgba(255,255,255,0.14)",
                  transform: isActive ? "scale(1.04)" : "scale(1)",
                  transition:
                    "transform 0.35s ease, border-color 0.3s ease, box-shadow 0.35s ease",
                  boxShadow: isActive
                    ? "0 18px 40px rgba(201,169,98,0.25)"
                    : "none",
                  "&:hover": {
                    transform: "translateY(-8px) scale(1.03)",
                    borderColor: "secondary.main",
                  },
                  "&:hover img": { transform: "scale(1.08)" },
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="260px"
                  style={{
                    objectFit: "cover",
                    transition: "transform 0.55s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    left: 12,
                    bottom: 12,
                    px: 1,
                    py: 0.4,
                    bgcolor: "rgba(0,0,0,0.55)",
                    border: "1px solid rgba(201,169,98,0.35)",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "0.65rem",
                      letterSpacing: "0.2em",
                      color: "secondary.main",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      {/* Soft marquee strip for continuous motion */}
      <Box
        sx={{
          mt: { xs: 6, md: 8 },
          borderTop: "1px solid rgba(201,169,98,0.18)",
          borderBottom: "1px solid rgba(201,169,98,0.18)",
          py: 1.5,
          overflow: "hidden",
          bgcolor: "rgba(255,255,255,0.02)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "max-content",
            animation: "marquee 38s linear infinite",
            "@keyframes marquee": {
              from: { transform: "translateX(0)" },
              to: { transform: "translateX(-50%)" },
            },
          }}
        >
          {[...homeLooks, ...homeLooks].map((item, index) => (
            <Typography
              key={`${item.id}-${index}`}
              component="span"
              sx={{
                px: { xs: 3, md: 5 },
                whiteSpace: "nowrap",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                fontSize: { xs: "0.7rem", md: "0.78rem" },
                color: "rgba(201,169,98,0.7)",
                fontFamily: "var(--font-display)",
              }}
            >
              {item.title} · Handcrafted
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
}

function stageNavSx(side) {
  return {
    position: "absolute",
    top: "50%",
    [side]: { xs: 10, md: 16 },
    transform: "translateY(-50%)",
    color: "common.white",
    bgcolor: "rgba(0,0,0,0.45)",
    border: "1px solid rgba(201,169,98,0.5)",
    width: { xs: 40, md: 48 },
    height: { xs: 40, md: 48 },
    zIndex: 2,
    "&:hover": {
      bgcolor: "secondary.main",
      color: "common.black",
    },
  };
}
