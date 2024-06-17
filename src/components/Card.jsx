export default function Card({ card }) {
  console.log(card);
  // const imgValue = "./images/" + props.img;
  return (
    <div className="card">
      <span className="badge">
        {card.openSpots <= 0
          ? "Sold Out"
          : card.openSpots + " spots left" + " in " + card.location}
      </span>
      {/* <img src={imgValue} alt="Katie Zaferes" /> */}
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
          <span>{card.rating}</span>
          <span className="grey">
            ({card.reviewCount}) - {card.country}
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
