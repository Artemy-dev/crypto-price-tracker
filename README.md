## Трекер криптовалют

**Стек:** `Python`, `FastAPI`, `JavaScript`, `Vite`, `React`, `Tailwind CSS`, `Ant Design`

**Backend:**

* Работа с внешними API
* Async функции
* CORS
* Кэширование (ускорил ответ с бэка с 400-500 мс до 3-4 мс)

**Frontend:**

* API запросы
* Хук с useEffect
* Работа с props
* Tailwind CSS
* Компоненты Ant Design

**Провайдер данных:** [CoinMarketCap](https://coinmarketcap.com/)

---

### Backend

**Документация CORS:** [CORS (Cross-Origin Resource Sharing)](https://fastapi.tiangolo.com/ru/tutorial/cors/#use-corsmiddleware)

**Установка зависимостей:**

```bash
pip install fastapi pydantic-settings aiohttp uvicorn certifi
```

* `FastAPI` - для создания асинхронных эндпоинтов трекера;
* `pydantic-settings` - для управления настройками API-ключей и CORS через переменные окружения;
* `aiohttp` - для асинхронных запросов к CoinMarketCap API;
* `uvicorn` - ASGI-сервер для запуска FastAPI с автоперезагрузкой;
* `certifi` - для проверки SSL-сертификатов при внешних запросах к криптобиржам.

**Запуск:**

```bash
uvicorn src.main:app --reload
```

Backend (FastAPI + Uvicorn): http://localhost:8000

---

### Frontend

**Создание React-приложения:**

```npm
npm create vite@latest
```

**Процесс создания проекта:**

```npm
PS C:\Users\hello\Develop\fullstack-app> npm create vite@latest

> npx
> create-vite

│
◇  Project name:
│  frontend
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◇  Install with npm and start now?
│  Yes
│
◇  Scaffolding project in C:\Users\hello\Develop\fullstack-app\frontend...
│
◇  Installing dependencies with npm...

added 135 packages, and audited 136 packages in 30s

31 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> frontend@0.0.0 dev
> vite


  VITE v8.0.16  ready in 1123 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

**Установка Tailwind CSS:**

**Документация:** [Using Vite](https://tailwindcss.com/docs/installation/using-vite)

**Tailwind CSS** - готовый набор мини-классов, которые добавляют стили прямо в разметку, чтобы не писать свой CSS с нуля.

```npm
npm install tailwindcss @tailwindcss/vite
```

**Обновление vite.config.js:**

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

**Установка Ant Design:**

**Документация:** [Usage with Vite](https://ant.design/docs/react/use-with-vite)

**Ant Design** - готовая библиотека React-компонентов (кнопки, таблицы, модальные окна и т.д.), которую можно просто вставлять в проект, вместо того чтобы верстать и стилизовать каждый элемент с нуля.

```npm
npm install antd --save
```

**Библиотека компонентов:** [Components Overview](https://ant.design/components/overview/)

**Установка Axios:**

**Axios** - библиотека для выполнения HTTP-запросов (`GET`, `POST`, `PUT`, `DELETE`) с бэкенда, которая упрощает отправку и получение данных, автоматически преобразует ответы в JSON и удобно обрабатывает ошибки.

```npm
npm install axios
```

---

**Запуск:**

```npm
npm run dev
```

Frontend (Vite): http://localhost:5173
