## 8.1 Lista de Requisitos Funcionais (Especificação Suplementar)

Os requisitos funcionais estabelecem um consenso que fomenta a implementação dos objetivos planejados para o app Nativo. A seguir, é apresentado o escopo atualizado do sistema, totalizando 50 requisitos funcionais organizados de acordo com as Características do Produto (CPs) e os Objetivos Estratégicos (OEs) do projeto. 

### (OE1) Aumentar a retenção e o engajamento na plataforma

**CP1 - Criação de Mecanismos interativos de aprendizagem e engajamento**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| <span id="req-rf01" class="rf-anchor">RF01</span> | Criar atividade educacional | Permitir que professores criem atividades para os usuários resolverem. |
| <span id="req-rf02" class="rf-anchor">RF02</span> | Listar atividades educacionais para gerenciamento | Permitir que usuários autorizados visualizem as atividades educacionais cadastradas. |
| <span id="req-rf03" class="rf-anchor">RF03</span> | Responder atividade educacional | Permitir que os usuários submetam respostas às atividades publicadas. |
| <span id="req-rf04" class="rf-anchor">RF04</span> | Visualizar resultado da atividade | Permitir que os usuários visualizem a correção e a pontuação obtida após responderem a uma atividade. |
| <span id="req-rf05" class="rf-anchor">RF05</span> | Editar atividade educacional | Permitir que professores, administradores e moderadores editem o conteúdo de uma atividade. |
| <span id="req-rf06" class="rf-anchor">RF06</span> | Excluir atividade educacional | Permitir que professores, administradores e moderadores excluam uma atividade. |
| <span id="req-rf07" class="rf-anchor">RF07</span> | Criar insígnia | Permitir que administradores, professores e moderadores criem insígnias de engajamento. |
| <span id="req-rf08" class="rf-anchor">RF08</span> | Editar insígnia | Permitir que administradores e moderadores alterem o nome, arte ou regras de uma insígnia. |
| <span id="req-rf09" class="rf-anchor">RF09</span> | Excluir insígnias | Permitir que administradores e moderadores removam insígnias do sistema. |
| <span id="req-rf50" class="rf-anchor">RF50</span> | Listar atividades disponíveis para resolução | Permitir que usuários comuns visualizem as atividades educacionais disponíveis para resolução. |

**CP2 - Criação de Feed Social Comunitário**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| RF10 | Criar publicação | Permitir que todos os usuários publiquem conteúdos na área de feed. |
| RF11 | Editar publicação | Permitir que os usuários editem suas próprias publicações no feed. |
| RF12 | Listar publicações | Permitir que os usuários visualizem o histórico de postagens no feed comunitário. |
| RF13 | Excluir publicação | Permitir que o autor da publicação e moderadores excluam uma postagem. |
| RF14 | Interagir com a publicação | Permitir que todos os usuários interajam (ex: curtir/comentar) com as publicações postadas. |
| RF15 | Criar eventos | Permitir que usuários criem eventos da comunidade na plataforma. |
| RF16 | Editar eventos | Permitir que os criadores de um evento alterem suas informações e datas. |
| RF17 | Listar eventos | Permitir que os usuários visualizem a agenda de eventos da comunidade. |
| RF18 | Excluir eventos | Permitir que o criador do evento e moderadores excluam o evento do sistema. |
| RF19 | Compartilhar eventos | Permitir que o usuário compartilhe eventos da comunidade para outras redes ou usuários. |

---

### (OE2) Assegurar a integridade e segurança do acervo cultural

**CP3 - Controle de usuário**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| RF20 | Banir usuário | Permitir que moderadores e administradores banam usuários infratores da aplicação. |
| RF21 | Atribuir cargos de usuário | Permitir que administradores atribuam permissões específicas (ex: professor, moderador) aos usuários. |
| RF22 | Editar cargos de usuário | Permitir que administradores modifiquem os níveis de acesso de um usuário existente. |
| RF23 | Listar cargos de usuário | Permitir que administradores visualizem os cargos disponíveis e quem os ocupa. |
| RF24 | Desatribuir cargos de usuário | Permitir que administradores removam um cargo atribuído a um usuário. |
| RF25 | Candidatar-se a professor | Permitir que usuários solicitem oficialmente o papel de professor no sistema. |
| RF26 | Recuperar senha | Permitir que o usuário recupere o acesso à sua conta via redefinição de senha por e-mail. |

