import "../CSS/refregerator.css";

function ClosedRefregerator(props) {
  return (
    <div className="center" onClick={props.onClick}>
      <div className="fridge-door">
        <button className="fridge-handle-top" />
        <button className="fridge-handle-bottom" />
      </div>
    </div>
  );
}

export default ClosedRefregerator;
