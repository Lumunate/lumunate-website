import React from "react";
import { ContentContainer, DifferentContainer } from "./Different.style";
import { Box, Typography } from "@mui/material";
import PageContainer from "@/components/common/PageContainer";

const Different = () => {
  const data = [
    {
      title: "Engineering Meets Strategy",
      description:
        "We don't just write code, we solve problems. Every line of code serves a business objective. Every feature drives measurable results.",
    },
    {
      title: "Future-Ready Technology",
      description:
        "While others catch up to trends, we're already building the next wave. AI, Web3, enterprise solutions, we're not just familiar with emerging tech, we're pioneering it.",
    },
    {
      title: "Global Impact, Personal Touch",
      description:
        "We work with clients worldwide while maintaining the agility and attention of a dedicated team. Big company capabilities, startup heart.",
    },
    {
      title: "Partnership Beyond Projects",
      description:
        "Your success is our success. We're invested in your long-term growth, not just project completion. That's why our clients keep coming back.",
    },
  ];

  return (
    <DifferentContainer>
      <PageContainer>
        <Box sx={{ paddingBottom: { xs: "40px", sm: "65px" } }}>
          <Typography sx={{ fontSize: { xs: "30px", md: "46px", lg: "56px" }, color: "text.primary" }} variant="h1">
            What Makes Us Different
          </Typography>
        </Box>

        <ContentContainer>
          {data.map((item, index) => {
            const isGifBackground = index === 0 || index === 3;

            return (
              <Box
                key={index}
                sx={{
                  borderRight: index === 0 || index === 2 ? "1px solid" : "none",
                  borderColor: "divider",

                  padding: { xs: "40px 20px", sm: "80px 28px", lg: "160px 32px" },
                  backgroundImage: isGifBackground ? "url(/trackbg.gif)" : "none",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  color: "text.primary",

                  borderRadius: {
                    xs: index === 0 ? "12px 12px 0 0" : index === 3 ? "12px" : "0",
                    md: index === 0 ? "12px 0 0 0" : index === 3 ? "0 0 12px 0" : "0",
                  },
                }}
              >


                <Typography
                  sx={{ fontSize: { xs: "32px", md: "45px", lg: "50px", xl: "56px" }, color: "text.primary" }}
                  variant="h1"
                >
                  {item.title}
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: "16px", md: "20px", lg: "22px" },
                    marginTop: { xs: "23px", sm: "32px" },

                    color: isGifBackground ? "text.primary" : "text.secondary",

                    borderRadius: "12px",
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            );
          })}
        </ContentContainer>
      </PageContainer>
    </DifferentContainer>
  );
};

export default Different;
