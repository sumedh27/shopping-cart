function StarSVG({ fillColor, fillStroke }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        // fill={"#c4c4c4"}
        // stroke="#c4c4c4"
        fill={fillColor}
        stroke={fillStroke}
        strokeWidth=".5"
        d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
      />
      <clipPath id="a">
        <path d="M0 0h12v24H0z" />
      </clipPath>
      <path
        // fill="gold"
        // stroke="gold"
        fill={fillColor}
        stroke={fillStroke}
        strokeWidth=".5"
        clipPath="url(#a)"
        d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"
      />
    </svg>
  );
}

function Rating({ rating }) {
  const generateStarsArray = (rating) => {
    let rounded = Math.round(rating * 2) / 2;
    const stars = Array.from({ length: 5 }, () => 0);

    for (let i = 0; i < stars.length; i++) {
      if (rounded === 0.5) {
        stars[i] = 0.5;
        rounded = 0;
        break;
      }
      if (rounded <= 0) break;
      stars[i] = 1;
      rounded -= 1;
    }

    return stars;
  };

  const generateColorCode = (rating) => {
    const stars = generateStarsArray(rating);

    return stars.map((num) => {
      if (num === 0) {
        return { fillColor: "#c4c4c4", fillStroke: "#c4c4c4" };
      }
      if (num === 0.5) {
        return { fillColor: "gold", fillStroke: "#c4c4c4" };
      }
      if (num === 1) {
        return { fillColor: "gold", fillStroke: "gold" };
      }
    });
  };

  const svgStars = generateColorCode(rating);

  return (
    <>
      <div>
        {svgStars.map((star, i) => (
          <StarSVG
            key={i + 1}
            fillColor={star.fillColor}
            fillStroke={star.fillStroke}
          />
        ))}
      </div>
    </>
  );
}

export default Rating;
