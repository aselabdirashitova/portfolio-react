import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="hero-text reveal">
          <p className="eyebrow">// портфолио</p>
          <h1>Асел <span className="grad-text">Абдирашитова</span></h1>
          <p className="role">Студентка IT-направления · Начинающий разработчик · Базы данных и веб-разработка</p>
          <p className="hero-desc">
            Интересуюсь разработкой программного обеспечения, веб-разработкой и базами данных.
            Люблю разбираться в том, как устроены системы, и превращать учебные идеи
            в работающие проекты. Сейчас развиваю навыки программирования, проектирования
            баз данных и создания веб-приложений.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">Скачать резюме</a>
            <a href="#contact" className="btn btn-outline">Связаться со мной</a>
          </div>
          <p className="hero-location">📍 Бишкек, Кыргызстан</p>
        </div>
        <div className="hero-visual">
          <span className="code-symbol sym-1" aria-hidden="true">
            {"</>"}
          </span>

          <span className="code-symbol sym-2" aria-hidden="true">
            {"{ }"}
          </span>
          <span className="code-symbol sym-3" aria-hidden="true">;</span>
          <div className="photo-glow" aria-hidden="true"></div>
          <div className="photo-frame">
            <img src={`${import.meta.env.BASE_URL}profile.png`} alt="Асел Абдирашитова" className="hero-photo" width="640" height="800" />
          </div>
        </div>
      </div>
    </section>
  );
}
