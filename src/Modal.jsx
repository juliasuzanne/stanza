import "./CSS/Modal.css";

export function Modal(props) {
  if (props.show) {
    return (
      <div id="modal-background">
        <section id="modal-main-image">
          <img className="modal-image" src={props.image}></img>
          <p className="description-image">{props.description}</p>

          <button className="close-image" type="button" onClick={props.close}>
            &#x2715;
          </button>
        </section>
      </div>
    );
  }
}
