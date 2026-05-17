# 5.1 Atividades e Técnicas de ER

## **Fase de Concepção**

### **Elicitação e Descoberta:**

* **Entrevistas:** Realizadas com a cliente para capturar as necessidades da comunidade Munduruku e entender os gargalos da aplicação atual em Flask.
* **Brainstorming:** Sessões com a equipe para idealizar mecanismos de gamificação e o feed social que incentivem o uso recorrente do app.
* **Análise Documental:** Revisão preliminar do TCC original, do código legado e da documentação existente para entender o problema raiz, o contexto e o escopo do projeto desde o início.

### **Declaração de Requisitos:**

* **Documento de Visão:** Documentação inicial e macro dos Objetivos Específicos (OEs),  Características do Produto (CPs) e Requisitos Iniciais.

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
* **Casos de Uso (Use cases):** Utilizados como a especificação formal dos requisitos funcionais. Descrição detalhada do comportamento do sistema através de atores (como crianças, professores e administradores), contendo fluxos principais, alternativos e condições de exceção.
* **Especificação Suplementar:** Agrupa os requisitos não funcionais (qualidades do sistema, como suporte a cenários de baixa conectividade).

### **Análise e Consenso:**

* **Matriz de Quadrantes (Valor de negócio vs. Dificuldade Técnica):** Técnica aplicada para cruzar o valor de negócio com a complexidade técnica (validada por tempo de desenvolvimento esperado). Essa análise é a ferramenta central para mitigar os requisitos de alto risco e definir objetivamente quais funcionalidades comporão o Produto Mínimo Viável (MVP).

### **Representação de Requisitos:**

* **Protótipos e Wireframes:** Os prototipos nevegáveis funcionam como representação visual dos fluxos descritos nos Casos de Uso, com o objetivo de simular visualmente a jornada do ator através dos fluxos principais e alternativos do sistema, facilitando o entendimento da equipe técnica e garantindo o alinhamento de expectativas e usabilidade com a cliente.

### **Verificação e Validação:**

* **Demonstração e Revisão:** Validação dos protótipos, das histórias iniciais elaboradas e das provas de conceito (PoC) arquiteturais junto à representante.

### **Organização e Atualização:**

* **Matriz de Rastreabilidade:** Estabelecimento da baseline inicial de requisitos e início da ligação formal entre: OE → CP → RF/RNF→UC.

## **Fase de Construção**

### **Elicitação e Descoberta:**

* **Entrevistas e Consultas Iterativas:** Levantamento contínuo de detalhes emergentes e refinamento de regras de negócio à medida que os micro-incrementos são desenvolvidos.

### **Declaração de Requisitos:**

* **Detalhamento de Casos de uso e Cenários:** Escrita e detalhamento de novos cenários de Casos de Uso, delimitando suas pré-condições, pós-condições e cenários de teste para guiar os próximos ciclos de desenvolvimento.

### **Análise e Consenso:**

* **Negociação de Requisitos:** Negociação contínua de mudanças de escopo, adaptações técnicas e repriorização de acordo com a capacidade da equipe e o feedback recebido ao final de cada ciclo.

### **Verificação e Validação de Requisitos:**

