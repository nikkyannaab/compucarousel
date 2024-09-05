export interface Product {
  sErrorCode: number;
  sErrorMessage: string;
  randomProductList: ProductDescription;
}

export interface ProductDescription {
  productId: number;
  productName: string;
  productCode: string;
  description: string;
  thumbnail: string;
  boothNo: string;
  qrUrl: string;
}
