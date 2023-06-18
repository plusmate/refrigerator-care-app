import "../CSS/refregerator.css";

function Refregerator(props) {
  return (
    <div className="center" onClick={props.onClick}>
      <div className="fridge-body-left"></div>
      <div className="fridge-body-right"></div>
    </div>
  );
}

export default Refregerator;
