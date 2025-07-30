
#  Integração React + FastAPI – Cadastro de Tarefas

##  Objetivo

Criar uma API local com **FastAPI** que recebe uma lista de tarefas via `POST`, e um frontend React que envia essas tarefas para a API usando `fetch()`.

---

##  Parte 1 – Backend com FastAPI

### 1. Criar ambiente virtual

```bash
python -m venv venv
```

### 2. Ativar ambiente virtual

**No Windows (PowerShell):**

```bash
.env\Scripts\Activate
```

Você verá o terminal assim:

```
(venv) PS C:\caminho\do\projeto>
```

### 3. Instalar FastAPI e Uvicorn

```bash
pip install fastapi uvicorn
```

### 4. Criar `main.py`

```python
from fastapi import FastAPI
from pydantic import BaseModel
from typing import List
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # ou ["http://localhost:5173"]
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Tarefa(BaseModel):
    id: int
    texto: str
    concluida: bool

tarefas_salvas = []

@app.post("/tarefas")
def cadastrar_tarefas(lista: List[Tarefa]):
    tarefas_salvas.extend(lista)
    return {
        "msg": "Tarefas cadastradas com sucesso!",
        "total": len(tarefas_salvas)
    }
```

### 5. Rodar a API

```bash
uvicorn main:app --reload
```

---

##  Parte 2 – Frontend com React + `fetch()`

### Exemplo de componente React: `ListaTarefas.jsx`

```jsx
import { useState } from 'react'

export default function ListaTarefas() {
  const [tarefas, setTarefas] = useState([
    { id: 1, texto: 'Estudar React', concluida: false },
    { id: 2, texto: 'Revisar FastAPI', concluida: false }
  ])

  function cadastrarTarefas() {
    fetch('http://localhost:8000/tarefas', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tarefas)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro na resposta da API')
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      alert("Tarefas enviadas com sucesso!")
    })
    .catch(error => {
      console.error(error)
      alert("Erro ao enviar tarefas")
    })
  }

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa.id}>
            {tarefa.texto} - {tarefa.concluida ? "Concluída" : "Pendente"}
          </li>
        ))}
      </ul>
      <button onClick={cadastrarTarefas}>Cadastrar</button>
    </div>
  )
}
```

---

## Estrutura de Pastas (Exemplo)

```
projeto/
├── backend/
│   ├── venv/
│   ├── main.py
├── frontend/
│   ├── src/
│   │   ├── ListaTarefas.jsx
│   │   └── App.jsx / main.jsx
│   ├── package.json
│   └── ...
```

---

##  Erros comuns

| Erro | Causa | Solução |
|------|-------|---------|
| `OPTIONS 405` | CORS não configurado | Use `CORSMiddleware` no backend |
| `fetch` não envia | API não está rodando | Confirme que o `uvicorn` está ativo |
| Porta errada | Frontend em 5173, backend em 8000 | Verifique os URLs |

---

## Criar `requirements.txt`

```bash
pip freeze > requirements.txt
```

Para instalar depois:

```bash
pip install -r requirements.txt
```

---

## Conclusão

- FastAPI + React se comunicam com `fetch()` ou `axios`;
- CORS precisa ser configurado;
- O backend responde com JSON e o frontend trata isso;
- Dá pra testar tudo localmente com `localhost`.
