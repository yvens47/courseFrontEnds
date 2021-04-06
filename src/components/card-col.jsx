function CardCol(props) {
  return (
    <div className="col-md-4 card-col">
      <img src={props.image} alt={props.alt} width="30%" />
      <p
        className="mt-3"
        style={{ fontWeight: "bold", fontFamily: "Lato", fontSize: "20px" }}
      >
        {props.title}
      </p>
      <p>{props.text} </p>
    </div>
  );
}
export default CardCol;
