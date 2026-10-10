import React from "react";

export default function About() {
  return (
    <section className="section" id="about">
<div className="section-inner about-grid">
<div className="about-card reveal">
<p className="eyebrow">// обо мне</p>
<h2>Обо мне</h2>
<p className="body-text">
            Студентка IT-направления, интересуюсь разработкой программного обеспечения,
            веб-разработкой и базами данных. Люблю разбираться в том, как устроены системы,
            и превращать учебные идеи в работающие проекты. Сейчас развиваю навыки
            программирования, проектирования баз данных и создания веб-приложений.
          </p>
<dl className="meta-list">
<div>
<dt>Локация</dt>
<dd>Бишкек, Кыргызстан</dd>
</div>
<div>
<dt>Направление</dt>
<dd>Веб-разработка</dd>
</div>
<div>
<dt>Статус</dt>
<dd>Открыта к junior-позициям</dd>
</div>
<div>
<dt>Образование</dt>
<dd>IT-направление, с 2025</dd>
</div>
</dl>
</div>
<div className="about-tiles reveal">
<div className="tile">
<span className="tile-icon">🎓</span>
<span>IT студентка</span>
</div>
<div className="tile">
<span className="tile-icon">💻</span>
<span>Разработка</span>
</div>
<div className="tile">
<span className="tile-icon">🗄️</span>
<span>Базы данных</span>
</div>
</div>
</div>
</section>
  );
}
