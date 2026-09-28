'use client'

import { useState } from 'react'
import { categoryLabels, products, type CategoryId } from '@/lib/products'
import { cn } from '@/lib/utils'
import { ProductCard } from './product-card'

type Filter = 'all' | Exclude<CategoryId, 'printers'>

const filters: { id: Filter; label: string }[] = [
  { id: 'all', label: 'الكل' },
  { id: 'laptops', label: categoryLabels.laptops },
  { id: 'cameras', label: categoryLabels.cameras },
  { id: 'monitors', label: categoryLabels.monitors },
  { id: 'accessories', label: categoryLabels.accessories },
]

export function BestSellers() {
  const [active, setActive] = useState<Filter>('all')
  const visible = active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <section id="best-sellers" className="scroll-mt-40 bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-highlight">مختارة من خبرائنا</p>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl">الأكثر طلباً هذا الأسبوع</h2>
          </div>
          <div
            role="group"
            aria-label="تصفية حسب القسم"
            className="flex flex-wrap gap-1 rounded-xl border border-border bg-background p-1"
          >
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                aria-pressed={active === f.id}
                className={cn(
                  'rounded-lg px-4 py-2 text-sm transition',
                  active === f.id
                    ? 'bg-card font-semibold shadow-sm'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