**CP4 - Sistema de denúncias**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| RF27 | Criar denúncia | Permitir que os usuários relatem publicações, comportamentos indevidos ou traduções incorretas. |
| RF28 | Atualizar status de denúncia | Permitir que moderadores e administradores alterem o status (ex: em análise, resolvida) de uma denúncia. |
| RF29 | Listar denúncias | Permitir que moderadores e administradores visualizem todas as denúncias realizadas na aplicação. |
| RF30 | Criar categoria de denúncia | Permitir que administradores criem novas classificações para organizar os tipos de denúncia. |
| RF31 | Editar categoria de denúncia | Permitir que administradores alterem o título ou descrição de uma categoria existente. |
| RF32 | Listar categorias de denúncia | Permitir que o sistema exiba as categorias disponíveis no momento do preenchimento de uma denúncia. |
| RF33 | Excluir categoria de denúncia | Permitir que administradores removam categorias de denúncias obsoletas. |

---

### (OE3) Enriquecer a experiência do usuário na aplicação

**CP5 - Suporte a Multimídia nas Traduções**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| RF34 | Cadastrar vídeo | Permitir o cadastro de vídeos, pelos administradores e moderadores, ao sistema. |
| RF35 | Exibir vídeo | Permitir que os usuários visualizem os vídeos vinculados a uma tradução. |
| RF36 | Excluir vídeo | Permitir que os moderadores apaguem definitivamente um vídeo da base de dados. |
| RF37 | Associar vídeo | Permitir que administradores e moderadores vinculem vídeos cadastrados a uma tradução específica. |
| RF38 | Desassociar vídeo | Permitir que administradores e moderadores removam a vinculação entre um vídeo e uma tradução. |
| RF39 | Cadastrar áudio | Permitir o cadastro de arquivos de áudio, pelos administradores e moderadores, no sistema. |
| RF40 | Reproduzir áudio | Permitir que os usuários reproduzam os áudios vinculados às traduções. |
| RF41 | Excluir áudio | Permitir que os moderadores apaguem definitivamente um arquivo de áudio da base de dados. |
| RF42 | Associar áudio | Permitir que administradores e moderadores vinculem áudios cadastrados a uma tradução específica. |
| RF43 | Desassociar áudio | Permitir que administradores e moderadores removam a vinculação entre um áudio e uma tradução. |

**CP6 - Perfil de Usuário**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| RF44 | Editar usuário | Permitir que os usuários editem as informações pessoais de seus perfis. |
| RF45 | Listar histórico de traduções | Permitir que os usuários visualizem o histórico de traduções realizadas, com data e resultado. |
| RF46 | Favoritar tradução | Permitir que o usuário marque traduções específicas como favoritas. |
| RF47 | Listar traduções favoritadas | Permitir que o usuário visualize rapidamente a lista de suas traduções marcadas como favoritas. |
| RF48 | Listar insígnias | Permitir que os usuários visualizem as insígnias conquistadas em seus perfis. |

**CP7 - Sincronização e Acesso Offline de Traduções**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| RF49 | Baixar traduções | Permitir que os usuários façam o download das traduções textuais e auditivas para acesso offline. |

## 8.2 Lista de Requisitos Não Funcionais (Especificação Suplementar)

Os requisitos não funcionais definem critérios de qualidade do sistema Nativo. A tabela a seguir apresenta os RNFs com sua categoria segundo a sigla URPS (Usabilidade, Confiabilidade, Desempenho, Segurança).

