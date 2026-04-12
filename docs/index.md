# **<span style="color: red;"> NATIVO </span>**
## **VISÃO DE PRODUTO E PROJETO**

Versão 1.9

## **Histórico de revisão**

| Data | Versão | Descrição | Autor |
| :---: | :---: | :---: | ----- |
| 01/04/26 | 0.1 | Criação do documento compartilhado e preenchimento do tópico 1.1 e 1.3 | Pedro Silva |
| 05/04/26 | 0.2 | Preenchimento tópico 1.3 e 1.4  | Renan Camara |
| 05/04/26 | 0.3 | Preenchimento tópico 2.1 e 2.2 | André Henrique  |
| 05/04/26 | 0.4 | Preenchimento tópico 2.3 | Johnnatan Salles |
| 05/04/26 | 0.5 | Preenchimento tópico 1.2 | Arthur Mendes |
| 05/04/26 | 0.6 | Preenchimento tópico 1.7 | Giovanna Guimarães |
| 05/04/26 | 0.7 | Adição do Diagrama de Ishikawa e melhora da Rich Picture | Pedro Silva e Giovanna Guimarães |
| 05/04/26 | 1.0 | Revisão e validação do documento | Pedro Silva  |
| 07/04/26 | 1.1 | Refatoração dos Objetivos | André, Arthur, Giovanna, Renan |
| 07/04/26 | 1.2 | Refatoração dos tópicos 1.2, 1.4, 2.1 e 2.2 | André, Arthur e Giovanna |
| 08/04/26 | 1.3 | Refatoração dos tópicos 1.5 e 2.3 | André, Arthur e Pedro |
| 08/04/26 | 1.4 | Preenchimento tópico 2.7 | Johnnatan Salles |
| 08/04/26 | 1.5 | Refatoração dos tópicos 1.4, 2.1 e 2.2  | André, Johnnatan |
| 09/04/26 | 1.6 | Preenchimento dos tópicos 3.1, 3.2 e 3.3 | Pedro Silva |
| 10/04/26 | 1.7 | Preenchimento dos tópicos 2.4 e 2.5  | Pedro Silva  |
| 10/04/26 | 1.8 | Preenchimento dos tópicos 4.1 e 4.2 | Giovanna Guimarães |
| 11/04/26 | 1.9 | Preenchimento da seção 6 e revisão dos tópicos 4.1 e 4.2 | André Henrique |
| 11/04/26 | 2.0 | Preenchimento da seção 5 e revisão | Renan |

# **1. CENÁRIO ATUAL DO CLIENTE E DO NEGÓCIO**

## **1.1 Identificação do Cliente**

**Nome:** Nativo

**Tipo:** Aplicativo tradutor de línguas indígenas

**Representante:** Alexia Naara da Silva Cardoso, desenvolvedora única do

projeto.

**Forma de contato:** Reuniões por vídeo chamada e contato via aplicativo

de mensagem.

**Vínculo com o projeto:** Desenvolvedora e mantenedora da aplicação,

ponte de comunicação com a aldeia de Bragança, responsável por validar

decisões do projeto e avaliar entregas realizadas.

## **1.2. Introdução ao Negócio e Contexto**

O Nativo é um aplicativo móvel tradutor voltado para a língua indigena Munduruku, com o objetivo de apoiar a revitalização linguística na Aldeia Munduruku de Bragança. Projetado e construído como um projeto de TCC de Alexia Naara a partir da orientação do Professor Doutor Sergio Antônio e coorientado pela Professora Doutora Celia Matsunaga e desenvolvido à tutela do Centro de Estudos, Desenvolvimento e Inovação em Software (CEDIS). O aplicativo conta com tradução bidirecional entre Português e Munduruku, uma sessão informativa, uma página para adicionar e editar traduções, gerenciamento de traduções e de usuários. 

A missão do projeto representa uma importante iniciativa tecnológica voltada à preservação cultural e linguística dos povos originários da Amazônia. O projeto atua no processo de revitalização linguística da aldeia, onde a língua nativa tem perdido espaço e uso cotidiano, ameaçando a preservação das raízes culturais da comunidade. Para enfrentar esse enfraquecimento, o Nativo se propõe como um aplicativo móvel que funciona como um repositório de cultura e tradução bilíngue. No entanto, a aplicação não tem aderência na comunidade.

## **1.3. Rich Picture**
  ![Rich Picture](./img/richpicture.png)
## **1.4. Identificação da Oportunidade ou Problema**

A principal oportunidade identificada para o Nativo está relacionada às limitações de engajamento e uso contínuo da plataforma pelos usuários. Embora o aplicativo cumpra sua função básica de tradução bidirecional, observa-se que sua utilização tende a ser pontual e não recorrente, o que reduz seu impacto no processo de preservação e fortalecimento das línguas indígenas.

