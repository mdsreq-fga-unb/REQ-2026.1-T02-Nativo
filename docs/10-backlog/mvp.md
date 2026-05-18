## 10.2 Metodologia de Priorização do Backlog (Impacto vs. Esforço)

Para a definição do escopo do Produto Mínimo Viável (MVP), as Características do Produto (CPs) e seus respectivos Requisitos Funcionais foram priorizados utilizando uma **Matriz de Impacto vs. Esforço Técnico**. Essa abordagem analítica apoia os princípios fundamentais do **OpenUP**, permitindo que a equipe minimize os riscos técnicos logo no início do ciclo de vida do projeto, focando no que entrega maior valor documentado para a cliente.

A dinâmica foi realizada de forma colaborativa pela equipe de desenvolvimento por meio da plataforma Miro. Para garantir a objetividade e a confiabilidade da métrica, o processo consistiu na avaliação individual de cada um dos 49 Requisitos Funcionais (RFs) sob duas perspectivas com critérios analíticos preestabelecidos:

1. **Impacto de Negócio (Eixo Y):** Mensurado em uma escala linear de 1 a 5, avaliando o quão crítica é a funcionalidade para atingir os Objetivos Estratégicos (OEs) do sistema, focando na mitigação do problema central 
2. **Esforço Técnico (Eixo X):** Estimado por meio de uma dinâmica de avaliação por consenso, baseada na projeção de horas totais de desenvolvimento necessárias para a implementação completa de cada item de escopo.

### 10.2.1 Critérios do Eixo Y: Analise de Impacto via Técnica MoSCoW

A nota de impacto no Eixo Y foi derivada de uma priorização prévia realizada pela cliente, utilizando a técnica MoSCoW. O mapeamento seguiu as seguintes diretrizes objetivas:

* **Nota 5 (Altíssimo Impacto):** Requisitos categorizados pela cliente como *Must Have*.
* **Nota 4 (Alto Impacto):** Requisitos categorizados pela cliente como *Should Have*.
* **Notas 2 e 3 (Médio / Baixo Impacto):** Requisitos categorizados pela cliente como *Could Have*.
* **Nota 1 (Sem Impacto Imediato):** Requisitos categorizados pela cliente como *Won't Have*.

### 10.2.2 Critérios do Eixo X: Dinâmica de Estimativa por Consenso Baseada em Horas

O dimensionamento do esforço no Eixo X foi estruturado para mitigar os riscos e as incertezas tecnológicas ligadas à transição da arquitetura do sistema. Para embasar as discussões e garantir estimativas realistas de esforço prático, a equipe utilizou como referencial a bagagem técnica e a experiência adquirida por seus membros em projetos e trabalhos anteriores. 

 As estimativas projetadas representam o **esforço total da tarefa (horas-homem)** de toda a equipe.

O tempo bruto em horas estimado em consenso foi convertido em uma escala linear de 1 a 5, definida pelos seguintes intervalos operacionais:

* **Nota 1 (Esforço Muito Baixo):** Tarefas com estimativa de **1 a 8 horas** totais de desenvolvimento.
* **Nota 2 (Esforço Baixo):** Tarefas com estimativa de **9 a 15 horas** totais de desenvolvimento.
* **Nota 3 (Esforço Médio):** Tarefas com estimativa de **17 a 29 horas** totais de desenvolvimento
* **Nota 4 (Esforço Alto):** Tarefas com estimativa de **30 a 42 horas** totais de desenvolvimento. Exigem frequentemente a alocação de múltiplos desenvolvedores trabalhando em paralelo para garantir a entrega dentro do ciclo.
* **Nota 5 (Esforço Muito Alto):** Tarefas com estimativa **acima de 42 horas** totais de desenvolvimento.

### 10.2.3 Regras de Corte para Alocação de Iterações

A intersecção das métricas dos eixos Y e X posicionou os requisitos funcionais em quatro quadrantes distintos na matriz de priorização. Essa divisão estabeleceu o teto de escopo do MVP de forma puramente técnica e transparente, determinando quais itens entrariam nas iterações de Construção e quais seriam postergados ou descartados:

