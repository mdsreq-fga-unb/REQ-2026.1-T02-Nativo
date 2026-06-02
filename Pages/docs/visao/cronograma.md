## **Fase de Concepção**

(02/04 – 22/04)

Foco: Definição do problema, viabilidade e escopo.

### **Iteração 1 (02/04 a 11/04)**
  * **Objetivos:** Mapear gargalos técnicos (Flask) e necessidades da comunidade Munduruku.
  * **Atividades:** Entrevistas com a representante e brainstorming da equipe.
  * **Entregáveis:** Documento de Visão (tópicos de 1 a 6) e Diagrama de Ishikawa.
### **Iteração 2 (12/04 a 22/04)**
  * **Objetivos:** Entendimento do escopo preliminar e as metas do projeto.
  * **Atividades:** Avaliação de Valor de Negócio.
  * **Entregáveis:** Documento de Visão parcial e Lista de funcionalidades classificadas entre essenciais e desejáveis.

## **Fase de Elaboração** 

(23/04 – 22/05) 

Foco: Detalhamento funcional, modelagem de interface, refatoração técnica, mitigação de riscos e definição do compromisso do MVP.

### **Iteração 3 (23/04 a 01/05)**  
  * **Objetivos:** Desenhar a experiência de usabilidade das funcionalidades acordadas e utilizar a interface como ferramenta para descoberta de regras de negócio no sistema.  
  * **Atividades:** Análise funcional preliminar do TCC original e criação de protótipos iniciais para representação visual das telas; sessões de demonstração com a representante para capturar feedbacks imediatos.  
  * **Entregáveis:** Protótipos de interface iniciais alinhados e validados visualmente com a cliente.  
### **Iteração 4 (02/05 a 10/05)**  
  * **Objetivos:** Formalizar lista de requisitos, declarar em formato de Casos de Uso, priorizar o escopo e definir o MVP.  
  * **Atividades:** Estruturação da Lista de Requisitos (Funcionais e Não Funcionais); escrita e detalhamento dos Casos de Uso, aplicação da Matriz de Quadrantes (Valor de Negócio vs. Dificuldade Técnica) sobre a lista de requisitos para definir o MVP; e estabelecimento da Matriz de Rastreabilidade.  
  * **Entregáveis:** Lista de requisitos consolidada, especificação de Casos de Uso, MVP Definido por Priorização com quadrantes e baseline Inicial formalizada.
### **Iteração 5 (11/05 a 22/05)**
  * **Objetivos:** Estruturar a arquitetura executável, mitigar riscos técnicos do legado.
  * **Atividades:** Revisão crítica e refatoração da arquitetura Flask com execução da Prova de Conceito (PoC).
  * **Entregáveis:** Ambiente configurado, PoC arquitetural estável.

## **Fase de Construção** 

(11/05 – 24/06) 

Foco: Desenvolvimento iterativo e validação contínua.

### **Iteração 6 (11/05 a 19/05)**  
  * **Objetivos:** Implementar o suporte a multimídia (CP5).  
  * **Atividades:** Desenvolvimento do cadastro e reprodução de áudios (CP5), com verificação de maturidade via DoR; codificação dos módulos principais de mídia; testes unitários e validação do incremento conforme a DoD.  
  * **Entregáveis:** Incremento funcional de Multimídia validado e documentação atualizada.  
### **Iteração 7 (21/05 a 27/05)**  
  * **Objetivos:** Implementar vinculação das mídias às traduções e iniciar o módulo pedagógico (CP1).  
  * **Atividades:** Implementação da associação e desassociação de multimidias e traduções sob validação da DoR, testes de integração e homologação via DoD. Iniciar a implementação do módulo de atividades interativas.  
  * **Entregáveis:** Sistema de gestão de mídias completo e CP1 Iniciada.  
### **Iteração 8 (28/05 a 03/06)**  
  * **Objetivos:** Construir o fluxo principal de criação e resolução de tarefas, habilitar suporte offline para tradução. 
  * **Atividades:** Levantamento contínuo de regras do módulo pedagógico e download de dados; detalhamento fino de cenários de Casos de Uso guiado pela DoR; codificação da persistência local de dados; testes de desenvolvedor e aplicação de checklists de qualidade baseados na DoD para certificar o funcionamento offline estável; vinculação de artefatos na Matriz de Rastreabilidade.  
  * **Entregáveis:** Módulo de questionários integrado e validado.  
### **Iteração 9 (04/06 a 10/06)**  
  * **Objetivos:** Concluir as ferramentas de edição de atividades e sistema de administração de acesso.  
  * **Atividades:** Desenvolvimento das interfaces de edição de atividades do professor, Desenvolvimento do sistema de gerenciamento de cargos de usuário (CP3), validação dos incrementos via checklists da DoD.  
  * **Entregáveis:** Sistema de atividades integrado e validado.  
### **Iteração 10 (11/06 a 17/06)**  
  * **Objetivos:** Desenvolver o Sistema de gamificação.  
  * **Atividades:** Levantamento e refinamento das regras de negócio do sistema de pontuação (definindo quantos pontos cada atividade concluída ou tradução realizada gera para o usuário); detalhamento dos critérios de aceitação para a criação e compartilhamento de insígnias; desenvolvimento da lógica de ganho de pontos e da interface de exibição de conquistas;  
  * **Entregáveis:** Mecanismo de pontuação gamificado operacional, módulo de insígnias integrado e regras de recompensa validadas com a cliente.  
### **Iteração 11 (18/06 a 24/06)**  
  * **Objetivos:** Implementar funcionalidades do perfil do usuário (CP3) e auditoria completa de rastreabilidade sistêmica global.  
  * **Atividades:** Desenvolvimento das funcionalidades de adicionar, remover e listar traduções favoritas, e listagem de todo histórico de traduções; Revisão da Matriz de Rastreabilidade para assegurar a relação OE → CP → RF/RNF→Casos de uso e homologação do MVP em conformidade com a DoD.  
  * **Entregáveis:** Recursos de favoritos e histórico ativos no perfil do usuário, e Versão Candidata à Entrega (Release Candidate) totalmente implementada, testada e mapeada na Matriz de Rastreabilidade.

## **Fase de Transição (25/06 – 03/07)** Foco: Testes de campo, homologação e deploy.

### **Iteração 12 (25/06 a 29/06)**  
  * **Objetivos:** Testar o sistema o mais próximo possível da realidade de uso.  
  * **Atividades:** Envio do aplicativo para testes de aceitação com a representante. Simulação de uso em condições de baixa internet. Correção de erros apontados na revisão.  
  * **Entregáveis:** Relatório de homologação e código estabilizado.  
### **Iteração 13 (30/06 a 03/07)**  
  * **Objetivos:** Realizar a entrega oficial do aplicativo.  
  * **Atividades:** Geração do APK e demonstração final do produto.  
  * **Entregáveis:** Aplicativo entregue e pronto para uso.