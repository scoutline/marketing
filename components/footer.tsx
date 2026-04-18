export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-white/[0.08]">
      <div
        className="max-w-prose mx-auto
                   flex flex-col sm:flex-row items-start sm:items-center
                   justify-between gap-4"
      >
        {/* Left: copyright */}
        <span className="font-sans text-xs text-text-tertiary">
          © {new Date().getFullYear()} Scoutline, Inc. All rights reserved.
        </span>

        {/* Right: links */}
        <div className="flex items-center gap-5">
          <a
            href="/privacy"
            className="font-sans text-xs text-text-tertiary
                       hover:text-text-secondary transition-colors duration-200"
          >
            Privacy
          </a>
          <a
            href="/terms"
            className="font-sans text-xs text-text-tertiary
                       hover:text-text-secondary transition-colors duration-200"
          >
            Terms
          </a>
          <a
            href="mailto:harsha@usescoutline.com"
            className="font-sans text-xs text-text-tertiary
                       hover:text-text-secondary transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