* **Checklists de Qualidade:** Verificação contínua pela aplicação do DOR e DOD se cada incremento contribui diretamente para as Características do Produto (CP) e se cobre com sucesso os fluxos descritos no Caso de Uso correspondente e se atende aos critérios técnicos de qualidade estabelecidos.
* **Demonstração e Prototipação:** Apresentação de telas e incrementos à cliente para validar a refatoração técnica, executando os passos validados no Caso de Uso para atestar a usabilidade da aldeia. O feedback é incorporado nas iterações subsequentes.

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
| Concepção | Elicitação e Descoberta | Levantamento de Requisitos e Análise de Domínio | Entrevistas, Brainstorming, Análise Documental | Necessidades da comunidade Munduruku capturadas, mecanismos de gamificação/feed idealizados e gargalos da aplicação atual (Flask/legado) compreendidos desde a raiz. |
| Concepção | Análise e Consenso | Priorização de Requisitos | Avaliação de Valor de Negócio | Requisitos preliminares classificados em essenciais e desejáveis junto à cliente, com seu valor de negócio mapeado em essencial e desejável |
| Concepção | Declaração | Registro de Requisitos Iniciais | Documento de Visão | Objetivos Específicos (OEs) e Características do Produto (CPs) documentados de forma inicial e macro. |
| Concepção | Verificação e Validação | Validação com Stakeholders | Validação de Escopo | Escopo preliminar, OEs e CPs validados diretamente com a cliente, garantindo o alinhamento com a necessidade real da aldeia. |
| Concepção | Organização e Atualização | Definição de Baseline Inicial | Baseline Preliminar de Escopo | Objetivos e características estruturados inicialmente, formando a base documental que guiará o projeto. |
| Elaboração | Elicitação e Descoberta | Refinamento Técnico e Análise de Risco | Análise Documental | Código-fonte legado e TCC original revisados, com as funcionalidades para refatoração e os itens de alto risco identificados. |
| Elaboração | Análise e Consenso | Análise de Viabilidade Técnica e Negócio | Matriz de Quadrantes (Valor de negócio vs. Dificuldade Técnica) | Valor de negócio cruzado com a complexidade técnica, resultando na mitigação de riscos e na definição objetiva das funcionalidades do Produto Mínimo Viável (MVP). |
| Elaboração | Declaração | Especificação Funcional e Técnica | Casos de Uso (Use Cases), Especificação Suplementar | Funcionalidades declaradas formalmente por meio de Casos de Uso (contendo fluxos principais, alternativos e de exceção); requisitos não funcionais e restrições técnicas agrupados e documentados. |
| Elaboração | Representação | Modelagem Visual | Protótipos e Wireframes Navegáveis | Representação visual das jornadas dos atores descritas nos fluxos dos Casos de Uso, facilitando o entendimento da equipe e o alinhamento. |
| Elaboração | Verificação e Validação | Validação de Artefatos e Arquitetura | Demonstração e Revisão | Protótipos, especificações textuais dos Casos de Uso elaborados e provas de conceito (PoC) arquiteturais revisados e validados junto à representante. |
| Elaboração | Organização e Atualização | Estabelecimento de Rastreabilidade | Matriz de Rastreabilidade | Baseline inicial de requisitos estabelecida e ligação formal iniciada (OE → CP → RF/RNF → Casos de Uso). |
| Construção | Elicitação e Descoberta | Descoberta Contínua | Entrevistas e Consultas Iterativas | Detalhes emergentes levantados continuamente e regras de negócio refinadas à medida que os incrementos são desenvolvidos. |
| Construção | Análise e Consenso | Gestão de Mudanças e Dependências | Negociação de Requisitos | Mudanças de escopo negociadas continuamente, com adaptações técnicas e repriorizações realizadas de acordo com a capacidade da equipe e o feedback recebido. |
| Construção | Declaração | Detalhamento Iterativo | Detalhamento de Casos de Uso e Cenários | Novos cenários de Casos de Uso detalhados (pré-condições, pós-condições e cenários de teste) escritos para guiar com rigor os ciclos incrementais de desenvolvimento. |
| Construção | Verificação e Validação | Verificação de Incrementos | Checklists de Qualidade, Demonstração e Prototipação | Aderência aos OEs/critérios técnicos verificada; telas e incrementos validados com a cliente. |
| Construção | Organização e Atualização | Manutenção de Conhecimento | Matriz de Rastreabilidade | Matriz de Rastreabilidade mantida viva, garantindo que nenhum conhecimento se perca durante a rotação de papéis da equipe técnica no desenvolvimento. |
| Transição | Verificação e Validação | Homologação de Release | Testes de Aceitação e Demonstração Final | Versão finalizada apresentada para a cliente e comunidade, com o sistema homologado e atestado como pronto para o uso no dia a dia da aldeia. |
| Transição | Organização e Atualização | Fechamento da Documentação As-Built | Manutenção da Rastreabilidade | Documentação técnica fechada e Matriz de Rastreabilidade atualizada em sua versão final, refletindo com exatidão o produto que está sendo entregue à comunidade. |

