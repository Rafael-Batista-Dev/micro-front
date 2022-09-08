import Link from "next/link";

function nav() {
  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        color: "#FFF",
        backgroundColor: "#000",
        height: "80px",
        width: "100%",
      }}
    >
      <div
        style={{
          margin: "0 auto",
          marginTop: "1.7rem",
          display: "flex",
        }}
      >
        <div style={{ padding: "0 20px" }}>
          <Link href="/">Home</Link>
        </div>
        <div style={{ padding: "0 20px" }}>
          <Link href="/shop">Shop</Link>
        </div>
        <div style={{ padding: "0 20px" }}>
          <Link href="/checkout">Checkout</Link>
        </div>
      </div>
    </div>
  );
}

export default nav;
