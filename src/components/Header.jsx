import React from "react";

export default function Header({ open, setOpen, active }) {
  return (
    <header className="site-header">
<div className="header-inner">
<a href="#top" className="logo">Аsel</a>
<nav className={open ? "main-nav is-open" : "main-nav"} id="main-nav">
<a href="#top" className={active === "top" ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>Главная</a>
<a href="#about" className={active === "about" ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>Обо мне</a>
<a href="#skills" className={active === "skills" ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>Навыки</a>
<a href="#projects" className={active === "projects" ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>Проекты</a>
<a href="#experience" className={active === "experience" ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>Опыт</a>
<a href="#education" className={active === "education" ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>Образование</a>
<a href="#languages" className={active === "languages" ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>Языки</a>
<a href="#contact" className={active === "contact" ? "nav-link active" : "nav-link"} onClick={() => setOpen(false)}>Контакты</a>
</nav>
<a href="#contact" className="btn btn-small btn-primary nav-cta">Связаться</a>
<button className={open ? "menu-toggle is-open" : "menu-toggle"} id="menu-toggle" aria-expanded={open} aria-controls="main-nav" aria-label="Открыть меню" onClick={() => setOpen(!open)}>
<span></span><span></span><span></span>
</button>
</div>
</header>
  );
}
