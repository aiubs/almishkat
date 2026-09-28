import { BestSellers } from '@/components/store/best-sellers'
import { CartProvider } from '@/components/store/cart-provider'
import { Categories } from '@/components/store/categories'
import { FeaturesStrip } from '@/components/store/features-strip'
import { GamingCta } from '@/components/store/gaming-cta'
import { Hero } from '@/components/store/hero'
import { SiteFooter } from '@/components/store/site-footer'
import { SiteHeader } from '@/components/store/site-header'

export default function Home() {
  return (
    <CartProvider>
      <SiteHeader />
      <main>
        <Hero />
        <FeaturesStrip />
        <Categories />
        <BestSellers />
        <GamingCta />
      </main>
      <SiteFooter />
    </CartProvider>
  )
}
