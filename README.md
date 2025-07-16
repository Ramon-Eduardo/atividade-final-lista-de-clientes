# Atividade Final - Lista de Clientes

Este projeto é uma aplicação React desenvolvida como atividade final do Bootcamp de FrontEnd do Campinho Digital. O objetivo é permitir o cadastro, listagem e gerenciamento simples de clientes.

<img width="1889" height="963" alt="Screenshot 2025-07-16 195949" src="https://github.com/user-attachments/assets/19f70fa5-e2ca-416d-a627-f54eefee6f18" />
<img width="1888" height="964" alt="Screenshot 2025-07-16 195957" src="https://github.com/user-attachments/assets/3a3cc17c-8d28-4fa1-8868-207611c71515" />


## Funcionalidades

- **Cadastro de clientes:** Preencha nome, telefone (com máscara de formatação) e observações.
- **Listagem de clientes:** Visualize todos os clientes cadastrados.
- **Persistência local:** Os dados dos clientes são salvos no armazenamento local do navegador (localStorage) e permanecem salvos mesmo após fechar ou atualizar a página, até que o usuário clique no botão para limpar tudo.

## Tecnologias Utilizadas

- [React](https://react.dev/)
- CSS Modules
- JavaScript (ES6+)

## Como Executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/atividade-final-lista-de-clientes.git
   ```
2. Acesse a pasta do projeto:
   ```bash
   cd atividade-final-lista-de-clientes
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o projeto:
   ```bash
   npm start
   ```
5. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura de Pastas

```
atividade-final-lista-de-clientes/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ClientForm.jsx
│   │   ├── ClientList.jsx
│   │   └── button.jsx
│   ├── styles/
│   │   ├── Form.css
│   │   └── List.css
│   ├── App.jsx
│   ├── index.js
│   └── main.jsx
├── package.json
├── README.md
└── .gitignore
```

## Observações

- O campo de telefone possui máscara automática para formatos brasileiros (fixo e celular).
- Os dados dos clientes são armazenados no localStorage do navegador, garantindo persistência até que sejam removidos manualmente pelo usuário.
- O projeto é apenas para fins didáticos e não utiliza backend ou banco de dados.

## Autor

Desenvolvido por Ramon para o Bootcamp Campinho Digital.

---
