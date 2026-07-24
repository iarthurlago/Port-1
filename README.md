# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:# Portfólio Ivan Arthur

Este projeto é um portfólio pessoal construído com **React** e **Vite**, projetado para mostrar projetos, habilidades, qualificações e contato em uma interface moderna e responsiva.

## Recursos principais

- Layout dividido em seções: **Hero**, **Habilidades & Qualificações**, **Projetos**, **Contato** e **Footer**.
- Suporte a tradução com **i18next** e **react-i18next**.
- Alternador de idioma compacto para **PT-BR** e **EN**.
- Ícones e imagens gerenciados a partir da pasta `src/assets`.
- Estilização customizada com CSS, mantendo o design leve e limpo.

## Estrutura do projeto

- `src/main.jsx` — ponto de entrada React e configuração do i18n.
- `src/i18n.js` — inicialização do i18next com recursos de tradução.
- `src/App.jsx` — componente principal que renderiza todas as seções.
- `src/componentes/` — componentes usados no portfólio.
- `src/locales/` — arquivos de tradução em `en` e `pt`.
- `src/assets/` — imagens e ícones usados no projeto.

## Instalação

```bash
npm install
```

## Desenvolvimento

```bash
npm run dev
```

Abra o endereço exibido no terminal para visualizar o portfólio localmente.

## Build para produção

```bash
npm run build
```

## Visualizar build

```bash
npm run preview
```

## Dependências principais

- `react`
- `react-dom`
- `vite`
- `i18next`
- `react-i18next`

## Tecnologias utilizadas

- React
- Vite
- i18next / react-i18next
- CSS customizado
- JavaScript ES2024

## Personalização

- Edite `src/locales/pt/translation.json` e `src/locales/en/translation.json` para alterar os textos em cada idioma.
- Atualize os componentes em `src/componentes/` para modificar seções, projetos e contatos.
- Substitua imagens em `src/assets/` para personalizar o visual.

## Sugestões de uso

- Adicione novos projetos em `src/componentes/Project.jsx`.
- Atualize habilidades e qualificações em `src/componentes/SkillsAndCertifications.jsx`.
- Ajuste links de contato em `src/componentes/Contate-me.jsx`.

## Licença

Este projeto é livre para uso, personalização e distribuição.


- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
