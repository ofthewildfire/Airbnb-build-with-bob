export default function Card({
  img,
  rating,
  country,
  openSpots,
  reviewCount,
  title,
  price,
}) {
  // const imgValue = "./images/" + props.img;
  return (
    <div className="card">
      <span className="badge">
        {openSpots <= 0
          ? "Sold Out"
          : openSpots + " spots left" + " in " + country}
      </span>
      {/* <img src={imgValue} alt="Katie Zaferes" /> */}
      <img
        src={"./images/" + img}
        alt="Katie Zaferes"
        height={250}
        width={150}
        className="card--image"
      />
      <div className="card--text">
        <div className="card--rating">
          <img src="/images/star.png" alt="star image for rating" />
          <span>{rating}</span>
          <span className="grey">
            ({reviewCount}) - {country}
          </span>
        </div>
        <div className="card--title">
          <p>{title}</p>
          <p className="price">
            From ${price} <span>/ person</span>
          </p>
        </div>
      </div>
    </div>
  );
}
