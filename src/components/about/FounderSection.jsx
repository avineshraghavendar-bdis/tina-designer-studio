import Image from "next/image";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GoldOrnament from "@/components/ui/GoldOrnament";
import QuoteHighlight from "@/components/ui/QuoteHighlight";

const founderImage = "/images/founder-tina-balaji.png";

const shards = [
  { top: "8%", left: "4%", width: 72, height: 72, rotate: 18 },
  { top: "62%", left: "2%", width: 56, height: 56, rotate: -24 },
  { bottom: "10%", right: "6%", width: 90, height: 90, rotate: 32 },
  { top: "18%", right: "12%", width: 48, height: 48, rotate: -12 },
];

export default function FounderSection() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Box
          data-aos="fade-up"
          sx={{
            position: "relative",
            overflow: "hidden",
            bgcolor: "common.black",
            color: "common.white",
            border: "1px solid",
            borderColor: "secondary.main",
            boxShadow: "0 32px 80px rgba(0,0,0,0.18)",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              background: "linear-gradient(90deg, #A88B4A, #FFD21F, #D9C48A)",
            },
          }}
        >
          {shards.map((shard, index) => (
            <Box
              key={index}
              sx={{
                position: "absolute",
                top: shard.top,
                left: shard.left,
                right: shard.right,
                bottom: shard.bottom,
                width: shard.width,
                height: shard.height,
                bgcolor: "secondary.main",
                opacity: 0.12,
                transform: `rotate(${shard.rotate}deg) skewX(-8deg)`,
                pointerEvents: "none",
              }}
            />
          ))}

          <Grid container>
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                data-aos="fade-right"
                sx={{
                  position: "relative",
                  height: { xs: 420, sm: 480, md: "100%" },
                  minHeight: { md: 560 },
                  p: { xs: 3, md: 4 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 24, md: 32 },
                    left: { xs: 24, md: 32 },
                    width: "55%",
                    height: "70%",
                    border: "2px solid",
                    borderColor: "secondary.main",
                    opacity: 0.45,
                    transform: "rotate(-6deg)",
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 24, md: 32 },
                    right: { xs: 24, md: 32 },
                    width: "45%",
                    height: "55%",
                    bgcolor: "secondary.main",
                    opacity: 0.1,
                    transform: "rotate(8deg) skewY(-4deg)",
                    zIndex: 0,
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    height: "100%",
                    overflow: "hidden",
                    border: "1px solid rgba(201,169,98,0.35)",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      inset: 0,
                      background: `
                        linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.55) 100%),
                        linear-gradient(90deg, transparent 58%, rgba(0,0,0,0.92) 100%)
                      `,
                      pointerEvents: "none",
                      zIndex: 2,
                    },
                  }}
                >
                  <Image
                    src={founderImage}
                    alt="Tina Balaji, founder of Tina Designer Studio"
                    fill
                    sizes="(max-width: 900px) 100vw, 40vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "14% 6%",
                      transform: "scale(1.18)",
                    }}
                    priority
                  />
                </Box>
                <Typography
                  variant="subtitle1"
                  sx={{
                    position: "absolute",
                    bottom: { xs: 36, md: 44 },
                    left: { xs: 36, md: 44 },
                    zIndex: 2,
                    color: "secondary.main",
                    fontSize: "0.7rem",
                  }}
                >
                  Founder
                </Typography>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <Box
                sx={{
                  p: { xs: 4, md: 6 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <Typography
                  data-aos="fade-left"
                  variant="subtitle1"
                  sx={{ color: "secondary.main", mb: 1 }}
                >
                  Meet the Founder
                </Typography>
                <GoldOrnament align="left" sx={{ mb: 2.5 }} />
                <Typography
                  data-aos="fade-left"
                  data-aos-delay="100"
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.85rem", md: "2.35rem" },
                    mb: 1,
                    lineHeight: 1.2,
                  }}
                >
                  Tina Balaji
                </Typography>
                <Typography
                  data-aos="fade-left"
                  data-aos-delay="150"
                  sx={{
                    color: "rgba(255,255,255,0.55)",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    fontSize: "0.72rem",
                    mb: 3,
                  }}
                >
                  Creative Director & Founder
                </Typography>

                <Box data-aos="fade-left" data-aos-delay="200" sx={{ mb: 3 }}>
                  <QuoteHighlight light size="small">
                    &ldquo;She began this journey as a challenge — and stitched it into a
                    legacy.&rdquo;
                  </QuoteHighlight>
                </Box>

                <Typography
                  data-aos="fade-left"
                  data-aos-delay="250"
                  sx={{
                    color: "rgba(255,255,255,0.82)",
                    lineHeight: 1.95,
                    fontSize: { xs: "1rem", md: "1.05rem" },
                    mb: 2.5,
                  }}
                >
                  Tina Balaji founded Tina Designer Studio not simply to open a boutique,
                  but to answer a personal challenge — to turn raw passion into purposeful
                  creation. With every sketch, every fitting, and every finished garment,
                  she proved that elegance is earned through courage, discipline, and an
                  unwavering belief in one&apos;s craft.
                </Typography>
                <Typography
                  data-aos="fade-left"
                  data-aos-delay="300"
                  sx={{
                    color: "rgba(255,255,255,0.72)",
                    lineHeight: 1.95,
                    fontSize: { xs: "0.98rem", md: "1.02rem" },
                  }}
                >
                  What began as a bold step into the unknown has become a studio that
                  celebrates individuality and handmade excellence. Her story is a
                  reminder to every dreamer: when you dare to begin, you don&apos;t just
                  build a business — you inspire others to believe that beautiful things
                  are possible.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
