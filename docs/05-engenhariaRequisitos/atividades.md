# 5.1 Atividades e Técnicas de ER

## **Fase de Concepção**

### **Elicitação e Descoberta:**

* **Entrevistas:** Realizadas com a cliente para capturar as necessidades da comunidade Munduruku e entender os gargalos da aplicação atual em Flask.
* **Brainstorming:** Sessões com a equipe para idealizar mecanismos de gamificação e o feed social que incentivem o uso recorrente do app.
* **Análise Documental:** Revisão preliminar do TCC original, do código legado e da documentação existente para entender o problema raiz, o contexto e o escopo do projeto desde o início.

### **Declaração de Requisitos:**

* **Documento de Visão:** Documentação inicial e macro dos Objetivos Específicos (OEs), Características do Produto (CPs) e Requisitos Iniciais.

### **Análise e Consenso:**

* **Avaliação de Valor de Negócio:** Classificação dos requisitos preliminares em essenciais e desejáveis, validada junto à cliente, com o objetivo de mensurar o valor agregado de cada requisito.

### **Verificação e Validação:**

* **Validação de Escopo:** Validação preliminar do escopo, dos OEs e das CPs diretamente com a cliente para garantir o alinhamento com a necessidade real da aldeia.

### **Organização e Atualização:**

* **Baseline Preliminar de Escopo:** Estruturação inicial dos objetivos e características para a formação da base documental que guiará o projeto.

## **Fase de Elaboração**

### **Elicitação e Descoberta:**

* **Análise Documental:** Revisão contínua do código-fonte e da documentação do TCC original para identificar funcionalidades legadas que precisam de refatoração, detalhando primeiro os itens de alto risco (como as limitações de arquitetura).

### **Declaração de Requisitos:**

* **Lista de Requisitos (Funcionais e Técnicos):** Compilação, estruturação e formalização de todos os requisitos extraídos da análise do legado e das interações iniciais. Essa listagem unificada serve como o inventário oficial de escopo do sistema que será submetido à filtragem.
* **User Stories (Histórias de Usuário):** Utilizadas como requisitos funcionais. Descrição das funcionalidades sob a perspectiva dos diferentes perfis, como crianças e professores, mantendo o foco no valor cultural.
* **Especificação Suplementar:** Agrupa os requisitos não funcionais (qualidades do sistema, como suporte a cenários de baixa conectividade).

### **Análise e Consenso:**

* **Matriz de Quadrantes (Valor de negócio vs. Dificuldade Técnica):** Técnica aplicada para cruzar o valor de negócio com a complexidade técnica (validada por tempo de desenvolvimento esperado). Essa análise é a ferramenta central para mitigar os requisitos de alto risco e definir objetivamente quais funcionalidades comporão o Produto Mínimo Viável (MVP).

### **Representação de Requisitos:**

* **Protótipos e Wireframes:** Representação visual das funcionalidades a serem implementadas para facilitar o entendimento da equipe e alinhamento com os stakeholders.

### **Verificação e Validação:**

* **Demonstração e Revisão:** Validação dos protótipos, das histórias iniciais elaboradas e das provas de conceito (PoC) arquiteturais junto à representante.

### **Organização e Atualização:**

* **Matriz de Rastreabilidade:** Estabelecimento da baseline inicial de requisitos e início da ligação formal entre: OE → CP → RF/RNF.

## **Fase de Construção**

### **Elicitação e Descoberta:**

* **Entrevistas e Consultas Iterativas:** Levantamento contínuo de detalhes emergentes e refinamento de regras de negócio à medida que os micro-incrementos são desenvolvidos.

### **Declaração de Requisitos:**

* **Detalhamento de Histórias de Usuário e Critérios:** Escrita e detalhamento de novas histórias de usuário e critérios de aceitação para os próximos ciclos de desenvolvimento.

### **Análise e Consenso:**

