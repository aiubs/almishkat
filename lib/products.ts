export type CategoryId = 'laptops' | 'cameras' | 'monitors' | 'printers' | 'accessories'

export const categoryLabels: Record<CategoryId, string> = {
  laptops: 'لابتوبات',
  cameras: 'كاميرات',
  monitors: 'شاشات',
  printers: 'طابعات',
  accessories: 'إكسسوارات',
}

export type Product = {
  id: string
  name: string
  category: CategoryId
  image: string
  rating: number
  reviews: number
  price: number | null
  oldPrice?: number
  badge?: string
}

export const products: Product[] = [
  {
    id: 'lenovo-loq',
    name: 'Lenovo LOQ 15IRX9 Gaming',
    category: 'laptops',
    image: '/images/gaming-laptop.png',
    rating: 4.9,
    reviews: 31,
    price: 1245000,
    oldPrice: 1320000,
    badge: 'الأكثر طلباً',
  },
  {
    id: 'canon-r50',
    name: 'Canon EOS R50 Creator Kit',
    category: 'cameras',
    image: '/images/camera.png',
    rating: 4.8,
    reviews: 19,
    price: 895000,
    badge: 'وصل حديثاً',
  },
  {
    id: 'asus-rog-g16',
    name: 'ASUS ROG Strix G16',
    category: 'laptops',
    image: '/images/premium-laptop.png',
    rating: 5,
    reviews: 12,
    price: 1980000,
    oldPrice: 2120000,
    badge: 'خصم مميز',
  },
  {
    id: 'odyssey-g5',
    name: 'Samsung Odyssey G5 32”',
    category: 'monitors',
    image: '/images/monitor.png',
    rating: 4.7,
    reviews: 26,
    price: 485000,
  },
  {
    id: 'canon-mf657',
    name: 'Canon imageCLASS MF657Cdw',
    category: 'printers',
    image: '/images/printer.png',
    rating: 4.6,
    reviews: 8,
    price: null,
    badge: 'ضمان سنة',
  },
  {
    id: 'logitech-superlight',
    name: 'Logitech G Pro X Superlight',
    category: 'accessories',
    image: '/images/mouse.png',
    rating: 4.9,
    reviews: 42,
    price: 168000,
    oldPrice: 185000,
    badge: 'عرض محدود',
  },
]

export function formatIQD(value: number) {
  return `${new Intl.NumberFormat('en-US').format(value)} د.ع`
}
