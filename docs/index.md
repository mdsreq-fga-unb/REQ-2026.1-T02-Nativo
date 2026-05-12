# Visão de Produto e Projeto

<span class="version-badge">Versão 1.13</span>

Bem-vindo à documentação oficial do projeto **Nativo** — um aplicativo tradutor de línguas indígenas com foco na língua Munduruku, desenvolvido para apoiar a revitalização linguística na Aldeia Munduruku de Bragança.

---

## Navegue pelo Documento

<div class="section-cards">
  <a class="section-card" href="01-cenario/">
    <h3>1 · Cenário</h3>
    <p>Contexto do cliente, negócio, rich picture, problema identificado e stakeholders.</p>
  </a>
  <a class="section-card" href="02-solucao/">
    <h3>2 · Solução</h3>
    <p>Objetivos, características do produto, tecnologias e análise competitiva.</p>
  </a>
  <a class="section-card" href="03-intervencao/">
    <h3>3 · Intervenção</h3>
    <p>Impactos sociais pretendidos da solução e efeitos emergentes.</p>
  </a>
  <a class="section-card" href="04-estrategias/">
    <h3>4 · Estratégias</h3>
    <p>Processo adotado (OpenUP), quadro comparativo e justificativa da escolha.</p>
  </a>
  <a class="section-card" href="05-engenhariaRequisitos/">
    <h3>5 · Engenharia de Requisitos</h3>
    <p>Atividades e técnicas de engenharia de requisitos por fase do OpenUP.</p>
  </a>
  <a class="section-card" href="06-cronograma/">
    <h3>6 · Cronograma</h3>
    <p>Fases, iterações e marcos de entrega ao longo do semestre.</p>
  </a>
  <a class="section-card" href="07-interacao/">
    <h3>7 · Interação</h3>
    <p>Composição da equipe, comunicação e processo de validação com o cliente.</p>
  </a>
  <a class="section-card" href="08-requisitos/">
    <h3>8 · Requisitos</h3>
    <p>Requisitos funcionais e não funcionais que orientam o desenvolvimento da solução.</p>
  </a>
  <a class="section-card" href="09-dor&dod/">
    <h3>9 · DoR e DoD</h3>
    <p>Critérios de entrada e saída usados para planejar, validar e concluir as entregas.</p>
  </a>
  <a class="section-card" href="10-backlog/">
    <h3>10 · Backlog de Produto</h3>
    <p>Organização, refinamento e priorização dos itens que compõem o produto e o MVP.</p>
  </a>
  <a class="section-card" href="11-licoes/">
    <h3>11 · Lições</h3>
    <p>Lições aprendidas por unidade, desafios enfrentados e ações de melhoria.</p>
  </a>
  <a class="section-card" href="12-referencias/">
    <h3>12 · Referências</h3>
    <p>Referências bibliográficas utilizadas no documento.</p>
  </a>
</div>

---

## Integrantes da Equipe

|  |  |  |
| :---: | :---: | :---: |
| <a href="https://github.com/314dro" target="_blank"><img src="https://github.com/314dro.png?size=120" alt="Pedro Silva" width="96"><br>Pedro Silva</a> | <a href="https://github.com/andrehsb" target="_blank"><img src="https://github.com/andrehsb.png?size=120" alt="Andre Henrique" width="96"><br>Andre Henrique</a> | <a href="https://github.com/jsalless" target="_blank"><img src="https://github.com/jsalless.png?size=120" alt="Johnnatan Salles" width="96"><br>Johnnatan Salles</a> |
| <a href="https://github.com/giovannafg" target="_blank"><img src="https://github.com/giovannafg.png?size=120" alt="Giovanna Felipe" width="96"><br>Giovanna Felipe</a> | <a href="https://github.com/artmendess" target="_blank"><img src="https://github.com/artmendess.png?size=120" alt="Arthur Mendes" width="96"><br>Arthur Mendes</a> | <a href="https://github.com/Renurin" target="_blank"><img src="https://github.com/Renurin.png?size=120" alt="Renan Camara" width="96"><br>Renan Camara</a> |

## Histórico de Revisão

| Data | Versão | Descrição | Autor |
| :---: | :---: | :--- | :--- |
| 01/04/26 | 0.1 | Criação do documento e preenchimento do tópico 1.1 e 1.3 | Pedro Silva |
| 05/04/26 | 0.2 | Preenchimento tópico 1.3 e 1.4 | Renan Camara |
| 05/04/26 | 0.3 | Preenchimento tópico 2.1 e 2.2 | André Henrique |
| 05/04/26 | 0.4 | Preenchimento tópico 2.3 | Johnnatan Salles |
| 05/04/26 | 0.5 | Preenchimento tópico 1.2 | Arthur Mendes |
| 05/04/26 | 0.6 | Preenchimento tópico 1.7 | Giovanna Guimarães |
| 05/04/26 | 0.7 | Adição do Diagrama de Ishikawa e Rich Picture | Pedro Silva e Giovanna Guimarães |
| 05/04/26 | 1.0 | Revisão e validação do documento | Pedro Silva |
| 07/04/26 | 1.1 | Refatoração dos Objetivos | André, Arthur, Giovanna, Renan |
| 07/04/26 | 1.2 | Refatoração dos tópicos 1.2, 1.4, 2.1 e 2.2 | André, Arthur e Giovanna |
| 08/04/26 | 1.3 | Refatoração dos tópicos 1.5 e 2.3 | André, Arthur e Pedro |
| 08/04/26 | 1.4 | Preenchimento tópico 2.7 | Johnnatan Salles |
| 08/04/26 | 1.5 | Refatoração dos tópicos 1.4, 2.1 e 2.2 | André, Johnnatan |
| 09/04/26 | 1.6 | Preenchimento dos tópicos 3.1, 3.2 e 3.3 | Pedro Silva |
| 10/04/26 | 1.7 | Preenchimento dos tópicos 2.4 e 2.5 | Pedro Silva |
| 10/04/26 | 1.8 | Preenchimento dos tópicos 4.1, 4.2 e revisão | Giovanna Guimarães |
| 11/04/26 | 1.9 | Preenchimento da seção 6 e revisão dos tópicos 4.1 e 4.2 | André Henrique |
| 11/04/26 | 1.10 | Preenchimento da seção 5 e revisão | Renan |
| 12/04/26 | 1.11 | Preenchimento da seção 11 e revisão do documento | Pedro Silva |
| 13/04/26 | 1.12 | Refatoração da seção 5, complemento no tópico 2.6 e revisão | André e Giovanna |
| 13/04/26 | 1.13 | Refatoração rich picture e diagrama de Ishikawa | Johnnatan Salles | 