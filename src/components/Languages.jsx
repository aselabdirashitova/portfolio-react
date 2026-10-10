import React from "react";

export default function Languages() {
  return (
    <section className="section section-alt" id="languages">
<div className="section-inner">
<p className="eyebrow">// языки</p>
<h2 className="reveal">Языки</h2>
<ul className="lang-list">
<li className="reveal">
<span className="lang-name">Русский</span>
<span className="lang-level" aria-label="свободно">
<i className="dot on"></i><i className="dot on"></i><i className="dot on"></i><i className="dot on"></i><i className="dot on"></i>
</span>
<span className="lang-label">свободно</span>
</li>
<li className="reveal">
<span className="lang-name">Кыргызский</span>
<span className="lang-level" aria-label="свободно">
<i className="dot on"></i><i className="dot on"></i><i className="dot on"></i><i className="dot on"></i><i className="dot on"></i>
</span>
<span className="lang-label">свободно</span>
</li>
<li className="reveal">
<span className="lang-name">Английский</span>
<span className="lang-level" aria-label="B2">
<i className="dot on"></i><i className="dot on"></i><i className="dot on"></i><i className="dot"></i><i className="dot"></i>
</span>
<span className="lang-label">B2</span>
</li>
<li className="reveal">
<span className="lang-name">Немецкий</span>
<span className="lang-level" aria-label="A2">
<i className="dot on"></i><i className="dot on"></i><i className="dot"></i><i className="dot"></i><i className="dot"></i>
</span>
<span className="lang-label">A2</span>
</li>
</ul>
<div className="traits reveal">
<h3>Личные качества</h3>
<ul className="tag-list">
<li>Аналитическое мышление</li>
<li>Внимательность к деталям</li>
<li>Ответственность</li>
<li>Быстрая обучаемость</li>
<li>Командная работа</li>
<li>Решение проблем</li>
</ul>
</div>
</div>
</section>
  );
}
