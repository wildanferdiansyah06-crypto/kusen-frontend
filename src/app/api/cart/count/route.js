import { NextResponse } from "next/server";
let cartData = {};
async function GET(request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get("sessionId");
  if (!sessionId) {
    return NextResponse.json({ count: 0 });
  }
  const cartItems = cartData[sessionId] || [];
  const totalItems = cartItems.reduce((sum, item) => sum + (item.quantity || 0), 0);
  return NextResponse.json({ count: totalItems });
}
export {
  GET
};
