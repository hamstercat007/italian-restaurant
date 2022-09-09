import { useState } from 'react';

export default function useCart() {
  const [cart, setCart] = useState(0);

  return [cart, setCart];
}
