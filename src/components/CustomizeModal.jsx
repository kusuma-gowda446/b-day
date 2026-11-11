import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sliders, X, Check } from 'lucide-react';

export default function CustomizeModal({ config, onUpdateConfig }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    friendName: config.friendName,
    nickname: config.nickname,
    senderName: config.senderName,
    birthdayDate: config.birthdayDate,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateConfig((prev) => ({
      ...prev,
      friendName: formData.friendName,
      nickname: formData.nickname,
      senderName: formData.senderName,
      birthdayDate: formData.birthdayDate,
    }));
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating customize trigger button */}
      <div className="fixed top-4 left-24 sm:left-28 z-40">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-rose-600 shadow-sm border border-pink-100 backdrop-blur-md text-xs font-semibold transition-all hover:scale-105"
          title="Quickly change friend's name and details"
        >
          <Sliders className="w-3.5 h-3.5 text-rose-500" />
          <span className="hidden sm:inline">Customize</span>
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-md w-full bg-white p-6 sm:p-8 rounded-3xl shadow-2xl border border-pink-100 max-h-[90vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
                <div>
                  <h3 className="font-editorial text-2xl font-bold text-slate-800">
                    Quick Personalizer
                  </h3>
                  <p className="text-xs text-slate-400">
                    Edit names & dates or customize in <code className="bg-slate-100 px-1 py-0.5 rounded text-rose-500">birthdayData.js</code>
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <form onSubmit={handleSave} className="space-y-4 text-xs sm:text-sm">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Friend's Name
                  </label>
                  <input
                    type="text"
                    name="friendName"
                    value={formData.friendName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="e.g. Sarah"
                    required
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Friend's Nickname
                  </label>
                  <input
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="e.g. Bestie / Sunshine"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Your Name (Sender)
                  </label>
                  <input
                    type="text"
                    name="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="e.g. Alex"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Birthday Date
                  </label>
                  <input
                    type="text"
                    name="birthdayDate"
                    value={formData.birthdayDate}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                    placeholder="e.g. November 12th"
                  />
                </div>

                <div className="pt-4 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-2 rounded-xl text-slate-500 hover:text-slate-700 font-medium"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <Check className="w-4 h-4" />
                    <span>Apply Changes</span>
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
