# React Portfolio — Асел Абдирашитова

Учебное портфолио, перенесённое с HTML/CSS/JavaScript на **React** с использованием **Vite**. Содержит отдельные компоненты для разделов, React state для мобильного меню, IntersectionObserver для анимации и подсветки навигации.

## Запуск

```bash
npm install
npm run dev
```

Откройте адрес, который покажет Vite (обычно http://localhost:5173).

## Сборка

```bash
npm run build
```

Результат в папке `dist/`. Для Render используйте **Static Site**, Build Command `npm install && npm run build`, Publish Directory `dist`.

## Структура

- `src/App.jsx` — главный компонент, состояние меню и эффекты
- `src/components/` — компоненты разделов
- `src/style.css` — исходный дизайн
- `public/profile.png` — фотография

> Кнопка «Скачать резюме» в исходном HTML не имела файла для скачивания. В этой версии она ведёт к контактам, пока резюме не добавлено.
