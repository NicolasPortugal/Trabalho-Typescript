# Sistema de Perguntas - TypeScript Puro

Este é um projeto simples de **perguntas e respostas** desenvolvido usando apenas **TypeScript puro**. Ele simula um sistema de quiz no terminal (ou ambiente que suporte `console.log`), com estrutura modular, embaralhamento de alternativas e validação de respostas.

---

## 🧱 Estrutura do Projeto

```
sistema-perguntas/
├── dist/
│   └── main.js
├── node_modules/
├── src/
│   └── index.ts 
├── package.json
├── tsconfig.json
└── README.md
```

---

## ⚙️ Requisitos

- Node.js (https://nodejs.org)
- npm (já vem com o Node.js)
- Editor de código (recomendado: VS Code)

---

## 🚀 Instalação e Execução

1. **Clone o repositório**:

```bash
git clone https://github.com/NicolasPortugal/Trabalho-Typescript.git
```

2. **Instale o TypeScript** (caso ainda não tenha):

```bash
npm install -g typescript
```

3. **Instale as dependências** (caso use alguma no futuro):

```bash
npm install
```

4. **Compile o código TypeScript:**

```bash
tsc
```

> Isso criará a pasta `dist/` com os arquivos compilados em JavaScript.

5. **Execute o programa (caso esteja testando no Node.js):**

```bash
node dist/main.js
```

---

## 📦 Scripts Úteis (se usar `package.json`)

```bash
npm run build     # Compila os arquivos TypeScript
npm run watch     # Compila automaticamente em tempo real
```

Para isso, adicione ao seu `package.json`:

```json
"scripts": {
  "build": "tsc",
  "watch": "tsc -w"
}
```

---


## 🔁 Funcionalidades

- ✅ Criação de perguntas com alternativas
- 📦 Projeto 100% em TypeScript com tipagem forte

---

## 📚 Tecnologias Utilizadas

- [TypeScript](https://www.typescriptlang.org/) — linguagem principal usada no projeto
- [Node.js](https://nodejs.org/) — usado para executar o código compilado (opcional)

---

## 👨‍💻 Autor

Feito com 💙 por Nicolas Portugal

---
