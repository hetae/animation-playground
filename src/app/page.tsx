"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Stack, Typography, styled, Sheet, Box } from "@mui/joy";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const text = new SplitType("h1");
    const words = text.words;
    const title = words?.slice(0, 2) || null;
    const rugby = words?.slice(2) || null;

    gsap.fromTo(
      title,
      {
        y: 100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "back",
      }
    );

    gsap.fromTo(
      rugby,
      {
        x: 500,
      },
      {
        x: 0,
        rotate: 720,
        duration: 2,
      }
    );
  }, []);

  return (
    <>
      <Typography level="h1" color="primary" variant="soft">
        Animation Playground<>🏉</>
      </Typography>
      <Box sx={{ width: "100%", marginTop: "1rem" }}>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Item onClick={() => router.push("/text")}>
            <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
              Text
            </Typography>
          </Item>
          <Item>
            <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
              Effect
            </Typography>
          </Item>
        </Stack>
      </Box>
    </>
  );
}

const Item = styled(Sheet)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.background.level1 : "#ebebeb",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
  color: theme.vars.palette.text.secondary,
  cursor: "pointer",
}));
