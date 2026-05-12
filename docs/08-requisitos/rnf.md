# 8.2 · Lista de Requisitos Não Funcionais

Os requisitos não funcionais definem critérios de qualidade do sistema Nativo. A tabela a seguir apresenta os RNFs com sua categoria segundo a sigla URPS (Usabilidade, Confiabilidade, Desempenho, Segurança).

| ID | Nome | Descrição | Categoria (URPS) |
| --- | --- | --- | --- |
| RNF01 | Usabilidade | A interface deve permitir que os usuários realizem as ações principais da aplicação (buscar traduções, acessar mídias e interagir com publicações) com navegação clara e consistente, sem necessidade de suporte externo, em no máximo 2 interações para tradução e no máximo 3 cliques para rede social. | Usabilidade |
| RNF02 | Desempenho | O sistema deve suportar até 250 usuários simultâneos em funcionalidades síncronas e até 1.000 usuários simultâneos nas demais funcionalidades, mantendo a estabilidade durante uso concorrente. | Desempenho |
| RNF03 | Segurança e moderação | O sistema deve restringir funcionalidades administrativas e de moderação aos perfis autorizados e manter registros das denúncias e ações de moderação, preservando segurança e rastreabilidade. | Segurança |
| RNF04 | Disponibilidade em baixa conectividade | O aplicativo deve manter disponíveis para consulta as traduções previamente sincronizadas quando o dispositivo estiver sem acesso à internet, garantindo uso essencial em cenários de baixa (<100kbps) ou nenhuma conectividade. | Confiabilidade |
| RNF05 | Restrição de implementação | O sistema deve ser desenvolvido utilizando React Native no frontend, Python com Flask no backend e Firebase para persistência e armazenamento de arquivos; comunicação entre componentes via APIs RESTful. | Confiabilidade |
| RNF06 | Acessibilidade de fonte | O aplicativo deve permitir ao usuário ajustar o tamanho da fonte para melhorar a leitura e a acessibilidade da interface. | Usabilidade |