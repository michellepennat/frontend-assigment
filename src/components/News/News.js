import React from "react";

import ImageNewsJpg from "../../assets/images/image-new.jpg";
import InformationJpg from "../../assets/images/information.jpg";
import StarSvg from "../../assets/icons/star.svg";
import ArrowSvg from "../../assets/icons/arrow.svg";
import CommentsSvg from "../../assets/icons/comments.svg";
import article from "../../mockup/article.json";

const tagsDummy = [
  {
    title: "Medicina Interna",
  },
  {
    title: "Pediatría",
  },
  {
    title: "Obstetricia",
  },
];

const News = () => {
  return (
    <section className="news">
      <div className="news__image">
        <img src={ImageNewsJpg} alt="Banner noticia" />
        <div className="news__image__tag">
          <p>NOTICIA</p>
        </div>
      </div>
      <div className="news__title">
        <h1>{article.title}</h1>
        <button>
          <p>Guardar</p>
        </button>
      </div>
      <div className="news__information">
        <img src={InformationJpg} alt="Imagen de la noticia" />
        <div>
          <h5>Noticias DocRed</h5>
          <span>Hace 12 h | Publicado: 17/01/18 | Lectura: 3 min</span>
        </div>
      </div>
      <div className="news__tags">
        {tagsDummy.map((tagsItem, i) => (
          <div key={i} className="news__tags__tag">
            <p>{tagsItem.title}</p>
          </div>
        ))}
      </div>
      <div
        className="news__paragraph"
        dangerouslySetInnerHTML={{
          __html: article.content,
        }}
      />
      <div className="news__buttons">
        <div className="news__buttons__button">
          <button>
            <img src={StarSvg} alt="Destacar" />
            <span>Destacar</span>
          </button>
          <button>
            <img src={CommentsSvg} alt="Comentar" />
            <span>Comentar</span>
          </button>
          <button>
            <img src={ArrowSvg} alt="Compartir" />
            <span>Compartir</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;
