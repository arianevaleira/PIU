from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou ["http://localhost:5173"] se quiser restringir
    allow_credentials=True,
    allow_methods=["*"],  # Permite POST, GET, OPTIONS etc.
    allow_headers=["*"],  # Permite qualquer header, como Content-Type
)

class Tarefa(BaseModel):
    id: int
    texto: str
    concluida: bool

tarefas_salvas = []

@app.post("/tarefas")
def cadastrar_tarefas(lista: List[Tarefa]):
    tarefas_salvas.extend(lista)
    print(tarefas_salvas)
    return {"msg": "Tarefas cadastradas com sucesso!", "total": len(tarefas_salvas)}

