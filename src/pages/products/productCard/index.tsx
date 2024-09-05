import "./index.css";
import { QRCode } from "react-qrcode-logo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = (prodData: any) => {
  const productDetailedData = prodData.productData;
  return (
    <div className="product-container">
      <div className="product-details-container">
        <div className="product-details-image-container">
          <div className="product-image">
            <img src={productDetailedData.thumbnail} alt="Product Image" />
          </div>
          <div className="text">{productDetailedData.productName}</div>
        </div>
        <div className="product-description-container">
          <div className="product-description">
            {productDetailedData.description}
          </div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", paddingLeft: "3vw" }}
        >
          <div className="element">
            <div className="element-text">{`Booth:${productDetailedData.boothNo}`}</div>
          </div>
        </div>
      </div>
      <div className="container-qr">
        <div className="text-qr">Scan to Win</div>
        <div className="qr-code">
          <QRCode
            value={productDetailedData.qrUrl}
            style={{ height: "100%", width: "100%" ,borderRadius:"1vw" }}
          />
        </div>
        <div className="text-qr-winner">Scan to unlock</div>
        <div className="text-qr-winner">exclusive content</div>
      </div>
    </div>
  );
};
export default ProductCard;
