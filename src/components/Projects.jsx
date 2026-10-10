import React from "react";

export default function Projects() {
  return (
    <section className="section" id="projects">
<div className="section-inner">
<p className="eyebrow">// проекты</p>
<h2 className="reveal">Проекты</h2>
<div className="project-grid">
<article className="project-card reveal">
<div className="project-glow" aria-hidden="true"></div>
<h3>Mini-POS — система для кафе</h3>
<p>
              Учебный командный проект для автоматизации работы кафе: от анализа
              требований до рабочего backend и UI.
            </p>
<ul className="project-scope">
<li>User Stories, Use Cases, SRS</li>
<li>UML и ER-модель</li>
<li>Логическая и физическая модель БД</li>
<li>UI, backend, работа с PostgreSQL</li>
</ul>
<ul className="tag-list tag-list-mono">
<li>Java</li>
<li>Spring Boot</li>
<li>PostgreSQL</li>
<li>HTML</li>
<li>CSS</li>
<li>IntelliJ IDEA</li>
</ul>
</article>
<article className="project-card reveal">
<div className="project-glow" aria-hidden="true"></div>
<h3>Tourism / Hotel Management System</h3>
<p>
              Концепция информационной системы для небольшого гостиничного бизнеса.
            </p>
<ul className="project-scope">
<li>Регистрация туристов и гостей</li>
<li>Бронирования и управление номерами</li>
<li>Учёт занятых мест, доходов и расходов</li>
<li>Разные уровни доступа сотрудников</li>
</ul>
<ul className="tag-list tag-list-mono">
<li>System Design</li>
<li>ER diagrams</li>
<li>UML</li>
</ul>
</article>
</div>
</div>
</section>
  );
}
