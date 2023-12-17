"use client";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

export const NavBar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="border-b">
        <div className="max-w-[1200px] flex justify-between items-center py-3 m-auto px-3">
          {/* Logo and Brand Name */}
          <div className="flex gap-5 items-center">
            <Link
              href="/"
              className="flex gap-2 items-center no-underline mr-2"
            >
              <Image
                src="/logo.png"
                width={60}
                height={60}
                alt="Logo"
                className="rounded-md"
              />
              <p className="text-neutral-1 font-semibold text-lg">RevealAuto</p>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-4 items-center">
            <Link
              href="/blog"
              className="text-neutral-2 no-underline text-sm font-semibold"
            >
              Blog
            </Link>
            <Link
              href="/products"
              className="text-neutral-2 no-underline text-sm font-semibold"
            >
              Products
            </Link>
            <Link
              href="/pricing"
              className="text-neutral-2 no-underline text-sm font-semibold"
            >
              Pricing
            </Link>
            <Link
              href="/login"
              className="text-neutral-2 no-underline text-sm font-semibold"
            >
              Log In
            </Link>
            <Link
              href="/google-sheets"
              target="_blank"
              className="text-white px-4 py-2 rounded-md no-underline text-sm font-semibold bg-primary-2"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              <Image src="/menu.svg" width={20} height={20} alt="Menu icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } px-4 py-2 border-b`}
      >
        <div className="flex flex-col gap-2">
          <Link
            href="/blog"
            className="block text-neutral-2 no-underline text-sm font-semibold"
          >
            Blog
          </Link>
          <Link
            href="/products"
            className="block text-neutral-2 no-underline text-sm font-semibold"
          >
            Products
          </Link>
          <Link
            href="/pricing"
            className="block text-neutral-2 no-underline text-sm font-semibold"
          >
            Pricing
          </Link>
          <Link
            href="/login"
            className="block text-neutral-2 no-underline text-sm font-semibold"
          >
            Log In
          </Link>
          <Link
            href="/google-sheets"
            target="_blank"
            className="block text-white px-4 py-2 rounded-md no-underline text-sm font-semibold bg-primary-2 max-w-[100px] text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </>
  );
};
