from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from funcInoyatov import inoyatov
from functionilyas import ilyas
from funckost import konstantin
from project320 import func_320_soliyev as func_soliyev
from pydantic import BaseModel
from proekt320ShakirjanovXasan import p1



class TwoNumbers(BaseModel):
    x: float
    y: float

print("Hello")

app = FastAPI( title="UMFT320I", version="1.0.0",
description="Платформа для покупки и продажи",
docs_url="/docs",
redoc_url="/redoc",
#debug=settings.DEBUG, 
)

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def log_requests(request, call_next):
    # Простое логирование входящих запросов — поможет при отладке фронтенда
    print(f"--> {request.method} {request.url}")
    response = await call_next(request)
    print(f"<-- {request.method} {request.url} {response.status_code}")
    return response


@app.get("/health")
def health():
    return {"status": "ok"}


@app.middleware("http")
async def add_no_cache_headers(request, call_next):
    # Prevent browser caching of HTML and JS files
    response = await call_next(request)
    if request.url.path.endswith(('.html', '.js')):
        response.headers["Cache-Control"] = "no-store, no-cache, must-revalidate, max-age=0"
        response.headers["Pragma"] = "no-cache"
        response.headers["Expires"] = "0"
    return response

# Serve static frontend files under `/static` and serve index at `/`
app.mount("/static", StaticFiles(directory="frontend"), name="static")


@app.get("/")
def root():
    return FileResponse("frontend/index.html")


@app.get("/c2")
def get_ilyas(x: float, y: float):
    return {"result": ilyas(x, y)}
@app.post("/c2")
def post_ilyas(data: TwoNumbers):
    return {"result": ilyas(data.x, data.y)}

@app.get("/inoyatov")
def get_inoyatov(x: float, y: float ):
    return {"result": inoyatov(x, y)}
@app.post("/inoyatov")
def post_inoyatov(data: TwoNumbers):
    return {"result": inoyatov(data.x, data.y)}

@app.get("/Shakirjanov")
def get_p1(x: float, y: float):
    return {"result": p1(x, y)}

@app.post("/Shakirjanov")
def post_p1(data: TwoNumbers):
    return {"result": p1(data.x,data.y)}

@app.get("/konstantin")
def get_konstantin(x: float, y: float):
    return {"result": konstantin(x, y)}
@app.post("/konstantin")
def post_konstantin(data: TwoNumbers):
    return {"result": konstantin(data.x, data.y)}

# Backwards-compatible aliases: keep old `/konst` endpoints working
@app.get("/konst")
def get_kost_alias(x: float, y: float):
    return {"result": konstantin(x, y)}

@app.post("/konst")
def post_kost_alias(data: TwoNumbers):
    return {"result": konstantin(data.x, data.y)}

@app.get("/soliyev")
def get_soliyev(x: float, y: float):
    return {"result": func_soliyev(x, y)}

@app.post("/soliyev")
def post_soliyev(data: TwoNumbers):
    return {"result": func_soliyev(data.x, data.y)}

