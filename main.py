from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from funcInoyatov import inoyatov
from functionilyas import ilyas
from funckost import kostin
from pydantic import BaseModel
from proekt320ShakirjanovXasan import p1
import funcSoliyev as s



class TwoNumbers(BaseModel):
    x: float
    y: float

print(inoyatov(25,5))
print(kostin(3,7))
print(p1(2,3))
print(inoyatov(25,5))
print(ilyas(3,4))

app = FastAPI( title="UMFT320I", version="1.0.0",
description="Платформа для покупки и продажи",
docs_url="/docs",
redoc_url="/redoc",
#debug=settings.DEBUG, 
)

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

@app.get("/soliyev")
def get_soliyev(x: float, y: float):
    return {"result": s.func_soliyev(x, y)}

@app.post("/soliyev")
def post_soliyev(data: TwoNumbers):
    return {"result": s.func_soliyev(data.x, data.y)}