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

/** Types */
type MetaSimple = { label: string; value: ReactNode };
type MetaGroupItem = { label?: string; value: ReactNode };
type MetaGroup = { label: string; items: MetaGroupItem[] };
type Meta = MetaSimple | MetaGroup;

type Background =
  | { kind: "video"; src: string; type?: string; poster?: string; autoPlay?: boolean; loop?: boolean; muted?: boolean }
  | { kind: "image"; src: string; alt?: string };

export interface CaseStudyHeaderProps {
  background: Background;
  title: string;
  subtitle?: string;
  description?: ReactNode;
  meta?: Meta[];
  metaColumnGap?: string;
  overlayOpacity?: number;
  rightMaxWidth?: number | string;
}

const isGroup = (m: Meta): m is MetaGroup => (m as MetaGroup).items !== undefined;

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
      {/* Background (MUI Box wrappers) */}
      <BackgroundVideo
        component="video"
        src="/case-studies/airbot-header.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

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
              {/* Labels */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {meta.map((m, idx) => (
                  <MetaLabel key={`label-${idx}`} variant="body2">
                    {m.label}
                  </MetaLabel>
                ))}
              </Box>

              {/* Values */}
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
                    return (
                      <MetaValue key={`value-${idx}`} variant="body2">
                        {m.value}
                      </MetaValue>
                    );
                  }
                  return (
                    <Box
                      key={`group-${idx}`}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                        textAlign: "right",
                        alignItems: "flex-end",
                      }}
                    >
                      {m.items.map((it, j) => (
                        <Box
                          key={`group-item-${idx}-${j}`}
                          sx={{ display: "flex", gap: 0.5, justifyContent: "flex-end" }}
                        >
                          {it.label && (
                            <MetaLabel variant="body2" sx={{ mr: "4px" }}>
                              {it.label}
                            </MetaLabel>
                          )}
                          <MetaValue variant="body2">{it.value}</MetaValue>
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
    </HeaderRoot>
  );
}
