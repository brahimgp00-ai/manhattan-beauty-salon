import React from 'react';

export function ContactButton({ className = "", id, onClick }: { className?: string, id?: string, onClick?: () => void }) {
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.location.href = "https://manhattan-beauty-salon.com/contact-us/";
    }
  };

  return (
    <button
      onClick={handleClick}
      id={id || "contact-button"}
      className={`rounded-full px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest text-white outline-2 outline-offset-[-3px] outline-white ${className} cursor-pointer`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1'
      }}
    >
      Book Now
    </button>
  );
}

export function LiveProjectButton({ className = "", id }: { className?: string, id?: string }) {
  return (
    <button
      id={id}
      className={`rounded-full border-2 border-[#D7E2EA] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10 ${className}`}
    >
      View Service
    </button>
  );
}
