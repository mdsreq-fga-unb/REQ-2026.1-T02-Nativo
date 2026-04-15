# 3 · Estratégias de Engenharia de Software

Esta seção apresenta as estratégias de engenharia de software adotadas no projeto, a justificativa para a escolha do processo e o quadro comparativo entre as abordagens analisadas.

<div class="section-cards">
  <a class="section-card" href="estrategia/">
    <h3>3.1 Estratégia Priorizada</h3>
    <p>Abordagem Híbrida · Ciclo Iterativo e Incremental · OpenUP.</p>
  </a>
  <a class="section-card" href="comparativo/">
    <h3>3.2 Quadro Comparativo</h3>
    <p>Comparativo detalhado entre OpenUP e RAD em 13 dimensões.</p>
  </a>
  <a class="section-card" href="justificativa/">
    <h3>3.3 Justificativa</h3>
    <p>Os 6 motivos que levaram à escolha do OpenUP para o projeto.</p>
  </a>
</div>

# **3. ESTRATÉGIAS DE ENGENHARIA DE SOFTWARE**

## **3.1. Estratégia Priorizada**

**Abordagem**: Híbrida

**Ciclo de Vida**: Iterativo e Incremental

**Processo**:  OpenUP

## **3.2. Quadro Comparativo**

O quadro apresenta algumas características que podem ser relacionadas ao OpenUP e RAD, visando auxiliar o entendimento e justificativa do processo mais adequado para o projeto

| Características | OpenUP | RAD |
| ----- | :---: | :---: |
| **Abordagem Geral** | Iterativo e incremental, com maior organização de fases, papéis e artefatos, mantendo agilidade moderada. | Iterativo e incremental, com forte foco em prototipação rápida, construção acelerada e ciclos curtos de validação. |
| **Foco Principal** | Equilibrar arquitetura, requisitos, planejamento e entregas incrementais de forma estruturada. | Entregar rapidamente versões funcionais do sistema para validação e refinamento contínuo. |
| **Foco em Arquitetura** | Dá atenção mais explícita à arquitetura desde o início, o que favorece reestruturações planejadas e sustentáveis. | Tende a priorizar velocidade de construção e prototipação, podendo deixar decisões arquitetônicas mais frágeis se não houver controle técnico. |
| **Estrutura do Processo** | Possui fases mais claras, como iniciação, elaboração, construção e transição, com iterações internas. Mais estruturado mantendo a agilidade  | Organiza-se em ciclos rápidos de levantamento, prototipação, construção e refinamento, com menor rigidez formal. |
| **Flexibilidade de Requisitos** | Permite evolução dos requisitos ao longo das iterações, mas com maior controle e documentação. | Alta flexibilidade para ajustes frequentes, especialmente quando o entendimento do produto amadurece a partir do uso e do feedback. |
| **Colaboração com o Cliente** | Favorece pontos de validação mais definidos e uma comunicação mais estruturada com o cliente. | Depende bastante da participação **frequente** do cliente para validar protótipos e orientar correções rápidas. |
| **Adequação ao Contexto de Comunicação do Nativo** | Pode ser mais vantajoso porque organiza melhor validação e comunicação, algo importante em um projeto com contato mediado com a comunidade. | Pode perder força nesse contexto, porque o RAD funciona melhor quando o cliente está altamente disponível para validar rapidamente protótipos sucessivos. |
| **Complexidade do Processo** | Mais estruturado e formal, exigindo maior disciplina de acompanhamento e documentação. | Mais leve e orientado à velocidade, com menor formalização e maior ênfase na construção rápida. |
| **Qualidade Técnica** | Favorece evolução técnica mais consistente, especialmente em contextos com necessidade de refatoração arquitetural. | A qualidade pode variar bastante; se a equipe focar só em rapidez, há risco de acúmulo de débito técnico. |
| **Práticas de Desenvolvimento** | Compatível com engenharia mais controlada, organização de requisitos e rastreabilidade mais clara. | Valoriza prototipação, reaproveitamento de componentes e entregas rápidas, mas não define rigor técnico por si só. |
| **Documentação** | Tende a produzir documentação mais adequada para contexto acadêmico e justificativa de decisões. | Costuma reduzir documentação para priorizar velocidade, o que pode ser problemático em um trabalho de disciplina. |
| **Controle de Qualidade** | O controle ocorre de forma mais estruturada ao longo das fases e iterações. | O controle depende muito da maturidade da equipe e da frequência de validação dos protótipos. |
| **Previsibilidade e Planejamento** | Oferece maior previsibilidade de marcos, atividades e entregas. | Favorece adaptação rápida, mas pode reduzir previsibilidade se o feedback não vier com constância suficiente. |

## **3.3. Justificativa**

### **Justificativa**

Com base nas características do projeto Nativo e nos desafios identificados, o **OpenUP** se apresenta como o processo mais adequado pelos seguintes motivos:

#### 1. **Organização e Estrutura do Desenvolvimento:**

* Diante da complexidade do projeto, especialmente no que se refere à necessidade de evolução arquitetural da aplicação e à organização das funcionalidades planejadas, o OpenUP é ideal por focar na criação de uma arquitetura executável logo nas fases iniciais (*Elaboração*). Isso garante uma base técnica sólida e sustentável, reduzindo o risco de retrabalho antes da construção em larga escala.

#### 2. **Ênfase em Arquitetura e Sustentabilidade Técnica:**

* O projeto enfrenta limitações técnicas relevantes, como gargalos na aplicação atual desenvolvida em Flask. O OpenUP, por valorizar a definição e evolução da arquitetura desde as etapas iniciais, contribui para a construção de uma base mais sólida e sustentável, reduzindo riscos de retrabalho e problemas de escalabilidade ao longo do desenvolvimento .

#### 3. **Melhor Adequação ao Fluxo de Validação:**

* Considerando que o contato com a comunidade ocorre de forma indireta, por meio de um representante, o OpenUP se mostra mais adequado por permitir uma maior estruturação para os momentos de validação e alinhamento. Diferente de abordagens que dependem de feedback contínuo e imediato, o processo permite consolidar entregas e validar em pontos mais definidos, reduzindo impactos causados por atrasos ou ruídos na comunicação .

#### 4. **Suporte à Documentação:**

* Por se tratar de um projeto desenvolvido no contexto de disciplina, há a necessidade de documentação clara, rastreabilidade de decisões e organização dos artefatos produzidos. O OpenUP atende melhor a esse requisito ao incentivar uma documentação mais estruturada, sem perder a flexibilidade do desenvolvimento iterativo.

#### 5. **Controle do Escopo e Evolução Incremental:**

* O projeto apresenta diversas possibilidades de expansão, como gamificação, feed social e suporte multimídia. O OpenUP permite que essas funcionalidades sejam organizadas e priorizadas de forma incremental, garantindo que o escopo seja controlado e que as entregas ocorram de maneira consistente ao longo do tempo.

#### 6. **Equilíbrio entre Flexibilidade e Controle:**

* Embora permita adaptação ao longo das iterações, o OpenUP mantém um nível adequado de controle sobre o processo, evitando que o desenvolvimento se torne desorganizado. Esse equilíbrio é essencial para o Nativo, que precisa evoluir continuamente, mas sem comprometer a qualidade técnica e a coerência do produto final.

Dessa forma, o OpenUP se mostra a escolha mais adequada por oferecer maior organização, melhor suporte à evolução técnica e alinhamento com as necessidades de validação e documentação do projeto, contribuindo para uma condução mais segura e estruturada do desenvolvimento.