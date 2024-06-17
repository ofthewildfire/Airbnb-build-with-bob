export default function Card({
  img,
  rating,
  country,
  reviewCount,
  title,
  price,
}) {
  // const imgValue = "./images/" + props.img;
  return (
    <div className="card">
      <span className="badge">Sold Out</span>
      {/* <img src={imgValue} alt="Katie Zaferes" /> */}
      <img src={"./images/" + img} alt="Katie Zaferes" />
      <div className="card--text">
        <div className="card--rating">
          <img src="/images/star.png" alt="star image for rating" />
          <span>{rating}</span>
          <span>
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
