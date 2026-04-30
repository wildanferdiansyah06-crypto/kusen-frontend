const API_URL = process.env.NEXT_PUBLIC_API_URL || "";
async function fetchKusenList() {
  try {
    const response = await fetch(`/api/kusen`);
    if (!response.ok) {
      console.warn("API not available, using mock data");
      return getMockKusenList();
    }
    return response.json();
  } catch (error) {
    console.warn("Failed to fetch from API, using mock data:", error);
    return getMockKusenList();
  }
}
function getMockKusenList() {
  return [
    {
      id: 1,
      nama: "Pintu Kayu Jati Premium",
      deskripsi: "Pintu kayu jati premium dengan desain modern dan finishing natural. Cocok untuk rumah minimalis dan klasik.",
      harga: 25e5,
      kategori: "Pintu",
      jenisKayu: "Kayu Jati",
      panjang: 210,
      lebar: 90,
      tebal: 4,
      material: "Kayu Jati Solid",
      warna: "Natural",
      gambar: "",
      gambarUrl: "",
      stok: 15,
      tersedia: true,
      terjual: 45,
      rating: 4.8
    },
    {
      id: 2,
      nama: "Jendela Kayu Meranti",
      deskripsi: "Jendela kayu meranti dengan kaca tempered. Tahan cuaca dan awet untuk penggunaan jangka panjang.",
      harga: 18e5,
      kategori: "Jendela",
      jenisKayu: "Kayu Meranti",
      panjang: 120,
      lebar: 60,
      tebal: 3,
      material: "Kayu Meranti",
      warna: "Coklat",
      gambar: "",
      gambarUrl: "",
      stok: 25,
      tersedia: true,
      terjual: 32,
      rating: 4.6
    },
    {
      id: 3,
      nama: "Daun Pintu Ulin",
      deskripsi: "Daun pintu kayu ulin tahan air. Ideal untuk area lembab seperti kamar mandi.",
      harga: 32e5,
      kategori: "Daun Pintu",
      jenisKayu: "Kayu Ulin",
      panjang: 210,
      lebar: 90,
      tebal: 4,
      material: "Kayu Ulin Solid",
      warna: "Coklat Gelap",
      gambar: "",
      gambarUrl: "",
      stok: 10,
      tersedia: true,
      terjual: 28,
      rating: 4.9
    },
    {
      id: 4,
      nama: "Pintu Mahoni Ukir",
      deskripsi: "Pintu kayu mahoni dengan ukiran tradisional Jawa. Karya seni tinggi dengan detail yang indah.",
      harga: 45e5,
      kategori: "Pintu",
      jenisKayu: "Kayu Mahoni",
      panjang: 220,
      lebar: 95,
      tebal: 5,
      material: "Kayu Mahoni",
      warna: "Merah Tua",
      gambar: "",
      gambarUrl: "",
      stok: 5,
      tersedia: true,
      terjual: 15,
      rating: 5
    },
    {
      id: 5,
      nama: "Jendela Casement Kayu Jati",
      deskripsi: "Jendela casement kayu jati dengan engsel samping. Memberikan sirkulasi udara yang baik.",
      harga: 21e5,
      kategori: "Jendela",
      jenisKayu: "Kayu Jati",
      panjang: 100,
      lebar: 60,
      tebal: 3,
      material: "Kayu Jati",
      warna: "Natural",
      gambar: "",
      gambarUrl: "",
      stok: 20,
      tersedia: true,
      terjual: 38,
      rating: 4.7
    },
    {
      id: 6,
      nama: "Pintu Geser Minimalis",
      deskripsi: "Pintu geser kayu jati untuk hemat ruang. Cocok untuk apartemen dan rumah kecil.",
      harga: 38e5,
      kategori: "Pintu",
      jenisKayu: "Kayu Jati",
      panjang: 200,
      lebar: 80,
      tebal: 4,
      material: "Kayu Jati",
      warna: "Putih",
      gambar: "",
      gambarUrl: "",
      stok: 12,
      tersedia: true,
      terjual: 22,
      rating: 4.5
    },
    {
      id: 7,
      nama: "Daun Pintu Jati Ukir",
      deskripsi: "Daun pintu kayu jati dengan ukiran bunga motif tradisional. Sangat cocok untuk pintu utama.",
      harga: 55e5,
      kategori: "Daun Pintu",
      jenisKayu: "Kayu Jati",
      panjang: 220,
      lebar: 95,
      tebal: 5,
      material: "Kayu Jati Solid",
      warna: "Natural",
      gambar: "",
      gambarUrl: "",
      stok: 8,
      tersedia: true,
      terjual: 18,
      rating: 4.9
    },
    {
      id: 8,
      nama: "Daun Pintu Meranti Minimalis",
      deskripsi: "Daun pintu kayu meranti dengan desain minimalis modern. Ringan dan tahan lama.",
      harga: 28e5,
      kategori: "Daun Pintu",
      jenisKayu: "Kayu Meranti",
      panjang: 210,
      lebar: 90,
      tebal: 4,
      material: "Kayu Meranti",
      warna: "Coklat Muda",
      gambar: "",
      gambarUrl: "",
      stok: 15,
      tersedia: true,
      terjual: 25,
      rating: 4.6
    },
    {
      id: 9,
      nama: "Daun Pintu Mahoni Klasik",
      deskripsi: "Daun pintu kayu mahoni dengan panel klasik. Memberikan kesan elegan dan mewah.",
      harga: 42e5,
      kategori: "Daun Pintu",
      jenisKayu: "Kayu Mahoni",
      panjang: 215,
      lebar: 92,
      tebal: 4.5,
      material: "Kayu Mahoni",
      warna: "Merah",
      gambar: "",
      gambarUrl: "",
      stok: 10,
      tersedia: true,
      terjual: 20,
      rating: 4.8
    },
    {
      id: 10,
      nama: "Jendela Sliding Kayu Jati",
      deskripsi: "Jendela geser kayu jati dengan kaca double glazing. Hemat energi dan kedap suara.",
      harga: 35e5,
      kategori: "Jendela",
      jenisKayu: "Kayu Jati",
      panjang: 150,
      lebar: 80,
      tebal: 4,
      material: "Kayu Jati",
      warna: "Natural",
      gambar: "",
      gambarUrl: "",
      stok: 18,
      tersedia: true,
      terjual: 30,
      rating: 4.7
    },
    {
      id: 11,
      nama: "Pintu Double Kayu Jati",
      deskripsi: "Pintu ganda kayu jati untuk akses utama. Kuat dan aman dengan kunci berkualitas.",
      harga: 52e5,
      kategori: "Pintu",
      jenisKayu: "Kayu Jati",
      panjang: 240,
      lebar: 120,
      tebal: 5,
      material: "Kayu Jati Solid",
      warna: "Natural",
      gambar: "",
      gambarUrl: "",
      stok: 7,
      tersedia: true,
      terjual: 12,
      rating: 4.9
    },
    {
      id: 12,
      nama: "Jendela Bay Kayu Meranti",
      deskripsi: "Jendela bay dengan kayu meranti. Memberikan tampilan modern dan cahaya maksimal.",
      harga: 42e5,
      kategori: "Jendela",
      jenisKayu: "Kayu Meranti",
      panjang: 180,
      lebar: 100,
      tebal: 4,
      material: "Kayu Meranti",
      warna: "Coklat",
      gambar: "",
      gambarUrl: "",
      stok: 12,
      tersedia: true,
      terjual: 15,
      rating: 4.5
    }
  ];
}
async function fetchKusenById(id) {
  try {
    const response = await fetch(`/api/kusen/${id}`);
    if (!response.ok) {
      console.warn("API not available, using mock data");
      const mockList = getMockKusenList();
      const mock = mockList.find((k) => k.id === id);
      if (!mock) throw new Error("Product not found");
      return mock;
    }
    return response.json();
  } catch (error) {
    console.warn("Failed to fetch from API, using mock data:", error);
    const mockList = getMockKusenList();
    const mock = mockList.find((k) => k.id === id);
    if (!mock) throw new Error("Product not found");
    return mock;
  }
}
async function fetchKusenByCategory(kategori) {
  const allKusen = await fetchKusenList();
  return allKusen.filter(
    (k) => k.kategori.toLowerCase() === kategori.toLowerCase() && k.tersedia
  );
}
async function addToCart(productId, quantity = 1) {
  const response = await fetch(`/api/cart`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({ productId: productId.toString(), quantity: quantity.toString() })
  });
  if (!response.ok) {
    throw new Error("Failed to add to cart");
  }
}
async function getCartCount(sessionId) {
  if (!sessionId) return 0;
  const response = await fetch(`/api/cart/count?sessionId=${sessionId}`);
  if (!response.ok) {
    throw new Error("Failed to get cart count");
  }
  const data = await response.json();
  return data.count || 0;
}
async function getCartItems(sessionId) {
  if (!sessionId) return [];
  const response = await fetch(`/api/cart?sessionId=${sessionId}`);
  if (!response.ok) {
    throw new Error("Failed to get cart items");
  }
  return response.json();
}
export {
  addToCart,
  fetchKusenByCategory,
  fetchKusenById,
  fetchKusenList,
  getCartCount,
  getCartItems
};
