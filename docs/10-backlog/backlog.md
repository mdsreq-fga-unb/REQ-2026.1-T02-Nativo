# 9. BACKLOG GERAL

O backlog geral apresentado a seguir consolida os requisitos funcionais (RFs) previstos para a evolução do aplicativo Nativo. Para evitar redundâncias e facilitar a manutenção da documentação técnica (seguindo as práticas do framework OpenUP), os requisitos foram agrupados logica e estruturalmente em Casos de Uso (UCs) abrangentes.

A tabela também estabelece a rastreabilidade entre as funcionalidades propostas e os Requisitos Não Funcionais (RNFs), assegurando que restrições de usabilidade, desempenho e confiabilidade incidam corretamente sobre as operações do sistema.

| RF | Caso de uso derivado | RNFs relacionados |
| :--- | :--- | :--- |
| **RF01 - Criar atividade educacional** | UC01 - Gerenciar Atividades Educacionais | RNF04, RNF08 |
| **RF02 - Listar atividades educacional** | UC01 - Gerenciar Atividades Educacionais | RNF04, RNF08 |
| **RF05 - Editar atividade educacional** | UC01 - Gerenciar Atividades Educacionais | RNF08 |
| **RF06 - Excluir atividade educacional** | UC01 - Gerenciar Atividades Educacionais | RNF08 |
| **RF03 - Responder atividade educacional** | UC02 - Realizar Atividades Interativas | RNF04, RNF08 |
| **RF04 - Visualizar resultado da atividade** | UC02 - Realizar Atividades Interativas | RNF04, RNF08 |
| **RF07 - Criar insígnia** | UC03 - Gerenciar Sistema de Recompensas | RNF08 |
| **RF08 - Editar insígnia** | UC03 - Gerenciar Sistema de Recompensas | RNF08 |
| **RF09 - Excluir insígnias** | UC03 - Gerenciar Sistema de Recompensas | RNF08 |
| **RF10 - Criar publicação** | UC04 - Gerenciar Feed Social | RNF03, RNF04, RNF08, RNF09 |
| **RF11 - Editar publicação** | UC04 - Gerenciar Feed Social | RNF03, RNF08, RNF09 |
| **RF12 - Listar publicações** | UC04 - Gerenciar Feed Social | RNF03, RNF04, RNF08 |
| **RF13 - Excluir publicação** | UC04 - Gerenciar Feed Social | RNF08 |
| **RF14 - Interagir com a publicação** | UC04 - Gerenciar Feed Social | RNF03, RNF04, RNF08 |
| **RF15 - Criar eventos** | UC05 - Gerenciar Eventos Comunitários | RNF03, RNF08, RNF09 |
| **RF16 - Editar eventos** | UC05 - Gerenciar Eventos Comunitários | RNF03, RNF08 |
| **RF17 - Listar eventos** | UC05 - Gerenciar Eventos Comunitários | RNF03, RNF04, RNF08 |
| **RF18 - Excluir eventos** | UC05 - Gerenciar Eventos Comunitários | RNF08 |
| **RF19 - Compartilhar eventos** | UC05 - Gerenciar Eventos Comunitários | RNF03, RNF08 |
| **RF20 - Banir usuário** | UC06 - Gerenciar Acessos e Permissões | RNF08 |
| **RF21 - Atribuir cargos de usuário** | UC06 - Gerenciar Acessos e Permissões | RNF08 |
| **RF22 - Editar cargos de usuário** | UC06 - Gerenciar Acessos e Permissões | RNF08 |
| **RF23 - Listar cargos de usuário** | UC06 - Gerenciar Acessos e Permissões | RNF08 |
| **RF24 - Excluir cargos de usuário** | UC06 - Gerenciar Acessos e Permissões | RNF08 |
| **RF25 - Candidatar-se a professor** | UC07 - Gerenciar Credenciais da Conta | RNF08 |
| **RF26 - Recuperar senha** | UC07 - Gerenciar Credenciais da Conta | RNF08 |
| **RF27 - Criar denúncia** | UC08 - Gerenciar Moderação de Conteúdo | RNF03, RNF08 |
| **RF28 - Atualizar status de denúncia** | UC08 - Gerenciar Moderação de Conteúdo | RNF08 |
| **RF29 - Listar denúncias** | UC08 - Gerenciar Moderação de Conteúdo | RNF08 |
| **RF30 - Criar categoria de denúncia** | UC09 - Gerenciar Tipos de Denúncias | RNF08 |
| **RF31 - Editar categoria de denúncia** | UC09 - Gerenciar Tipos de Denúncias | RNF08 |
| **RF32 - Listar categorias de denúncia** | UC09 - Gerenciar Tipos de Denúncias | RNF08 |
| **RF33 - Excluir categoria de denúncia** | UC09 - Gerenciar Tipos de Denúncias | RNF08 |
| **RF34 - Cadastrar vídeo** | UC10 - Gerenciar Acervo de Vídeos | RNF08, RNF09 |
| **RF35 - Exibir vídeo** | UC10 - Gerenciar Acervo de Vídeos | RNF01, RNF02, RNF08 |
| **RF36 - Excluir vídeo** | UC10 - Gerenciar Acervo de Vídeos | RNF08 |
| **RF37 - Associar vídeo** | UC10 - Gerenciar Acervo de Vídeos | RNF08 |
| **RF38 - Desassociar vídeo** | UC10 - Gerenciar Acervo de Vídeos | RNF08 |
| **RF39 - Cadastrar áudio** | UC11 - Gerenciar Acervo de Áudios | RNF08, RNF09 |
| **RF40 - Reproduzir áudio** | UC11 - Gerenciar Acervo de Áudios | RNF01, RNF02, RNF08 |
| **RF41 - Excluir áudio** | UC11 - Gerenciar Acervo de Áudios | RNF08 |
| **RF42 - Associar áudio** | UC11 - Gerenciar Acervo de Áudios | RNF08 |
| **RF43 - Desassociar áudio** | UC11 - Gerenciar Acervo de Áudios | RNF08 |
| **RF44 - Editar usuário** | UC12 - Gerenciar Perfil Pessoal | RNF08 |
| **RF45 - Listar histórico de traduções** | UC12 - Gerenciar Perfil Pessoal | RNF08 |
| **RF46 - Favoritar tradução** | UC12 - Gerenciar Perfil Pessoal | RNF08 |
| **RF47 - Listar traduções favoritadas** | UC12 - Gerenciar Perfil Pessoal | RNF08 |
| **RF48 - Listar insígnias** | UC12 - Gerenciar Perfil Pessoal | RNF08 |
| **RF49 - Baixar traduções** | UC13 - Sincronizar Acervo Offline | RNF06, RNF08 |