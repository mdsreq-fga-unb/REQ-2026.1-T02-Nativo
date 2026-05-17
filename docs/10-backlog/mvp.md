## 10.2 Metodologia de Priorização do Backlog (Impacto vs. Esforço)

Para a definição do escopo do Produto Mínimo Viável (MVP), as Características do Produto (CPs) e seus respectivos Requisitos Funcionais foram priorizados utilizando uma **Matriz de Impacto vs. Esforço Técnico**. Essa abordagem analítica apoia os princípios fundamentais do **OpenUP**, permitindo que a equipe minimize os riscos técnicos logo no início do ciclo de vida do projeto, focando no que entrega maior valor para o cliente.

A dinâmica foi realizada de forma colaborativa pela equipe de desenvolvimento por meio da plataforma Miro. O processo consistiu na avaliação individual de cada um dos 49 Requisitos Funcionais (RFs) sob duas perspectivas:

1. **Impacto de Negócio (Eixo Y):** Mensurado em uma escala linear de 1 a 5, avaliando o quão crítica é a funcionalidade para atingir os Objetivos Estratégicos (OEs) do sistema, focando na mitigação do problema central (o enfraquecimento do uso cotidiano da língua Munduruku na Aldeia de Bragança).
2. **Esforço Técnico (Eixo X):** Estimado por meio de uma dinâmica de **Estimativa por Consenso** utilizando a **Sequência de Fibonacci (1, 2, 3, 5, 8, 13)**.

### Estimativa por Consenso e a Sequência de Fibonacci no OpenUP

No OpenUP, o planejamento é focado em intenções e evolui a cada iteração. Para dimensionar o esforço dos Itens de Trabalho (Work Items) sem cair no viés de estimativas individuais, a equipe adotou uma dinâmica de votação baseada em consenso. 

Cada membro da equipe atribuiu, simultaneamente e de forma independente, uma pontuação baseada na sequência de Fibonacci ($1, 2, 3, 5, 8, 13$) para a complexidade de implementação de cada requisito. A escolha dessa sequência justifica-se pelo fato de que o distanciamento progressivo entre os números reflete a incerteza e o risco tecnológico inerentes ao software: quanto maior a complexidade (como regras de persistência pesadas ou sincronização de dados), maior é o salto na pontuação (8 ou 13).

Nos casos em que houve divergência nas estimativas (ex: um membro pontuando 3 e outro 13), a equipe realizou debates técnicos focado na arquitetura até alinhar os entendimentos e consolidar um valor único por consenso.

### Regras de Corte para Alocação de Iterações

A intersecção dessas métricas posicionou os requisitos em quatro quadrantes distintos, definindo o que compõe o MVP (a ser desenvolvido nas primeiras iterações da fase de Construção) e o que será postergado:

*   **Ganhos Rápidos (*Quick Wins*):** Alto Impacto ($\ge 4$) e Baixo/Médio Esforço ($\le 5$). Prioridade máxima para as iterações iniciais do MVP.
*   **Grandes Projetos (*Major Projects*):** Alto Impacto ($\ge 4$) e Alto Esforço ($\ge 8$). Itens de alto valor, mas cujo risco técnico exige maior maturidade da arquitetura, sendo empurrados para iterações futuras.
*   **Tarefas Complementares (*Fill-ins*):** Baixo Impacto ($\le 3$) e Baixo Esforço ($\le 3$). Requisitos simples absorvidos no escopo atual por apresentarem custo de desenvolvimento quase nulo.
*   **Consumidores de Tempo (*Time Sinks*):** Baixo Impacto ($\le 2$) e Alto Esforço ($\ge 8$). Funcionalidades que representavam alto risco de escopo sem retorno imediato para a salvaguarda do idioma, sendo descartadas do MVP.

### 10.2.1 Matriz de Priorização Detalhada por Requisito Funcional (RF)

A tabela abaixo apresenta a distribuição detalhada de cada um dos 49 requisitos funcionais da plataforma Nativo, mapeados conforme a dinâmica de consenso realizada pela equipe no Miro:

| ID | Requisito Funcional (RF) | Impacto (1-5) | Esforço (Fibonacci) | Quadrante Resultante | Destino (MVP?) |
| :--- | :--- | :---: | :---: | :--- | :---: |
| **RF34** | Cadastrar vídeo | 5 | 3 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF35** | Exibir vídeo | 5 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF36** | Excluir vídeo | 4 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF37** | Associar vídeo | 5 | 3 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF38** | Desassociar vídeo | 4 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF39** | Cadastrar áudio | 5 | 3 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF40** | Reproduzir áudio | 5 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF41** | Excluir áudio | 4 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF42** | Associar áudio | 5 | 3 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF43** | Desassociar áudio | 4 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF25** | Candidatar-se a professor | 5 | 3 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF20** | Banir usuário | 4 | 3 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF21** | Atribuir cargos de usuário | 4 | 3 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF22** | Editar cargos de usuário | 4 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF23** | Listar cargos de usuário | 4 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF24** | Excluir cargos de usuário | 4 | 2 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF01** | Criar atividade educacional | 5 | 8 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF02** | Listar atividades educacional | 4 | 5 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF03** | Responder atividade educacional | 5 | 8 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF04** | Visualizar resultado da atividade | 5 | 5 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF05** | Editar atividade educacional | 4 | 8 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF06** | Excluir atividade educacional | 4 | 5 | Ganhos Rápidos (*Quick Wins*) | **SIM** |
| **RF26** | Recuperar senha | 4 | 8 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF49** | Baixar traduções (Acesso Offline) | 5 | 13 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF27** | Criar denúncia | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF28** | Atualizar status de denúncia | 3 | 3 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF29** | Listar denúncias | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF30** | Criar categoria de denúncia | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF31** | Editar categoria de denúncia | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF32** | Listar categorias de denúncia | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF33** | Excluir categoria de denúncia | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF07** | Criar insígnia | 3 | 5 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF08** | Editar insígnia | 3 | 5 | Grandes Projetos (*Major Projects*) | **NÃO** |
| **RF09** | Excluir insígnias | 3 | 3 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF48** | Listar insígnias | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF44** | Editar usuário | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF45** | Listar histórico de traduções | 3 | 3 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF46** | Favoritar tradução | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF47** | Listar traduções favoritadas | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF15** | Criar eventos | 3 | 3 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF16** | Editar eventos | 3 | 3 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF17** | Listar eventos | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF18** | Excluir eventos | 3 | 2 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF19** | Compartilhar eventos | 3 | 3 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF10** | Criar publicação | 2 | 8 | Consumidores Tempo (*Time Sink*) | **NÃO** |
| **RF11** | Editar publicação | 2 | 5 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF12** | Listar publicações | 2 | 5 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF13** | Excluir publicação | 2 | 3 | Tarefas Comp. (*Fill-ins*) | **SIM** |
| **RF14** | Interagir com a publicação | 2 | 8 | Consumidores Tempo (*Time Sink*) | **NÃO** |