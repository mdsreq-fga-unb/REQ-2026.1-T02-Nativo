## 2 · Solução Proposta

### **2.1 Objetivo geral do produto**

O objetivo do projeto é promover a prática ativa da língua Munduruku na Aldeia de Bragança por meio da evolução tecnológica e funcional da plataforma Nativo, consolidando-a como um espaço de interação comunitária.

### 2.2 Objetivos Específicos (OE) do Produto

Os objetivos específicos orientam o desenvolvimento das funcionalidades e servem como critério de avaliação das entregas.

| ID | Objetivo Específico |
| :---: | :--- |
| **OE1** | Aumentar a retenção e o engajamento na plataforma |
| **OE2** | Assegurar a integridade e segurança do acervo cultural |
| **OE3** | Enriquecer a experiência do usuário na aplicação |

### 2.3 Características do Produto

As características do produto (CPs) foram mapeadas diretamente aos Objetivos Específicos (OEs), garantindo rastreabilidade entre funcionalidades e objetivos de negócio.

| ID (CP) | Característica (CP) | Descrição resumida | ID (VN) | Valor de Negócio (VN) principal| Contribuição Principal | Contribuição Secundária |
| :---: | :--- | :--- | :---: | :--- | :---: | :---: |
| **CP1** | Criação de Mecanismos interativos de aprendizagem e engajamento | A solução deverá oferecer uma ferramenta onde os Professores podem elaborar atividades personalizadas para os alunos. | **VN1** | Aceleração do aprendizado e aumento da retenção, utilizando a prática ativa e o reconhecimento de desempenho para motivar o uso contínuo. | OE1 | OE3 |
| **CP2** | Feed Social Comunitário | A solução deverá ter um mural de publicações para que a comunidade e os especialistas possam compartilhar novidades, eventos e saberes da aldeia. | **VN2** | Fortalecimento do engajamento comunitário, criando um espaço ativo de resistência cultural e troca de saberes. | OE1 | OE3 |
| **CP3** | Controle de usuário | A solução deverá prover ferramentas para gestão de perfis de usuários e controle de níveis de permissão. | **VN3** | Garantir a segurança do acervo cultural e o acesso adequado às funcionalidades restritas ou administrativas da plataforma. | OE2 | OE3 |
| **CP4** | Sistema de denúncias | A solução deverá viabilizar o reporte e a moderação de conteúdos e postagens inadequadas na plataforma. | **VN4** | Assegurar um ambiente virtual seguro e de qualidade para toda a comunidade. | OE2 | OE3 |
| **CP5** | Suporte a Multimídia nas Traduções | A solução deverá suportar a adição e a reprodução de conteúdos em áudio e vídeo associados às traduções. | **VN5** | Melhoria na qualidade do aprendizado, superando a barreira da tradução puramente textual e auxiliando na memorização visual e auditiva. | OE3 | OE1 |
| **CP6** | Perfil de Usuário | A solução permite a visualização do histórico de tradução e o progresso do usuário no aplicativo. | **VN6** | Impulsiona o engajamento e a personalização da experiência através do acompanhamento do progresso individual. | OE3 | OE1 |
| **CP7** | Sincronização e Acesso Offline de Traduções | A consulta de traduções deverá funcionar mesmo sem acesso à internet. | **VN7** | Garantir a disponibilidade e usabilidade contínua do aplicativo mesmo nas áreas da aldeia com baixa ou nenhuma conectividade. | OE3 | OE1 |

### **2.4 Tecnologias a serem utilizadas**

Para a construção da solução proposta para o Nativo, serão utilizadas tecnologias alinhadas à necessidade de evolução da aplicação, suporte a funcionalidades multimídia e adaptação a cenários de baixa conectividade, mantendo compatibilidade com a stack já adotada no projeto. Considerando que a aplicação já se encontra em funcionamento e que a equipe possui familiaridade com as tecnologias utilizadas, optou-se por manter a base atual, realizando melhorias estruturais e refatorações para mitigar os problemas identificados.	

No backend, será utilizado **Python com Flask**, tecnologia já empregada na aplicação atual. Apesar dos desafios relacionados à performance e escalabilidade mencionados anteriormente, a estratégia adotada consiste na refatoração da arquitetura e na adoção de melhores práticas de desenvolvimento, visando melhorar a eficiência, organização e manutenção do sistema. No frontend, será utilizado **TypeScript com React Native**, considerando que o Nativo é uma aplicação voltada para dispositivos móveis. Essa escolha permite a construção de interfaces mais consistentes, reutilizáveis e alinhadas à experiência de uso em smartphones, além de facilitar a evolução de funcionalidades como suporte a mídias, interações e possíveis mecanismos de engajamento. A comunicação entre frontend e backend será realizada por meio de **APIs RESTful**, mantendo o padrão já adotado no projeto. Esse modelo possibilita a organização dos serviços da aplicação e a integração entre os diferentes componentes do sistema, garantindo maior modularidade e facilidade de manutenção.

Para persistência de dados, será utilizado o **Firebase**, com foco no uso de um banco de dados **NoSQL**, devido à sua flexibilidade para lidar com estruturas dinâmicas, como traduções, perfis de usuários e conteúdos multimídia. Essa escolha também favorece a integração com serviços de armazenamento de arquivos, permitindo suporte a áudios, imagens e outros recursos necessários à proposta do produto. Para o processo de build da aplicação mobile, será utilizado o **Gradle**, ferramenta já integrada ao ecossistema do React Native para geração do aplicativo Android. Além disso, para apoio ao desenvolvimento colaborativo, serão utilizados **Git e GitHub**, permitindo versionamento do código, controle de mudanças e colaboração entre os membros da equipe. Por fim, serão respeitadas as diretrizes da licença do projeto, que prevê a livre colaboração e distribuição do software, com ressalvas específicas relacionadas a conteúdos multimídia, como imagens e vídeos armazenados na plataforma.

