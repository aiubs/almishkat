import { ArrowLeft, Monitor, Wifi, Zap } from 'lucide-react'

export function GamingCta() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <div className="relative grid items-center gap-10 overflow-hidden rounded-3xl bg-accent px-6 py-12 md:grid-cols-2 md:px-14">
        <div>
          <p className="text-sm font-medium text-primary">تجميعتك، على مزاجك</p>
          <h2 className="mt-3 font-heading text-4xl leading-[1.4] text-primary text-balance md:text-5xl">
            جهاز ألعاب مصمم
            <span className="block">لك أنت.</span>
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-primary/80">
            اختر ميزانيتك وألعابك المفضلة، وفريقنا يركّب ويختبر التجميعة قبل وصولها إليك.
          </p>
          <a
            href="tel:+9647800000000"
            className="mt-8 inline-flex h-12 items-center gap-3 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
          >
            تحدث مع خبير التجميع
            <ArrowLeft className="size-4" aria-hidden="true" />
          </a>
        </div>

        <div className="relative hidden h-64 items-center justify-center md:flex" aria-hidden="true">
          <Monitor className="size-56 text-primary" strokeWidth={1.75} />
          <Wifi className="absolute top-2 end-10 size-12 rotate-12 text-highlight" />
          <Zap className="absolute bottom-4 start-6 size-12 text-card" />
        </div>
      </div>
    </section>
  )
}
