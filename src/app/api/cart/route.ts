import { NextRequest, NextResponse } from 'next/server'

interface CartItem {
  id: number
  product: any
  quantity: number
  totalPrice: number
}

let cartData: { [sessionId: string]: CartItem[] } = {}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const sessionId = searchParams.get('sessionId')

  if (!sessionId) {
    return NextResponse.json([])
  }

  const cartItems = cartData[sessionId] || []
  return NextResponse.json(cartItems)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text()
    const params = new URLSearchParams(body)
    const productId = parseInt(params.get('productId') || '0')
    const quantity = parseInt(params.get('quantity') || '1')

    if (!productId) {
      return NextResponse.json(
        { error: 'Product ID is required' },
        { status: 400 }
      )
    }

    const sessionId = request.headers.get('x-session-id') || 'default'
    
    if (!cartData[sessionId]) {
      cartData[sessionId] = []
    }

    const existingItem = cartData[sessionId].find(item => item.id === productId)
    
    if (existingItem) {
      existingItem.quantity += quantity
      existingItem.totalPrice = existingItem.quantity * (existingItem.product.harga || 0)
    } else {
      cartData[sessionId].push({
        id: productId,
        product: { id: productId, harga: 0 },
        quantity,
        totalPrice: quantity * 0
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error adding to cart:', error)
    return NextResponse.json(
      { error: 'Failed to add to cart' },
      { status: 500 }
    )
  }
}
