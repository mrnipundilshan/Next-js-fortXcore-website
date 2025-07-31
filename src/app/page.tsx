"use client";

// import Hero from '@/components/Hero'
import React, { useState } from "react";
import Navbar from '@/components/Navbar';
import About from '@/components/About/About';
import HomePage from "@/components/Home/Home";

export default function IndexPage() {
  const [selectedSection, setSelectedSection] = useState("Home");

  let content;
  switch (selectedSection) {
    case "Home":
      content = <HomePage />;
      break;
    case "About":
      content = <About />;
      break;
    case "Work":
      content = <div className="pt-20">Work section coming soon.</div>;
      break;
    case "Contact":
      content = <div className="pt-20">Contact section coming soon.</div>;
      break;
    default:
      content = null;
  }

  return (
    <>
      <Navbar selectedSection={selectedSection} onSelectSection={setSelectedSection} />
      <div className="mt-18">
        <main>{content}</main>
      </div>
    </>
  );
}
