"use client";

import { useState, useEffect, useRef } from "react";

type PdfViewerProps = {
  url: string;
  title: string;
};

/**
 * Mobile-optimized PDF viewer component with accessibility features
 * Renders PDFs in an iframe with loading states and error handling
 * @param props - PDF viewer configuration props
 * @returns PDF viewer element with iframe
 */
export function PdfViewer({ url, title }: PdfViewerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
  }, [url]);

  /**
   * Handles iframe load event
   */
  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  /**
   * Handles iframe error event
   */
  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  /**
   * Retries loading the PDF
   */
  const handleRetry = () => {
    setIsLoading(true);
    setHasError(false);
    // Force iframe reload by changing key
    const iframe = document.querySelector('iframe[title*="syllabus"]') as HTMLIFrameElement;
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  return (
    <div className="relative h-full w-full">
      {/* Loading State */}
      {isLoading && !hasError && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-50"
          role="status"
          aria-live="polite"
          aria-label="Loading syllabus"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-accentBlue" />
            <p className="text-sm text-charcoal">Loading syllabus...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {hasError && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-50 p-4"
          role="alert"
          aria-live="assertive"
        >
          <div className="flex max-w-md flex-col items-center gap-4 text-center">
            <svg
              className="h-12 w-12 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-charcoal">
                Unable to load syllabus
              </h3>
              <p className="mb-4 text-sm text-accentSlate">
                The syllabus PDF could not be loaded. Please try again later.
              </p>
              <button
                onClick={handleRetry}
                className="rounded-md bg-accentBlue px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-accentBlue focus:ring-offset-2 active:bg-blue-700"
                type="button"
                aria-label="Retry loading syllabus"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PDF Iframe */}
      <iframe
        ref={iframeRef}
        src={url}
        title={`Syllabus PDF viewer for ${title}`}
        className={`h-full w-full border-0 ${isLoading || hasError ? "opacity-0" : "opacity-100"}`}
        onLoad={handleLoad}
        onError={handleError}
        style={{
          minHeight: "400px",
        }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
      />
    </div>
  );
}
