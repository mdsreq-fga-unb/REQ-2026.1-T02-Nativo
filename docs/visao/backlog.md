Os Itens de Trabalho organizam, em ordem de prioridade, todas as entregas previstas para a solução. Nesta seção registramos como os itens são estruturados, refinados e priorizados, além da forma como o MVP é definido para orientar o desenvolvimento inicial do produto.

## 10.1 Itens de Trabalho Gerais

Os itens de trabalho apresentados a seguir consolidam os requisitos funcionais (RFs) previstos para a evolução do aplicativo Nativo. Para evitar redundâncias e facilitar a manutenção da documentação técnica, seguindo as práticas do framework OpenUP, os requisitos foram agrupados logica e estruturalmente em Casos de Uso (UCs) abrangentes.

A tabela também estabelece a rastreabilidade entre as funcionalidades propostas e os Requisitos Não Funcionais (RNFs), assegurando que restrições de usabilidade, desempenho e confiabilidade incidam corretamente sobre as operações do sistema.

| RF | Caso de uso derivado | RNFs relacionados |
| :--- | :--- | :--- |
| **RF01 - Criar atividade educacional** | UC01 - Gerenciar Atividades Educacionais | RNF04, RNF08 |
| **RF02 - Listar atividades educacional** | UC01 - Gerenciar Atividades Educacionais | RNF04, RNF08 |
| **RF05 - Editar atividade educacional** | UC01 - Gerenciar Atividades Educacionais | RNF08 |
| **RF06 - Excluir atividade educacional** | UC01 - Gerenciar Atividades Educacionais | RNF08 |
| **RF03 - Responder atividade educacional** | UC02 - Realizar Atividades Interativas | RNF04, RNF08 |
| **RF04 - Visualizar resultado da atividade** | UC02 - Realizar Atividades Interativas | RNF04, RNF08 |
| **RF07 - Criar insígnia** | UC03 - Gerenciar Sistema de Recompensas | RNF08 |
| **RF08 - Editar insígnia** | UC03 - Gerenciar Sistema de Recompensas | RNF08 |
| **RF09 - Excluir insígnias** | UC03 - Gerenciar Sistema de Recompensas | RNF08 |
| **RF10 - Criar publicação** | UC04 - Gerenciar Feed Social | RNF03, RNF04, RNF08, RNF09 |
| **RF11 - Editar publicação** | UC04 - Gerenciar Feed Social | RNF03, RNF08, RNF09 |
| **RF12 - Listar publicações** | UC04 - Gerenciar Feed Social | RNF03, RNF04, RNF08 |
| **RF13 - Excluir publicação** | UC04 - Gerenciar Feed Social | RNF08 |
| **RF14 - Interagir com a publicação** | UC04 - Gerenciar Feed Social | RNF03, RNF04, RNF08 |
| **RF15 - Criar eventos** | UC05 - Gerenciar Eventos Comunitários | RNF03, RNF08, RNF09 |
| **RF16 - Editar eventos** | UC05 - Gerenciar Eventos Comunitários | RNF03, RNF08 |
| **RF17 - Listar eventos** | UC05 - Gerenciar Eventos Comunitários | RNF03, RNF04, RNF08 |
| **RF18 - Excluir eventos** | UC05 - Gerenciar Eventos Comunitários | RNF08 |
| **RF19 - Compartilhar eventos** | UC05 - Gerenciar Eventos Comunitários | RNF03, RNF08 |
| **RF20 - Banir usuário** | UC06 - Gerenciar Acessos e Permissões | RNF08 |
| **RF21 - Atribuir cargos de usuário** | UC06 - Gerenciar Acessos e Permissões | RNF08 |
| **RF22 - Editar cargos de usuário** | UC06 - Gerenciar Acessos e Permissões | RNF08 |
| **RF23 - Listar cargos de usuário** | UC06 - Gerenciar Acessos e Permissões | RNF08 |
| **RF24 - Excluir cargos de usuário** | UC06 - Gerenciar Acessos e Permissões | RNF08 |
| **RF25 - Candidatar-se a professor** | UC07 - Gerenciar Credenciais da Conta | RNF08 |
| **RF26 - Recuperar senha** | UC07 - Gerenciar Credenciais da Conta | RNF08 |
| **RF27 - Criar denúncia** | UC08 - Gerenciar Moderação de Conteúdo | RNF03, RNF08 |
| **RF28 - Atualizar status de denúncia** | UC08 - Gerenciar Moderação de Conteúdo | RNF08 |
| **RF29 - Listar denúncias** | UC08 - Gerenciar Moderação de Conteúdo | RNF08 |
| **RF30 - Criar categoria de denúncia** | UC09 - Gerenciar Tipos de Denúncias | RNF08 |
| **RF31 - Editar categoria de denúncia** | UC09 - Gerenciar Tipos de Denúncias | RNF08 |
| **RF32 - Listar categorias de denúncia** | UC09 - Gerenciar Tipos de Denúncias | RNF08 |
| **RF33 - Excluir categoria de denúncia** | UC09 - Gerenciar Tipos de Denúncias | RNF08 |
| **RF34 - Cadastrar vídeo** | UC10 - Gerenciar Acervo de Vídeos | RNF08, RNF09 |
| **RF35 - Exibir vídeo** | UC10 - Gerenciar Acervo de Vídeos | RNF01, RNF02, RNF08 |
| **RF36 - Excluir vídeo** | UC10 - Gerenciar Acervo de Vídeos | RNF08 |
| **RF37 - Associar vídeo** | UC10 - Gerenciar Acervo de Vídeos | RNF08 |
| **RF38 - Desassociar vídeo** | UC10 - Gerenciar Acervo de Vídeos | RNF08 |
| **RF39 - Cadastrar áudio** | UC11 - Gerenciar Acervo de Áudios | RNF08, RNF09 |
| **RF40 - Reproduzir áudio** | UC11 - Gerenciar Acervo de Áudios | RNF01, RNF02, RNF08 |
| **RF41 - Excluir áudio** | UC11 - Gerenciar Acervo de Áudios | RNF08 |
| **RF42 - Associar áudio** | UC11 - Gerenciar Acervo de Áudios | RNF08 |
| **RF43 - Desassociar áudio** | UC11 - Gerenciar Acervo de Áudios | RNF08 |
| **RF44 - Editar usuário** | UC12 - Gerenciar Perfil Pessoal | RNF08 |
| **RF45 - Listar histórico de traduções** | UC12 - Gerenciar Perfil Pessoal | RNF08 |
| **RF46 - Favoritar tradução** | UC12 - Gerenciar Perfil Pessoal | RNF08 |
| **RF47 - Listar traduções favoritadas** | UC12 - Gerenciar Perfil Pessoal | RNF08 |
| **RF48 - Listar insígnias** | UC12 - Gerenciar Perfil Pessoal | RNF08 |
| **RF49 - Baixar traduções** | UC13 - Sincronizar Acervo Offline | RNF06, RNF08 |

