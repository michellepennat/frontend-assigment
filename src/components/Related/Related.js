import React from "react";

import StarSvg from "../../assets/icons/star.svg";
import CommentsSvg from "../../assets/icons/comments.svg";
import EyeSvg from "../../assets/icons/ver.svg";
import { relatedDummy } from "./relatedDummy";

const Related = () => {
  return (
    <section className="related">
      <div className="related__title">
        <h6>Noticias relacionadas</h6>
        <hr />
      </div>
      <div className="related__items">
        {relatedDummy.map((relatedItem, i) => (
          <div key={i}>
            <div
              className="related__items__item"
              style={
                i === 0
                  ? { marginTop: 0, marginBottom: 10 }
                  : { margin: "10px 0" }
              }
            >
              <div style={{ position: "relative" }}>
                <img
                  src={relatedItem.image}
                  alt="Imagen de referencia"
                  className="image-item"
                />
                <div className="related__items__item__tag">
                  <p>NOTICIA</p>
                </div>
              </div>
              <div className="related__items__item__information">
                <h5>{relatedItem.title}</h5>
                <span>Por: {relatedItem.autor} </span>
                <hr />
                <div className="buttons">
                  <button>
                    <img src={StarSvg} alt="Destacar" />
                    <span>50</span>
                  </button>
                  <button>
                    <img src={CommentsSvg} alt="Comentar" />
                    <span>40</span>
                  </button>
                  <button>
                    <img src={EyeSvg} alt="Visualizaciones" />
                    <span>75</span>
                  </button>
                </div>
              </div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Related;
