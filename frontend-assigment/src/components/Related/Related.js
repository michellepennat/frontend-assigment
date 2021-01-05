import React from "react";

const Related = () => {
  return (
    <div className="related">
      <h6>Noticias relacionadas</h6>
      <div>
        <div>
          <img alt="Imagen de referencia" />
          <div>
            <h5>Title</h5>
            <p>Autor</p>
            <hr />
            <div>
              <button>
                <img alt="Destacar" />
                <span>50</span>
              </button>
              <button>
                <img alt="Comentar" />
                <span>40</span>
              </button>
              <button>
                <img alt="Visualizaciones" />
                <span>75</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Related;
