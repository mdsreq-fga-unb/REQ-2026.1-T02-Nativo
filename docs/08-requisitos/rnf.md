# 8.2 · Lista de Requisitos Não Funcionais (Especificação Suplementar)

Os requisitos não funcionais definem critérios de qualidade do sistema Nativo. A tabela a seguir apresenta os RNFs com sua categoria segundo a sigla URPS (Usabilidade, Confiabilidade, Desempenho, Segurança).

| ID | Nome | Descrição | Categoria (URPS) |
|---|---|---|---|
| RNF01 | Tempo de busca de tradução | O sistema deve apresentar o resultado de uma tradução em até 2 segundos para 95% das requisições realizadas com conexão mínima de 5 Mbps. | Desempenho |
| RNF02 | Navegação da tradução | O usuário deve conseguir acessar a funcionalidade de tradução em no máximo 2 interações a partir da tela inicial. | Usabilidade |
| RNF03 | Navegação da rede social | O usuário deve conseguir acessar publicações da comunidade em no máximo 3 cliques a partir da tela inicial. | Usabilidade |
| RNF04 | Suporte simultâneo geral | O sistema deve suportar no mínimo 100 usuários simultâneos nas funcionalidades assíncronas mantendo tempo médio de resposta inferior a 3 segundos. | Desempenho |
| RNF05 | Tempo de carregamento inicial | O aplicativo deve carregar a tela inicial em até 4 segundos em dispositivos Android intermediários sob conexão de internet com largura de banda mínima de 100 kbps e latência máxima de 300 ms. | Desempenho |
| RNF06 | Funcionamento offline | O aplicativo deve permitir acesso às traduções previamente salvas mesmo sem conexão com a internet. | Confiabilidade |
| RNF07 | Backup de dados | O sistema deve realizar backup automático da base de dados ao menos uma vez a cada 24 horas. | Confiabilidade |
| RNF08 | Compatibilidade Android | O aplicativo deve ser compatível com dispositivos Android a partir da versão 10.0. | Confiabilidade |
| RNF09 | Escalabilidade de mídia | O sistema deve suportar upload de arquivos de mídia de até 100 MB. | Desempenho |
| RNF10 | Ajuste de fonte | O aplicativo deve permitir ao usuário selecionar pelo menos 5 níveis distintos de tamanho de fonte. | Usabilidade |