Esse cenário pode ser explicado por fatores como a baixa integração do aplicativo com o cotidiano dos usuários e a ausência de estímulos que incentivem a prática constante da língua no dia a dia. Como consequência, o aprendizado ocorre de forma passiva, dificultando a retenção do vocabulário e o desenvolvimento de uma relação mais significativa com a língua.

Com isso, a plataforma ainda não se consolida como um espaço de pertencimento cultural ou de troca entre os membros da comunidade, o que limita seu potencial de contribuir de forma mais ampla para o enfrentamento do epistemicídio e para a valorização dos saberes tradicionais.

Dessa forma, o problema central a ser enfrentado é a baixa capacidade da plataforma em promover engajamento contínuo, participação ativa dos usuários e integração com a vivência cultural da comunidade, fatores essenciais para o fortalecimento e a revitalização linguística.

![Diagrama de Ishikawa](./assets/ishikawa.png)

## **1.5. Desafios do Projeto**

O principal desafio estratégico do projeto reside na complexidade do fluxo de comunicação e validação, uma vez que o contato com a comunidade Munduruku não ocorre de forma direta, mas mediado por uma representante, somado à falta de colaboradores para apoiar o desenvolvimento da aplicação. Esse cenário impacta a agilidade do desenvolvimento, dificulta a coleta de feedbacks em tempo real e compromete a realização completa do escopo inicialmente idealizado. Como consequência, decisões sobre evolução do produto, priorização de funcionalidades e validação das entregas tendem a depender de um processo mais lento e sensível a ruídos de comunicação

Outro desafio relevante é de natureza técnica. A utilização do Flask na arquitetura atual da aplicação tem gerado dificuldades relacionadas à velocidade de funcionamento e à facilidade de evolução do sistema. Isso impacta diretamente a experiência de uso e também reduz a agilidade para implementar melhorias, correções e novas funcionalidades, o que se torna ainda mais crítico em um projeto que demanda expansão contínua e adaptação às necessidades da comunidade atendida.

## **1.6. Mapa de Stakeholders**

Os principais stakeholders do projeto são: Alexia Naara da Silva Cardoso, como cliente e desenvolvedora da aplicação, com alta influência na solução por validar ideias, escopo e entregas; Professor Sergio Freitas, como representante do CEDIS no produto, contribuindo com apoio às necessidades técnicas da aplicação, embora com menor influência nas decisões do projeto; Professor Márcio, como representante da aldeia e principal elo entre a comunidade e a equipe técnica, com alta influência por transmitir aos desenvolvedores as informações e percepções dos validadores; a diretora e os alunos, como validadores do Nativo, exercendo papel central na avaliação dos requisitos implementados e na comunicação de opiniões sobre a adequação da solução ao contexto real de uso; e a equipe de desenvolvimento, responsável por implementar as melhorias propostas e garantir a viabilidade técnica da aplicação, também com alta influência na concretização e evolução do produto.

| Stakeholder | Relação com a solução | Interesse principal | Influência |
| :---: | :---: | :---: | :---: |
| Alexia Naara da Silva Cardoso | Cliente e desenvolvedora da aplicação | Validar ideias, escopo e entregas | Alta |
| Professor Sergio Freitas | Representante do CEDIS no produto | Prestar apoio a necessidades técnicas da aplicação | Baixa |
| Diretora | Validadora institucional do Nativo | Avaliar a adequação da solução ao contexto escolar e às necessidades locais | Alta |
| Alunos | Usuários e validadores do Nativo | Validar e transmitir opiniões sobre os requisitos implementados | Média |
| Professor Márcio | Representante da aldeia e interlocutor com a equipe | Representar a aldeia, comunicar necessidades do contexto real e intermediar a validação da solução | Alta |
| Equipe de desenvolvimento | Desenvolvedores da aplicação | Implementar as melhorias e garantir a viabilidade técnica | Alta |

## 

## **1.7 Segmentação de Clientes**

O aplicativo Nativo atende a quatro principais segmentos de usuários:

* **Crianças de 6 a 12 anos:** Público que busca a revitalização linguística, utilizando o aplicativo como ferramenta de consulta rápida, aprendizado fonético e associação visual da língua Munduruku.

* **Professores e Educadores:** Atuam como gestores e curadores do conteúdo. Utilizam a plataforma para cadastrar, revisar e organizar o vocabulário nativo, validando a ferramenta para garantir que o conteúdo seja fidedigno.

* **Comunidade e Falantes Nativos:** Representam a base de conhecimento e a memória viva da aldeia. Embora não gerenciem o app diretamente, sua colaboração é a fonte primária para as traduções e registros culturais que os professores inserem no sistema.

* **Pesquisadores e Entusiastas da Língua:** Interessados na preservação da língua Munduruku, utilizam o sistema como um repositório de consulta gramatical e identidade cultural.

# **2. SOLUÇÃO PROPOSTA**

## **2.1 Objetivo geral do produto**