### **2.5 Pesquisa de mercado e análise competitiva**

No cenário do mercado de soluções digitais voltadas à preservação linguística, o Nativo encontra poucos concorrentes diretos no contexto brasileiro, especialmente por seu foco específico na língua Munduruku e na realidade da Aldeia Munduruku de Bragança. Ainda assim, existem plataformas e aplicativos com propostas parcialmente semelhantes, voltados à preservação, documentação, ensino ou tradução de outras línguas indígenas e ameaçadas, que podem ser considerados referências competitivas.

Entre essas soluções, destaca-se o **Woolaroo** [[1]](#ref1), iniciativa do Google Arts & Culture voltada à exploração de línguas indígenas e ameaçadas por meio de recursos tecnológicos, incluindo reconhecimento de objetos e associação com vocabulário em diferentes idiomas. Apesar de sua proposta de valorização linguística, a plataforma não é voltada especificamente à nenhuma língua indígena brasileira nem resolve a necessidade local de fortalecimento cultural e linguístico da comunidade atendida pelo Nativo.

Outra referência é o **MANGUARÉ Lenguas Indígenas** [[2]](#ref2), aplicativo descrito como um dicionário tradutor de línguas indígenas da Amazônia colombiana, com foco principal em registro, preservação e divulgação linguística. Embora sua proposta se aproxime do eixo de tradução e preservação, a solução não apresenta, ao menos em sua descrição pública, elementos mais amplos de engajamento comunitário, interação social ou mecanismos de incentivo ao uso contínuo da língua.

A solução do Nativo irá se diferenciar por dois aspectos centrais. 

* O primeiro é a ampliação das formas de engajamento com a plataforma, por meio de recursos como mural social e quizzes interativos, buscando transformar a aplicação em um espaço mais ativo de participação e aprendizagem contínua.

* O segundo é a valorização de conteúdos visuais e culturais da própria comunidade, com uso de fotos e vídeos, permitindo que a plataforma atue não apenas como ferramenta de tradução, mas também como um repositório vivo da cultura Munduruku, fortalecendo a identificação dos usuários com a aplicação e com o processo de revitalização linguística.

### **2.6 Viabilidade da proposta**

A proposta é considerada viável no contexto da disciplina, tendo em vista o escopo definido e a capacidade técnica da equipe, com previsão de entrega de um MVP consistente e evoluções incrementais ao longo do semestre. Embora o fluxo de comunicação com a comunidade Munduruku apresenta limitações por ocorrer por meio de um representante, o projeto foi estruturado de forma compatível com essa realidade, apoiando-se em elementos já validados junto aos usuários.

O principal risco técnico está associado à necessidade de evolução da arquitetura do back-end, desenvolvido em Python com Flask, para suportar o aumento da complexidade da aplicação, bem como à implementação de mecanismos que garantam funcionamento adequado em cenários com conectividade limitada, como o uso offline em dispositivos móveis. Ainda assim, esse risco é mitigado pela escolha de tecnologias consolidadas, pela organização do desenvolvimento em ciclos incrementais e pela adoção de práticas que favorecem a estabilidade e manutenção do sistema.

Dessa forma, a viabilidade da proposta está condicionada a alguns fatores-chave: 

* A manutenção de um escopo controlado ao longo do semestre; 

* A priorização de aspectos estruturais da aplicação nas etapas iniciais; 

* A garantia de uma comunicação eficiente entre os membros da equipe; e

* O compartilhamento contínuo de conhecimento, de modo a evitar a concentração de responsabilidades e possíveis gargalos no desenvolvimento.

**Gestão de riscos preliminar da equipe** 

| ID | Descrição do Risco | Tipo | Impacto | Probabilidade | Ação de Mitigação (Abordagem OpenUP) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **R1** | **Gargalos na Arquitetura Legada:** O back-end atual em Flask pode não suportar as novas funcionalidades | Técnico | Alto | Alta | Focar a Fase de Elaboração  em refatoração e criação de uma base arquitetural executável antes de desenvolver novas *features*. |
| **R2** | **Ruídos de Comunicação e Validação:** Como a comunicação com a comunidade é indireta (via representante), requisitos podem ser mal interpretados. | Negócio | Alto | Alta | Utilizar protótipos de alta fidelidade e estabelecer marcos (Milestones) claros de revisão ao final de cada iteração curta para validação contínua com a representante. |
| **R3** | **Curva de Aprendizado e Rotação:** A equipe adotará rodízio de papéis (Frontend/Backend/QA), o que pode gerar atrasos pela falta de domínio técnico específico. | Gerencial | Médio | Alta | Aplicar documentação contínua (Matriz de Rastreabilidade), *pair programming* e transferir o conhecimento técnico rotineiramente durante as reuniões semanais. |

### **2.7 Benefícios Esperados**

* Para o **cliente**: Ampliar a capacidade de evolução da plataforma Nativo com maior controle sobre o conteúdo e as interações, redução das limitações técnicas atuais e melhoria da confiabilidade e desempenho da aplicação. A solução também deverá fortalecer o posicionamento do Nativo como uma ferramenta de impacto social e cultural, criando melhores condições para expansão da plataforma, aumento do engajamento da comunidade e continuidade do projeto de revitalização linguística.


* Para os **usuários**: uma experiência de aprendizado mais interativa, acessível e envolvente, com melhor compreensão da língua por meio de recursos multimídia, uso mais dinâmico da plataforma através de gamificação e maior conexão cultural local por meio do feed comunitário. Além disso, os usuários terão acesso mais estável mesmo sem internet, maior clareza no acompanhamento do próprio progresso e uma participação mais ativa no processo de preservação da língua.