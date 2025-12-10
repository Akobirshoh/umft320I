Этот каталог содержит простой статический фронтенд для тестирования API проекта `UMFT320I`.

Файлы:
- `index.html` — основная страница с формами для трёх эндпоинтов.
- `app.js` — простой JavaScript для запросов к API.
- `styles.css` — минимальные стили.

Как запустить:
1. Убедитесь, что backend запущен (uvicorn main:app --reload --port 8000).
2. Откройте в браузере: `http://127.0.0.1:8000/` — страница фронтенда должна загрузиться.

Примечания:
- Файлы размещены в `frontend/` и автоматически монтируются как статические файлы.
 # FIO Project 320. Платформа для покупки и продажи.   
    git clone <URL_вашего_репозитория>      bash 
    python -m venv .venv                 # venv 
    .venv\Scripts\activate               # activate 
    pip install -r requirements.txt     
    uvicorn main:app --reload             # проверить через uvicorn 
### Запуск через Docker  Вот теперь основной… 
1.  **Соберите Docker образ:** 
    docker build -t project320 . 
2.  **Запустите контейнер:** 
    docker run -p 8000:8000 project320 - Swagger UI: http://127.0.0.1:8000/docs