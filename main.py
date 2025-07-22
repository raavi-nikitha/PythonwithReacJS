from fastapi import FastAPI
from pathlib import Path
import json
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app=FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials= True,
    allow_methods=["*"],
    allow_headers=["*"]

)


@app.get("/user/{memberID}")
def fetchUser(memberID:str):
    file_path=Path("data.json")

    if not file_path.exists():
        return JSONResponse(status_code=404, content={"status":"File not found"})
    
    with open(file_path, 'r') as f:
        data=json.load(f)
    try:
        for user in data:
            if user["MemberID"].lower()==memberID.lower():
                return user
        else:
             return JSONResponse(status_code=500, content={"status":"User not found"})
    except json.JSONDecodeError:
        return JSONResponse(status_code=500, content={"status": "Invalid JSON Format"})
