import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Feather, Sparkles } from 'lucide-react';

export default function Screen9Letter({ config }) {
  return (
    <div className="flex flex-col items-center justify-center max-w-2xl mx-auto px-2 sm:px-4 py-2 sm:py-5 w-full">
      {/* Chapter Tag */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-rose-100/80 text-rose-700 text-xs font-semibold tracking-wider uppercase mb-2"
      >
        <Feather className="w-3.5 h-3.5 text-rose-500" />
        <span>Chapter 6 • Straight From The Heart</span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-editorial text-2xl sm:text-4xl md:text-5xl text-slate-800 tracking-tight text-center mb-1"
      >
        A Letter Just For You 📜
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-sans text-xs sm:text-sm text-slate-500 text-center mb-3 sm:mb-4"
      >
        A personal letter from your kiddo.
      </motion.p>

      {/* Elegant Letter Paper Card with Opening Animation */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full bg-[#fdfbf7] p-4 sm:p-8 rounded-3xl shadow-xl border border-amber-200/80 text-left max-h-[56vh] sm:max-h-[66vh] overflow-y-auto"
      >
        <div className="washi-tape-gold" />

        {/* Floating subtle ambient sparkle */}
        <div className="absolute top-3 right-3 flex items-center gap-1 text-amber-400 opacity-60">
          <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: '8s' }} />
        </div>

        {/* Salutation */}
        <div className="flex items-center justify-between border-b border-amber-200/50 pb-2.5 mb-4">
          <h3 className="font-handwriting text-2xl sm:text-4xl text-rose-600 font-bold">
            Dear Buddy, ❤️
          </h3>
          <span className="text-[10px] sm:text-xs text-amber-700/60 font-serif italic">
            On your special day
          </span>
        </div>

        {/* Letter Body */}
        <div className="font-handwriting text-base sm:text-xl md:text-2xl text-slate-700 leading-relaxed space-y-4">
          <p>
            I honestly don't know where to start because there are so many little things that make our bond special. Who would've thought that a person I first met during induction would eventually become someone so important in my life?
          </p>

          <p>
            From random conversations to working together on our projects, we've created so many memories that I'll always cherish. The project discussions, the little moments of excitement when something works, the teamwork, the random conversations in between and, of course, all that coffee! ☕ Every coffee we had together has its own little memory, and honestly, it's never just about the coffee. It's about the company, the conversations and all those moments that make even an ordinary day special.
          </p>

          <p>
            And can we talk about how you take care of me? 😂❤️ Sometimes I genuinely feel like you forget that I'm your junior and start parenting me like I'm a little kid! The way you check on me, guide me, remind me of things and make sure I'm doing okay is something I appreciate more than I can explain. You somehow manage to be my senior, mentor, guide, best friend and{' '}
            <span className="px-1.5 py-0.5 rounded-md bg-pink-100 text-rose-700 font-bold shadow-sm inline-block border border-pink-200/60">
              part-time parent
            </span>{' '}
            all at once! 😂
          </p>

          <p>
            And your guidance? Seriously,{' '}
            <span className="px-2 py-0.5 rounded-md bg-amber-100 text-amber-900 font-extrabold shadow-sm inline-block border border-amber-200/80">
              NEXT LEVEL!
            </span>{' '}
            The way you explain things, help me understand situations, encourage me and guide me whenever I'm confused means so much to me. There are so many things I've learned from you, not just about projects or work but also about handling situations and looking at life differently. I'm genuinely lucky to have someone like you to look up to.
          </p>

          <p>
            I hope we continue working on more projects together, having endless coffee conversations, going on random food walks, laughing at the silliest things and creating countless memories. I hope we never run out of things to talk about or reasons to laugh.
          </p>

          <p className="font-serif italic text-sm sm:text-xl text-rose-600 font-semibold pt-1">
            And now, coming to YOUR little dreams! ❤️
          </p>

          <p>
            I know how much you love your bike 🏍️, and I hope you get to go on all those rides you've imagined, explore new places and make beautiful memories along the way.
          </p>

          <p>
            And{' '}
            <span className="px-1.5 py-0.5 rounded-md bg-purple-100 text-purple-800 font-bold shadow-sm inline-block border border-purple-200/60">
              that rooftop room dream
            </span>{' '}
            of yours! 😂 I genuinely hope one day you get that beautiful room on a rooftop building, decorate it exactly the way you've imagined, make it your own little peaceful corner, and have that dream fridge full of everything you want for your happy little space. May every tiny detail you've imagined become a reality.
          </p>

          <p>
            I hope life gives you everything you've been waiting for. The big achievements, the career you've dreamed of, the happiness you deserve, the peaceful days, the exciting adventures and even those little silly dreams that might seem small to everyone else but mean so much to you.
          </p>

          <p>
            I hope you never have to stop dreaming, and I hope you always find the courage and opportunities to make those dreams happen.
          </p>

          <p>
            Thank you for being the person who guides me, supports me, looks after me and sometimes treats me like the world's most irresponsible little kid! 😂 Thank you for all the patience, care, encouragement, coffee, conversations and memories.
          </p>

          <p>
            I might not say it every time, but I genuinely appreciate you and everything you do. You are one of those rare people who make life a little easier, happier and more meaningful just by being around.
          </p>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-pink-50 via-rose-50 to-amber-50 border border-pink-100 my-3 sm:my-4 text-center">
            <p className="font-handwriting text-xl sm:text-3xl text-rose-600 font-bold leading-snug">
              Happy Birthday to my favourite senior, my forever guide, my best friend and my unofficial parent! ❤️
            </p>
          </div>

          <p>
            May this year bring you closer to every dream you've ever had. May your bike take you to beautiful places, your rooftop dream become real, your coffee never run out and your life always be filled with reasons to smile.
          </p>

          <p>
            And please, no matter how successful or grown-up you become, never stop looking after{' '}
            <span className="px-1.5 py-0.5 rounded-md bg-rose-100 text-rose-700 font-bold shadow-sm inline-block border border-rose-200/60">
              your little kiddo!
            </span>{' '}
            😂❤️
          </p>
        </div>

        {/* Closing Signature Section with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 pt-4 border-t border-amber-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
        >
          <div>
            <p className="font-handwriting text-xl sm:text-2xl text-slate-600">With lots of love,</p>
            <p className="font-handwriting text-2xl sm:text-4xl text-rose-600 font-bold flex items-center gap-1.5">
              <span>Your Kiddo ❤️</span>
            </p>
          </div>

          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center gap-1 text-[11px] sm:text-xs text-rose-600 bg-rose-50 px-3 py-1 rounded-full border border-rose-200 shadow-sm font-sans font-medium"
          >
            <Heart className="w-3 h-3 fill-rose-500 text-rose-500" />
            <span>Forever your junior & family</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
