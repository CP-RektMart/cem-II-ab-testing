const Banner = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 100,
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          maxWidth: "300px",
          width: "100%",
          minHeight: "500px",
          borderRadius: 8,
          padding: 16,
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="/poster.png"
              alt=""
              style={{
                width: "100%",
                borderRadius: 4,
              }}
            />
          </div>
          <a href="https://alpha.mycourseville.com/">
            <button
              style={{
                backgroundColor: "#048bd9",
                border: "none",
                color: "white",
                borderRadius: 8,
                padding: "6px 24px",
              }}
            >
              Enter to Website
            </button>
          </a>
        </div>
        <a
          href="https://www.mycourseville.com/"
          style={{
            color: "inherit",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -12,
              right: -12,
              width: "30px",
              height: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10000px",
              backgroundColor: "#dedede",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <i className="fa-solid fa-x"></i>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Banner;
