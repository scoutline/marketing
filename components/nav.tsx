'use client';

import { UserButton, SignedIn, SignedOut, useClerk } from '@clerk/nextjs';

export function Nav() {
  const { openSignIn } = useClerk();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/*
        Exact Interface Craft nav:
        - Full-width header
        - No background (transparent) — content visible through
        - Logo on the far left, Sign In on far right
        - Very light — doesn't compete with content
      */}
      <div className="max-w-wide mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo — wordmark only, serif */}
        <a
          href="/"
          className="font-serif text-[0.8125rem] sm:text-sm font-medium text-text-primary tracking-tight
                     hover:text-white transition-colors duration-200"
        >
          Scoutline
        </a>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <SignedOut>
            <button
              onClick={() => openSignIn({})}
              className="font-sans text-sm font-medium
                         bg-white text-black
                         px-4 py-1.5 rounded-full
                         hover:bg-text-primary
                         transition-colors duration-200
                         cursor-pointer"
            >
              Sign in
            </button>
          </SignedOut>

          <SignedIn>
            {/* Clerk user avatar — shown when logged in */}
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

      </div>
    </header>
  );
}
