from fastapi import FastAPI, Request
from fastapi.openapi.docs import get_swagger_ui_html
from fastapi.openapi.utils import get_openapi

app = FastAPI(
    title="backend",
    root_path="/api/v1"
)

@app.get("/")
def hello_world():
    return "hello_world_2"

@app.get("")
def tmp():
    return "hi"

@app.get("/api/v1/")
def hi():
    return "hellooo"