## 10.2 Casos de Uso

Os casos de uso foram separados em páginas próprias para facilitar a leitura e reduzir o tamanho desta página.

<div class="uc-link-grid" markdown="1">

[**UC01 - Gerenciar Atividades Educacionais**](casos-uso/uc01.md){ .uc-link-card }

[**UC02 - Realizar Atividades Interativas**](casos-uso/uc02.md){ .uc-link-card }

[**UC03 - Gerenciar Insígnias (Recompensas)**](casos-uso/uc03.md){ .uc-link-card }

[**UC04 - Gerenciar Feed Social**](casos-uso/uc04.md){ .uc-link-card }

[**UC05 - Gerenciar Eventos Comunitários**](casos-uso/uc05.md){ .uc-link-card }

[**UC06 - Gerenciar Acessos e Permissões**](casos-uso/uc06.md){ .uc-link-card }

[**UC07 - Gerenciar Credenciais da Conta**](casos-uso/uc07.md){ .uc-link-card }

[**UC08 - Gerenciar Moderação de Conteúdo**](casos-uso/uc08.md){ .uc-link-card }

[**UC09 - Gerenciar Tipos de Denúncias (Categorias)**](casos-uso/uc09.md){ .uc-link-card }

[**UC10 - Gerenciar Acervo de Vídeos**](casos-uso/uc10.md){ .uc-link-card }

