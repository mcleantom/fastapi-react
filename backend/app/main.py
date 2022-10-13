from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/")
def hello_world():
    return "hello_world"


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", reload=True, port=8888)