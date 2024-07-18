function YinYangImage() {
  const rotatingStyle = {
    animation: "rotate 1.5s linear infinite",
    transformOrigin: "center",
  };

  return (
    <div>
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <img
        className="navbar--img"
        style={rotatingStyle}
        src="../../assets/ying_yang.svg"
        alt="Yin Yang Image"
        width={200}
        height={200}
      />
    </div>
  );
}

export default YinYangImage;