O objetivo do projeto é **melhorar a escalabilidade e engajamento da plataforma *Nativo* na aldeia**, por meio  da refatoração da aplicação para suportar um ecossistema de mídia. Além disso, projeto visa resolver a falta de dinamismo na tradução através da implementação de uploads de áudio, vídeo e fotos, um feed social que transforme o aplicativo em um espaço vivo de interação comunitária, além de um sistema de gamificação, que estimule a prática constante da língua Munduruku. Com essas melhorias, a revitalização da língua Munduruku ocorre de forma lúdica, visual e participativa para a comunidade.

## **2.2 Objetivos específicos (OE) do produto**

   \[OE1\] Enriquecer a experiência de tradução.

   \[OE2\] Aumentar a retenção e o engajamento na plataforma.

   \[OE3\] Fomentar a interação e engajamento comunitário para troca de conteúdos culturais.

   \[OE4\] Assegurar a integridade e segurança do acervo cultural.

   \[OE5\] Apoiar a personalização da jornada do usuário

   \[OE6\] Garantir a acessibilidade em cenários de baixa conectividade.

## **2.3 Característica do Produto (mapeadas com os Objetivos Específicos do produto)**

| ID | Característica de Produto (CP) | Descrição resumida | ID | Valor de negócio (VN) principal |  Contribuição principal | Contribuição secundária |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **CP1** | **Sincronização e Acesso Offline de Traduções** | **A consulta de traduções deverá funcionar mesmo sem  acesso à internet.** | **VN1** | **Garantir a disponibilidade e usabilidade contínua do aplicativo mesmo nas áreas da aldeia com baixa ou nenhuma conectividade.** |  **OE6** | **OE1** |
| **CP2** | **Suporte a Multimídia nas Traduções** | **A solução deverá disponibilizar o upload e a exibição de arquivos de áudio, vídeo e fotos, apoiando o ensino da pronúncia e o contexto cultural de cada termo.** | **VN2** | **Melhoria na qualidade do aprendizado, superando a barreira da tradução puramente textual e auxiliando na memorização visual e auditiva.** | **OE1** | **OE6** |
| **CP3** | **Criação e elaboração de questionários** | **A solução deverá oferecer uma ferramenta onde os Professores podem elaborar questionários baseados em perguntas e respostas de múltipla escolha, com objetivo de outros usuários testarem seus conhecimentos.** | **VN3** | **Aceleração do aprendizado e fixação através da prática ativa da língua, permitindo aos professores avaliarem o progresso da comunidade**  | **OE2** | **OE5** |
| **CP4** | **Feed Social Comunitário** | **A solução deverá ter um mural de publicações para que a comunidade e os especialistas possam compartilhar novidades, eventos e saberes da aldeia, permitindo reações e comentários nas publicações.** | **VN4** | **Fortalecimento do engajamento comunitário, criando um espaço ativo de resistência cultural e troca de saberes.** | **OE3** | **OE2** |
| **CP5** | **Administração e Moderação de Conteúdo** | **A solução deverá permitir aos moderadores o poder de avaliar denúncias e remover postagens inadequadas do aplicativo.** | **VN5** | **Redução de riscos de conteúdos inadequados, garantia da qualidade, veracidade e segurança da plataforma.** | **OE4** | **OE3** |
| **CP6** | **Atividades e Desafios Gamificados** | **A solução deverá disponibilizar um sistema de recompensa baseado nos questionários e na performance que o usuário teve em cada um deles** | **VN6** | **Aumento da retenção e do engajamento qualificado, utilizando o reconhecimento do desempenho individual como motor para motivar a prática contínua e acelerar o domínio do idioma.** | **OE2** | **OE3** |
| **CP7** | **Visualização de Perfis de Usuário** | **A solução permite a visualização do histórico de tradução e gamificação do usuário, listando suas conquistas e conhecimentos.** | **VN7** | **Impulsiona a retenção através do acompanhamento do progresso individual.** | **OE5** | **OE2** |

## **2.4 Tecnologias a serem utilizadas**

Para a construção da solução proposta para o Nativo, serão utilizadas tecnologias alinhadas à necessidade de evolução da aplicação, suporte a funcionalidades multimídia e adaptação a cenários de baixa conectividade, mantendo compatibilidade com a stack já adotada no projeto. Considerando que a aplicação já se encontra em funcionamento e que a equipe possui familiaridade com as tecnologias utilizadas, optou-se por manter a base atual, realizando melhorias estruturais e refatorações para mitigar os problemas identificados.	

