import React from "react";

import ImageNewsJpg from "../../assets/images/image-new.jpg";
import StarSvg from "../../assets/icons/star.svg";
import CommentsSvg from "../../assets/icons/comments.svg";
import EyeSvg from "../../assets/icons/ver.svg";

const Related = () => {
  return (
    <section className="related">
      <div className="related__title">
        <h6>Noticias relacionadas</h6>
        <hr />
      </div>
      <div className="related__items">
        <div className="related__items__item">
          <div style={{ position: "relative" }}>
            <img
              src={ImageNewsJpg}
              alt="Imagen de referencia"
              className="image-item"
            />
            <div className="related__items__item__tag">
              <p>NOTICIA</p>
            </div>
          </div>
          <div className="related__items__item__information">
            <h5>Title</h5>
            <span>Autor</span>
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
    </section>
  );
};

export default Related;
