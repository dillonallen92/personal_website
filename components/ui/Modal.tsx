"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  allowFullscreen?: boolean;
  isFullscreen?: boolean;
  onToggleFullscreen?: () => void;
};

/**
 * Mobile-first, accessible modal component with WCAG 2.1 AA compliance
 * Features: focus trap, keyboard support, body scroll lock, safe area insets, and touch-optimized controls
 * @param props - Modal configuration props
 * @returns Modal element with backdrop and content
 */
export function Modal({
  isOpen,
  onClose,
  title,
  children,
  allowFullscreen = true,
  isFullscreen = false,
  onToggleFullscreen,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const fullscreenButtonRef = useRef<HTMLButtonElement>(null);
  const previousActiveElementRef = useRef<HTMLElement | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Store current active element for focus restoration
      previousActiveElementRef.current = document.activeElement as HTMLElement;

      // Lock body scroll
      const originalOverflow = document.body.style.overflow;
      const originalPosition = document.body.style.position;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      return () => {
        // Restore body scroll
        document.body.style.overflow = originalOverflow;
        document.body.style.position = originalPosition;
        document.body.style.width = "";

        // Restore focus to previous element
        if (previousActiveElementRef.current) {
          previousActiveElementRef.current.focus();
        }
      };
    }
  }, [isOpen]);

  // Focus management: Move focus to modal when opened
  useEffect(() => {
    if (isOpen && modalRef.current) {
      // Small delay to ensure modal is rendered
      const timer = setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Keyboard event handler: ESC key to close
  useEffect(() => {
    /**
     * Handles keyboard events for modal accessibility
     * @param event - Keyboard event
     */
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }

      // Focus trap: Keep Tab within modal
      if (event.key === "Tab" && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (event.shiftKey) {
          // Shift+Tab: If focus is on first element, move to last
          if (document.activeElement === firstElement) {
            event.preventDefault();
            lastElement?.focus();
          }
        } else {
          // Tab: If focus is on last element, move to first
          if (document.activeElement === lastElement) {
            event.preventDefault();
            firstElement?.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, onClose]);

  // Handle backdrop click (outside modal content)
  /**
   * Handles backdrop click to close modal
   * @param event - Mouse or touch event
   */
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Handle backdrop touch (mobile)
  /**
   * Handles backdrop touch to close modal on mobile
   * @param event - Touch event
   */
  const handleBackdropTouch = (event: React.TouchEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={handleBackdropClick}
      onTouchEnd={handleBackdropTouch}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 transition-opacity duration-300 motion-reduce:transition-none"
        aria-hidden="true"
        style={{
          paddingTop: "env(safe-area-inset-top)",
          paddingBottom: "env(safe-area-inset-bottom)",
          paddingLeft: "env(safe-area-inset-left)",
          paddingRight: "env(safe-area-inset-right)",
        }}
      />

      {/* Modal Content */}
      <div
        ref={modalRef}
        className={`relative flex w-full flex-col bg-white shadow-xl transition-all duration-300 motion-reduce:transition-none ${
          isFullscreen
            ? "fixed inset-0 h-screen w-screen max-w-none rounded-none"
            : "mx-4 max-h-[90dvh] max-w-4xl rounded-lg md:mx-8"
        }`}
        style={{
          marginTop: isFullscreen ? "env(safe-area-inset-top)" : undefined,
          marginBottom: isFullscreen ? "env(safe-area-inset-bottom)" : undefined,
          marginLeft: isFullscreen ? "env(safe-area-inset-left)" : undefined,
          marginRight: isFullscreen ? "env(safe-area-inset-right)" : undefined,
          height: isFullscreen ? "100dvh" : undefined,
        }}
        onClick={(e) => e.stopPropagation()}
        onTouchEnd={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 md:px-6 md:py-4">
          <h2
            id="modal-title"
            className="text-lg font-semibold text-charcoal md:text-xl"
          >
            {title}
          </h2>

          <div className="flex items-center gap-2">
            {/* Fullscreen Toggle Button - Hidden on screens smaller than 375px */}
            {allowFullscreen && onToggleFullscreen && (
              <button
                ref={fullscreenButtonRef}
                onClick={onToggleFullscreen}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                className="hidden min-[375px]:flex h-11 w-11 items-center justify-center rounded-md text-charcoal transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accentBlue focus:ring-offset-2 active:bg-gray-200 md:h-12 md:w-12"
                type="button"
              >
                {isFullscreen ? (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    />
                  </svg>
                )}
              </button>
            )}

            {/* Close Button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Close syllabus viewer"
              className="flex h-11 w-11 items-center justify-center rounded-md text-charcoal transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-accentBlue focus:ring-offset-2 active:bg-gray-200 md:h-12 md:w-12"
              type="button"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Area - Scrollable */}
        <div
          className={`flex-1 overflow-y-auto overscroll-contain ${
            isFullscreen ? "h-[calc(100dvh-80px)]" : "max-h-[calc(90dvh-80px)]"
          }`}
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
