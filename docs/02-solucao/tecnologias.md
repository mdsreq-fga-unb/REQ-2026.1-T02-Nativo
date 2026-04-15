# 2.4 Tecnologias a Serem Utilizadas

Para a construção da solução proposta para o Nativo, serão utilizadas tecnologias alinhadas à necessidade de evolução da aplicação, suporte a funcionalidades multimídia e adaptação a cenários de baixa conectividade, mantendo compatibilidade com a stack já adotada no projeto.

## Backend

**Python com Flask** — tecnologia já empregada na aplicação atual. A estratégia adotada consiste na refatoração da arquitetura e na adoção de melhores práticas de desenvolvimento, visando melhorar a eficiência, organização e manutenção do sistema.

## Frontend

**TypeScript com React Native** — considerando que o Nativo é uma aplicação voltada para dispositivos móveis, essa escolha permite a construção de interfaces mais consistentes, reutilizáveis e alinhadas à experiência de uso em smartphones, além de facilitar a evolução de funcionalidades como suporte a mídias e mecanismos de engajamento.

## Comunicação

**APIs RESTful** — mantendo o padrão já adotado no projeto. Esse modelo possibilita a organização dos serviços da aplicação e a integração entre os diferentes componentes do sistema, garantindo maior modularidade e facilidade de manutenção.

## Banco de Dados

**Firebase (NoSQL)** — devido à sua flexibilidade para lidar com estruturas dinâmicas, como traduções, perfis de usuários e conteúdos multimídia. Essa escolha também favorece a integração com serviços de armazenamento de arquivos, permitindo suporte a áudios, imagens e outros recursos necessários.

## Build e Versionamento

| Ferramenta | Finalidade |
| :--- | :--- |
| **Gradle** | Processo de build da aplicação mobile Android, integrado ao ecossistema React Native |
| **Git / GitHub** | Versionamento do código, controle de mudanças e colaboração entre membros da equipe |


## **2.4 Tecnologias a serem utilizadas**

Para a construção da solução proposta para o Nativo, serão utilizadas tecnologias alinhadas à necessidade de evolução da aplicação, suporte a funcionalidades multimídia e adaptação a cenários de baixa conectividade, mantendo compatibilidade com a stack já adotada no projeto. Considerando que a aplicação já se encontra em funcionamento e que a equipe possui familiaridade com as tecnologias utilizadas, optou-se por manter a base atual, realizando melhorias estruturais e refatorações para mitigar os problemas identificados.	

No backend, será utilizado **Python com Flask**, tecnologia já empregada na aplicação atual. Apesar dos desafios relacionados à performance e escalabilidade mencionados anteriormente, a estratégia adotada consiste na refatoração da arquitetura e na adoção de melhores práticas de desenvolvimento, visando melhorar a eficiência, organização e manutenção do sistema. No frontend, será utilizado **TypeScript com React Native**, considerando que o Nativo é uma aplicação voltada para dispositivos móveis. Essa escolha permite a construção de interfaces mais consistentes, reutilizáveis e alinhadas à experiência de uso em smartphones, além de facilitar a evolução de funcionalidades como suporte a mídias, interações e possíveis mecanismos de engajamento. A comunicação entre frontend e backend será realizada por meio de **APIs RESTful**, mantendo o padrão já adotado no projeto. Esse modelo possibilita a organização dos serviços da aplicação e a integração entre os diferentes componentes do sistema, garantindo maior modularidade e facilidade de manutenção.

Para persistência de dados, será utilizado o **Firebase**, com foco no uso de um banco de dados **NoSQL**, devido à sua flexibilidade para lidar com estruturas dinâmicas, como traduções, perfis de usuários e conteúdos multimídia. Essa escolha também favorece a integração com serviços de armazenamento de arquivos, permitindo suporte a áudios, imagens e outros recursos necessários à proposta do produto. Para o processo de build da aplicação mobile, será utilizado o **Gradle**, ferramenta já integrada ao ecossistema do React Native para geração do aplicativo Android. Além disso, para apoio ao desenvolvimento colaborativo, serão utilizados **Git e GitHub**, permitindo versionamento do código, controle de mudanças e colaboração entre os membros da equipe. Por fim, serão respeitadas as diretrizes da licença do projeto, que prevê a livre colaboração e distribuição do software, com ressalvas específicas relacionadas a conteúdos multimídia, como imagens e vídeos armazenados na plataforma.