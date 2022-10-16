FROM python:3.8

RUN mkdir /app
WORKDIR /app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8888

COPY . .

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8888"]