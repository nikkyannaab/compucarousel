import "./index.css";
import expo from "../../../assets/contextWinners/expo.png";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ProductCard = (prodData: any) => {
  const productDetailedData = prodData.productData;
  return (
    <div className="product-container">
      <div className="column-60">
        <div className="row1">
          <div className="image-container">
            <img src={productDetailedData.thumbnail} alt="Product Image" />
          </div>
          <div className="Product-name">
            <a className="product-text">{productDetailedData.productName}</a>
          </div>
        </div>
        <div className="product-description">
          <div className="description">{productDetailedData.description}</div>
        </div>
        <div className="row4">
          <button className="rounded-button">
            <a className="winner-time-tag-content-product">{`Booth:${productDetailedData.boothNo}`}</a>
          </button>
        </div>
      </div>

      <div className="column-40">
        <div className="container-qr">
          <div className="text-qr">Scan to Win</div>
          <div className="qr-code">
            <img
              src={productDetailedData.qrUrl}
              alt="QR Code"
              className="image-expo-container"
            />
          </div>
          <div className="text-qr-winner">Scan to unlock</div>
          <div className="text-qr-winner">exclusive content</div>
          <div className="expo-image">
            <img src={expo} alt="Product Image" className="Product-expo-Image" />
          </div>
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default ProductCard;
