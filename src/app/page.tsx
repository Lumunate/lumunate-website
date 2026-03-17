
import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Lumunate",
  description: "We specialize in web and mobile development, systems integration and digital marketing to help businesses thrive in today’s fast-paced digital world.",
  openGraph: {
    title: "Lumunate",
    description: "Accelerating Digital Transformation",
    images: ["/og-image.jpg"],
  },
};

export default function Page() {
  return <HomeClient />;
}