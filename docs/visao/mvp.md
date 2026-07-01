## 10. MVP

Para a definição do escopo do Produto Mínimo Viável (MVP) e do roteiro de entregas finais, os **Casos de Uso (UCs)** e seus respectivos Requisitos Funcionais foram priorizados utilizando uma **Matriz de Impacto vs. Esforço Técnico**. Essa abordagem analítica apoia os princípios fundamentais do **OpenUP**, permitindo que a equipe minimize os riscos técnicos logo no início do ciclo de vida do projeto, focando no que entrega maior valor documentado para a cliente.

A dinâmica foi realizada de forma colaborativa pela equipe de desenvolvimento por meio da plataforma Miro. O processo consistiu na avaliação individual dos Casos de Uso (UCs), com apoio dos RFs associados, para a extração do **Valor de Priorização**, calculado em três etapas:

1. **Impacto de Negócio:** Mensurado em uma escala linear de 1 a 5, avaliando o quão crítica é a funcionalidade para atingir os Objetivos Estratégicos (OEs) do sistema, focando na mitigação do problema central.
2. **Esforço Técnico:** Estimado por meio de uma dinâmica de avaliação por consenso, baseada na projeção de horas totais de desenvolvimento necessárias para a implementação completa.
3. **Valor de Priorização (Métrica de Retorno):** Calculado por meio da razão matemática direta entre o Impacto e o Esforço através da fórmula **(Impacto / Esforço)**. Essa métrica atua como o indicador único e definitivo do projeto, determinando a densidade de retorno de cada requisito (quais itens trazem maior ganho estratégico em relação ao tempo investido).

### 10.1 Critérios Analíticos Básicos (Ingredientes)

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

### 10.2 Regras de Corte, MVP e Escopo Adicional

Uma vez calculado o **Valor de Priorização**, ele foi utilizado como a única métrica balizadora para alocar os requisitos funcionais em quatro quadrantes de desenvolvimento, definindo formalmente a composição do escopo:

* **Q1 - Ganhos Rápidos (*Quick Wins*):** Valor de Priorização ≥ 2.0. Funcionalidades de altíssimo retorno e implementação viável.
* **Q2 - Grandes Projetos (*Major Projects*):** Valor de Priorização entre 1.0 e 1.99. Itens essenciais, mas de maior complexidade e custo.
* **Q3 - Tarefas Complementares (*Fill-ins*):** Valor de Priorização entre 0.60 e 0.99. Tarefas que não atingem a linha de corte do MVP, mas agregam valor secundário.
* **Q4 - Consumidores de Tempo (*Time Sinks*):** Valor de Priorização ≤ 0.50. Itens de alto esforço e baixíssimo retorno.

**Linha de Corte do MVP (Iterações 6 a 9):**
O **Produto Mínimo Viável (MVP)** foi delimitado de forma estrita pela linha de corte do retorno sobre investimento: **compõem o MVP apenas os requisitos com Valor de Priorização ≥ 1.0.** Todos os requisitos alocados em Q1 e Q2 foram priorizados para as **Iterações 6 a 9** da Fase de Construção.

**Escopo Adicional Implementado (Iterações 10 e 11):**
Os módulos de **Gamificação (Insígnias)** e **Perfil do Usuário (Histórico e Favoritos)**, pertencentes ao Q3, não atingiram a nota matemática para integrar o núcleo duro do MVP. Contudo, por possuírem a **maior nota residual fora do MVP (Valor = 0.75)**, foram selecionados tecnicamente para ocupar a capacidade produtiva final da equipe nas **Iterações 10 e 11**.

**Requisitos Descartados:**
Os módulos de **Denúncias** e **Eventos** (Valor = 0.67), embora estivessem em Q3, apresentaram nota inferior aos itens de gamificação, sendo formalmente descartados do cronograma atual por restrição de prazo, juntamente com a totalidade do **Feed Social** (Q4, Valor = 0.40).

### 10.3 Matriz de Priorização Detalhada por Caso de Uso (UC)

A tabela abaixo apresenta a distribuição detalhada dos casos de uso da plataforma Nativo, ordenados de forma decrescente pelo **Valor de Priorização** para evidenciar a linha de corte (1.0) e as alocações no cronograma:

| ID | Caso de Uso | Impacto | Esforço | Valor (Imp/Esf) | Quadrante Resultante | Compõe a Entrega? |
| :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **UC10** | Gerenciar Acervo de Vídeos | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **UC11** | Gerenciar Acervo de Áudios | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **UC01** | Gerenciar Atividades Educacionais | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 7)** |
| **UC02** | Realizar Atividades Interativas | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 8)** |
| **UC06** | Gerenciar Acessos e Permissões | 3 | 2 | 1.50 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 9)** |
| **UC07** | Redefinir Senha de Acesso | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 9)** |
| **UC13** | Baixar Traduções para Acesso Offline | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 8)** |
| **UC03** | Gerenciar Insígnias (Recompensas) | 3 | 4 | 0.75 | Q3 - Tarefas Complementares | **SIM (Iteração 10)** |
| **UC12** | Gerenciar Perfil Pessoal | 3 | 4 | 0.75 | Q3 - Tarefas Complementares | **SIM (Iteração 11)** |
| **UC05** | Gerenciar Eventos Comunitários | 2 | 3 | 0.67 | Q3 - Tarefas Complementares | **NÃO** |
| **UC08** | Gerenciar Moderação de Conteúdo | 2 | 3 | 0.67 | Q3 - Tarefas Complementares | **NÃO** |
| **UC09** | Gerenciar Tipos de Denúncias (Categorias) | 2 | 3 | 0.67 | Q3 - Tarefas Complementares | **NÃO** |
| **UC14** | Candidatar-se a Professor | 2 | 3 | 0.67 | Q3 - Tarefas Complementares | **NÃO** |
| **UC04** | Gerenciar Feed Social | 2 | 5 | 0.40 | Q4 - Consumidores de Tempo | **NÃO** |
