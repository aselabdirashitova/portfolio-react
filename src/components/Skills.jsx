import React from "react";

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
<div className="section-inner">
<p className="eyebrow">// навыки</p>
<h2 className="reveal">Навыки</h2>
<div className="skills-grid">
<div className="skill-card reveal">
<div className="skill-icon icon-code" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none">
<path d="M8 5L2 12L8 19M16 5L22 12L16 19" stroke="url(#gi1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
<defs>
<linearGradient id="gi1" x1="0" y1="0" x2="24" y2="24">
<stop stopColor="var(--primary)"></stop>
<stop offset="1" stopColor="var(--secondary)"></stop>
</linearGradient>
</defs>
</svg>
</div>
<h3>Программирование</h3>
<ul className="tag-list">
<li>Python</li>
<li>Java</li>
<li>ООП</li>
<li>UML</li>
<li>Алгоритмы и структуры данных</li>
</ul>
</div>
<div className="skill-card reveal">
<div className="skill-icon icon-web" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none">
<circle cx="12" cy="12" r="9" stroke="url(#gi2)" strokeWidth="2"></circle>
<path d="M3 12h18M12 3c2.5 2.5 3.8 5.7 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-5.7-3.8-9s1.3-6.5 3.8-9z" stroke="url(#gi2)" strokeWidth="1.6"></path>
<defs>
<linearGradient id="gi2" x1="0" y1="0" x2="24" y2="24">
<stop stopColor="var(--primary)"></stop>
<stop offset="1" stopColor="var(--secondary)"></stop>
</linearGradient>
</defs>
</svg>
</div>
<h3>Веб-разработка</h3>
<ul className="tag-list">
<li>HTML</li>
<li>CSS</li>
<li>Spring Boot</li>
<li>Основы веб-разработки</li>
</ul>
</div>
<div className="skill-card reveal">
<div className="skill-icon icon-db" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none">
<ellipse cx="12" cy="5.5" rx="8" ry="3" stroke="url(#gi3)" strokeWidth="2"></ellipse>
<path d="M4 5.5V18.5C4 20.16 7.58 21.5 12 21.5C16.42 21.5 20 20.16 20 18.5V5.5" stroke="url(#gi3)" strokeWidth="2"></path>
<path d="M4 12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12" stroke="url(#gi3)" strokeWidth="2"></path>
<defs>
<linearGradient id="gi3" x1="0" y1="0" x2="24" y2="24">
<stop stopColor="var(--primary)"></stop>
<stop offset="1" stopColor="var(--secondary)"></stop>
</linearGradient>
</defs>
</svg>
</div>
<h3>Базы данных</h3>
<ul className="tag-list">
<li>SQL</li>
<li>PostgreSQL</li>
<li>ER-диаграммы</li>
<li>Проектирование БД</li>
</ul>
</div>
<div className="skill-card reveal">
<div className="skill-icon icon-tools" aria-hidden="true">
<svg viewBox="0 0 24 24" fill="none">
<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" stroke="url(#gi4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"></path>
<defs>
<linearGradient id="gi4" x1="0" y1="0" x2="24" y2="24">
<stop stopColor="var(--primary)"></stop>
<stop offset="1" stopColor="var(--secondary)"></stop>
</linearGradient>
</defs>
</svg>
</div>
<h3>Инструменты</h3>
<ul className="tag-list">
<li>Git / GitHub</li>
<li>IntelliJ IDEA</li>
<li>VS Code</li>
</ul>
</div>
</div>
</div>
</section>
  );
}