No backend, será utilizado **Python com Flask**, tecnologia já empregada na aplicação atual. Apesar dos desafios relacionados à performance e escalabilidade mencionados anteriormente, a estratégia adotada consiste na refatoração da arquitetura e na adoção de melhores práticas de desenvolvimento, visando melhorar a eficiência, organização e manutenção do sistema. No frontend, será utilizado **TypeScript com React Native**, considerando que o Nativo é uma aplicação voltada para dispositivos móveis. Essa escolha permite a construção de interfaces mais consistentes, reutilizáveis e alinhadas à experiência de uso em smartphones, além de facilitar a evolução de funcionalidades como suporte a mídias, interações e possíveis mecanismos de engajamento. A comunicação entre frontend e backend será realizada por meio de **APIs RESTful**, mantendo o padrão já adotado no projeto. Esse modelo possibilita a organização dos serviços da aplicação e a integração entre os diferentes componentes do sistema, garantindo maior modularidade e facilidade de manutenção.

Para persistência de dados, será utilizado o **Firebase**, com foco no uso de um banco de dados **NoSQL**, devido à sua flexibilidade para lidar com estruturas dinâmicas, como traduções, perfis de usuários e conteúdos multimídia. Essa escolha também favorece a integração com serviços de armazenamento de arquivos, permitindo suporte a áudios, imagens e outros recursos necessários à proposta do produto. Para o processo de build da aplicação mobile, será utilizado o **Gradle**, ferramenta já integrada ao ecossistema do React Native para geração do aplicativo Android. Além disso, para apoio ao desenvolvimento colaborativo, serão utilizados **Git e GitHub**, permitindo versionamento do código, controle de mudanças e colaboração entre os membros da equipe. Por fim, serão respeitadas as diretrizes da licença do projeto, que prevê a livre colaboração e distribuição do software, com ressalvas específicas relacionadas a conteúdos multimídia, como imagens e vídeos armazenados na plataforma.

## **2.5 Pesquisa de mercado e análise competitiva**

No cenário do mercado de soluções digitais voltadas à preservação linguística, o Nativo encontra poucos concorrentes diretos no contexto brasileiro, especialmente por seu foco específico na língua Munduruku e na realidade da Aldeia Munduruku de Bragança. Ainda assim, existem plataformas e aplicativos com propostas parcialmente semelhantes, voltados à preservação, documentação, ensino ou tradução de outras línguas indígenas e ameaçadas, que podem ser considerados referências competitivas.

