import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center md:text-center">
        <h2 className="text-lg font-bold mb-4 text-center">Connect with us</h2>
        <div className="flex flex-col md:flex-row md:items-center justify-between w-full max-w-4xl">
          <div className="flex flex-col md:flex-row md:items-center">
            <Link href="/" legacyBehavior>
              <a className="w-32 mb-4 md:mb-0">
                <img
                  src="/HeadstrongLogo.svg"
                  alt="Headstrong Salon"
                  className="h-20 md:h-32 w-auto"
                />
              </a>
            </Link>
            <div className="flex flex-col md:flex-row md:items-center md:ml-4">
              <Link href="/about" legacyBehavior>
                <a className="my-1 md:my-0 md:mr-4">About</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="my-1 md:my-0 md:mr-4">Contact</a>
              </Link>
              <Link href="/privacy" legacyBehavior>
                <a className="my-1 md:my-0 md:mr-4">Privacy</a>
              </Link>
              <Link href="/terms" legacyBehavior>
                <a className="my-1 md:my-0">Terms</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-2xl md:text-3xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-2xl md:text-3xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4 text-2xl md:text-3xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
          </div>
        </div>
        <p className="mt-8 text-center text-sm">
          &copy; 2023 Headstrong Salon. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