* **Negociação de Requisitos:** Negociação contínua de mudanças de escopo, adaptações técnicas e repriorização de acordo com a capacidade da equipe e o feedback recebido ao final de cada ciclo.

### **Verificação e Validação de Requisitos:**

* **Checklists de Qualidade:** Verificação contínua pela aplicação do DOR e DOD se cada incremento contribui diretamente para as Características do Produto (CP) e se atende aos critérios técnicos de qualidade estabelecidos.
* **Demonstração e Prototipação:** Apresentação de telas e incrementos à cliente para validar se a refatoração técnica mantém a fidelidade linguística pretendida e atende à usabilidade da aldeia. O feedback é incorporado nas iterações subsequentes.

### **Organização e Atualização de Requisitos:**

* **Matriz de Rastreabilidade:** Manutenção viva da Matriz de Rastreabilidade, garantindo que nenhum conhecimento se perca durante a rotação de papéis da equipe técnica no desenvolvimento.

## **Fase de Transição**

### **Verificação e Validação de Requisitos:**

* **Testes de Aceitação e Demonstração Final:** Apresentação da versão finalizada para a cliente e para a comunidade para homologação do sistema, garantindo que a aplicação está pronta para o uso no dia a dia da aldeia.

### **Organização e Atualização:**

* **Manutenção da Rastreabilidade:** Fechamento da documentação técnica e atualização final da Matriz de Rastreabilidade, refletindo com exatidão o produto que está sendo entregue a comunidade

---

**Fases do Processo — Tabela Resumo**

| Fases do Processo | Atividades da Engenharia de Requisitos (ER) | Prática | Técnica | Resultados Esperados |
|---|---|---|---|---|
| Concepção | Elicitação e Descoberta; Análise e Consenso; Declaração; Verificação e Validação; Organização e Atualização | Levantamento de Requisitos e Análise de Domínio; Priorização de Requisitos; Registro de Requisitos Iniciais; Validação com Stakeholders; Definição de Baseline Inicial | Entrevistas, Brainstorming, Análise Documental; Avaliação de Valor de Negócio; Documento de Visão; Validação de Escopo; Baseline Preliminar de Escopo | Necessidades da comunidade Munduruku capturadas; mecanismos de gamificação/feed idealizados; gargalos da aplicação atual (Flask/legado) compreendidos desde a raiz. |
| Elaboração | Elicitação e Descoberta; Análise e Consenso; Declaração; Representação; Verificação e Validação; Organização e Atualização | Refinamento Técnico e Análise de Risco; Análise de Viabilidade Técnica e de Negócio; Especificação Funcional e Técnica; Modelagem Visual; Estabelecimento de Rastreabilidade | Análise Documental do legado; Matriz de Quadrantes (Valor vs Dificuldade); Casos de Uso; Protótipos e Wireframes; Demonstrações/PoC | Código-fonte legado e TCC revisados; funcionalidades para refatoração e itens de alto risco identificados; MVP definido; baseline inicial de requisitos estabelecida. |
| Construção | Elicitação e Descoberta contínua; Análise e Consenso; Declaração iterativa; Verificação e Validação; Organização e Atualização | Descoberta Contínua; Gestão de Mudanças e Dependências; Detalhamento Iterativo; Verificação de Incrementos; Manutenção de Conhecimento | Entrevistas e Consultas Iterativas; Negociação de Requisitos; Escrita de Histórias e Critérios; Checklists DOR/DOD; Demonstração e Prototipação | Detalhes emergentes capturados e regras de negócio refinadas; incrementos validados conforme OEs e critérios técnicos; Matriz de Rastreabilidade mantida viva. |
| Transição | Verificação e Validação; Organização e Atualização | Homologação de Release; Fechamento da Documentação As-Built; Manutenção da Rastreabilidade | Testes de Aceitação; Demonstração Final; Consolidação da Documentação Técnica | Versão final homologada pela cliente e comunidade; documentação as-built completa; matriz de rastreabilidade atualizada em versão final. |

