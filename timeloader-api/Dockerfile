# Use an official Python runtime as a parent image
FROM python:3.13-slim

# set working directory
WORKDIR /app

# install system dependencies (optional, add if needed for psycopg2, etc.)
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        build-essential \
        gcc \
        libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# copy and install Python dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# copy project
COPY . .

# expose port
EXPOSE 8000

# default command
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
