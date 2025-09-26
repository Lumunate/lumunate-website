"use client";

import { ReactNode } from "react";
import { Box, Typography } from "@mui/material";
import {
  HeaderRoot,
  BackgroundVideo,
  BackgroundImage,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  Description,
  MetaLabel,
  MetaValue,
} from "./CaseStudyHeader.styles";

/** ---------- Types ---------- */

type MetaSimple = {
  /** Left-side label (e.g., "Year") */
  label: string;
  /** Right-side value (e.g., "2025") */
  value: ReactNode;
};

type MetaGroupItem = {
  /** Optional small label before the value (e.g., "MVP –") */
  label?: string;
  value: ReactNode;
};

type MetaGroup = {
  /** Left-side label (e.g., "Timeline") */
  label: string;
  /** Right-side list of mini items (e.g., MVP, Version 2…) */
  items: MetaGroupItem[];
};

type Meta = MetaSimple | MetaGroup;

type Background =
  | { kind: "video"; src: string; type?: string; poster?: string; autoPlay?: boolean; loop?: boolean; muted?: boolean }
  | { kind: "image"; src: string; alt?: string };

export interface CaseStudyHeaderProps {
  /** Background video or image */
  background: Background;

  /** Main title */
  title: string;

  /** Secondary title */
  subtitle?: string;

  /** Rich description paragraph */
  description?: ReactNode;

  /** Right-column meta in either simple rows or grouped rows */
  meta?: Meta[];

  /** Spacing between meta label & value columns (css length) */
  metaColumnGap?: string;

  /** Optional overlay darkness (0–1), default 0.4 */
  overlayOpacity?: number;

  /** Optional: right column max width */
  rightMaxWidth?: number | string;
}

/** ---------- Helpers ---------- */
const isGroup = (m: Meta): m is MetaGroup => (m as MetaGroup).items !== undefined;

/** ---------- Component ---------- */
export default function CaseStudyHeader({
  background,
  title,
  subtitle,
  description,
  meta = [],
  metaColumnGap = "80px",
  overlayOpacity = 0.4,
  rightMaxWidth = 900,
}: CaseStudyHeaderProps) {
  return (
    <HeaderRoot>
      {/* Background */}
      {background.kind === "video" ? (
        <BackgroundVideo
          autoPlay={background.autoPlay ?? true}
          muted={background.muted ?? true}
          loop={background.loop ?? true}
          playsInline
          poster={background.poster}
          aria-label="Background video"
        >
          <source src={background.src} type={background.type ?? "video/mp4"} />
        </BackgroundVideo>
      ) : (
        <BackgroundImage
          src={background.src}
          alt={background.alt ?? "Case study background"}
          aria-label="Background image"
        />
      )}

      {/* Overlay content */}
      <HeaderContent overlayopacity={overlayOpacity}>
        {/* Left column */}
        <HeaderLeft>
          <Typography variant="h2" sx={{ fontWeight: 600, maxWidth: 520 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="h5" sx={{ fontWeight: 300, mt: 1, maxWidth: 516 }}>
              {subtitle}
            </Typography>
          )}
        </HeaderLeft>

        {/* Right column */}
        <HeaderRight sx={{ maxWidth: rightMaxWidth }}>
          {description && <Description>{description}</Description>}

          {meta.length > 0 && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: metaColumnGap,
              }}
            >
              {/* Left labels */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {meta.map((m, idx) => (
                  <MetaLabel key={`label-${idx}`}>{m.label}</MetaLabel>
                ))}
              </Box>

              {/* Right values */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  alignItems: "flex-end",
                  textAlign: "right",
                  minWidth: 200,
                }}
              >
                {meta.map((m, idx) => {
                  if (!isGroup(m)) {
                    // Simple value row
                    return <MetaValue key={`value-${idx}`}>{m.value}</MetaValue>;
                  }

                  // Grouped list (e.g., MVP – 20 weeks; Version 2 – ongoing)
                  return (
                    <Box
                      key={`group-${idx}`}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                        textAlign: "right",   // ⬅️ ensures inner group is right-aligned
                        alignItems: "flex-end",
                      }}
                    >
                      {m.items.map((it, j) => (
                        <Box
                          key={`group-item-${idx}-${j}`}
                          sx={{ display: "flex", gap: 0.5, justifyContent: "flex-end" }}  // ⬅️ push items right
                        >
                          {it.label && <MetaLabel sx={{ marginRight: "4px" }}>{it.label}</MetaLabel>}
                          <MetaValue>{it.value}</MetaValue>
                        </Box>
                      ))}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          )}
        </HeaderRight>
      </HeaderContent>
    </HeaderRoot >
  );
}
