"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import {
  faChevronLeft,
  faChevronRight,
  faMagnifyingGlassPlus,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import { workItems, worksIntro } from "@/constants/works";

function GalleryCard({ item, index, onOpen }) {
  return (
    <Box
      data-aos="fade-up"
      data-aos-delay={Math.min(index * 50, 300)}
      onClick={() => onOpen(index)}
      role="button"
      tabIndex={0}
      aria-label={`View ${item.alt}`}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onOpen(index);
        }
      }}
      sx={{
        position: "relative",
        cursor: "pointer",
        p: 1.25,
        bgcolor: "common.white",
        border: "1px solid",
        borderColor: "divider",
        transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 18px 36px rgba(0,0,0,0.12)",
          borderColor: "secondary.main",
        },
        "&:hover .gallery-image": {
          transform: "scale(1.05)",
        },
        "&:hover .gallery-overlay": {
          opacity: 1,
        },
        "&:hover .gallery-accent": {
          opacity: 1,
        },
        "&:hover .gallery-index": {
          color: "secondary.main",
        },
      }}
    >
      <Box
        className="gallery-accent"
        sx={{
          position: "absolute",
          top: 0,
          left: "12%",
          right: "12%",
          height: 2,
          bgcolor: "secondary.main",
          opacity: 0,
          transition: "opacity 0.3s ease",
        }}
      />

      <Box
        sx={{
          position: "relative",
          aspectRatio: "4/5",
          overflow: "hidden",
          bgcolor: "common.black",
        }}
      >
        <Image
          className="gallery-image"
          src={item.src}
          alt={item.alt}
          fill
          sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transition: "transform 0.5s ease",
          }}
        />

        <Box
          className="gallery-overlay"
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "rgba(0,0,0,0.42)",
            opacity: 0,
            transition: "opacity 0.3s ease",
          }}
        >
          <Box
            sx={{
              width: 52,
              height: 52,
              borderRadius: "50%",
              border: "1px solid",
              borderColor: "secondary.main",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "secondary.main",
              bgcolor: "rgba(0,0,0,0.35)",
            }}
          >
            <FontAwesomeIcon icon={faMagnifyingGlassPlus} />
          </Box>
        </Box>
      </Box>

      <Typography
        className="gallery-index"
        sx={{
          pt: 1.5,
          textAlign: "center",
          fontFamily: "var(--font-display)",
          fontSize: "0.8rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: "text.secondary",
          transition: "color 0.3s ease",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </Typography>
    </Box>
  );
}

function WorkLightbox({ open, index, onClose, onPrev, onNext }) {
  const item = workItems[index];

  if (!item) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullScreen
      slotProps={{
        backdrop: {
          sx: { bgcolor: "rgba(0,0,0,0.94)" },
        },
        paper: {
          sx: {
            bgcolor: "transparent",
            boxShadow: "none",
            overflow: "hidden",
            m: 0,
            maxWidth: "100%",
            width: "100%",
            height: "100%",
            maxHeight: "100%",
            borderRadius: 0,
          },
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label="Close gallery"
          sx={{
            position: "absolute",
            top: { xs: 12, md: 20 },
            right: { xs: 12, md: 20 },
            color: "common.white",
            bgcolor: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            zIndex: 3,
            "&:hover": { bgcolor: "rgba(255,255,255,0.22)" },
          }}
        >
          <FontAwesomeIcon icon={faTimes} />
        </IconButton>

        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: { xs: 7, sm: 9, md: 12 },
            pt: { xs: 7, md: 8 },
            pb: { xs: 1, md: 1.5 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "100%",
              maxWidth: 1100,
            }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="100vw"
              priority
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Box>

        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            onPrev();
          }}
          aria-label="Previous image"
          sx={navButtonSx("left")}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </IconButton>

        <IconButton
          onClick={(event) => {
            event.stopPropagation();
            onNext();
          }}
          aria-label="Next image"
          sx={navButtonSx("right")}
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </IconButton>

        <Box
          sx={{
            flexShrink: 0,
            px: 2,
            pb: { xs: 2.5, md: 3 },
            pt: 1,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.55)", mb: 0.5 }}
          >
            {index + 1} / {workItems.length}
          </Typography>
          <Typography
            sx={{
              color: "common.white",
              fontSize: { xs: "0.85rem", md: "0.95rem" },
              lineHeight: 1.5,
              maxWidth: 640,
              mx: "auto",
              px: 1,
            }}
          >
            {item.alt}
          </Typography>
        </Box>
      </Box>
    </Dialog>
  );
}

function navButtonSx(side) {
  return {
    position: "absolute",
    top: "50%",
    [side]: { xs: 8, sm: 16, md: 24 },
    transform: "translateY(-50%)",
    color: "common.white",
    bgcolor: "rgba(0,0,0,0.55)",
    border: "1px solid rgba(201,169,98,0.55)",
    width: { xs: 42, md: 52 },
    height: { xs: 42, md: 52 },
    zIndex: 3,
    "&:hover": {
      bgcolor: "secondary.main",
      color: "common.black",
      borderColor: "secondary.main",
    },
  };
}

export default function WorksGallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const open = activeIndex !== null;

  const handleClose = useCallback(() => setActiveIndex(null), []);

  const handlePrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + workItems.length) % workItems.length
    );
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % workItems.length
    );
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "ArrowLeft") handlePrev();
      if (event.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, handlePrev, handleNext]);

  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Our Works"
        description={worksIntro}
      />

      <Box
        component="section"
        sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}
      >
        <Container maxWidth="lg">
          <SectionHeading
            title="Crafted With Passion"
            subtitle="Browse our latest creations — tap any piece for a closer look."
            align="center"
          />

          <Grid container spacing={{ xs: 2.5, md: 3 }}>
            {workItems.map((item, index) => (
              <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <GalleryCard
                  item={item}
                  index={index}
                  onOpen={setActiveIndex}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <WorkLightbox
        open={open}
        index={activeIndex ?? 0}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  );
}
