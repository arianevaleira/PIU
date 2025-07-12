# Guia Completo de Práticas em React – Lista de Tarefas

Este guia traz **tarefas graduais**, com **explicações detalhadas**, **exemplos comentados** e **códigos completos**, para você aprender passo a passo como usar React para construir uma aplicação funcional de lista de tarefas.

> **Dica para VS Code**: Aperte `Ctrl + Shift + V` para visualizar este guia em formato Markdown.

---

## 📦 O que você vai aprender neste guia:

* Como usar `useState` e `useEffect`
* Como renderizar listas com `map()`
* Como usar `props` para comunicar componentes
* Como estilizar condicionalmente elementos
* Como lidar com formulários
* Como ordenar e filtrar dados
* Como usar `localStorage` (opcional)

---

## 🛠️ Pré-requisitos

Antes de tudo, crie seu projeto:

```bash
npx create-react-app minha-lista
cd minha-lista
npm start
```

---

## ✅ Tarefa 1 — Botão que muda de cor

### 🎯 Objetivo

Aprender `useState` e eventos com `onClick`.

### 🧠 Conceitos usados

* `useState`
* Eventos `onClick`
* Renderização condicional com if ternário

### 📄 Código completo (`BotaoCor.jsx`)

```jsx
import { useState } from 'react';

function BotaoCor() {
  const [cor, setCor] = useState('blue');

  const mudarCor = () => {
    setCor(cor === 'blue' ? 'red' : 'blue');
  };

  return (
    <button onClick={mudarCor} style={{ backgroundColor: cor, color: 'white', padding: '10px' }}>
      Clique para mudar a cor
    </button>
  );
}

export default BotaoCor;
```

---

## ✅ Tarefa 2 — Lista com estilo por prioridade

### 🎯 Objetivo

Renderizar uma lista de tarefas e aplicar estilo condicional baseado na prioridade.

### 📄 Código completo (`TarefaEstilizada.jsx`)

```jsx
function TarefaEstilizada({ tarefas }) {
  return (
    <div>
      <h3>Lista de Tarefas</h3>
      {tarefas.map((tarefa, index) => {
        let cor;
        if (tarefa.prioridade === 'Alta') cor = 'red';
        else if (tarefa.prioridade === 'Media') cor = 'orange';
        else cor = 'green';

        return (
          <div key={index} style={{ border: `2px solid ${cor}`, margin: '8px', padding: '8px' }}>
            <h4>{tarefa.titulo}</h4>
            <p>Prioridade: {tarefa.prioridade}</p>
          </div>
        );
      })}
    </div>
  );
}

export default TarefaEstilizada;
```

---

## ✅ Tarefa 3 — Formulário para adicionar tarefa

### 🎯 Objetivo

Criar e armazenar tarefas em um array de estado.

### 📄 Código completo (`FormularioSimples.jsx`)

```jsx
import { useState } from 'react';

function FormularioSimples() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [tarefas, setTarefas] = useState([]);

  const adicionarTarefa = (e) => {
    e.preventDefault();
    const nova = { id: Date.now(), titulo, descricao };
    setTarefas([...tarefas, nova]);
    setTitulo('');
    setDescricao('');
  };

  return (
    <div>
      <form onSubmit={adicionarTarefa}>
        <input value={titulo} onChange={(e) => setTitulo(e.target.value)} placeholder="Título" />
        <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder="Descrição" />
        <button type="submit">Adicionar</button>
      </form>

      <ul>
        {tarefas.map(t => <li key={t.id}>{t.titulo} - {t.descricao}</li>)}
      </ul>
    </div>
  );
}

export default FormularioSimples;
```

---

## ✅ Tarefa 4 — Modal de confirmação

### 🎯 Objetivo

Mostrar ou esconder elementos com base em estado.

### 📄 Código completo (`BotaoConfirmar.jsx`)

```jsx
import { useState } from 'react';

function BotaoConfirmar() {
  const [confirmar, setConfirmar] = useState(false);
  const [excluido, setExcluido] = useState(false);

  if (excluido) return <p>Tarefa excluída!</p>;

  return (
    <div>
      {!confirmar ? (
        <button onClick={() => setConfirmar(true)}>Excluir</button>
      ) : (
        <div>
          <p>Tem certeza que deseja excluir?</p>
          <button onClick={() => setExcluido(true)}>Sim</button>
          <button onClick={() => setConfirmar(false)}>Cancelar</button>
        </div>
      )}
    </div>
  );
}

export default BotaoConfirmar;
```

---

## ✅ Tarefa 5 — Ordenar tarefas

### 🎯 Objetivo

Ordenar uma lista por título ou prioridade.

### 📄 Código completo (`OrdenadorTarefas.jsx`)

```jsx
import { useState } from 'react';

function OrdenadorTarefas() {
  const [tarefas, setTarefas] = useState([
    { titulo: 'Estudar', prioridade: 'Alta' },
    { titulo: 'Comer', prioridade: 'Baixa' },
    { titulo: 'Ler', prioridade: 'Media' },
  ]);

  const ordenarTitulo = () => {
    const nova = [...tarefas].sort((a, b) => a.titulo.localeCompare(b.titulo));
    setTarefas(nova);
  };

  const ordenarPrioridade = () => {
    const peso = { Alta: 3, Media: 2, Baixa: 1 };
    const nova = [...tarefas].sort((a, b) => peso[b.prioridade] - peso[a.prioridade]);
    setTarefas(nova);
  };

  return (
    <div>
      <button onClick={ordenarTitulo}>Ordenar por Título</button>
      <button onClick={ordenarPrioridade}>Ordenar por Prioridade</button>

      {tarefas.map((t, i) => (
        <div key={i}>
          <h4>{t.titulo}</h4>
          <p>Prioridade: {t.prioridade}</p>
        </div>
      ))}
    </div>
  );
}

export default OrdenadorTarefas;
```

---

## 🚀 Tarefas Extras

### 🔁 Inverter lista

```jsx
<button onClick={() => setTarefas([...tarefas].reverse())}>
  Inverter Lista
</button>
```

---

### ✔️ Marcar como concluída

```jsx
<button onClick={() => marcarComoConcluida(tarefa.id)}>
  {tarefa.concluida ? 'Desmarcar' : 'Concluir'}
</button>
```

E use CSS:

```css
.concluida {
  text-decoration: line-through;
  opacity: 0.6;
}
```

---

### 🧹 Limpar lista

```jsx
<button onClick={() => setTarefas([])}>Limpar Todas</button>
```

---

### 🔢 Contador de tarefas

```jsx
<p>Total de tarefas: {tarefas.length}</p>
```

---

## 🗂️ Estrutura recomendada

```
src/
├── components/
│   ├── BotaoCor.jsx
│   ├── TarefaEstilizada.jsx
│   ├── FormularioSimples.jsx
│   ├── BotaoConfirmar.jsx
│   └── OrdenadorTarefas.jsx
├── App.jsx
└── index.js
```

---

## 🏁 Finalizando

* Junte todos os componentes em `App.jsx`
* Reforce o entendimento com projetos práticos
* Me peça ajuda para integrar, debugar ou estender o app!
