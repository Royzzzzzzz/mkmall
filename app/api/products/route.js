import { NextResponse } from "next/server";

export async function POST(request) {
  barcode;
  categoryId;
  description;
  farmerId;
  imageUrl;
  isActive;
  isWholesale;
  productCode;
  productPrice;
  salePrice;
  sku;
  slug;
  tags;
  title;
  unit;
  wholesalePrice;
  wholesaleQty;
  try {
    const productData = await request.json();
    console.log(productData);
    return NextResponse.json(productData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "상품 생성 실패",
        error,
      },
      { status: 500 }
    );
  }
}
