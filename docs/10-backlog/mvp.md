## 10.3 Metodologia de Priorização do Backlog (Impacto vs. Esforço)

Para a definição do escopo do Produto Mínimo Viável (MVP) e do roteiro de entregas finais, as Características do Produto (CPs) e seus respectivos Requisitos Funcionais foram priorizados utilizando uma **Matriz de Impacto vs. Esforço Técnico**. Essa abordagem analítica apoia os princípios fundamentais do **OpenUP**, permitindo que a equipe minimize os riscos técnicos logo no início do ciclo de vida do projeto, focando no que entrega maior valor documentado para a cliente.

A dinâmica foi realizada de forma colaborativa pela equipe de desenvolvimento por meio da plataforma Miro. O processo consistiu na avaliação individual de cada um dos 49 Requisitos Funcionais (RFs) para a extração do **Valor de Priorização**, calculado em três etapas:

1. **Impacto de Negócio:** Mensurado em uma escala linear de 1 a 5, avaliando o quão crítica é a funcionalidade para atingir os Objetivos Estratégicos (OEs) do sistema, focando na mitigação do problema central.
2. **Esforço Técnico:** Estimado por meio de uma dinâmica de avaliação por consenso, baseada na projeção de horas totais de desenvolvimento necessárias para a implementação completa.
3. **Valor de Priorização (Métrica de Retorno):** Calculado por meio da razão matemática direta entre o Impacto e o Esforço através da fórmula **(Impacto / Esforço)**. Essa métrica atua como o indicador único e definitivo do projeto, determinando a densidade de retorno de cada requisito (quais itens trazem maior ganho estratégico em relação ao tempo investido).

### 10.2.1 Critérios Analíticos Básicos (Ingredientes)
A nota de **Impacto** foi derivada de uma priorização prévia realizada pela cliente, utilizando a técnica MoSCoW:

* **Nota 5:** Requisitos *Must Have*.

* **Nota 4:** Requisitos *Should Have*.

* **Notas 2 e 3:** Requisitos *Could Have*.

* **Nota 1:** Requisitos *Won't Have*.

O dimensionamento do **Esforço** foi convertido em uma escala linear de 1 a 5, definida pelos seguintes intervalos de horas-homem estimadas pela equipe:

* **Nota 1:** 1 a 8 horas totais.

* **Nota 2:** 9 a 15 horas totais.

* **Nota 3:** 17 a 29 horas totais.

* **Nota 4:** 30 a 42 horas totais.

* **Nota 5:** Acima de 42 horas totais.
### 10.2.2 Regras de Corte, MVP e Escopo Adicional

Uma vez calculado o **Valor de Priorização**, ele foi utilizado como a única métrica balizadora para alocar os requisitos funcionais em quatro quadrantes de desenvolvimento, definindo formalmente a composição do escopo:

* **Q1 - Ganhos Rápidos (*Quick Wins*):** Valor de Priorização ≥ 2.0. Funcionalidades de altíssimo retorno e implementação viável.
* **Q2 - Grandes Projetos (*Major Projects*):** Valor de Priorização entre 1.0 e 1.99. Itens essenciais, mas de maior complexidade e custo.
* **Q3 - Tarefas Complementares (*Fill-ins*):** Valor de Priorização entre 0.60 e 0.99. Tarefas que não atingem a linha de corte do MVP, mas agregam valor secundário.
* **Q4 - Consumidores de Tempo (*Time Sinks*):** Valor de Priorização ≤ 0.50. Itens de alto escorço e baixíssimo retorno.

**Linha de Corte do MVP (Iterações 6 a 9):**
O **Produto Mínimo Viável (MVP)** foi delimitado de forma estrita pela linha de corte do retorno sobre investimento: **compõem o MVP apenas os requisitos com Valor de Priorização ≥ 1.0.** Todos os requisitos alocados em Q1 e Q2 foram priorizados para as **Iterações 6 a 9** da Fase de Construção.

**Escopo Adicional Implementado (Iterações 10 e 11):**
Os módulos de **Gamificação (Insígnias)** e **Perfil do Usuário (Histórico e Favoritos)**, pertencentes ao Q3, não atingiram a nota matemática para integrar o núcleo duro do MVP. Contudo, por possuírem a **maior nota residual fora do MVP (Valor = 0.75)**, foram selecionados tecnicamente para ocupar a capacidade produtiva final da equipe nas **Iterações 10 e 11**.

