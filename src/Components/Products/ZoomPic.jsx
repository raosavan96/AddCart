import React, { useEffect } from "react";
import "./ZoomCss.css";
import Drift from "drift-zoom";

function ZoomPic(props) {
  const { image, title } = props.zoompic;
  useEffect(() => {
    const imageElement = document.querySelector(".drift-demo-trigger");
    const detailsElement = document.querySelector(".details");

    if (imageElement && detailsElement) {
      const driftInstance = new Drift(imageElement, {
        paneContainer: detailsElement,
        inlinePane: 769,
        inlineOffsetY: -85,
        containInline: true,
        hoverBoundingBox: true
      });

      return () => {
        driftInstance.destroy();
      };
    }
  }, []);

  return (
    <>
      <div  className="columns position-relative">
        <div className="column ">
          <div className="thumbnail-container">
            <img
              className="drift-demo-trigger"
              data-zoom={image}
              style={{
                width: "200px",
                height: "200px",
                aspectRatio: "3/2",
                objectFit: "contain"
              }}
              src={image}
              alt={title}
            />
          </div>
        </div>
        <div className="p-5 column details position-absolute z-1 zoom_img" style={{width:"450px",height:"450px", top: "-150px", right:"-510px", backgroundColor:"#ccc"}}></div>
      </div>
    </>
  ); 
}

export default ZoomPic;
