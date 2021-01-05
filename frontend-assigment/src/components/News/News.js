import React from "react";

const News = (props) => {
  return (
    <section className="news">
      <img alt="Banner noticia" />
      <h1>Title</h1>
      <button>
        <p>Guardar</p>
      </button>
      <div>
        <img alt="Imagen de la noticia"/>
        <h5>Noticiar DocRed</h5>
        <div>
          <span>Hace 12 h | Publicado: 17/01/18 | Lectura: 3 min</span>
        </div>
      </div>
      <div>
        <div>Medicina Interna</div>
      </div>
      <p>Lorem ipsum</p>
      <div>
        <button>
          <img alt="Destacar" />
          <span>Destacar</span>
        </button>
        <button>
          <img alt="Comentar" />
          <span>Comentar</span>
        </button>
        <button>
          <img alt="Compartir" />
          <span>Compartir</span>
        </button>
      </div>
    </section>
  );
};

export default News;
