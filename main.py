from funcInoyatov import inoyatov
from functionilyas import ilyas
from funkost import konstantin

print(inoyatov(25,5))
print(konstantin(3,7))

print(inoyatov(25,5))
print(ilyas(3,4))

@app.get("/c2")
def get_ilyas(x: float, y: float):
    return {"result": ilyas(x, y)}
@app.post("/c2")
def post_ilyas(data: TwoNumbers):
    return {"result": ilyas(data.x, data.y)}

@app.get("/konstantin")
def get_konstantin(x: float, y: float):
    return {"result": konstantin(x, y)}
@app.post("/konstantin")
def post_konstantin(data: TwoNumbers):
    return {"result": konstantin(data.x, data.y)}
