import Image from 'next/image'
import { ArrowLeft, ChevronDown, Star } from 'lucide-react'

const stats = [
  { value: '+14', label: 'سنة خبرة' },
  { value: '48h', label: 'توصيل بغداد' },
  { value: '100%', label: 'أصلي ومكفول' },
]

export function Hero() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 md:px-6 lg:grid-cols-2 lg:py-20">
      <div>
        <p className="flex items-center gap-3 text-sm font-medium text-highlight">
          <span className="h-px w-8 bg-highlight" aria-hidden="true" />
          التقنية الأقرب إليك منذ 2010
        </p>
        <h1 className="mt-6 font-heading text-5xl leading-[1.3] text-balance md:text-6xl lg:text-7xl">
          اختيارات أذكى.
          <span className="block text-highlight">تقنية تدوم.</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
          أجهزة أصلية مختارة بعناية للعمل، الدراسة واللعب — بضمان حقيقي، سعر عراقي واضح، ودعم يعرف
          التقنية فعلاً.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a
            href="#best-sellers"
            className="flex h-14 items-center gap-3 rounded-xl bg-primary px-7 font-medium text-primary-foreground shadow-[0_6px_0_0_var(--color-accent)] transition hover:-translate-y-0.5"
          >
            تسوّق أحدث الأجهزة
            <ArrowLeft className="size-5" aria-hidden="true" />
          </a>
          <a
            href="#categories"
            className="flex items-center gap-2 font-medium transition hover:text-highlight"
          >
            استكشف الأقسام
            <ChevronDown className="size-4" aria-hidden="true" />
          </a>
        </div>

        <dl className="mt-10 flex gap-10 border-t border-border pt-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd className="text-2xl font-bold" dir="ltr">
                {stat.value}
              </dd>
              <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative mx-auto w-full max-w-xl">
        <div
          className="absolute inset-0 translate-x-6 translate-y-6 rounded-[40%_60%_55%_45%/45%_40%_60%_55%] bg-accent"
          aria-hidden="true"
        />
        <div className="relative aspect-square overflow-hidden rounded-[40%_60%_55%_45%/45%_40%_60%_55%] bg-card shadow-xl">
          <Image
            src="/images/hero-laptop.png"
            alt="لابتوب أعمال رمادي مفتوح على سطح أبيض"
            fill
            priority
            sizes="(min-width: 1024px) 560px, 90vw"
            className="object-cover"
          />
        </div>

        <div className="absolute top-8 start-0 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lg md:-start-6">
          <span className="relative flex size-3">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
            <span className="relative inline-flex size-3 rounded-full bg-emerald-500" />
          </span>
          <div>
            <p className="text-sm font-bold">متوفر الآن</p>
            <p className="text-xs text-muted-foreground">شحن فوري من بغداد</p>
          </div>
        </div>

        <div className="absolute bottom-10 end-0 flex items-center gap-3 rounded-2xl bg-card px-4 py-3 shadow-lg md:-end-4">
          <span className="text-2xl font-bold">4.9</span>
          <div>
            <div className="flex text-accent" aria-label="5 نجوم">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
              ))}
            </div>
            <p className="mt-0.5 text-xs text-muted-foreground">تقييم عملائنا</p>
          </div>
        </div>
      </div>
    </section>
  )
}
