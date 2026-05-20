## 4 · Estratégias de Engenharia de Software

### 4.1 Estratégia Priorizada

| Campo | Decisão |
| :--- | :--- |
| **Abordagem** | Híbrida |
| **Ciclo de Vida** | Iterativo e Incremental |
| **Processo** | OpenUP |

### 4.2 Quadro Comparativo

O quadro apresenta algumas características que podem ser relacionadas ao OpenUP e RAD, visando auxiliar o entendimento e justificativa do processo mais adequado para o projeto

| Características | OpenUP | RAD |
| ----- | :---: | :---: |
| **Abordagem Geral** | Iterativo e incremental, com maior organização de fases, papéis e artefatos, mantendo agilidade moderada. | Iterativo e incremental, com forte foco em prototipação rápida, construção acelerada e ciclos curtos de validação. |
| **Foco Principal** | Equilibrar arquitetura, requisitos, planejamento e entregas incrementais. | Entrega rápida de versões funcionais para validação contínua. |
| **Foco em Arquitetura** | Dá atenção explícita à arquitetura desde o início, favorecendo a evolução sustentável. | Prioriza velocidade, podendo postergar decisões arquiteturais se não houver controle técnico. |
| **Estrutura do Processo** | Possui fases definidas (concepção, elaboração, construção e transição), com iterações internas. | Organizado em ciclos rápidos com menor formalização e maior fluidez. |
| **Flexibilidade de Requisitos** | Permite evolução dos requisitos com controle e documentação. | Alta flexibilidade com forte adaptação baseada em feedback do usuário. |
| **Colaboração com o Cliente** | Favorece pontos de validação mais definidos e uma comunicação mais estruturada com o cliente. | Dependência de participação frequente e contínua do cliente. |
| **Adequação ao Contexto de Comunicação do Nativo** | Pode ser mais vantajoso porque organiza melhor validação e comunicação, algo importante em um projeto com contato mediado com a comunidade. | Perde força, pois o RAD depende de clientes altamente disponíveis para validar protótipos sucessivos. |
| **Complexidade do Processo** | Possui maior disciplina na definição de artefatos, acompanhamento e marcos, favorecendo organização e rastreabilidade sem exigir um processo excessivamente rígido. | Possui estrutura mais enxuta e orientada à velocidade, favorecendo ciclos rápidos de desenvolvimento e adaptação contínua. |
| **Qualidade Técnica** | Favorece maior controle arquitetural e evolução sustentável do sistema ao longo das iterações. | Favorece validação rápida de soluções e experimentação contínua, especialmente em funcionalidades voltadas à experiência do usuário e prototipação. |
| **Práticas de Desenvolvimento** | Compatível com engenharia mais controlada, organização de requisitos e rastreabilidade mais clara. | Valoriza prototipação, reaproveitamento de componentes e entregas rápidas, mas não define rigor técnico por si só. |
| **Documentação** | Mantém documentação mais estruturada, facilitando rastreabilidade, comunicação e justificativa de decisões. | Prioriza documentação essencial para acelerar entregas e validações, podendo exigir complementação em contextos acadêmicos ou projetos com maior necessidade de controle formal. |
| **Controle de Qualidade** | O controle ocorre de forma mais estruturada ao longo das fases e iterações. | O controle depende muito da maturidade da equipe e da frequência de validação dos protótipos. |
| **Previsibilidade e Planejamento** | Oferece maior previsibilidade de marcos, organização das entregas e acompanhamento do progresso. | Favorece maior capacidade de adaptação a mudanças e feedbacks frequentes durante o desenvolvimento.  |

### 4.3 Justificativa

## **Justificativa**

Com base nas características do projeto Nativo e nos desafios identificados, o **OpenUP** se apresenta como o processo mais adequado pelos seguintes motivos:

### 1. **Sustentabilidade técnica e organização do desenvolvimento:**

* O projeto apresenta desafios técnicos relevantes, especialmente relacionados à arquitetura existente e sua evolução. Nesse contexto, o OpenUP contribui ao incentivar a definição de uma arquitetura executável desde as fases iniciais, reduzindo retrabalho e favorecendo a evolução sustentável do sistema.

### 2. **Adequação ao modelo de validação do projeto:**

* A validação com a comunidade ocorre de forma mediada, o que reduz a eficácia de abordagens altamente dependentes de interação contínua e imediata com o usuário, como o RAD. O OpenUP permite organizar momentos de validação em marcos definidos, tornando o processo mais adequado a esse contexto e reduzindo ruídos de comunicação. 

### 3. **Integração com Engenharia de Requisitos:**

A escolha também se justifica pela melhor aderência do OpenUP às necessidades de Engenharia de Requisitos, permitindo: 

* Rastreabilidade entre objetivos específicos (OE), características de produto (CP) e requisitos.

* Gestão controlada de mudanças.

* Refinamento progressivo dos requisitos ao longo das iterações.

* Validação contínua estruturada por meio de marcos.

### 4. **Adequação ao contexto acadêmico:**

* O projeto exige documentação clara, organização do processo e justificativa das decisões. O OpenUP atende a esses requisitos ao oferecer maior disciplina na definição de artefatos e marcos, sem comprometer a flexibilidade.

### 5. **Uso complementar do RAD:**

Embora o RAD não tenha sido adotado como processo principal, suas práticas são relevantes para o projeto, especialmente: 

* Prototipação rápida.

* Validação de interfaces.

* Foco na experiência do usuário.