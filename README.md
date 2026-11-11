# 🎂 Senior & Buddy Birthday Surprise Storybook

An interactive digital birthday gift experience created for someone who started as a college senior and became a mentor, guide, best friend, and family.

Built with a dreamy pastel palette (soft blush pink, cream, lavender, warm gold, white), smooth animations, emotional storytelling, and interactive surprises.

---

## 📖 The 8-Step Interactive Journey

1. **Screen 1 – Birthday Welcome**
   - Displays *"A Little Surprise For You!"*, *"Happy Birthday, Buddy!"*, animated floating gift illustration, and the primary button: **"Let's Begin 💗"**.
2. **Screen 2 – The Birthday Introduction**
   - *"Today is all about celebrating you! ❤️"*
   - 5 meaningful, emotional lines detailing how a senior in college became one of the closest people in life, mentor, guide, and family.
3. **Screen 3 – Open Your Surprise (Special Letter in Pink Envelope)**
   - Center animated pink envelope with wax seal.
   - Tap to break the seal and reveal the exact heartfelt message: *"Some people enter our lives as seniors but slowly become family..."*
4. **Screen 4 – Our Story (The 6 Chapters)**
   - Divided into 6 story chapters:
     1. The First Meeting – Induction
     2. Shriutsav – A Few Conversations
     3. The Unexpected Plot Twist – 3rd Semester
     4. That One Rasgulla! 😂 *(with glowing celebratory animation & sound)*
     5. From Senior to Family
     6. Our Story Continues...
5. **Screen 5 – Our Memory Gallery (Real WhatsApp Photos)**
   - Loaded with real WhatsApp photos found in `~/mine/WhatsApp Unknown 2026-11-09 at 00.54.24/`.
   - Scrapbook collage layout with washi tape accents.
   - **Full-Screen Lightbox**:
     - Large image view without cropping details.
     - Dark blurred overlay with close button (`X`).
     - Previous & Next navigation arrows.
     - Keyboard navigation: `Escape` to close, `←` / `→` arrows to flip photos.
     - Mobile touch swipe support.
6. **Screen 6 – The Birthday Cake**
   - Animated cake with 5 glowing candles.
   - Click individual candles to blow out, or click **"Blow Out All Candles 💨"** to trigger celebration sound, confetti, and wish prompt.
7. **Screen 7 – A Letter Just For You**
   - Beautiful handwritten-style letter combining memories of Induction, Shriutsav, 3rd semester food walk, the rasgulla, and growing into family.
   - Concludes with:
     > *"Happy Birthday once again! ❤️"*
     > *"Stay the same wonderful person you are. Here's to more random conversations, endless laughter, food walks, unexpected adventures and countless memories."*
     > *"With lots of love, Your Kiddo ❤️"*
8. **Screen 8 – Final Surprise**
   - Large animated heading: **"HAPPY BIRTHDAY BUDDY! 🎂🎉"**
   - Celebratory confetti cannons.
   - Final line:
     > *"Once a senior, forever my favourite person to look up to. ❤️"*
   - **"Replay The Experience 🔁"** button to start again.

---

## 🕹️ Controls & Navigation

- **Step-by-Step Navigation**: Floating pill at the bottom with `Back`, progress indicator (`Step X of 8`), and `Next` buttons.
- **Background Music Player**: Floating in the top-right corner with play/pause and soundwave animation (Web Audio synthesizer, does not autoplay).
- **Quick Customize**: Floating button in the top-left to adjust names or dates.

---

## 🚀 Running Locally

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

Server is available locally at: `http://localhost:5173/`
