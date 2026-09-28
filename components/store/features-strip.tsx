import { Headphones, PackageCheck, ShieldCheck, Truck } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'ضمان حقيقي معتمد', text: 'كفالة على الأجهزة والقطع' },
  { icon: Truck, title: 'توصيل لكل العراق', text: 'تغليف آمن وتتبع مستمر' },
  { icon: PackageCheck, title: 'الدفع عند الاستلام', text: 'افحص طلبك قبل الدفع' },
  { icon: Headphones, title: 'دعم فني مختص', text: 'قبل الشراء وبعده' },
]

export function FeaturesStrip() {
  return (
    <section aria-label="مميزات المتجر" className="bg-primary text-primary-foreground">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-4 py-6 md:px-6 lg:grid-cols-4 lg:divide-x lg:divide-x-reverse lg:divide-primary-foreground/15">
        {features.map(({ icon: Icon, title, text }) => (
          <li key={title} className="flex items-center justify-center gap-3 px-2">
            <Icon className="size-6 shrink-0 text-accent" aria-hidden="true" />
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="mt-0.5 text-xs text-primary-foreground/60">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
