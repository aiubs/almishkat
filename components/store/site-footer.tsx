import { Logo } from './logo'

const columns = [
  { title: 'المتجر', links: ['الأقسام', 'وصل حديثاً', 'العروض'] },
  { title: 'خدمة العملاء', links: ['اتصل بنا', 'سياسة الاستبدال', 'الضمان والصيانة'] },
]

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            وجهتك الموثوقة للتقنية الأصلية في العراق. نختار، نفحص، ونوصل بعناية.
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h2 className="text-sm font-semibold">{col.title}</h2>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/70">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-accent">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h2 className="text-sm font-semibold">معرض بغداد</h2>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-primary-foreground/70">
            <p>شارع الصناعة، مجمع التقنية</p>
            <p>السبت — الخميس</p>
            <p>9:00 ص — 8:00 م</p>
          </address>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-primary-foreground/60 sm:flex-row sm:justify-between md:px-6">
          <p>© 2026 المشكاة ستور. جميع الحقوق محفوظة.</p>
          <p>الدفع عند الاستلام متاح في جميع المحافظات</p>
        </div>
      </div>
    </footer>
  )
}
