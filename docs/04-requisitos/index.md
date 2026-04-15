# 4 · Engenharia de Requisitos

Esta seção descreve as atividades e técnicas de Engenharia de Requisitos (ER) adotadas em cada fase do projeto, e como elas se integram ao processo OpenUP.

<div class="section-cards">
  <a class="section-card" href="atividades/">
    <h3>4.1 Atividades e Técnicas de ER</h3>
    <p>Técnicas utilizadas em cada fase: elicitação, análise, declaração, representação e validação.</p>
  </a>
  <a class="section-card" href="mapeamento/">
    <h3>4.2 ER e o OpenUP</h3>
    <p>Mapeamento das atividades de ER às fases e práticas do processo OpenUP.</p>
  </a>
</div>

# **4. ENGENHARIA DE REQUISITOS**

## **4.1. Atividades e Técnicas de ER**

### **Fase de Concepção**

#### **Elicitação e Descoberta:**

* **Entrevistas:** Realizadas com a representante Alexia Naara para capturar as necessidades da comunidade Munduruku e entender os gargalos da aplicação atual em Flask.  
* **Brainstorming:** Sessões com a equipe para idealizar mecanismos de gamificação e o feed social que incentivem o uso recorrente do app.

#### **Análise e Consenso:**

* **Priorização MoSCoW:** Classificação dos requisitos em essenciais (*Must Have*), como o acesso offline, e desejáveis (*Should Have*), como o feed social, para determinar o sequenciamento da implementação baseado no valor para o cliente.

### **Fase de Elaboração**

#### **Elicitação e Descoberta:**

* **Análise Documental:** Revisão contínua do código-fonte e da documentação do TCC original para identificar funcionalidades legadas que precisam de refatoração, detalhando primeiro os itens de alto risco (como as limitações de arquitetura).

#### **Declaração de Requisitos:**

* **User Stories (Histórias de Usuário):** Utilizadas como requisitos funcionais. Descrição das funcionalidades sob a perspectiva dos diferentes perfis, como crianças e professores, mantendo o foco no valor cultural.  
* **Especificação Suplementar:** Agrupa os requisitos técnicos (restrições de implementação, como React Native/Firebase) e os requisitos não funcionais (qualidades do sistema, como suporte a cenários de baixa conectividade).

#### **Representação de Requisitos:**

* **Protótipos e Wireframes:** Representação visual das funcionalidades a serem implementadas para facilitar o entendimento da equipe e alinhamento com os stakeholders.


### **Fase de Construção**

#### **Verificação e Validação de Requisitos:**

* **Checklists de Qualidade:** Verificação contínua se cada requisito mapeado contribui diretamente para os Objetivos Específicos (OE) e se atende aos critérios técnicos estabelecidos.  
* **Demonstração (Review) e Prototipação:** Apresentação de telas e incrementos à cliente Alexia para validar se a refatoração técnica mantém a fidelidade linguística pretendida e atende à usabilidade da aldeia. O feedback é incorporado nas iterações subsequentes.

#### **Organização e Atualização de Requisitos:**

* **Matriz de Rastreabilidade:** Mapeamento que conecta os OEs às características do produto (CPs) e aos requisitos técnicos, garantindo que nada se perca durante a rotação de papéis da equipe no desenvolvimento.

### **Fase de Transição**

#### **Verificação e Validação de Requisitos:**

* **Testes de Aceitação e Demonstração Final:** Apresentação da versão finalizada para a cliente e para a comunidade (via representante) para homologação do sistema, garantindo que a aplicação está pronta para o uso no dia a dia da aldeia.

## **4.2. Engenharia de Requisitos e o OpenUP**

<table>
  <thead>
    <tr>
      <th>Fases do Processo</th>
      <th>Atividades ER</th>
      <th>Prática</th>
      <th>Técnica</th>
      <th>Resultado Esperado</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2" style="font-weight: bold; vertical-align: middle; background-color: rgba(153, 0, 0, 0.05);">Concepção</td>
      <td>Elicitação e Descoberta</td>
      <td>Colaboração direta com stakeholders para entendimento do domínio.</td>
      <td>Entrevistas, Brainstorming e Análise Documental</td>
      <td>Escopo preliminar definido, identificação das necessidades da comunidade Munduruku e mapeamento dos gargalos do Flask.</td>
    </tr>
    <tr>
      <td>Análise e Consenso</td>
      <td>Sequenciamento da implementação baseado em valor.</td>
      <td>Priorização MoSCoW</td>
      <td>MVP definido com clareza, priorizando requisitos essenciais.</td>
    </tr>
    <tr>
      <td rowspan="3" style="font-weight: bold; vertical-align: middle; background-color: rgba(153, 0, 0, 0.05);">Elaboração</td>
      <td>Declaração</td>
      <td>Documentação essencial com foco no valor cultural e restrições técnicas.</td>
      <td>User Stories e Especificação Suplementar</td>
      <td>Requisitos funcionais e requisitos técnicos/não-funcionais devidamente documentados.</td>
    </tr>
    <tr>
      <td>Representação</td>
      <td>Modelagem visual inicial para alinhamento de expectativas.</td>
      <td>Protótipos e Wireframes</td>
      <td>Interfaces desenhadas e validadas visualmente com a representante.</td>
    </tr>
    <tr>
      <td>Organização e Atualização</td>
      <td>Detalhamento progressivo (Refinamento) focado em mitigar riscos.</td>
      <td>Análise Documental</td>
      <td>Requisitos de refatoração do código legado detalhados para garantir uma arquitetura base segura.</td>
    </tr>
    <tr>
      <td rowspan="2" style="font-weight: bold; vertical-align: middle; background-color: rgba(153, 0, 0, 0.05);">Construção</td>
      <td>Verificação e Validação</td>
      <td>Validação contínua e iterativa dos incrementos gerados.</td>
      <td>Demonstração (Review) e Checklists de Qualidade</td>
      <td>Incrementos funcionais validados e aderentes aos Objetivos Específicos (OE) do projeto.</td>
    </tr>
    <tr>
      <td>Organização e Atualização</td>
      <td>Gerenciamento de mudanças e controle de dependências de forma leve.</td>
      <td>Matriz de Rastreabilidade</td>
      <td>Continuidade do conhecimento do projeto garantida, sem perda de rastreabilidade durante a rotação técnica da equipe.</td>
    </tr>
    <tr>
      <td style="font-weight: bold; vertical-align: middle; background-color: rgba(153, 0, 0, 0.05);">Transição</td>
      <td>Verificação e Validação</td>
      <td>Homologação final do sistema com o cliente e usuários finais.</td>
      <td>Demonstração (Review) e Testes de Aceitação</td>
      <td>Sistema Nativo integralmente validado pela aldeia, atestando a fidelidade linguística e o suporte em baixa conectividade.</td>
    </tr>
  </tbody>
</table>