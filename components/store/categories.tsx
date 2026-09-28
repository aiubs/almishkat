import Image from 'next/image'
import { ArrowLeft, Camera, Laptop, Monitor, Printer } from 'lucide-react'

const categories = [
  { title: 'لابتوبات', tagline: 'أكثر من 120 جهاز', icon: Laptop, image: '/images/cat-laptops.png' },
  { title: 'كاميرات', tagline: 'صناعة اللقطة تبدأ هنا', icon: Camera, image: '/images/camera.png' },
  { title: 'طابعات', tagline: 'للبيت والمكتب', icon: Printer, image: '/images/printer.png' },
  { title: 'شاشات', tagline: 'ألوان أدق، لعب أسرع', icon: Monitor, image: '/images/monitor.png' },
]

export function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-20 md:px-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-highlight">اختصر الطريق</p>
          <h2 className="mt-2 font-heading text-3xl md:text-4xl">تسوّق حسب احتياجك</h2>
        </div>
        <p className="text-sm text-muted-foreground">
          كل قسم مرتب ليساعدك توصل للاختيار الصحيح بسرعة.
        </p>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
        {categories.map(({ title, tagline, icon: Icon, image }) => (
          <li key={title}>
            <a
              href="#best-sellers"
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl p-5 text-white lg:aspect-auto lg:h-80"
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"
                aria-hidden="true"
              />
              <Icon
                className="absolute top-5 end-5 size-6 text-accent"
                aria-hidden="true"
              />
              <div className="relative">
                <p className="text-xs text-white/75">{tagline}</p>
                <h3 className="mt-1 font-heading text-2xl font-bold">{title}</h3>
                <span className="mt-3 flex items-center gap-1.5 text-sm text-accent">
                  تصفّح الآن
                  <ArrowLeft
                    className="size-4 transition group-hover:-translate-x-1"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
