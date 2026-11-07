/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroductionSection } from './components/IntroductionSection';
import { GoogleAIStudioTutorial } from './components/GoogleAIStudioTutorial';
import { WebsiteIntegration } from './components/WebsiteIntegration';
import { LiveDemoSection } from './components/LiveDemoSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [externalPrompt, setExternalPrompt] = useState<string | null>(null);

  const handleOpenChatWithPrompt = (promptText: string) => {
    setExternalPrompt(promptText);
    setIsChatOpen(true);
  };

  const handleToggleChat = () => {
    setIsChatOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white overflow-x-hidden w-full relative">
      {/* Top Navigation */}
      <Navbar onOpenChat={() => setIsChatOpen(true)} />

      {/* Main Single Page Content */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenChat={() => setIsChatOpen(true)} />

        {/* 2. Introduction Section */}
        <IntroductionSection />

        {/* 3. Google AI Studio Tutorial */}
        <GoogleAIStudioTutorial />

        {/* 4. Website Integration & Architecture */}
        <WebsiteIntegration />

        {/* 5. Live Interactive Demo Area */}
        <LiveDemoSection onOpenChatWithPrompt={handleOpenChatWithPrompt} />

        {/* 6. About Project & Creators */}
        <AboutSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Persistent Floating Chatbot Widget (Bottom-Right) */}
      <ChatWidget
        isOpen={isChatOpen}
        onToggle={handleToggleChat}
        externalPrompt={externalPrompt}
        onClearExternalPrompt={() => setExternalPrompt(null)}
      />
    </div>
  );
}
