import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';

const services = [
  "Hair Styling",
  "Hair Color",
  "Hair Care",
  "Makeup & Ceremonies",
  "Nails & Aesthetics",
  "Facial Care",
  "Hydrafacial",
  "Waxing"
];

export function BookingModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0C0C0C]/80 backdrop-blur-sm"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ ease: [0.25, 0.1, 0.25, 1], duration: 0.4 }}
            className="relative w-full max-w-lg bg-[#0C0C0C] border border-[#D7E2EA]/20 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-2xl flex flex-col gap-6"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-[#D7E2EA]/60 hover:text-[#D7E2EA] transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="flex flex-col items-center justify-center h-full text-center py-10 gap-6"
              >
                <div className="w-20 h-20 rounded-full border-2 border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-medium uppercase tracking-wider text-[#D7E2EA]">Thank you!</h3>
                <p className="text-[#D7E2EA]/70 font-light max-w-sm">
                  Your booking request has been received. Our team will contact you shortly.
                </p>
                <button
                  onClick={onClose}
                  className="mt-4 rounded-full border-2 border-[#D7E2EA] px-8 py-3 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
                >
                  Close
                </button>
              </motion.div>
            ) : (
              <>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#D7E2EA] mb-2">Book an Appointment</h3>
                  <p className="text-[#D7E2EA]/60 font-light text-sm sm:text-base">Experience luxury beauty services in Casablanca.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/80 font-medium ml-2">Full Name *</label>
                    <input 
                      required 
                      type="text" 
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/30 rounded-2xl px-5 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA] transition-colors"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/80 font-medium ml-2">Phone Number *</label>
                    <input 
                      required 
                      type="tel" 
                      className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/30 rounded-2xl px-5 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA] transition-colors"
                      value={formData.phone}
                      onChange={e => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/80 font-medium ml-2">Select Service *</label>
                    <div className="relative">
                      <select 
                        required 
                        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/30 rounded-2xl px-5 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA] transition-colors appearance-none"
                        value={formData.service}
                        onChange={e => setFormData({...formData, service: e.target.value})}
                      >
                        <option value="" disabled className="text-[#D7E2EA]/40">Choose a service</option>
                        {services.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#D7E2EA]/60">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/80 font-medium ml-2">Date *</label>
                      <input 
                        required 
                        type="date" 
                        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/30 rounded-2xl px-5 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA] transition-colors"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5 flex-1">
                      <label className="text-xs uppercase tracking-widest text-[#D7E2EA]/80 font-medium ml-2">Time *</label>
                      <input 
                        required 
                        type="time" 
                        className="w-full bg-[#0C0C0C] border border-[#D7E2EA]/30 rounded-2xl px-5 py-3 text-[#D7E2EA] focus:outline-none focus:border-[#D7E2EA] transition-colors"
                        value={formData.time}
                        onChange={e => setFormData({...formData, time: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2">
                    <button
                      type="submit"
                      className="rounded-full px-8 py-4 text-sm font-medium uppercase tracking-widest text-white outline-2 outline-offset-[-3px] outline-white transition-opacity hover:opacity-90 w-full"
                      style={{
                        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1'
                      }}
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