**Requisitos Descartados:**
Os módulos de **Denúncias** e **Eventos** (Valor = 0.67), embora estivessem em Q3, apresentaram nota inferior aos itens de gamificação, sendo formalmente descartados do cronograma atual por restrição de prazo, juntamente com a totalidade do **Feed Social** (Q4, Valor = 0.40).

### 10.2.3 Matriz de Priorização Detalhada por Requisito Funcional (RF)

A tabela abaixo apresenta a distribuição detalhada dos 49 requisitos funcionais da plataforma Nativo, ordenados de forma decrescente pelo **Valor de Priorização** para evidenciar a linha de corte (1.0) e as alocações no cronograma:

| ID | Requisito Funcional (RF) | Impacto | Esforço | Valor (Imp/Esf) | Quadrante Resultante | Compõe a Entrega? |
| :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **RF35** | Exibir vídeo | 5 | 1 | 5.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF40** | Reproduzir áudio | 5 | 1 | 5.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF36** | Excluir vídeo | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF38** | Desassociar vídeo | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 7)** |
| **RF41** | Excluir áudio | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF43** | Desassociar áudio | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 7)** |
| **RF22** | Editar cargos de usuário | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 9)** |
| **RF23** | Listar cargos de usuário | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 9)** |
| **RF24** | Excluir cargos de usuário | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 9)** |
| **RF34** | Cadastrar vídeo | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF37** | Associar vídeo | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 7)** |
| **RF39** | Cadastrar áudio | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF42** | Associar áudio | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 7)** |
| **RF25** | Candidatar-se a professor | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 9)** |
| **RF20** | Banir usuário | 4 | 2 | 2.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 9)** |
| **RF21** | Atribuir cargos de usuário | 4 | 2 | 2.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 9)** |
| **RF01** | Criar atividade educacional | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 7)** |
| **RF03** | Responder atividade educacional | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 8)** |
| **RF04** | Visualizar resultado da atividade | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 8)** |
| **RF02** | Listar atividades educacional | 4 | 4 | 1.00 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 7)** |
| **RF05** | Editar atividade educacional | 4 | 4 | 1.00 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 9)** |
| **RF06** | Excluir atividade educacional | 4 | 4 | 1.00 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 9)** |
| **RF26** | Recuperar senha | 4 | 4 | 1.00 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 9)** |
| **RF49** | Baixar traduções (Acesso Offline) | 5 | 5 | 1.00 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 8)** |
| **RF09** | Excluir insígnias | 3 | 1 | 3.00 | Q3 - Tarefas Comp. | **SIM (Iteração 10)** |
| **RF48** | Listar insígnias | 3 | 1 | 3.00 | Q3 - Tarefas Comp. | **SIM (Iteração 10)** |
| **RF44** | Editar usuário | 3 | 1 | 3.00 | Q3 - Tarefas Comp. | **SIM (Iteração 11)** |
| **RF46** | Favoritar tradução | 3 | 1 | 3.00 | Q3 - Tarefas Comp. | **SIM (Iteração 11)** |
| **RF47** | Listar traduções favoritadas | 3 | 1 | 3.00 | Q3 - Tarefas Comp. | **SIM (Iteração 11)** |
| **RF07** | Criar insígnia | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 10)** |
| **RF08** | Editar insígnia | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 10)** |
| **RF45** | Listar histórico de traduções | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 11)** |
| **RF15** | Criar eventos | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF16** | Editar eventos | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF17** | Listar eventos | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF18** | Excluir eventos | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF19** | Compartilhar eventos | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF27** | Criar denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF28** | Atualizar status de denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF29** | Listar denúncias | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF30** | Criar categoria de denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF31** | Editar categoria de denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF32** | Listar categorias de denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF33** | Excluir categoria de denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | NÃO |
| **RF10** | Criar publicação | 2 | 4 | 0.50 | Q4 - Consumidores Tempo | NÃO |
| **RF11** | Editar publicação | 2 | 4 | 0.50 | Q4 - Consumidores Tempo | NÃO |
| **RF12** | Listar publicações | 2 | 4 | 0.50 | Q4 - Consumidores Tempo | NÃO |
| **RF13** | Excluir publicação | 2 | 4 | 0.50 | Q4 - Consumidores Tempo | NÃO |
| **RF14** | Interagir com a publicação | 2 | 4 | 0.50 | Q4 - Consumidores Tempo | NÃO |