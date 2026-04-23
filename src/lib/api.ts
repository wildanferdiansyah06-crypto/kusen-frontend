const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export interface Kusen {
  id: number;
  nama: string;
  deskripsi: string;
  harga: number;
  kategori: string;
  jenisKayu: string;
  panjang: number;
  lebar: number;
  tebal: number;
  material: string;
  warna: string;
  gambar: string;
  gambarUrl: string;
  stok: number;
  tersedia: boolean;
  terjual: number;
  rating: number;
}

export async function fetchKusenList(): Promise<Kusen[]> {
  const response = await fetch(`${API_URL}/api/kusen`);
  if (!response.ok) {
    throw new Error('Failed to fetch kusen list');
  }
  return response.json();
}

export async function fetchKusenById(id: number): Promise<Kusen> {
  const response = await fetch(`${API_URL}/api/kusen/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch kusen details');
  }
  return response.json();
}

export async function fetchKusenByCategory(kategori: string): Promise<Kusen[]> {
  const allKusen = await fetchKusenList();
  return allKusen.filter(k => 
    k.kategori.toLowerCase() === kategori.toLowerCase() && k.tersedia
  );
}

export async function addToCart(productId: number, quantity: number = 1): Promise<void> {
  const response = await fetch(`${API_URL}/cart/add`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({ productId: productId.toString(), quantity: quantity.toString() }),
  });
  if (!response.ok) {
    throw new Error('Failed to add to cart');
  }
}

export async function getCartCount(sessionId?: string): Promise<number> {
  if (!sessionId) return 0;
  const response = await fetch(`${API_URL}/api/cart/count?sessionId=${sessionId}`);
  if (!response.ok) {
    throw new Error('Failed to get cart count');
  }
  const data = await response.json();
  return data.count || 0;
}

export interface CartItem {
  id: number;
  product: Kusen;
  quantity: number;
  totalPrice: number;
}

export async function getCartItems(sessionId?: string): Promise<CartItem[]> {
  if (!sessionId) return [];
  const response = await fetch(`${API_URL}/cart?sessionId=${sessionId}`);
  if (!response.ok) {
    throw new Error('Failed to get cart items');
  }
  return response.json();
}
