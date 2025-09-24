import Image from "next/image";
import styles from "./page.module.css";
import HeaderSection from "@/components/home/HeaderSection";
import LogosSection from "@/components/home/LogosSection";
import TestimonialSection from "@/components/home/TestimonialSection";

export default function Home() {
  return (
    <>
      <HeaderSection />

      <LogosSection />

      <TestimonialSection />
    </>
  );
}
