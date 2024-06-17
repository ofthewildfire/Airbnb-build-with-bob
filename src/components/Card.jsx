export default function Card({ card }) {
  // const imgValue = "./images/" + props.img;
  let badgeText;
  if (card.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (card.location === "Online") {
    badgeText = "Online";
  }

  return (
    <div className="card">
      {badgeText && <span className="badge">{badgeText}</span>}
      <img
        src={"./images/" + card.coverImg}
        alt="Katie Zaferes"
        height={250}
        width={150}
        className="card--image"
      />
      <div className="card--text">
        <div className="card--rating">
          <img src="/images/star.png" alt="star image for rating" />
          <span>{card.stats.rating}</span>
          <span className="grey">
            ({card.stats.reviewCount}) - {card.location}
          </span>
        </div>
        <div className="card--title">
          <p>{card.title}</p>
          <p className="price">
            From ${card.price} <span>/ person</span>
          </p>
        </div>
      </div>
    </div>
  );
}
