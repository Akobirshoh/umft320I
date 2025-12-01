from fastapi import FastAPI
from funcInoyatov import inoyatov
from functionilyas import ilyas
from funckost import kostin
from pydantic import BaseModel


class TwoNumbers(BaseModel):
    x: float
    y: float

print(inoyatov(25,5))
print(kostin(3,7))

print(inoyatov(25,5))
print(ilyas(3,4))

app = FastAPI( title="UMFT320I", version="1.0.0",
description="Платформа для покупки и продажи",
docs_url="/docs",
redoc_url="/redoc",
#debug=settings.DEBUG, 
)


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