Entre essas soluções, destaca-se o **Woolaroo**, iniciativa do Google Arts & Culture voltada à exploração de línguas indígenas e ameaçadas por meio de recursos tecnológicos, incluindo reconhecimento de objetos e associação com vocabulário em diferentes idiomas. Apesar de sua proposta de valorização linguística, a plataforma não é voltada especificamente à nenhuma língua indígena brasileira nem resolve a necessidade local de fortalecimento cultural e linguístico da comunidade atendida pelo Nativo. ([Google Arts & Culture](https://artsandculture.google.com/project/woolaroo?utm_source=chatgpt.com))

Outra referência é o MANGUARÉ Lenguas Indígenas, aplicativo descrito como um dicionário tradutor de línguas indígenas da Amazônia colombiana, com foco principal em registro, preservação e divulgação linguística. Embora sua proposta se aproxime do eixo de tradução e preservação, a solução não apresenta, ao menos em sua descrição pública, elementos mais amplos de engajamento comunitário, interação social ou mecanismos de incentivo ao uso contínuo da língua. ([Google Play](https://play.google.com/store/apps/details?hl=pt&id=com.traductor.app&utm_source=chatgpt.com))

A solução do Nativo irá se diferenciar por dois aspectos centrais. 

* O primeiro é a ampliação das formas de engajamento com a plataforma, por meio de recursos como mural social e quizzes interativos, buscando transformar a aplicação em um espaço mais ativo de participação e aprendizagem contínua.

* O segundo é a valorização de conteúdos visuais e culturais da própria comunidade, com uso de fotos e vídeos, permitindo que a plataforma atue não apenas como ferramenta de tradução, mas também como um repositório vivo da cultura Munduruku, fortalecendo a identificação dos usuários com a aplicação e com o processo de revitalização linguística.


## **2.6 Viabilidade da proposta**

A proposta é considerada viável no contexto da disciplina, tendo em vista o escopo definido e a capacidade técnica da equipe, com previsão de entrega de um MVP consistente e evoluções incrementais ao longo do semestre. Embora o fluxo de comunicação com a comunidade Munduruku apresenta limitações por ocorrer por meio de um representante, o projeto foi estruturado de forma compatível com essa realidade, apoiando-se em elementos já validados junto aos usuários.

O principal risco técnico está associado à necessidade de evolução da arquitetura do back-end, desenvolvido em Python com Flask, para suportar o aumento da complexidade da aplicação, bem como à implementação de mecanismos que garantam funcionamento adequado em cenários com conectividade limitada, como o uso offline em dispositivos móveis. Ainda assim, esse risco é mitigado pela escolha de tecnologias consolidadas, pela organização do desenvolvimento em ciclos incrementais e pela adoção de práticas que favorecem a estabilidade e manutenção do sistema.

Dessa forma, a viabilidade da proposta está condicionada a alguns fatores-chave: 

* A manutenção de um escopo controlado ao longo do semestre; 

* A priorização de aspectos estruturais da aplicação nas etapas iniciais; 

* A garantia de uma comunicação eficiente entre os membros da equipe; e

* O compartilhamento contínuo de conhecimento, de modo a evitar a concentração de responsabilidades e possíveis gargalos no desenvolvimento.


## **2.7 Benefícios Esperados**

* Para o **cliente**: Ampliar a capacidade de evolução da plataforma Nativo com maior controle sobre o conteúdo e as interações, redução das limitações técnicas atuais e melhoria da confiabilidade e desempenho da aplicação. A solução também deverá fortalecer o posicionamento do Nativo como uma ferramenta de impacto social e cultural, criando melhores condições para expansão da plataforma, aumento do engajamento da comunidade e continuidade do projeto de revitalização linguística.


* Para os **usuários**: uma experiência de aprendizado mais interativa, acessível e envolvente, com melhor compreensão da língua por meio de recursos multimídia, uso mais dinâmico da plataforma através de gamificação e maior conexão cultural local por meio do feed comunitário. Além disso, os usuários terão acesso mais estável mesmo sem internet, maior clareza no acompanhamento do próprio progresso e uma participação mais ativa no processo de preservação da língua.


  


# **3. ESTRATÉGIAS DE ENGENHARIA DE SOFTWARE**

## **3.1. Estratégia Priorizada**

**Abordagem**: Híbrida

**Ciclo de Vida**: Iterativo e Incremental

**Processo**:  OpenUP

## 	**3.2. Quadro Comparativo**

O quadro apresenta algumas características que podem ser relacionadas ao OpenUP e RAD, visando auxiliar o entendimento e justificativa do processo mais adequado para o projeto

| Características | OpenUP | RAD |
| :---: | :---: | :---: |
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

1. **Organização e Estrutura do Desenvolvimento:**

* Diante da complexidade do projeto, especialmente no que se refere à necessidade de evolução arquitetural da aplicação e à organização das funcionalidades planejadas, o OpenUP é ideal por focar na criação de uma arquitetura executável logo nas fases iniciais (*Elaboração*). Isso garante uma base técnica sólida e sustentável, reduzindo o risco de retrabalho antes da construção em larga escala.

2. **Ênfase em Arquitetura e Sustentabilidade Técnica:**

* O projeto enfrenta limitações técnicas relevantes, como gargalos na aplicação atual desenvolvida em Flask. O OpenUP, por valorizar a definição e evolução da arquitetura desde as etapas iniciais, contribui para a construção de uma base mais sólida e sustentável, reduzindo riscos de retrabalho e problemas de escalabilidade ao longo do desenvolvimento .

3. **Melhor Adequação ao Fluxo de Validação:**

* Considerando que o contato com a comunidade ocorre de forma indireta, por meio de um representante, o OpenUP se mostra mais adequado por estruturar melhor os momentos de validação e alinhamento. Diferente de abordagens que dependem de feedback contínuo e imediato, o processo permite consolidar entregas e validar em pontos mais definidos, reduzindo impactos causados por atrasos ou ruídos na comunicação .

4. **Suporte à Documentação:**

* Por se tratar de um projeto desenvolvido no contexto de disciplina, há a necessidade de documentação clara, rastreabilidade de decisões e organização dos artefatos produzidos. O OpenUP atende melhor a esse requisito ao incentivar uma documentação mais estruturada, sem perder a flexibilidade do desenvolvimento iterativo.

5. **Controle do Escopo e Evolução Incremental:**

* O projeto apresenta diversas possibilidades de expansão, como gamificação, feed social e suporte multimídia. O OpenUP permite que essas funcionalidades sejam organizadas e priorizadas de forma incremental, garantindo que o escopo seja controlado e que as entregas ocorram de maneira consistente ao longo do tempo.

6. **Equilíbrio entre Flexibilidade e Controle:**

* Embora permita adaptação ao longo das iterações, o OpenUP mantém um nível adequado de controle sobre o processo, evitando que o desenvolvimento se torne desorganizado. Esse equilíbrio é essencial para o Nativo, que precisa evoluir continuamente, mas sem comprometer a qualidade técnica e a coerência do produto final.

Dessa forma, o OpenUP se mostra a escolha mais adequada por oferecer maior organização, melhor suporte à evolução técnica e alinhamento com as necessidades de validação e documentação do projeto, contribuindo para uma condução mais segura e estruturada do desenvolvimento.

# **4. ENGENHARIA DE REQUISITOS**

## **4.1. Atividades e Técnicas de ER**

As técnicas adotadas pela equipe para o projeto Nativo estão organizadas conforme as cinco frentes do processo de requisitos do OpenUP, associadas às seis atividades fundamentais da ER que se entrelaçam ao longo do projeto.

**1\. Elicitação e Análise** *Enfatiza a colaboração direta com stakeholders em vez de documentação extensiva.*

**Elicitação e descoberta**

* **Entrevistas:** Realizadas com a representante Alexia Naara para capturar as necessidades da comunidade Munduruku e entender os gargalos da aplicação atual em Flask.  
* **Brainstorming:** Sessões com a equipe para idealizar mecanismos de gamificação e o feed social que incentivem o uso recorrente do app.

  **Análise e consenso**

* **Priorização MoSCoW:** Classificação dos requisitos em essenciais (*Must Have*), como o acesso offline, e desejáveis, como o feed social, para determinar o sequenciamento da implementação baseado no valor para o cliente.

**2\. Documentação** *Adota um conjunto mínimo de artefatos, criados apenas quando agregam valor tangível para o projeto.*

**Declaração**

* **User Stories (Histórias de Usuário):** Utilizadas como os requisitos funcionais. Descrição das funcionalidades sob a perspectiva dos diferentes perfis, como crianças e professores, mantendo o foco no valor cultural.  
* **Especificação Suplementar:** Agrupa os requisitos técnicos (restrições de implementação, como React Native/Firebase) e os requisitos não-funcionais (qualidades do sistema, como suporte a cenários de baixa conectividade).

  **Representação**

* **Protótipos e Wireframes:** Representação visual das interações no feed comunitário e nos questionários de gamificação para facilitar o entendimento da equipe e alinhamento com os stakeholders.

**3\. Refinamento:** *Os requisitos são progressivamente detalhados conforme necessário para implementação, evitando especificação excessiva antecipada.*

**Elicitação e descoberta**

* **Análise Documental:** Revisão contínua do código-fonte e da documentação do TCC original para identificar funcionalidades legadas que precisam de refatoração, detalhando primeiro os itens de alto risco.

**4\. Validação:** *Ocorre continuamente por meio de revisões com stakeholders, demonstrações e testes.*

**Verificação e validação** 

* **Demonstração (Review) e Prototipação:** Apresentação de telas e incrementos à cliente Alexia para validar se a refatoração técnica mantém a fidelidade linguística pretendida e atende à usabilidade da aldeia. O feedback é incorporado nas iterações subsequentes.  
* **Checklists de Qualidade:** Verificação se cada requisito mapeado contribui diretamente para os Objetivos Específicos (OE).

**5\. Gerenciamento:** *Utiliza um processo leve de controle de mudanças.*

**Organização e atualização**

*  **Matriz de Rastreabilidade:** Mapeamento que conecta os OEs às características do produto (CPs) e aos requisitos técnicos, garantindo que nada se perca durante a rotação de papéis da equipe.

**—----------------**

**Fase de Concepção**

**Elicitação e Descoberta:**

* **Entrevistas:** Realizadas com a representante Alexia Naara para capturar as necessidades da comunidade Munduruku e entender os gargalos da aplicação atual em Flask.  
* **Brainstorming:** Sessões com a equipe para idealizar mecanismos de gamificação e o feed social que incentivem o uso recorrente do app.

  **Análise e Consenso:**

* **Priorização MoSCoW:** Classificação dos requisitos em essenciais (*Must Have*), como o acesso offline, e desejáveis (*Should Have*), como o feed social, para determinar o sequenciamento da implementação baseado no valor para o cliente.

**Fase de Elaboração**

**Elicitação e Descoberta:**

* **Análise Documental:** Revisão contínua do código-fonte e da documentação do TCC original para identificar funcionalidades legadas que precisam de refatoração, detalhando primeiro os itens de alto risco (como as limitações de arquitetura).

  **Declaração de Requisitos:**

* **User Stories (Histórias de Usuário):** Utilizadas como requisitos funcionais. Descrição das funcionalidades sob a perspectiva dos diferentes perfis, como crianças e professores, mantendo o foco no valor cultural.  
* **Especificação Suplementar:** Agrupa os requisitos técnicos (restrições de implementação, como React Native/Firebase) e os requisitos não funcionais (qualidades do sistema, como suporte a cenários de baixa conectividade).

  **Representação de Requisitos:**

* **Protótipos e Wireframes:** Representação visual das funcionalidades a serem implementadasinterações no feed comunitário e nos questionários de gamificação para facilitar o entendimento da equipe e alinhamento com os stakeholders.

**Fase de Construção**

**Verificação e Validação de Requisitos:**

* **Checklists de Qualidade:** Verificação contínua se cada requisito mapeado contribui diretamente para os Objetivos Específicos (OE) e se atende aos critérios técnicos estabelecidos.  
* **Demonstração (Review) e Prototipação:** Apresentação de telas e incrementos à cliente Alexia para validar se a refatoração técnica mantém a fidelidade linguística pretendida e atende à usabilidade da aldeia. O feedback é incorporado nas iterações subsequentes.

  **Organização e Atualização de Requisitos:**

* **Matriz de Rastreabilidade:** Mapeamento que conecta os OEs às características do produto (CPs) e aos requisitos técnicos, garantindo que nada se perca durante a rotação de papéis da equipe no desenvolvimento.

**Fase de Transição**

**Verificação e Validação de Requisitos:**

* **Testes de Aceitação e Demonstração Final:** Apresentação da versão finalizada para a cliente e para a comunidade (via representante) para homologação do sistema, garantindo que a aplicação está pronta para o uso no dia a dia da aldeia.

## **4.2. Engenharia de Requisitos e o OpenUP**

| Fases do Processo | Atividades ER | Prática | Técnica | Resultado Esperado |
| :---: | :---: | :---: | :---: | :---: |
| **Concepção** | Elicitação e Descoberta | Colaboração direta com stakeholders para entendimento do domínio. | Entrevistas, Brainstorming e Análise Documental | Escopo preliminar definido, identificação das necessidades da comunidade Munduruku e mapeamento dos gargalos do Flask. |
|  | Análise e Consenso | Sequenciamento da implementação baseado em valor. | Priorização MoSCoW | MVP definido com clareza, priorizando requisitos essenciais como o suporte ao acesso offline. |
| **Elaboração** | Declaração | Documentação essencial com foco no valor cultural e restrições técnicas. | User Stories e Especificação Suplementar | Requisitos funcionais (perfis de usuário) e requisitos técnicos/não-funcionais (React Native, Firebase) devidamente documentados. |
|  | Representação | Modelagem visual inicial para alinhamento de expectativas. | Protótipos e Wireframes | Interfaces de gamificação e do feed comunitário desenhadas e validadas visualmente com a representante. |
|  | Organização e Atualização | Detalhamento progressivo (Refinamento) focado em mitigar riscos. | Análise Documental | Requisitos de refatoração do código legado detalhados para garantir uma arquitetura base segura. |
| **Construção** | Verificação e Validação | Validação contínua e iterativa dos incrementos gerados. | Demonstração (Review) e Checklists de Qualidade | Incrementos funcionais (áudio, vídeo, feed social) validados e aderentes aos Objetivos Específicos (OE) do projeto. |
|  | Organização e Atualização | Gerenciamento de mudanças e controle de dependências de forma leve. | Matriz de Rastreabilidade | Continuidade do conhecimento do projeto garantida, sem perda de rastreabilidade durante a rotação técnica da equipe. |
| **Transição** | Verificação e Validação | Homologação final do sistema com o cliente e usuários finais. | Demonstração (Review) e Testes de Aceitação | Sistema Nativo integralmente validado pela aldeia, atestando a fidelidade linguística e o suporte em baixa conectividade. |

# **5. CRONOGRAMA E ENTREGAS**

| Fase | Período | Foco Principal | Entregas/Marcos |
| :---- | :---- | :---- | :---- |
| Concepção | 02/04 – 22/04 | Definição de escopo, visão e viabilidade. | Documento de Visão finalizado, MVP definido e Priorização MoSCoW. |
| Elaboração | 23/04 – 20/05 | Arquitetura executável e detalhamento de requisitos de alto risco. | User Stories, Protótipos/Wireframes e Especificação Suplementar. |
| Construção | 21/05 – 24/06 | Desenvolvimento iterativo das funcionalidades (multimídia, gamificação, feed). | Incrementos funcionais testados (áudio, vídeo, social) e Matriz de Rastreabilidade. |
| Transição | 25/06 – 03/07 | Homologação, correção de bugs finais e entrega. | Sistema integralmente validado pela aldeia e pronto para uso. |

**Detalhamento das Atividades por Fase:**

**Fase de Concepção (Sprints 1 e 2\)**

* Elicitação e Descoberta: Realização de entrevistas com a cliente Alexia para alinhar necessidades da comunidade e identificar gargalos técnicos do Flask.

* Análise e Consenso: Definição do MVP focando em requisitos essenciais como o acesso offline.

 **Fase de Elaboração (Sprints 3 a 5\)**

* Arquitetura: Refatoração da base técnica para suportar a nova stack (React Native, Firebase e Python/Flask).

* Representação: Desenho e validação visual das interfaces de gamificação e do feed comunitário com a representante.

* Declaração: Documentação das User Stories sob a perspectiva de perfis como crianças e professores.

 **Fase de Construção (Sprints 6 a 10\)**

* Desenvolvimento: Implementação do suporte a multimídia para auxiliar no ensino da pronúncia.

* Validação Técnica: Aplicação de testes unitários e de integração em cada micro-incremento.

* Refinamento: Revisão contínua do código legado para garantir uma arquitetura segura e escalável.

**Fase de Transição (Sprints 11 e 12\)**

* Verificação e Validação: Execução de testes de aceitação e demonstração final para a cliente e comunidade via representante.

* Homologação: Garantia da fidelidade linguística Munduruku e da usabilidade em cenários de baixa conectividade.

# **6. INTERAÇÃO ENTRE EQUIPE E CLIENTE**

## **6.1. Composição da Equipe**

*A equipe de desenvolvimento será composta por:*

| Papel | Descrição | Participantes |
| :---- | :---- | :---- |
| Gerente de projeto | Coordena o projeto, garante a comunicação entre cliente e equipe, controla prazos e entregas | Johnnatan Salles, Pedro Silva???? |
| Desenvolvimento Backend | Implementa a lógica de negócios, integração com banco de dados e APIs | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes, Pedro Silva, Renan Camara |
| Desenvolvimento Frontend | Implementa a interface do usuário, design e funcionalidades no lado do cliente | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes |
| Análise de requisitos  | Define os requisitos funcionais e não funcionais do sistema e garante que eles sejam atendidos | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes, Pedro Silva, Renan Camara |
| Análise de QA | Garante a qualidade do produto, executando testes de funcionalidade, performance e usabilidade. | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes, Pedro Silva, Renan Camara |

Os responsáveis pelo backend, frontend e qualidade serão rotacionados ao longo das sprints, com objetivo de melhorar o conhecimento dos integrantes em áreas de menor domínio e apoiar o entendimento do andamento do projeto no geral.

## **6.2. Comunicação**

**Ferramentas de comunicação**

* **Teams/Google Meet:**Foram definidas entrevistas semanais para manter os conceitos e as ideias alinhadas. As reuniões serão realizadas na plataforma Teams ou, em caso de falhas, Google Meet.

* **Whatsapp/Discord:**O Whatsapp é o principal meio de comunicação por texto entre os membros da equipe. Além disso, foi criado um servidor do Discord para as reuniões entre os membros.

	**Frequência de Reuniões** 

* **Reunião de revisão da Sprint:** Ao final de cada sprint (1 semana), haverá uma reunião de revisão com a cliente e toda a equipe. Nessas reuniões, a equipe apresentará as funcionalidades desenvolvidas, desafios e soluções implementadas.

* **Reunião de Planejamento da Sprint:** Após a reunião de revisão, a equipe e o cliente planejam a próxima sprint, revisando os requisitos e cronograma, definindo as prioridades de acordo com os feedbacks.

	**Frequência de Interações com a cliente**

* **Revisões de Sprint:** A cliente estará envolvida nas revisões de sprint semanalmente, podendo testar, validar e fornecer feedbacks das entregas

* **Interações informais:** A cliente tem acesso ao grupo de Whatsapp da equipe, facilitando interações rápidas e dúvidas pontuais caso precise.

	

	

## **6.3. Processo de Validação**

O processo de validação do produto seguirá os princípios iterativos e incrementais do **OpenUP**. Para garantir que a solução atenda às expectativas e mantenha a integridade técnica e cultural, a validação ocorrerá em três frentes principais:

**1\. Validação de Especificação (Critérios de Prontidão na *Work Items List*):**

* Antes de iniciar o desenvolvimento de qualquer funcionalidade nas *sprints*, a equipe valida a Lista de Itens de Trabalho. Um item ou História de Usuário só será selecionado para implementação se os seus requisitos estiverem claramente definidos, documentados e com os respectivos critérios de aceitação preestabelecidos em consenso com a representante.

**2\. Validação Técnica Contínua (Micro-incrementos e Testes de Desenvolvedor):**

* Durante a fase de Construção, a equipe aplicará a prática de **Testes de Desenvolvedor** (*Developer Testing*), recomendada pelo OpenUP, garantindo que o código seja testado por quem o produziu em ciclos curtos. Um micro-incremento só será considerado concluído (*Done*) quando passar por testes unitários e de integração, for anexado com sucesso à base de código principal e obtiver aprovação funcional em revisões internas da equipe.

**3\. Validação de Marcos e Aceitação do Cliente (*Milestones*):**

* Ao final de cada iteração, os incrementos funcionais e testados do aplicativo serão empacotados e disponibilizados para validação de negócio. Durante essa etapa de revisão, a cliente atuará como homologadora, testando a aplicação na prática para verificar se o sistema atende aos requisitos estabelecidos e aos Objetivos Específicos (OEs), à usabilidade esperada para a aldeia e às regras de integridade cultural da língua Munduruku. Funcionalidades só serão integradas à versão final (Transição) após o *feedback* positivo nesses marcos.

# **10. LIÇÕES APRENDIDAS**

## **10.1 Unidade 1**

Durante a escrita do documento de visão de produto e projeto, algumas lições foram aprendidas que ajudaram muito no nosso crescimento e aprendizado. Abaixo estão as lições aprendidas, focando nas ações de melhoria, desafios enfrentados e como foram (ou não) superados.

**Dificuldades e Ações para Superá-las**

1.  Dificuldades de entender o real escopo do projeto  
   * **Desafio:**   
   * **Como foi superada:**

# **11. REFERÊNCIAS BIBLIOGRÁFICAS**

*1\.	\[Descrição da referência\]*