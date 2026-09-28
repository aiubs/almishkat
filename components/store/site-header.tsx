'use client'

import { useState } from 'react'
import { Heart, Menu, Search, ShoppingBag, Sparkles, Truck, X } from 'lucide-react'
import { Logo } from './logo'
import { useCart } from './cart-provider'

const navLinks = [
  'كل الأقسام',
  'لابتوبات',
  'كاميرات',
  'طابعات وأحبار',
  'شاشات',
  'شبكات وإنترنت',
  'تجميعات الألعاب',
]

export function SiteHeader() {
  const { cartCount, favorites } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40">
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs md:px-6">
          <p className="flex items-center gap-2">
            <Truck className="size-4 text-accent" aria-hidden="true" />
            توصيل سريع وآمن إلى جميع محافظات العراق
          </p>
          <div className="hidden items-center gap-6 sm:flex">
            <span className="text-primary-foreground/70">السبت — الخميس، 9 صباحاً — 8 مساءً</span>
            <a href="tel:+9647800000000" dir="ltr" className="font-medium hover:text-accent">
              0780 000 0000
            </a>
          </div>
        </div>
      </div>

      <div className="border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 md:gap-8 md:px-6">
          <Logo />

          <form
            role="search"
            className="relative hidden flex-1 md:block"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="site-search" className="sr-only">
              ابحث في المتجر
            </label>
            <Search
              className="pointer-events-none absolute start-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden="true"
            />
            <input
              id="site-search"
              type="search"
              placeholder="ابحث عن لابتوب، كاميرا، طابعة..."
              className="h-11 w-full rounded-xl border border-border bg-secondary ps-11 pe-4 text-sm outline-none transition focus:border-accent focus:bg-card focus:ring-2 focus:ring-ring/30"
            />
          </form>

          <div className="ms-auto flex items-center gap-2 md:ms-0">
            <button
              type="button"
              className="relative flex size-11 items-center justify-center rounded-xl border border-border bg-card transition hover:border-primary"
              aria-label={`المفضلة (${favorites.size})`}
            >
              <Heart className="size-5" aria-hidden="true" />
              {favorites.size > 0 && (
                <span className="absolute -top-1 -end-1 flex size-5 items-center justify-center rounded-full bg-highlight text-[10px] font-bold text-white">
                  {favorites.size}
                </span>
              )}
            </button>
            <button
              type="button"
              className="flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              aria-label={`السلة، ${cartCount} منتجات`}
            >
              <ShoppingBag className="size-5" aria-hidden="true" />
              <span className="hidden sm:inline">السلة</span>
              <span
                className="flex size-6 items-center justify-center rounded-lg bg-accent text-xs font-bold text-primary"
                aria-live="polite"
              >
                {cartCount}
              </span>
            </button>
            <button
              type="button"
              className="flex size-11 items-center justify-center rounded-xl border border-border bg-card lg:hidden"
              aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              aria-expanded={menuOpen}
              aria-controls="main-nav"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        <nav
          id="main-nav"
          aria-label="الأقسام الرئيسية"
          className={`${menuOpen ? 'block' : 'hidden'} border-t border-border lg:block`}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 lg:flex-row lg:items-center lg:justify-between lg:py-0 md:px-6">
            <ul className="flex flex-col gap-1 lg:flex-row lg:gap-7">
              {navLinks.map((link, i) => (
                <li key={link}>
                  <a
                    href="#categories"
                    className={`block rounded-lg px-2 py-2 text-sm transition hover:text-highlight lg:px-0 lg:py-3.5 ${
                      i === 0 ? 'font-semibold' : 'text-foreground/80'
                    }`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#best-sellers"
              className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-highlight lg:px-0"
            >
              <Sparkles className="size-4" aria-hidden="true" />
              عروض الأسبوع
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