* **Ganhos Rápidos (*Quick Wins*):** Alto Impacto (Nota ≥ 4) e Baixo/Médio Esforço (Nota ≤ 3). Representam a prioridade máxima para alocação nas iterações iniciais do MVP, pois entregam alto valor de salvaguarda do idioma com baixo custo de tempo de desenvolvimento.
* **Grandes Projetos (*Major Projects*):** Alto Impacto (Nota ≥ 4) e Alto Esforço (Nota ≥ 4). Itens de alto valor cultural e educacional, mas cujo risco e complexidade exigem maior janela de desenvolvimento e maturidade da arquitetura, definindo as entregas complexas que delimitam a linha de base do MVP.
* **Tarefas Complementares (*Fill-ins*):** Baixo Impacto (Nota ≤ 3) e Baixo Esforço (Nota ≤ 2). Requisitos de menor criticidade absorvidos de forma oportunista no escopo atual por apresentarem custo em horas quase nulo para a equipe de desenvolvimento.
* **Consumidores de Tempo (*Time Sinks*):** Baixo Impacto (Nota ≤ 2) e Alto Esforço (Nota ≥ 4). Funcionalidades de alto risco de escopo e alta carga horária que não trariam retorno imediato para os objetivos estratégicos da comunidade, sendo descartadas ou postergadas para ciclos futuros.
### 10.2.1 Matriz de Priorização Detalhada por Requisito Funcional (RF)

A tabela abaixo apresenta a distribuição detalhada de cada um dos 49 requisitos funcionais da plataforma Nativo, mapeados conforme os critérios de impacto (MoSCoW) e a dinâmica de consenso do esforço (Horas-Homem) descritos anteriormente:

| ID | Requisito Funcional (RF) | Impacto (1-5) | Esforço (1-5) | Quadrante Resultante | Destino (MVP?) |
| :--- | :--- | :---: | :---: | :--- | :---: |
| **RF34** | Cadastrar vídeo | 5 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF35** | Exibir vídeo | 5 | 1 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF36** | Excluir vídeo | 4 | 1 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF37** | Associar vídeo | 5 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF38** | Desassociar vídeo | 4 | 1 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF39** | Cadastrar áudio | 5 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF40** | Reproduzir áudio | 5 | 1 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF41** | Excluir áudio | 4 | 1 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF42** | Associar áudio | 5 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF43** | Desassociar áudio | 4 | 1 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF25** | Candidatar-se a professor | 5 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF20** | Banir usuário | 4 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF21** | Atribuir cargos de usuário | 4 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF22** | Editar cargos de usuário | 4 | 1 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF23** | Listar cargos de usuário | 4 | 1 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF24** | Excluir cargos de usuário | 4 | 1 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF01** | Criar atividade educacional | 5 | 4 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF02** | Listar atividades educacional | 4 | 3 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF03** | Responder atividade educacional | 5 | 4 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF04** | Visualizar resultado da atividade | 5 | 3 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF05** | Editar atividade educacional | 4 | 4 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF06** | Excluir atividade educacional | 4 | 3 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF26** | Recuperar senha | 4 | 4 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF49** | Baixar traduções (Acesso Offline) | 5 | 5 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF27** | Criar denúncia | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF28** | Atualizar status de denúncia | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF29** | Listar denúncias | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF30** | Criar categoria de denúncia | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF31** | Editar categoria de denúncia | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF32** | Listar categorias de denúncia | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF33** | Excluir categoria de denúncia | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF07** | Criar insígnia | 3 | 3 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF08** | Editar insígnia | 3 | 3 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF09** | Excluir insígnias | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF48** | Listar insígnias | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF44** | Editar usuário | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF45** | Listar histórico de traduções | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF46** | Favoritar tradução | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF47** | Listar traduções favoritadas | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF15** | Criar eventos | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF16** | Editar eventos | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF17** | Listar eventos | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF18** | Excluir eventos | 3 | 1 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF19** | Compartilhar eventos | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF10** | Criar publicação | 2 | 4 | Consumidores Tempo (*Time Sink*) | **NÃO** |
| **RF11** | Editar publicação | 2 | 3 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF12** | Listar publicações | 2 | 3 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF13** | Excluir publicação | 2 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF14** | Interagir com a publicação | 2 | 4 | Consumidores Tempo (*Time Sink*) | **NÃO** |