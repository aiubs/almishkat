'use client'

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

type CartContextValue = {
  cartCount: number
  favorites: Set<string>
  addToCart: (id: string) => void
  toggleFavorite: (id: string) => void
}

const CartContext = createContext<CartContextValue | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Record<string, number>>({})
  const [favorites, setFavorites] = useState<Set<string>>(() => new Set())

  const addToCart = useCallback((id: string) => {
    setItems((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }))
  }, [])

  const toggleFavorite = useCallback((id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }, [])

  const value = useMemo(
    () => ({
      cartCount: Object.values(items).reduce((sum, qty) => sum + qty, 0),
      favorites,
      addToCart,
      toggleFavorite,
    }),
    [items, favorites, addToCart, toggleFavorite],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
