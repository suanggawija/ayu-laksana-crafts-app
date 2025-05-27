// "use client";
import { AboutMe, Hero, Owner } from "@/components/layouts/user/About";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Owner />
    </main>
  );
};

export default AboutUs;
