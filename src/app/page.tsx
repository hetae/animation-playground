"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import { Typography } from "@mui/joy";
import { gsap } from "gsap";
import SplitType from "split-type";
import * as Cards from "@components/main-page";

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
      <PageCardContainer>
        <Cards.TextCard />
        <Cards.BlockCard />
        <Cards.BlocksCard />
        <Cards.PresetCard />
      </PageCardContainer>
    </>
  );
}

const PageCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
`;
