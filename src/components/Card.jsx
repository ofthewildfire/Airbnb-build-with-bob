/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <div className="card">
      <span className="badge">Sold Out</span>
      <img src="/images/swimmer.png" alt="Katie Zaferes" />
      <div className="card--text">
        <div className="card--rating">
          <img src="/images/star.png" alt="star image for rating" />
          <span>4.94</span>
          <span>(6) - USA</span>
        </div>
        <div className="card--title">
          <p>Life lessons with Katie Zaferes</p>
          <p className="price">
            From $136 <span>/ person</span>
          </p>
        </div>
      </div>
    </div>
  );
}
