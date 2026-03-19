"use client";

import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { List } from "@mui/material";
import { Stack } from "@mui/material";
import Image from "next/image";
import {
  SectionContainer,
  ContentBox,
  ImageBox,
  ToolIcon,
  CustomListItem,
} from "./UIUXSection.styles";
import PageContainer from "@/components/common/PageContainer";

export default function UIUXSection() {
  return (
    <PageContainer>
      <SectionContainer>
        {/* Left Side Content */}
        <ContentBox>
          <Typography variant="h4" className="title">
            A Practical Shift in How We Design
          </Typography>

          <Typography variant="body1" className="desc">
            We&apos;ve moved away from rigid, step-by-step UX workflows.
            Instead, we use a more integrated process where design, engineering,
            QA, and GenAI tools work in parallel. This helps us explore ideas
            faster, test assumptions early, and reduce unnecessary
            back-and-forth later in the build.
          </Typography>
          <Box
            className="what-we-did-section"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Typography variant="h6" className="subtitle">
              What we did:
            </Typography>
            <List sx={{ pl: 4 }}>
              <CustomListItem>
                Designed the full UI for the application in roughly 32 hours
              </CustomListItem>
              <CustomListItem>
                Mapped complete user flows, including secondary and edge cases
              </CustomListItem>
              <CustomListItem>
                Used AI-assisted iterations to explore and refine layouts
                quickly
              </CustomListItem>
            </List>
          </Box>

          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <Stack direction="row" spacing="10px" alignItems="center">
              <Typography
                variant="body1"
                sx={{ fontSize: { xs: "16px", md: "20px" } }}
              >
                Tools used:
              </Typography>
              <ToolIcon
                src="/services/lovable.png"
                alt="Lovable"
                width={80}
                height={40}
              />
              <ToolIcon
                src="/services/figma.png"
                alt="Figma"
                width={80}
                height={40}
              />
            </Stack>
          </Box>
        </ContentBox>

        {/* Right Side Image */}
        <ImageBox>
          <Image
            src="https://res.cloudinary.com/dlhe4iq8c/image/upload/v1771570940/8ab5449b7e2c8ae6bdfdbeb310157548886eb33c_11zon_mn8zqf.webp"
            alt="Lumunate digital platform dashboard overview showing analytics and property data"
            width={713}
            height={460}
            style={{ width: "100%", height: "auto", borderRadius: "12px" }}
            loading="lazy"
          />
        </ImageBox>

        <Box sx={{ display: { xs: "block", md: "none" }, width: "100%" }}>
          <Stack
            direction="row"
            spacing="10px"
            alignItems="center"
            sx={{
              justifyContent: "flex-start",
              width: "100%",
              mt: "23px",
            }}
          >
            <Typography
              variant="body1"
              sx={{ fontSize: { xs: "16px", md: "20px" } }}
            >
              Tools used:
            </Typography>
            <ToolIcon
              src="/services/lovable.png"
              alt="Lovable"
              width={80}
              height={40}
            />
            <ToolIcon
              src="/services/figma.png"
              alt="Figma"
              width={80}
              height={40}
            />
          </Stack>
        </Box>
      </SectionContainer>
    </PageContainer>
  );
}