[**UC11 - Gerenciar Acervo de Áudios**](casos-uso/uc11.md){ .uc-link-card }

[**UC12 - Gerenciar Perfil Pessoal**](casos-uso/uc12.md){ .uc-link-card }

[**UC13 - Sincronizar Acervo Offline**](casos-uso/uc13.md){ .uc-link-card }

</div>

## 10.3 Metodologia de Priorização dos Itens de Trabalho (Impacto vs. Esforço)

Para a definição do escopo do Produto Mínimo Viável (MVP) e do roteiro de entregas finais, os **Casos de Uso (UCs)** e seus respectivos Requisitos Funcionais foram priorizados utilizando uma **Matriz de Impacto vs. Esforço Técnico**. Essa abordagem analítica apoia os princípios fundamentais do **OpenUP**, permitindo que a equipe minimize os riscos técnicos logo no início do ciclo de vida do projeto, focando no que entrega maior valor documentado para a cliente.

A dinâmica foi realizada de forma colaborativa pela equipe de desenvolvimento por meio da plataforma Miro. O processo consistiu na avaliação individual de cada um dos 13 Casos de Uso (UCs), com apoio dos RFs associados, para a extração do **Valor de Priorização**, calculado em três etapas:

1. **Impacto de Negócio:** Mensurado em uma escala linear de 1 a 5, avaliando o quão crítica é a funcionalidade para atingir os Objetivos Estratégicos (OEs) do sistema, focando na mitigação do problema central.
2. **Esforço Técnico:** Estimado por meio de uma dinâmica de avaliação por consenso, baseada na projeção de horas totais de desenvolvimento necessárias para a implementação completa.
3. **Valor de Priorização (Métrica de Retorno):** Calculado por meio da razão matemática direta entre o Impacto e o Esforço através da fórmula **(Impacto / Esforço)**. Essa métrica atua como o indicador único e definitivo do projeto, determinando a densidade de retorno de cada requisito (quais itens trazem maior ganho estratégico em relação ao tempo investido).

### 10.3.1 Critérios Analíticos Básicos (Ingredientes)
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

### 10.3.2 Regras de Corte, MVP e Escopo Adicional

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

### 10.3.3 Matriz de Priorização Detalhada por Caso de Uso (UC)

A tabela abaixo apresenta a distribuição detalhada dos 13 casos de uso da plataforma Nativo, ordenados de forma decrescente pelo **Valor de Priorização** para evidenciar a linha de corte (1.0) e as alocações no cronograma:

| ID | Caso de Uso | Impacto | Esforço | Valor (Imp/Esf) | Quadrante Resultante | Compõe a Entrega? |
| :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **UC10** | Gerenciar Acervo de Vídeos | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **UC11** | Gerenciar Acervo de Áudios | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **UC01** | Gerenciar Atividades Educacionais | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 7)** |
| **UC02** | Realizar Atividades Interativas | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 8)** |
| **UC06** | Gerenciar Acessos e Permissões | 3 | 2 | 1.50 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 9)** |
| **UC07** | Gerenciar Credenciais da Conta | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 9)** |
| **UC13** | Sincronizar Acervo Offline | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 8)** |
| **UC03** | Gerenciar Insígnias (Recompensas) | 3 | 4 | 0.75 | Q3 - Tarefas Complementares | **SIM (Iteração 10)** |
| **UC12** | Gerenciar Perfil Pessoal | 3 | 4 | 0.75 | Q3 - Tarefas Complementares | **SIM (Iteração 11)** |
| **UC05** | Gerenciar Eventos Comunitários | 2 | 3 | 0.67 | Q3 - Tarefas Complementares | **NÃO** |
| **UC08** | Gerenciar Moderação de Conteúdo | 2 | 3 | 0.67 | Q3 - Tarefas Complementares | **NÃO** |
| **UC09** | Gerenciar Tipos de Denúncias (Categorias) | 2 | 3 | 0.67 | Q3 - Tarefas Complementares | **NÃO** |
| **UC04** | Gerenciar Feed Social | 2 | 5 | 0.40 | Q4 - Consumidores de Tempo | **NÃO** |

