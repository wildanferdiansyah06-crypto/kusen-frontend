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
  try {
    const response = await fetch(`${API_URL}/api/kusen`);
    if (!response.ok) {
      console.warn('API not available, using mock data');
      return getMockKusenList();
    }
    return response.json();
  } catch (error) {
    console.warn('Failed to fetch from API, using mock data:', error);
    return getMockKusenList();
  }
}

function getMockKusenList(): Kusen[] {
  return [
    {
      id: 1,
      nama: 'Pintu Kayu Jati Premium',
      deskripsi: 'Pintu kayu jati premium dengan desain modern dan finishing natural. Cocok untuk rumah minimalis dan klasik.',
      harga: 2500000,
      kategori: 'Pintu',
      jenisKayu: 'Kayu Jati',
      panjang: 210,
      lebar: 90,
      tebal: 4,
      material: 'Kayu Jati Solid',
      warna: 'Natural',
      gambar: '',
      gambarUrl: '',
      stok: 15,
      tersedia: true,
      terjual: 45,
      rating: 4.8
    },
    {
      id: 2,
      nama: 'Jendela Kayu Meranti',
      deskripsi: 'Jendela kayu meranti dengan kaca tempered. Tahan cuaca dan awet untuk penggunaan jangka panjang.',
      harga: 1800000,
      kategori: 'Jendela',
      jenisKayu: 'Kayu Meranti',
      panjang: 120,
      lebar: 60,
      tebal: 3,
      material: 'Kayu Meranti',
      warna: 'Coklat',
      gambar: '',
      gambarUrl: '',
      stok: 25,
      tersedia: true,
      terjual: 32,
      rating: 4.6
    },
    {
      id: 3,
      nama: 'Daun Pintu Ulin',
      deskripsi: 'Daun pintu kayu ulin tahan air. Ideal untuk area lembab seperti kamar mandi.',
      harga: 3200000,
      kategori: 'Daun Pintu',
      jenisKayu: 'Kayu Ulin',
      panjang: 210,
      lebar: 90,
      tebal: 4,
      material: 'Kayu Ulin Solid',
      warna: 'Coklat Gelap',
      gambar: '',
      gambarUrl: '',
      stok: 10,
      tersedia: true,
      terjual: 28,
      rating: 4.9
    },
    {
      id: 4,
      nama: 'Pintu Mahoni Ukir',
      deskripsi: 'Pintu kayu mahoni dengan ukiran tradisional Jawa. Karya seni tinggi dengan detail yang indah.',
      harga: 4500000,
      kategori: 'Pintu',
      jenisKayu: 'Kayu Mahoni',
      panjang: 220,
      lebar: 95,
      tebal: 5,
      material: 'Kayu Mahoni',
      warna: 'Merah Tua',
      gambar: '',
      gambarUrl: '',
      stok: 5,
      tersedia: true,
      terjual: 15,
      rating: 5.0
    },
    {
      id: 5,
      nama: 'Jendela Casement Kayu Jati',
      deskripsi: 'Jendela casement kayu jati dengan engsel samping. Memberikan sirkulasi udara yang baik.',
      harga: 2100000,
      kategori: 'Jendela',
      jenisKayu: 'Kayu Jati',
      panjang: 100,
      lebar: 60,
      tebal: 3,
      material: 'Kayu Jati',
      warna: 'Natural',
      gambar: '',
      gambarUrl: '',
      stok: 20,
      tersedia: true,
      terjual: 38,
      rating: 4.7
    },
    {
      id: 6,
      nama: 'Pintu Geser Minimalis',
      deskripsi: 'Pintu geser kayu jati untuk hemat ruang. Cocok untuk apartemen dan rumah kecil.',
      harga: 3800000,
      kategori: 'Pintu',
      jenisKayu: 'Kayu Jati',
      panjang: 200,
      lebar: 80,
      tebal: 4,
      material: 'Kayu Jati',
      warna: 'Putih',
      gambar: '',
      gambarUrl: '',
      stok: 12,
      tersedia: true,
      terjual: 22,
      rating: 4.5
    },
    {
      id: 7,
      nama: 'Daun Pintu Jati Ukir',
      deskripsi: 'Daun pintu kayu jati dengan ukiran bunga motif tradisional. Sangat cocok untuk pintu utama.',
      harga: 5500000,
      kategori: 'Daun Pintu',
      jenisKayu: 'Kayu Jati',
      panjang: 220,
      lebar: 95,
      tebal: 5,
      material: 'Kayu Jati Solid',
      warna: 'Natural',
      gambar: '',
      gambarUrl: '',
      stok: 8,
      tersedia: true,
      terjual: 18,
      rating: 4.9
    },
    {
      id: 8,
      nama: 'Daun Pintu Meranti Minimalis',
      deskripsi: 'Daun pintu kayu meranti dengan desain minimalis modern. Ringan dan tahan lama.',
      harga: 2800000,
      kategori: 'Daun Pintu',
      jenisKayu: 'Kayu Meranti',
      panjang: 210,
      lebar: 90,
      tebal: 4,
      material: 'Kayu Meranti',
      warna: 'Coklat Muda',
      gambar: '',
      gambarUrl: '',
      stok: 15,
      tersedia: true,
      terjual: 25,
      rating: 4.6
    },
    {
      id: 9,
      nama: 'Daun Pintu Mahoni Klasik',
      deskripsi: 'Daun pintu kayu mahoni dengan panel klasik. Memberikan kesan elegan dan mewah.',
      harga: 4200000,
      kategori: 'Daun Pintu',
      jenisKayu: 'Kayu Mahoni',
      panjang: 215,
      lebar: 92,
      tebal: 4.5,
      material: 'Kayu Mahoni',
      warna: 'Merah',
      gambar: '',
      gambarUrl: '',
      stok: 10,
      tersedia: true,
      terjual: 20,
      rating: 4.8
    },
    {
      id: 10,
      nama: 'Jendela Sliding Kayu Jati',
      deskripsi: 'Jendela geser kayu jati dengan kaca double glazing. Hemat energi dan kedap suara.',
      harga: 3500000,
      kategori: 'Jendela',
      jenisKayu: 'Kayu Jati',
      panjang: 150,
      lebar: 80,
      tebal: 4,
      material: 'Kayu Jati',
      warna: 'Natural',
      gambar: '',
      gambarUrl: '',
      stok: 18,
      tersedia: true,
      terjual: 30,
      rating: 4.7
    },
    {
      id: 11,
      nama: 'Pintu Double Kayu Jati',
      deskripsi: 'Pintu ganda kayu jati untuk akses utama. Kuat dan aman dengan kunci berkualitas.',
      harga: 5200000,
      kategori: 'Pintu',
      jenisKayu: 'Kayu Jati',
      panjang: 240,
      lebar: 120,
      tebal: 5,
      material: 'Kayu Jati Solid',
      warna: 'Natural',
      gambar: '',
      gambarUrl: '',
      stok: 7,
      tersedia: true,
      terjual: 12,
      rating: 4.9
    },
    {
      id: 12,
      nama: 'Jendela Bay Kayu Meranti',
      deskripsi: 'Jendela bay dengan kayu meranti. Memberikan tampilan modern dan cahaya maksimal.',
      harga: 4200000,
      kategori: 'Jendela',
      jenisKayu: 'Kayu Meranti',
      panjang: 180,
      lebar: 100,
      tebal: 4,
      material: 'Kayu Meranti',
      warna: 'Coklat',
      gambar: '',
      gambarUrl: '',
      stok: 12,
      tersedia: true,
      terjual: 15,
      rating: 4.5
    }
  ];
}

export async function fetchKusenById(id: number): Promise<Kusen> {
  try {
    const response = await fetch(`${API_URL}/api/kusen/${id}`);
    if (!response.ok) {
      console.warn('API not available, using mock data');
      const mockList = getMockKusenList();
      const mock = mockList.find(k => k.id === id);
      if (!mock) throw new Error('Product not found');
      return mock;
    }
    return response.json();
  } catch (error) {
    console.warn('Failed to fetch from API, using mock data:', error);
    const mockList = getMockKusenList();
    const mock = mockList.find(k => k.id === id);
    if (!mock) throw new Error('Product not found');
    return mock;
  }
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
