import { Zap } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="المشكاة ستور - الرئيسية">
      <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary shadow-sm">
        <Zap className="size-5 fill-current" aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-heading text-xl font-bold',
            inverted ? 'text-primary-foreground' : 'text-primary',
          )}
        >
          المشكاة
        </span>
        <span
          className={cn(
            'mt-1 text-[9px] tracking-[0.3em]',
            inverted ? 'text-primary-foreground/60' : 'text-muted-foreground',
          )}
        >
          ALMISHKAT STORE
        </span>
      </span>
    </a>
  )
}
