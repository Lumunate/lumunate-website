"use client";

import { ReactNode } from "react";
import { Box } from "@mui/material";
import {
  HeaderRoot,
  BackgroundVideo,
  HeaderContent,
  HeaderLeft,
  HeaderRight,
  Description,
  MetaLabel,
  MetaValue,
  Title,
  SubTitle,
} from "./CaseStudyHeader.styles";

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
  metaItems?: Meta[];
  metaColumnGap?: string;
  overlayOpacity?: number;
  rightMaxWidth?: number | string;
}

const isGroup = (metaItem: Meta): metaItem is MetaGroup =>
  (metaItem as MetaGroup).items !== undefined;

export default function CaseStudyHeader({
  title,
  subtitle,
  description,
  metaItems = [],
  metaColumnGap = "80px",
  overlayOpacity = 0.4,
  rightMaxWidth = 900,
}: CaseStudyHeaderProps) {
  return (
    <HeaderRoot>
      <BackgroundVideo
      key="case-studies-video"
        component="video"
        src="https://res.cloudinary.com/dqvzaju7x/video/upload/v1759933021/airbot-header_gx3fsp.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <HeaderContent overlayopacity={overlayOpacity}>
        <HeaderLeft>
          <Title>{title}</Title>
          {subtitle && <SubTitle>{subtitle}</SubTitle>}

        </HeaderLeft>
        <HeaderRight sx={{ maxWidth: rightMaxWidth }}>
          {description && <Description>{description}</Description>}

          {metaItems.length > 0 && (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                columnGap: metaColumnGap,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                {metaItems.map((metaItem, metaIndex) => {
                  let marginTop = 0;
                  if (metaItem.label === "MAUs") marginTop = 4;
                  if (metaItem.label === "Revenue") marginTop = 1;

                  return (
                    <MetaLabel key={`label-${metaIndex}`} variant="body2" sx={{ mt: marginTop }}>
                      {metaItem.label}
                    </MetaLabel>
                  );
                })}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  alignItems: "flex-end",
                  textAlign: "right",
                  minWidth: 200,
                }}
              >
                {metaItems.map((metaItem, metaIndex) => {
                  let marginTop = 0;
                  if (metaItem.label === "MAUs") marginTop = 1;
                  if (metaItem.label === "Revenue") marginTop = 0;

                  if (!isGroup(metaItem)) {
                    return (
                      <MetaValue key={`value-${metaIndex}`} variant="body2" sx={{ mt: marginTop }}>
                        {metaItem.value}
                      </MetaValue>
                    );
                  }

                  return (
                    <Box
                      key={`group-${metaIndex}`}
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                        textAlign: "right",
                        alignItems: "flex-end",
                      }}
                    >
                      {metaItem.items.map((groupItem, groupItemIndex) => (
                        <Box
                          key={`group-item-${metaIndex}-${groupItemIndex}`}
                          sx={{ display: "flex", gap: 0.5, justifyContent: "flex-end" }}
                        >
                          {groupItem.label && (
                            <MetaLabel variant="body2" sx={{ mr: "4px" }}>
                              {groupItem.label}
                            </MetaLabel>
                          )}
                          <MetaValue variant="body2">{groupItem.value}</MetaValue>
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