| ID | Nome | Descrição | Categoria (URPS) |
|---|---|---|---|
| RNF01 | Tempo de busca de tradução | O sistema deve apresentar o resultado de uma tradução em até 2 segundos para 95% das requisições realizadas com conexão mínima de 5 Mbps. | Desempenho |
| RNF02 | Navegação da tradução | O usuário deve conseguir acessar a funcionalidade de tradução em no máximo 2 interações a partir da tela inicial. | Usabilidade |
| RNF03 | Navegação da rede social | O usuário deve conseguir acessar publicações da comunidade em no máximo 3 cliques a partir da tela inicial. | Usabilidade |
| RNF04 | Suporte simultâneo geral | O sistema deve suportar no mínimo 100 usuários simultâneos nas funcionalidades assíncronas mantendo tempo médio de resposta inferior a 3 segundos. | Desempenho |
| RNF05 | Tempo de carregamento | Todas as telas do aplicativo devem carregar em até 4 segundos em dispositivos Android intermediários sob conexão de internet com largura de banda mínima de 100 kbps e latência máxima de 300 ms. | Desempenho |
| RNF06 | Funcionamento offline | O aplicativo deve permitir acesso às traduções previamente salvas mesmo sem conexão com a internet. | Confiabilidade |
| RNF07 | Backup de dados | O sistema deve realizar backup automático da base de dados ao menos uma vez a cada 24 horas. | Confiabilidade |
| RNF08 | Compatibilidade Android | O aplicativo deve ser compatível com dispositivos Android a partir da versão 10.0. | Confiabilidade |
| RNF09 | Escalabilidade de mídia | O sistema deve suportar upload de arquivos de mídia de até 100 MB. | Desempenho |
| RNF10 | Ajuste de fonte | O aplicativo deve permitir ao usuário selecionar pelo menos 5 níveis distintos de tamanho de fonte. | Usabilidade |

## 8.3 Matriz-síntese de Rastreabilidade

A matriz a seguir representa a rastreabilidade entre os Objetivos Específicos (OE), Características de Produto (CP), Valores de Negócio (VN), Requisitos Funcionais (RFs) e Requisitos Não Funcionais (RNFs). Essa estrutura garante que todas as funcionalidades e critérios de qualidade desenvolvidos estejam diretamente alinhados às necessidades estratégicas da plataforma Nativo.

| Contribuição principal | Contribuição secundária | CP | VN | RFs relacionados | RNFs relacionados |
| :---: | :---: | :--- | :---: | :--- | :--- |
| **OE1** | **OE3** | **CP1** - Mecanismos interativos de aprendizagem e engajamento | **VN1** | RF01 ao RF09, RF50 |
| **OE1** | **OE3** | **CP2** - Feed Social Comunitário | **VN2** | RF10 ao RF19 | RNF03, RNF09 |
| **OE2** | **OE3** | **CP3** - Controle de usuário | **VN3** | RF20 ao RF26 |
| **OE2** | **OE3** | **CP4** - Sistema de denúncias | **VN4** | RF27 ao RF33 |
| **OE3** | **OE1** | **CP5** - Suporte a Multimídia nas Traduções | **VN5** | RF34 ao RF43 | RNF01, RNF02, RNF09 |
| **OE3** | **OE1** | **CP6** - Perfil de Usuário | **VN6** | RF44 ao RF48 |
| **OE3** | **OE1** | **CP7** - Sincronização e Acesso Offline de Traduções | **VN7** | RF49 | RNF06 |

**Observação:** Apesar de não estarem mencionados em cada uma das características de produto, os requisitos **RNF04**, **RNF05**, **RNF07**, **RNF08** e **RNF10** (referentes a desempenho, confiabilidade, compatibilidade e usabilidade global) aplicam-se transversalmente a todas as Características de Produto, Requisitos Funcionais e Casos de Uso, por definirem a base da solução. Assim, embora não estejam repetidos em cada linha da matriz de rastreabilidade, eles devem ser considerados válidos, aplicáveis e rastreáveis para todo o produto.

De maneira análoga, o requisito **RNF09** (Escalabilidade de mídia) possui aplicação transversal às características **CP2** e **CP5** , regendo o limite de upload para todas as operações de arquivos vinculadas a esses módulos sem a necessidade de repetição individualizada.
