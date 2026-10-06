"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Monitor,
  Smartphone,
  AppWindow,
  Tv,
  Wifi,
  Users,
  Sliders,
  Sparkles,
  Zap,
  Download,
  HardDrive,
  Cpu,
  MemoryStick,
  Code,
} from "lucide-react";

export default function Home() {
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const EXECUTABLE_DOWNLOAD_URL =
    "/download/RoomCast-Presenter-0.1.3-Setup.exe";

  const handleDownload = () => {
    // Immediate direct download trigger
    const link = document.createElement("a");
    link.href = EXECUTABLE_DOWNLOAD_URL;
    link.setAttribute("download", "RoomCast-Presenter-0.1.3-Setup.exe");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#060812] text-slate-100 bg-dot-grid relative selection:bg-cyan-500 selection:text-black">
      {/* Background Ambient Radial Glows */}
      <div className="absolute left-1/2 top-0 h-[500px] w-full max-w-[800px] -translate-x-1/2 bg-gradient-to-b from-cyan-500/10 via-indigo-500/5 to-transparent blur-3xl pointer-events-none" />

      {/* =====================================================================
          1. NAVBAR (ONLY LOGO + APP NAME AS REQUESTED)
         ===================================================================== */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060812]/80 px-4 py-3 backdrop-blur-md sm:px-6 sm:py-4 lg:px-8">
        <div className="flex w-full items-center gap-2.5 sm:gap-3">
              {/* Logo Icon Container */}
              <div className="h-10 w-10 shrink-0 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[1px] shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#070A13] rounded-[11px] flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="whitespace-nowrap bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-lg font-extrabold leading-none tracking-tight text-transparent sm:text-xl">
                RoomCast
              </span>
        </div>
      </header>

      {/* =====================================================================
          2. HERO SECTION
         ===================================================================== */}
      <section className="relative z-10 px-4 pb-12 pt-14 text-center sm:px-6 sm:pb-16 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-5xl">
          {/* Main Hero App Logo */}
          <div className="w-24 h-24 mx-auto mb-8 rounded-3xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[2px] shadow-2xl shadow-cyan-500/30">
            <div className="w-full h-full bg-[#0A0E1A] rounded-[22px] flex items-center justify-center">
              <Monitor className="w-12 h-12 text-cyan-400" />
            </div>
          </div>

          <h1 className="mb-5 text-4xl font-black tracking-tight sm:mb-6 sm:text-5xl md:text-6xl">
            RoomCast
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-xl font-bold leading-snug text-slate-200 sm:mb-10 sm:text-2xl md:mb-12 md:text-3xl">
            <span className="text-cyan-400">Screen sharing and present screen:</span> Turn any device into a secondary screen for your computer
          </p>

          {/* =================================================================
              FEATURED IMAGE PLACEHOLDER 1 (HERO ILLUSTRATION)
             ================================================================= */}
          <div className="glass-card relative mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 p-2 shadow-2xl shadow-cyan-950/50 sm:p-3 md:p-4">
            {/* REPLACE THE SRC BELOW WITH YOUR OWN ILLUSTRATION / SCREENSHOT */}
            <div className="group relative overflow-hidden rounded-2xl border border-white/5 bg-[#0b0f19]">
              <Image
                src="/ClassPresentation.png"
                alt="RoomCast Local Screen Sharing Illustration"
                width={1837}
                height={856}
                sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 4rem), 64rem"
                className="block h-auto w-full opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060812] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-3 left-3 max-w-[calc(100%-1.5rem)] text-left sm:bottom-5 sm:left-5">
                <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800">
                  Live Preview
                </span>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">High-speed LAN streaming to laptops, tablets, and phones</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          3. DIRECT DOWNLOAD SECTION (INSTANT DOWNLOAD, NO FAQs/STATS)
         ===================================================================== */}
      <section className="relative z-10 px-4 py-12 text-center sm:px-6 sm:py-16">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-6 text-2xl font-bold sm:mb-8 sm:text-3xl">Download RoomCast</h2>

          {/* Main Download Action Card */}
          <div className="p-[2px] rounded-3xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 shadow-xl shadow-cyan-500/20">
            <button
              onClick={handleDownload}
              className="group flex w-full cursor-pointer flex-col items-center justify-center rounded-[22px] bg-[#0A0E1A] px-5 py-8 transition-all duration-300 hover:bg-[#0F1527] sm:px-8 sm:py-10"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Download className="w-8 h-8 text-cyan-400" />
              </div>
              <span className="mb-2 text-xl font-extrabold text-white sm:text-2xl">
                Download RoomCast for Windows
              </span>
              <span className="text-sm text-slate-400">
                Click to initiate direct download (.exe)
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          4. FEATURE BANNER IMAGE PLACEHOLDER
         ===================================================================== */}
      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="glass-card mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 p-2 sm:p-4">
          {/* REPLACE THE IMAGE BELOW WITH YOUR MULTI-DEVICE MOCKUP SCREENSHOT */}
          <div className="relative overflow-hidden rounded-2xl bg-[#0A0E1A]">
            <Image
              src="/ManyComputer.png"
              alt="RoomCast Multi-Device Stream Overview"
              width={1832}
              height={859}
              sizes="(max-width: 640px) calc(100vw - 2.5rem), (max-width: 1024px) calc(100vw - 4rem), 64rem"
              className="block h-auto w-full opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#060812] via-transparent to-[#060812]" />
            <h3 className="absolute inset-0 flex items-center justify-center px-4 text-center text-lg font-extrabold text-white drop-shadow-md sm:text-2xl md:text-4xl">
              Screen share and present screen to all devices
            </h3>
          </div>
        </div>
      </section>

      {/* =====================================================================
          5. FEATURES GRID (EXCLUDING SECURE SECTION AS REQUESTED)
         ===================================================================== */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              RoomCast features — Screen Sharing & Present Screen
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug sm:text-xl">Share Screen View</h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Share your computer's entire screen to any device that has a web browser.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-4">
                <Smartphone className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug sm:text-xl">Second Screen</h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Use any device with a web browser as a second screen for your computer.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                <AppWindow className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug sm:text-xl">Share App View</h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Limit RoomCast to share only a single application window to any connected audience browser.
              </p>
            </div>

            {/* Card 4 */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center mb-4">
                <Tv className="w-6 h-6 text-pink-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug sm:text-xl">Teleprompter on Any Device</h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Use flip screen mode on tablets or mobile devices to turn your screen into a live teleprompter.
              </p>
            </div>

            {/* Card 5 */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mb-4">
                <Wifi className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug sm:text-xl">WiFi Compatible</h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                RoomCast streams screen video over Wi-Fi or mobile hotspots. No cables required.
              </p>
            </div>

            {/* Card 6 */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-indigo-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug sm:text-xl">Multiple Connected Devices</h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Connect as many devices as you want at the same time. Stream your desktop to everyone in the room.
              </p>
            </div>

            {/* Card 7 */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                <Sliders className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug sm:text-xl">Advanced Video Quality Control</h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Dynamic quality adjustments while sharing to maintain low-latency playback under varying network conditions.
              </p>
            </div>

            {/* Card 8 */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mb-4">
                <Sparkles className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug sm:text-xl">Easy to Use</h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Scan the QR code with your phone or open the local IP address in any browser. No app install required for audience members.
              </p>
            </div>

            {/* Card 9 */}
            <div className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-snug sm:text-xl">Fast & Low Latency</h3>
              <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
                Direct peer-to-peer WebRTC connections ensure real-time responsiveness for presentations and screen mirroring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. SYSTEM REQUIREMENTS
         ===================================================================== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-10">System Requirements for RoomCast</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <Monitor className="w-8 h-8 text-cyan-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1">Operating System</h3>
                <p className="text-slate-400 text-sm">Windows, Linux, macOS</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <HardDrive className="w-8 h-8 text-indigo-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1">Available Disk Space</h3>
                <p className="text-slate-400 text-sm">210 MB</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <MemoryStick className="w-8 h-8 text-purple-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1">RAM</h3>
                <p className="text-slate-400 text-sm">250 MB average memory footprint</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border border-white/10 flex items-start gap-4">
              <Cpu className="w-8 h-8 text-pink-400 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold mb-1">CPU</h3>
                <p className="text-slate-400 text-sm">Any modern dual-core processor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =====================================================================
          8. COMMUNITY IMAGE AND ABOUT ROOMCAST
         ===================================================================== */}
      <section className="px-4 py-8 sm:px-6 sm:py-12">
        <div className="glass-card relative mx-auto w-full max-w-4xl rounded-2xl border border-white/10 p-5 shadow-2xl sm:p-8">
          <div className="overflow-hidden rounded-xl bg-[#0A0E1A]">
            <Image
              src="/communitypresentation.jpg"
              alt="RoomCast Community & Audience Connection"
              width={733}
              height={418}
              sizes="(max-width: 640px) calc(100vw - 3.5rem), (max-width: 896px) calc(100vw - 5rem), 48rem"
              className="block h-auto w-full"
            />
          </div>

          <div className="mt-8 text-left sm:mt-10">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              About RoomCast
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              <p>
                RoomCast is a desktop app that lets any device with a web browser act as a second screen or presentation receiver over Wi-Fi. Share your full display or choose a single application window to present.
              </p>
              <p>
                Connect phones, tablets, and laptops over your local Wi-Fi network or mobile hotspot. RoomCast is designed to work off-grid, so you can present even when there is no internet connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. WHY ROOMCAST? (CREATOR STORY & QUOTE)
         ===================================================================== */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          {/* Ambient Glow Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3">Why RoomCast?</h2>
            <p className="text-slate-400 font-medium italic">
              <strong className="text-white">RoomCast</strong> — zero-install, ultra-low latency screen sharing for local networks.
            </p>
          </div>

          <div className="bg-[#0A0E1A]/80 rounded-2xl p-6 md:p-10 border border-white/10 relative z-10 shadow-inner">
            <div className="text-cyan-400 text-5xl font-serif mb-4 leading-none select-none">“</div>
            <div className="space-y-4 text-slate-300 text-base md:text-lg leading-relaxed italic">
              <p>
                "It started when I was assigned to present a slide deck packed with illustrations to my tutorial group in school. When our presentations were online, sharing slides in real time was effortless. But when we moved to a physical classroom, my only option was to drop the file into our group chat."
              </p>
              <p>
                "That immediately created two big problems: I completely lost control over the presentation pace and had to keep asking everyone to 'please move to the next slide,' and it assumed everyone had active mobile data and belonged to that specific group."
              </p>
              <p>
                "I realized presenters needed an offline-first tool to broadcast live screen video and audio directly to any browser over local Wi-Fi—no internet data, group chats, or software installs required. That is why RoomCast was born."
              </p>
            </div>

            <hr className="border-white/10 my-6" />

            {/* Creator Profile Detail */}
            <div className="flex items-center gap-4">
              {/* PLACEHOLDER PROFILE PHOTO: Replace src with your image in public/avatar.jpg */}
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 p-[2px] shrink-0">
                <Image
                  src="/creator.jpg"
                  alt="Ibrahim Abdulrasheed"
                  width={56}
                  height={56}
                  quality={90}
                  sizes="56px"
                  className="h-full w-full rounded-full object-cover object-[50%_25%]"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white">Ibrahim Abdulrasheed</h4>
                <p className="text-sm text-cyan-400">Creator & Lead Engineer, RoomCast</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          8. MEET ROOMCAST TEAM / CREATOR CARD
         ===================================================================== */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-10">Meet RoomCast Creator</h2>

          <div className="glass-card glass-card-hover p-8 rounded-3xl border border-white/10 max-w-xl mx-auto flex flex-col items-center">
            {/* Creator Avatar with Glow Ring */}
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-cyan-500/30 blur-xl" />
              <div className="relative z-10 h-44 w-44 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-500 p-[3px] shadow-2xl">
                {/* REPLACE WITH YOUR PROFILE PICTURE */}
                <Image
                  src="/creator.jpg"
                  alt="Ibrahim Abdulrasheed"
                  width={176}
                  height={176}
                  quality={90}
                  sizes="176px"
                  className="h-full w-full rounded-full object-cover object-[50%_25%]"
                />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-white mb-1">Ibrahim Abdulrasheed</h3>
            <p className="text-cyan-400 text-sm font-semibold mb-4">Creator & Lead Engineer</p>

            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              Engineering high-performance software Applications.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================================
          9. STELLAR OPEN-SOURCE CONTRIBUTORS & GITHUB
         ===================================================================== */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 p-[1px] mx-auto mb-6 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <div className="w-full h-full bg-[#0A0E1A] rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-cyan-400" />
            </div>
          </div>

          <h2 className="text-3xl font-extrabold mb-4">Stellar Open-Source Contributors</h2>
          <p className="text-slate-400 text-sm md:text-base mb-8">
            If you are a developer or designer, consider contributing to RoomCast on GitHub.
          </p>

          <a
            href="https://github.com/Aseeke-dev/RoomCast" // REPLACE WITH YOUR GITHUB REPO LINK
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#0A0E1A] hover:bg-[#0F1527] text-white px-8 py-4 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 font-bold group shadow-lg"
          >
            <Code className="w-5 h-5 text-cyan-400 group-hover:rotate-12 transition-transform" />
            <span>Contribute on GitHub</span>
          </a>
        </div>
      </section>

      {/* =====================================================================
          10. BOTTOM DOWNLOAD CTA BANNER
         ===================================================================== */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 hover:opacity-90 text-white font-extrabold text-lg py-5 px-8 rounded-2xl shadow-2xl shadow-cyan-500/30 flex items-center justify-center gap-3 transition-transform hover:scale-105 cursor-pointer"
          >
            <Download className="w-6 h-6" />
            <span>Download RoomCast Now</span>
          </button>
        </div>
      </section>

      {/* =====================================================================
          8. FOOTER
         ===================================================================== */}
      <footer className="py-8 px-6 border-t border-white/10 text-center text-xs text-slate-500">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span>&copy; {currentYear ?? "2025"} RoomCast. All rights reserved.</span>
          <span>Offline LAN Screen Sharing Engine</span>
        </div>
      </footer>
    </div>
  );
}