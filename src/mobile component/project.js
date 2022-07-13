export default function Project(props) {
  return (
    <div className="card-list">
      <a href={props.hrefLink} target="_blank">
        <img src={props.imgScr} alt="Responsive Web Design" />
      </a>
      <div className="card-info">
        <p className="rating"><span className="star"><i className="fa-solid fa-star"></i></span> {props.cardName}</p>
      </div>
    </div>
  )
}