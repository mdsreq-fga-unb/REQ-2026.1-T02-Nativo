# 8.2 · Lista de Requisitos Não Funcionais

Os requisitos não funcionais definem critérios de qualidade do sistema Nativo. A seguir é apresentado um conjunto preliminar dos requisitos não funcionais:

* **RNF01 - Usabilidade**: A interface deve permitir que os usuários realizem as ações principais da aplicação, como buscar traduções, acessar mídias associadas e interagir com publicações, com navegação clara e consistente, sem necessidade de suporte externo, em no máximo 2 interações para tradução e no máximo 3 cliques para rede social.

* **RNF02 - Desempenho**: O sistema deve suportar até 250 usuários simultâneos em funcionalidades síncronas e até 1.000 usuários simultâneos nas demais funcionalidades da aplicação, mantendo a estabilidade do serviço durante o uso concorrente.

* **RNF03 - Segurança e moderação**: O sistema deve restringir as funcionalidades administrativas e de moderação aos perfis autorizados e manter registros das denúncias e ações de moderação realizadas, de modo a preservar a segurança e a rastreabilidade do ambiente comunitário.

* **RNF04 - Disponibilidade em baixa conectividade**: O aplicativo deve manter disponíveis para consulta as traduções previamente sincronizadas quando o dispositivo estiver sem acesso à internet, garantindo o uso essencial da aplicação em cenários de baixa <100kbps, ou nenhuma conectividade.

* **RNF05 - Restrição de implementação**: O sistema deve ser desenvolvido utilizando React Native no frontend, Python com Flask no backend e Firebase para persistência e armazenamento de arquivos, mantendo a comunicação entre os componentes por meio de APIs RESTful.