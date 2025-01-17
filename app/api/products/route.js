import { NextResponse } from "next/server";
import db from '../../../lib/db';

export async function POST(request) {

  try {
    const { barcode,
      categoryId,
      description,
      farmerId,
      imageUrl,
      isActive,
      isWholesale,
      productCode,
      productPrice,
      salePrice,
      sku,
      slug,
      tags,
      title,
      unit,
      wholesalePrice,
      wholesaleQty,
      productStock,
      qty,
    } = await request.json();
    // Check if this product already exists in the db
    const existingProduct = await db.product.findUnique({
      where: {
        slug,
      },
    });
    if (existingProduct) {
      return NextResponse.json(
        {
          data: null,
          message: "상품이 이미 존재합니다",
        },
        { status: 409 }
      );
    }
    const newProduct = await db.product.create({
      data: {
        barcode,
        categoryId,
        description,
        userId: farmerId,
        imageUrl,
        isActive,
        isWholesale,
        productCode,
        productPrice: parseFloat(productPrice) || 0,
        salePrice: parseFloat(salePrice) || 0,
        sku,
        slug,
        tags,
        title,
        unit,
        wholesalePrice: parseFloat(wholesalePrice) || 0,
        wholesaleQty: parseInt(wholesaleQty) || 0,
        productStock: parseInt(productStock) || 0,
        qty: parseInt(qty) || 0
      },
    });
    console.log(newProduct);
    return NextResponse.json(newProduct);
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


export async function GET(request) {
  try {
    const products = await db.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    return NextResponse.json(products);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "상품 가져오기 실패",
        error,
      },
      { status: 500 }
    );
  }
}