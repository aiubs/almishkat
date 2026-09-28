'use client'

import Image from 'next/image'
import { Heart, Phone, ShoppingBag, Star } from 'lucide-react'
import { categoryLabels, formatIQD, type Product } from '@/lib/products'
import { cn } from '@/lib/utils'
import { useCart } from './cart-provider'

export function ProductCard({ product }: { product: Product }) {
  const { favorites, toggleFavorite, addToCart } = useCart()
  const isFavorite = favorites.has(product.id)

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 end-3 rounded-md bg-accent px-2.5 py-1 text-xs font-bold text-primary">
            {product.badge}
          </span>
        )}
        <button
          type="button"
          onClick={() => toggleFavorite(product.id)}
          aria-pressed={isFavorite}
          aria-label={`${isFavorite ? 'إزالة' : 'إضافة'} ${product.name} ${isFavorite ? 'من' : 'إلى'} المفضلة`}
          className="absolute top-3 start-3 flex size-9 items-center justify-center rounded-lg bg-card/95 shadow-sm transition hover:scale-105"
        >
          <Heart
            className={cn('size-4', isFavorite && 'fill-highlight text-highlight')}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-medium text-highlight">{categoryLabels[product.category]}</p>
        <h3 className="mt-2 font-medium" dir="ltr" style={{ textAlign: 'right' }}>
          {product.name}
        </h3>
        <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
          <Star className="size-4 fill-accent text-accent" aria-hidden="true" />
          <span className="font-bold text-foreground">{product.rating}</span>
          <span>({product.reviews} تقييماً)</span>
        </p>

        <div className="mt-5 flex items-end justify-between gap-3 border-t border-border pt-4">
          <div>
            {product.oldPrice && (
              <p className="text-xs text-muted-foreground line-through">
                <span className="sr-only">السعر السابق: </span>
                {formatIQD(product.oldPrice)}
              </p>
            )}
            <p className="text-lg font-bold">
              {product.price ? formatIQD(product.price) : 'اتصل للسعر'}
            </p>
          </div>
          {product.price ? (
            <button
              type="button"
              onClick={() => addToCart(product.id)}
              aria-label={`أضف ${product.name} إلى السلة`}
              className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition hover:bg-accent hover:text-primary"
            >
              <ShoppingBag className="size-5" aria-hidden="true" />
            </button>
          ) : (
            <a
              href="tel:+9647800000000"
              aria-label={`اتصل للاستفسار عن سعر ${product.name}`}
              className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition hover:bg-accent hover:text-primary"
            >
              <Phone className="size-5" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
