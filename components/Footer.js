import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-300">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-lg font-bold mb-4">Connect with us</h2>
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col md:flex-row md:items-center">
            <Link href="/" legacyBehavior>
              <a className="w-32 mb-4 md:mb-0">
                <img
                  src="/HeadstrongLogo2.svg"
                  alt="Headstrong Salon"
                  className="h-64 w-auto"
                />
              </a>
            </Link>
            <div className="flex flex-col md:flex-row md:items-center">
              <Link href="/about" legacyBehavior>
                <a className="mr-4">About</a>
              </Link>
              <Link href="/contact" legacyBehavior>
                <a className="mr-4">Contact</a>
              </Link>
              <Link href="/privacy" legacyBehavior>
                <a className="mr-4">Privacy</a>
              </Link>
              <Link href="/terms" legacyBehavior>
                <a className="mr-4">Terms</a>
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
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
