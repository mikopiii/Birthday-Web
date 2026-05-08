/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  useEffect(() => {
    // Initial celebration burst
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#e11d48', '#fb7185', '#FFF9F9']
    });
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-rose-200 relative overflow-hidden bg-[#FFF9F9]">
      {/* Decorative Background Elements */}
      <div className="fixed top-[-100px] right-[-100px] w-[600px] h-[600px] bg-rose-100 rounded-full opacity-40 blur-[120px] -z-10" />
      <div className="fixed bottom-[-50px] left-[-50px] w-[500px] h-[500px] bg-orange-50 rounded-full opacity-50 blur-[100px] -z-10" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-end items-center px-8 md:px-16 py-10">
      </nav>

      <main className="pt-32 pb-40 px-8 md:px-16 lg:px-24 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section: Simplified Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 mb-32"
          >
            <h1 className="font-serif text-6xl md:text-8xl text-slate-900 leading-none tracking-tight">
              Mary Jane <br />
              <span className="text-black">Maltos</span>
            </h1>
            
            <div className="w-24 h-[2px] bg-rose-200 mx-auto"></div>
            
            <p className="text-2xl md:text-3xl text-black font-serif italic">
              Happy Birthday Mama!
            </p>
          </motion.div>

          {/* Personal Message Section */}
          <motion.section 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass-card p-8 md:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent opacity-50" />
              
              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4">
                  <h2 className="font-serif text-3xl md:text-4xl text-slate-900 tracking-tight">My message to you, Ma</h2>
                </div>

                <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg md:text-xl italic">
                  <p>
                    Happiest Birthday to the strongest and toughest woman I know. The woman who not only taught me good values but also taught me how to be a better person. Ma, I’m so thankful for your sacrifices.
                  </p>
                  <p>
                    The hardships you went through were not by any means easy at all, and yet you still found the courage to face them, to care for me, and to provide for me all throughout my life. I am eternally grateful to you, Ma.
                  </p>
                  <p>
                    My precious mother, pinaka da best na nanay sa buong mundo, if there are countless universes, I hope that in every one of them, you’re still my mother. I couldn’t wish for a much better mother, no one but you, Ma.
                  </p>
                </div>
              </div>

              {/* Decorative background element for the card */}
              <div className="absolute bottom-[-20%] right-[-10%] w-64 h-64 bg-rose-50 rounded-full opacity-40 blur-3xl -z-10" />
            </div>
          </motion.section>
        </div>
      </main>

    </div>
  );
}
