"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const LINKS = [
  { href: "/help", label: "Get Help" },
  { href: "/learn", label: "Learn" },
  { href: "/check-in", label: "Check-in" },
  { href: "/partners", label: "Partners" },
  { href: "/prevention", label: "Prevention" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export function Nav({ tone = "hero" }: { tone?: "hero" | "page" }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="glass-nav mx-4 mt-3 rounded-2xl sm:mx-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-8">
          <Link href="/" className="bubble px-3 py-1.5 text-sm font-semibold tracking-wide">Harbor</Link>
          <nav className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(link.href + "/");
              return (
                <Link key={link.href} href={link.href} className={cn("rounded-full px-3 py-1.5 text-sm font-medium", active ? "bg-clay text-brown" : "glass-pill text-brown")}>
                  {link.label}
                </Link>
              );
            })}
          </nav>
          <Link href="/help" className="cta-grad hidden rounded-full px-4 py-2 text-sm font-semibold md:inline-flex">Get help now</Link>
          <button type="button" className="rounded-md border-[3px] border-clay p-2 text-clay md:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((v) => !v)}>
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        {open && (
          <div className="liquid-glass-strong mx-4 mt-2 mb-3 rounded-xl p-3 text-brown md:hidden">
            {LINKS.map((link) => (
              <Link key={link.href} href={link.href} className="block rounded-lg px-3 py-3 text-sm font-medium">{link.label}</Link>
            ))}
            <Link href="/help" className="cta-grad mt-2 block rounded-full px-4 py-3 text-center text-sm font-semibold">Get help now</Link>
          </div>
        )}
      </div>
    </header>
  );
}
