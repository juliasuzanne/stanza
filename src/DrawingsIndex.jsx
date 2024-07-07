import { useEffect, useState } from "react";

export function DrawingsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  const [drawingUrls, setDrawingUrls] = useState([]);

  const handleGetDrawingUrls = () => {
    props.drawings.map((drawing) => setDrawingUrls([...drawingUrls, drawing.url]));
    console.log(drawingUrls);
  };

  return (
    <div>
      <div className="center">
        <input
          defaultValue="none"
          id="myform"
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
        />{" "}
      </div>
      <br></br>

      <div id="drawings-index">
        {props.drawings
          .filter(
            (drawings) =>
              drawings.tags.toLowerCase().includes(searchFilter.toLowerCase()) ||
              drawings.description.toLowerCase().includes(searchFilter.toLowerCase())
          )
          .map((drawing) => (
            <div key={drawing.id} id="drawing">
              {/* <h5 className="handwriting"> {drawing.name} </h5>
              <h5 className="handwriting"> {drawing.id} </h5> */}
              <img
                // onClick={() => props.onShowDrawing(drawing)}
                height="300px"
                className="showingdrawing"
                src={drawing.url}
                alt="image"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
