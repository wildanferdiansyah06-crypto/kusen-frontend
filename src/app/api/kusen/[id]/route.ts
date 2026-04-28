import { NextResponse } from 'next/server'

function getMockKusenList() {
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
    }
  ]
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    console.log('Using mock data')
    const mockList = getMockKusenList()
    const mock = mockList.find(k => k.id === parseInt(id))
    if (!mock) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(mock)
  } catch (error) {
    console.error('Error fetching product:', error)
    const mockList = getMockKusenList()
    const mock = mockList.find(k => k.id === parseInt(id))
    if (!mock) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }
    return NextResponse.json(mock)
  }
}
