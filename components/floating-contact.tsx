"use client";

import { useContactStore } from "@/store/use-contact-store";
import { Contact } from "./contact";

export function FloatingContact() {
  const { isOpen, open, close } = useContactStore();

  return (
    <>
      <button
        onClick={open}
        className="fixed bottom-8 right-8 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:shadow-xl transition-all z-50"
        aria-label="Open contact form"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50">
          <div className="fixed inset-y-0 right-0 w-full sm:w-[400px] bg-background shadow-lg  overflow-y-auto">
            <button
              onClick={close}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              aria-label="Close contact form"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}
