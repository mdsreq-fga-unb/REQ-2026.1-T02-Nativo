O Backlog de Produto organiza, em ordem de prioridade, todas as entregas previstas para a solução. Nesta seção registramos como os itens são estruturados, refinados e priorizados, além da forma como o MVP é definido para orientar o desenvolvimento inicial do produto.

## 10.1 Backlog Geral

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

## 10.2 Casos de Uso

### UC01 - Gerenciar Atividades Educacionais

**Atores:** Professor

**Objetivo:** Permitir que o ator gerencie (cadastre, liste, edite e exclua) as atividades práticas e exercícios focados no idioma Munduruku.

**Pré-condições:** O ator deve estar autenticado no sistema móvel e possuir a permissão de nível "Professor".

**Fluxo Principal (Criar e Listar Atividade):**

1. O ator acessa a seção de Gestão de Atividades.
2. O Sistema exibe a lista das atividades educacionais já cadastradas pelo ator (RF02).
3. O ator aciona a opção de adicionar uma nova atividade.
4. O Sistema apresenta um formulário em branco.
5. O ator preenche os dados obrigatórios do exercício e confirma a criação (RF01).
6. O Sistema valida as informações, registra a nova atividade no banco de dados e retorna o ator para a lista (Passo 2), exibindo uma mensagem de sucesso.

**Fluxos Alternativos:**

* **FA01 - Editar Atividade (RF05):** 1. No passo 2 do Fluxo Principal, o ator seleciona uma atividade da lista e escolhe a opção "Editar". 
    2. O Sistema apresenta o formulário preenchido com os dados atuais. 
    3. O ator modifica as informações desejadas e confirma. 
    4. O Sistema valida, salva as atualizações e exibe mensagem de sucesso.

* **FA02 - Excluir Atividade (RF06):** 1. No passo 2 do Fluxo Principal, o ator seleciona uma atividade e escolhe a opção "Excluir". 
    2. O Sistema exibe um modal solicitando a confirmação da exclusão. 
    3. O ator confirma. 
    4. O Sistema remove a atividade da base de dados e atualiza a listagem exibida.

**Fluxos de Exceção:**

* **FE01 - Dados Incompletos:** No passo 6 do Fluxo Principal (ou no passo 4 do FA01), se o Sistema detectar que campos obrigatórios não foram preenchidos, a gravação é interrompida. O aplicativo destaca os campos com erro visualmente e instrui o ator a corrigi-los antes de prosseguir.

### UC02 - Realizar Atividades Interativas

**Atores:** Usuário (Aluno)

**Objetivo:** Permitir que o usuário visualize os exercícios disponíveis, responda às questões propostas e acompanhe o seu desempenho para a prática do idioma.

**Pré-condições:** O ator deve estar autenticado na plataforma.

**Fluxo Principal (Responder e Avaliar):**

1. O ator acessa a seção de Prática/Atividades do aplicativo.
2. O Sistema exibe a lista de atividades educacionais disponíveis e liberadas para o ator (RF02).
3. O ator seleciona uma atividade que ainda não foi concluída.
4. O Sistema carrega a interface do exercício, apresentando o enunciado e as opções de resposta.
5. O ator seleciona a resposta desejada e aciona o botão de submeter (RF03).
6. O Sistema processa a resposta submetida, registra a tentativa no banco de dados e exibe imediatamente o feedback com o resultado (acertos e erros) da atividade (RF04).

**Fluxos Alternativos:**

* **FA01 - Visualizar Histórico de Resultados:** 1. No passo 2 do Fluxo Principal, o ator seleciona uma atividade que já consta como "Concluída".
    2. O Sistema ignora a tela de resolução e exibe diretamente a tela de resultados consolidados daquela atividade específica (RF04).

**Fluxos de Exceção:**

* **FE01 - Perda de Conectividade:** No passo 5 do Fluxo Principal, se o dispositivo estiver sem conexão à internet no momento da submissão (e a atividade exigir processamento online), o Sistema exibe um alerta de "Falha na conexão", mantém a resposta selecionada em cache e orienta o ator a tentar novamente quando o sinal for restabelecido.

### UC03 - Gerenciar Insígnias (Recompensas)

**Atores:** Administrador, Professor

**Objetivo:** Permitir o cadastro, edição e exclusão de insígnias (representadas por ícones de escudinhos na interface) que serão desbloqueadas pelos usuários ao atingirem objetivos específicos.

**Pré-condições:** O ator deve estar autenticado e possuir nível de acesso "Administrador" ou "Professor".

**Fluxo Principal (Criar e Listar Insígnias):**

1. O ator acessa a seção de Gestão de Insígnias no painel.
2. O Sistema exibe a lista das insígnias ativas e seus respectivos objetivos.
3. O ator aciona a opção para adicionar uma nova insígnia.
4. O Sistema apresenta um formulário simples.
5. O ator preenche o nome da insígnia (ex: "Iniciante Munduruku") e o objetivo necessário para o desbloqueio (ex: "Acertar 5 atividades"), e confirma (RF07).
6. O Sistema valida as informações, salva a nova insígnia no banco de dados e retorna para a listagem (Passo 2), exibindo uma mensagem de sucesso.

**Fluxos Alternativos:**

* **FA01 - Editar Insígnia (RF08):** 1. No passo 2 do Fluxo Principal, o ator seleciona uma insígnia e escolhe a opção "Editar".
    2. O Sistema carrega o formulário com o nome e o objetivo atuais.
    3. O ator ajusta as informações necessárias e confirma.
    4. O Sistema processa a alteração, updated os dados e exibe notificação de sucesso.

* **FA02 - Excluir Insígnia (RF09):** 1. No passo 2 do Fluxo Principal, o ator seleciona a opção "Excluir" em uma insígnia.
    2. O Sistema exibe um modal de confirmação.
    3. O ator confirma a exclusão.
    4. O Sistema inativa ou remove a insígnia permanentemente e atualiza a listagem visual.

**Fluxos de Exceção:**

* **FE01 - Dados Incompletos:** No passo 6 do Fluxo Principal, se o ator tentar salvar a insígnia sem definir um nome ou sem especificar o objetivo, o Sistema destaca os campos obrigatórios em vermelho e impede a criação até que sejam preenchidos.

### UC04 - Gerenciar Feed Social

**Atores:** Usuário (Qualquer membro autenticado da plataforma)

**Objetivo:** Permitir que a comunidade compartilhe saberes, eventos e novidades através de um mural interativo, podendo criar, editar, excluir publicações e interagir com as postagens de outros membros.

**Pré-condições:** O ator deve estar autenticado no aplicativo móvel.

**Fluxo Principal (Visualizar Feed e Criar Publicação):**

1. O ator acessa a aba de Feed Social na interface principal do aplicativo.
2. O Sistema carrega e exibe a lista de publicações da comunidade, ordenadas da mais recente para a mais antiga (RF12).
3. O ator aciona o botão de criar nova publicação.
4. O Sistema apresenta a interface de composição de postagem (área de texto e opção de anexo de mídia).
5. O ator insere o texto desejado, opcionalmente anexa uma mídia suportada e confirma a publicação (RF10).
6. O Sistema registra a nova publicação no banco de dados, vincula ao perfil do ator e atualiza o Feed, exibindo a postagem no topo do mural.

**Fluxos Alternativos:**

* **FA01 - Interagir com Publicação (RF14):** 1. No passo 2 do Fluxo Principal, o ator localiza uma publicação do seu interesse.
    2. O ator aciona a ação de interação (como "curtir" ou "comentar").
    3. O Sistema processa a interação e atualiza visualmente os contadores daquela publicação para todos os usuários.

* **FA02 - Editar Publicação Própria (RF11):** 1. No passo 2 do Fluxo Principal, o ator seleciona o menu de opções em uma publicação de *sua própria autoria*.
    2. O ator escolhe a opção "Editar".
    3. O Sistema carrega o conteúdo original na tela de composição.
    4. O ator modifica o texto e confirma.
    5. O Sistema atualiza a postagem no banco de dados e no Feed (adicionando um indicativo visual de "Editado").

* **FA03 - Excluir Publicação Própria (RF13):** 1. No passo 2 do Fluxo Principal, o ator seleciona o menu de opções em uma publicação de *sua própria autoria* e clica em "Excluir".
    2. O Sistema exibe um aviso de confirmação da ação.
    3. O ator confirma.
    4. O Sistema remove a postagem permanentemente da plataforma.

**Fluxos de Exceção:**

* **FE01 - Conteúdo Vazio:** No passo 6 do Fluxo Principal, se o ator tentar enviar a publicação sem nenhum texto ou mídia, o Sistema desabilita o botão de publicar ou exibe um alerta solicitando que algum conteúdo seja inserido.

* **FE02 - Tamanho de Mídia Excedido:** No passo 5, se o ator anexar um arquivo que ultrapasse o limite máximo permitido pelo sistema (referente ao RNF09), o aplicativo recusa o arquivo imediatamente e exibe um erro informando o limite suportado.

### UC05 - Gerenciar Eventos Comunitários

**Atores:** Usuário (Membro autenticado)

**Objetivo:** Permitir que a comunidade organize e visualize a agenda local, através da criação, edição, exclusão e compartilhamento de eventos culturais, sociais ou educacionais.

**Pré-condições:** O ator deve estar autenticado no aplicativo móvel.

**Fluxo Principal (Listar e Criar Evento):**

1. O ator acessa a seção de Eventos/Agenda no aplicativo.
2. O Sistema exibe a lista de eventos futuros da comunidade, ordenados pela data de realização (RF17).
3. O ator aciona a opção para adicionar um novo evento.
4. O Sistema apresenta um formulário para preenchimento dos detalhes.
5. O ator insere as informações obrigatórias (ex: título do evento, data, horário, local e descrição) e confirma (RF15).
6. O Sistema valida as informações (garantindo, por exemplo, que a data seja válida), registra o evento no banco de dados e atualiza a listagem exibida no Passo 2.

**Fluxos Alternativos:**

* **FA01 - Editar Evento (RF16):** 1. No passo 2 do Fluxo Principal, o ator acessa os detalhes de um evento criado por ele mesmo e escolhe a opção "Editar".
    2. O Sistema apresenta o formulário com as informações atuais do evento.
    3. O ator modifica os dados necessários (ex: mudança de horário ou local) e confirma.
    4. O Sistema atualiza as informações no banco de dados e notifica o sucesso da alteração.

* **FA02 - Excluir Evento (RF18):** 1. No passo 2 do Fluxo Principal, o ator acessa um evento próprio e aciona a opção "Excluir".
    2. O Sistema solicita a confirmação da ação.
    3. O ator confirma.
    4. O Sistema cancela/remove o evento da agenda comunitária.

* **FA03 - Compartilhar Evento (RF19):** 1. No passo 2 do Fluxo Principal, o ator seleciona um evento (seu ou de terceiros) e aciona a opção "Compartilhar".
    2. O Sistema invoca a API nativa de compartilhamento do dispositivo móvel (Android).
    3. O ator seleciona "copiar link".
    4. O Sistema gera um link e conclui a exportação.

**Fluxos de Exceção:**

* **FE01 - Data Inválida:** No passo 6 do Fluxo Principal (ou no passo 3 do FA01), se o ator tentar cadastrar um evento com uma data/hora no passado, o Sistema bloqueia a submissão e exibe uma mensagem orientando que o evento deve ocorrer em uma data futura.

* **FE02 - Campos Obrigatórios Ausentes:** Se o ator não preencher o título, data ou local, o Sistema destaca os campos pendentes e impede a gravação até a correção.

### UC06 - Gerenciar Acessos e Permissões

**Atores:** Administrador

**Objetivo:** Permitir o controle administrativo dos níveis de acesso da plataforma, incluindo a listagem, atribuição, edição e revogação de cargos, bem como o banimento de usuários infratores.

**Pré-condições:** O ator deve estar autenticado no sistema com o nível de acesso máximo ("Administrador").

**Fluxo Principal (Listar Usuários e Atribuir Cargos):**

1. O ator acessa o painel de Administração e navega até a aba de Gestão de Acessos.
2. O Sistema exibe a lista completa de usuários cadastrados na plataforma e seus respectivos cargos/níveis de acesso atuais (RF23).
3. O ator localiza um usuário comum e aciona a opção para promover/atribuir um novo cargo (ex: definir como Professor).
4. O Sistema exibe as opções de níveis de acesso disponíveis na arquitetura.
5. O ator seleciona o cargo desejado e confirma a atribuição (RF21).
6. O Sistema valida a operação, atualiza as credenciais de permissão do usuário no banco de dados e recarrega a listagem refletindo a mudança.

**Fluxos Alternativos:**

* **FA01 - Editar Cargo de Usuário (RF22):** 1. No passo 2 do Fluxo Principal, o ator localiza um usuário que já possui um cargo específico e escolhe a opção "Alterar Permissão".
    2. O Sistema exibe o status atual e as outras opções disponíveis.
    3. O ator seleciona o novo cargo e confirma.
    4. O Sistema aplica a modificação nas regras de acesso do usuário imediatamente.

* **FA02 - Revogar Cargo Especial (RF24):** 1. No passo 2 do Fluxo Principal, o ator seleciona um usuário (ex: Professor) e escolhe a ação de revogar/excluir privilégios.
    2. O Sistema solicita a confirmação da ação.
    3. O ator confirma.
    4. O Sistema rebaixa a conta para o nível de usuário comum.

* **FA03 - Banir Usuário Infrator (RF20):** 1. No passo 2 do Fluxo Principal, o ator localiza um usuário que violou os termos de uso e aciona a opção "Banir".
    2. O Sistema exibe um aviso de impacto crítico e solicita a confirmação definitiva (opcionalmente solicitando o motivo).
    3. O ator confirma o banimento.
    4. O Sistema inativa permanentemente a conta, impedindo futuros acessos com aquelas credenciais.

**Fluxos de Exceção:**

* **FE01 - Proteção contra Auto-Bloqueio:** Se o ator tentar banir a si mesmo ou revogar seu próprio cargo de Administrador (sem que haja outro Administrador ativo cadastrado), o Sistema bloqueia a operação e exibe um alerta informando que a plataforma não pode ficar sem supervisão administrativa.

### UC07 - Gerenciar Credenciais da Conta

**Atores:** Usuário (Visitante não autenticado ou Aluno autenticado)

**Objetivo:** Permitir a gestão autônoma do acesso do usuário, englobando o fluxo de recuperação de senhas perdidas e o processo de candidatura para obter permissões de ensino.

**Pré-condições:** Para recuperação de senha, o ator não precisa estar autenticado. Para a candidatura, o ator deve estar logado como usuário comum.

**Fluxo Principal (Recuperar Senha de Acesso - RF26):**

1. Na tela inicial de login do aplicativo, o ator aciona a opção "Esqueci minha senha".
2. O Sistema apresenta um formulário solicitando o e-mail vinculado à conta.
3. O ator informa o e-mail e confirma a solicitud.
4. O Sistema verifica a existência do usuário no banco de dados, gera um código/link temporário e envia para a caixa de entrada do ator.
5. O ator acessa o link/código recebido, insere sua nova senha de preferência e confirma.
6. O Sistema criptografa a nova senha, atualiza o registro no banco de dados e notifica o sucesso, redirecionando o ator de volta para a tela de login.

**Fluxos Alternativos:**

* **FA01 - Candidatar-se a Professor (RF25):** 1. O ator (já autenticado na plataforma) acessa a tela de configurações do seu perfil.
    2. O ator aciona a opção "Solicitar Perfil de Professor".
    3. O Sistema apresenta um formulário para preenchimento da justificativa ou inserção de credenciais que comprovem sua aptidão (ex: vínculo com a escola da aldeia).
    4. O ator preenche as informações solicitadas e submete a candidatura.
    5. O Sistema registra o pedido com o status "Pendente" no banco de dados e envia um alerta para o painel dos Administradores (que utilizarão o UC06 para aprovar ou rejeitar futuramente).

**Fluxos de Exceção:**

* **FE01 - E-mail Inexistente:** No passo 4 do Fluxo Principal, se o e-mail informado não for encontrado na base de dados, o Sistema exibe uma mensagem genérica de segurança (ex: "Se o e-mail constar em nossa base, um link de recuperação foi enviado") para evitar o vazamento e descoberta de e-mails cadastrados.

* **FE02 - Solicitação de Professor Duplicada:** No passo 4 do FA01, se o ator tentar enviar uma candidatura, mas o Sistema detectar que já existe um pedido "Pendente" associado àquela conta, a submissão é bloqueada e um aviso de "Solicitação já em análise" é exibido.

### UC08 - Gerenciar Moderação de Conteúdo

**Atores:** Usuário Comum, Administrador (Moderador)

**Objetivo:** Assegurar a integridade e segurança do ambiente virtual por meio do reporte de conteúdos inadequados pelos usuários e a posterior análise e resolução dessas infrações pelos administradores.

**Pré-condições:** O ator deve estar logado no aplicativo móvel. Para analisar e atualizar status, o ator necessita de privilégios de "Administrador" ou "Moderador".

**Fluxo Principal (Criar Denúncia - RF27):**

1. O ator (Usuário Comum) visualiza um conteúdo que fere as diretrizes da comunidade (ex: uma publicação no Feed ou comentário).
2. O ator aciona a opção "Denunciar" vinculada àquele conteúdo específico.
3. O Sistema apresenta um formulário listando as categorias de denúncia e um campo opcional para descrever o problema.
4. O ator seleciona o motivo da infração aplicável e submete o formulário.
5. O Sistema registra o reporte no banco de dados com o status "Aberta", vincula a denúncia ao conteúdo/autor infrator e exibe uma mensagem de agradecimento ao ator, encerrando a visão do usuário.

**Fluxos Alternativos:**

* **FA01 - Listar e Analisar Denúncias (RF29):** 1. O ator (nível Administrador) acessa o painel de controle e entra na seção de Moderação.
    2. O Sistema exibe a fila completa de denúncias pendentes, ordenadas cronologicamente ou por volume de reportes no mesmo conteúdo.
    3. O ator seleciona uma denúncia para expandir os detalhes (visualizando qual foi o post e quem denunciou).

* **FA02 - Atualizar Status da Denúncia (RF28):** 1. A partir do passo 3 do FA01, o ator (Administrador) toma uma decisão após investigar o caso (ex: excluir a publicação ou ignorar caso seja falso alarme).
    2. O ator altera o status da denúncia na plataforma (mudando de "Aberta" para "Resolvida" ou "Improcedente").
    3. O Sistema atualiza o registro no banco de dados e limpa a ocorrência da fila principal de pendências.

**Fluxos de Exceção:**

* **FE01 - Conteúdo Previamente Removido:** No passo 4 do Fluxo Principal, se o ator tentar submeter a denúncia mas o conteúdo em questão já tiver sido deletado pelo próprio autor (ou por outro moderador segundos antes), o Sistema interrompe o envio e alerta que o conteúdo não se encontra mais disponível.

### UC09 - Gerenciar Tipos de Denúncias (Categorias)

**Atores:** Administrador

**Objetivo:** Permitir a manutenção (criação, listagem, edição e exclusão) dos tipos e categorias de infrações que são exibidos como opções para os usuários no momento de realizar uma denúncia.

**Pré-condições:** O ator deve estar autenticado na plataforma com o nível de acesso de "Administrador".

**Fluxo Principal (Listar e Criar Categoria - RF32, RF30):**

1. O ator acessa a área de Configurações da plataforma e navega até as opções de Moderação/Denúncias.
2. O Sistema exibe a lista das categorias de denúncia ativas no momento (RF32).
3. O ator aciona a opção para adicionar uma nova categoria.
4. O Sistema apresenta um formulário simples (campo de texto para o nome do motivo e, opcionalmente, uma breve descrição).
5. O ator preenche o nome da nova infração (ex: "Discurso de Ódio") e confirma a criação (RF30).
6. O Sistema valida as informações, cadastra a nova categoria no banco de dados e recarrega a listagem, tornando essa nova opção imediatamente disponível para os usuários comuns.

**Fluxos Alternativos:**

* **FA01 - Editar Categoria (RF31):** 1. No passo 2 do Fluxo Principal, o ator localiza uma categoria existente e escolhe a opção "Editar".
    2. O Sistema carrega o formulário com o título e descrição atuais.
    3. O ator realiza os ajustes textuais necessários e confirma a alteração.
    4. O Sistema atualiza o registro no banco de dados.

* **FA02 - Excluir/Inativar Categoria (RF33):** 1. No passo 2 do Fluxo Principal, o ator seleciona a opção "Excluir" em uma categoria específica.
    2. O Sistema exibe um alerta solicitando confirmação.
    3. O ator confirma.
    4. O Sistema remove a categoria (ou a inativa logicamente, caso existam denúncias antigas atreladas a ela) e atualiza a listagem.

**Fluxos de Exceção:**

* **FE01 - Categoria Duplicada:** No passo 6 do Fluxo Principal, se o ator tentar cadastrar um motivo com um nome exatamente igual a uma categoria já existente, o Sistema bloqueia a gravação e exibe um alerta informando que a categoria já consta no catálogo.

* **FE02 - Campo Obrigatório Vazio:** Caso o ator tente salvar sem preencher o nome da categoria, o Sistema destaca o campo em vermelho e impede a submissão.

### UC10 - Gerenciar Acervo de Vídeos

**Atores:** Administrador, Professor (Gestão); Usuário (Visualização)

**Objetivo:** Permitir o enrichment da plataforma por meio do cadastro e associação de vídeos às traduções do idioma Munduruku, garantindo também a reprodução fluida desse conteúdo pelos usuários.

**Pré-condições:** O ator deve estar autenticado. Para operações de cadastro e exclusão, exige-se perfil de "Administrador" ou "Professor". Para exibir o vídeo, qualquer nível de acesso é permitido.

**Fluxo Principal (Cadastrar e Associar Vídeo - RF34, RF37):**

1. O ator (Administrador/Professor) acessa a tela de detalhes de uma tradução específica no dicionário da plataforma.
2. O Sistema exibe as informações textuais e a seção de mídias associadas.
3. O ator aciona o opção para cadastrar um novo vídeo.
4. O Sistema abre um modal solicitando o arquivo de vídeo (ou link, caso utilizem hospedagem externa).
5. O ator insere/faz o upload do vídeo e confirma.
6. O Sistema processa o arquivo, salva no banco de dados (RF34), associa o vídeo diretamente àquela tradução (RF37) e atualiza a interface exibindo o conteúdo anexado.

**Fluxos Alternativos:**

* **FA01 - Reproduzir/Exibir Vídeo Associado (RF35):** 1. O actor (Usuário comum) navega pela plataforma e acessa uma tradução que possui vídeo.
    2. O Sistema carrega a interface de tradução juntamente com um player de vídeo embutido.
    3. O ator aciona o botão de "Play".
    4. O Sistema reproduz o conteúdo audiovisual na própria tela, auxiliando o usuário na visualização e escuta da palavra/expressão Munduruku.

* **FA02 - Desassociar Vídeo (RF38):** 1. No passo 2 do Fluxo Principal, o ator (Administrador) seleciona um vídeo já vinculado e escolhe a opção "Desvincular".
    2. O Sistema rompe a ligação entre aquele vídeo e a tradução específica, mantendo o arquivo no acervo geral, e atualiza a tela.

* **FA03 - Excluir Vídeo do Acervo (RF36):** 1. No passo 2 do Fluxo Principal (ou no painel geral de mídias), o ator seleciona a opção "Excluir Definitivamente" em um vídeo.
    2. O Sistema emite um alerta de remoção permanente.
    3. O ator confirma.
    4. O Sistema apaga o arquivo do servidor/banco de dados, liberando espaço.

**Fluxos de Exceção:**

* **FE01 - Limite de Tamanho Excedido (RNF09):** No passo 5 do Fluxo Principal, se o arquivo de vídeo enviado ultrapassar o limite máximo estipulado para a aplicação, o Sistema interrompe o upload imediatamente e alerta o ator sobre a restrição de tamanho.

* **FE02 - Formato de Arquivo Incompatível:** Caso o ator tente anexar um arquivo que não seja um formato de vídeo suportado (ex: enviar um PDF ou executável no lugar de um MP4), o Sistema recusa a entrada e orienta sobre os formatos válidos.

### UC11 - Gerenciar Acervo de Áudios

**Atores:** Administrador, Professor (Gestão); Usuário (Reprodução)

**Objetivo:** Permitir o cadastro, associação, exclusão e reprodução de arquivos de áudio, focados em registrar a pronúncia correta do idioma Munduruku nas traduções da plataforma.

**Pré-condições:** O ator deve estar autenticado. O cadastro, vinculação e exclusão exigem perfil de "Administrador" ou "Professor". A reprodução é livre para todos os níveis de acesso.

**Fluxo Principal (Cadastrar e Associar Áudio - RF39, RF42):**

1. O ator (Administrador/Professor) acessa a tela de detalhes de uma tradução específica no dicionário do aplicativo.
2. O Sistema exibe as informações da palavra e a seção destinada a pronúncias e áudios.
3. O ator aciona a opção para adicionar um novo áudio.
4. O Sistema apresenta a interface de seleção de arquivo (ou um recurso nativo de gravação via microfone do dispositivo).
5. O ator realiza o upload (ou finaliza a gravação) e confirma a submissão.
6. O Sistema processa o arquivo, salva no banco de dados (RF39), vincula o áudio à respectiva tradução (RF42) e atualiza a interface com um botão de reprodução.

**Fluxos Alternativos:**

* **FA01 - Reproduzir Áudio Associado (RF40):** 1. O ator (Usuário comum) acessa a tela de uma tradução que possui áudio cadastrado.
    2. O Sistema exibe um botão/ícone de alto-falante indicando a disponibilidade da pronúncia.
    3. O ator aciona o botão de "Play".
    4. O Sistema executa o arquivo de áudio imediatamente para que o usuário ouça a pronúncia.

* **FA02 - Desassociar Áudio (RF43):** 1. No passo 2 do Fluxo Principal, o ator (Administrador/Professor) seleciona um áudio vinculado e aciona a opção "Desvincular".
    2. O Sistema remove a ligação entre o áudio e aquela tradução (sem apagar o arquivo do servidor) e atualiza a exibição.

* **FA03 - Excluir Áudio do Acervo (RF41):** 1. No passo 2 do Fluxo Principal, o ator seleciona a opção "Excluir Definitivamente" no arquivo de áudio.
    2. O Sistema emite um alerta de prevenção de remoção permanente.
    3. O ator confirma.
    4. O Sistema apaga o arquivo de som do banco de dados/servidor.

**Fluxos de Exceção:**

* **FE01 - Bloqueio de Microfone:** No passo 4 do Fluxo Principal, se o ator tentar gravar o áudio nativamente, mas o aplicativo não possuir a permissão do sistema operacional (Android) para acessar o microfone, o Sistema bloqueia a ação e exibe um modal orientando o ator a liberar a permissão nas configurações do celular.

* **FE02 - Arquivo Incompatível:** Caso o ator tente anexar um arquivo com formato não suportado (ex: um documento de texto em vez de um arquivo MP3, WAV ou OGG), o Sistema rejeita a entrada e orienta sobre os formatos de áudio permitidos.

### UC12 - Gerenciar Perfil Pessoal

**Atores:** Usuário (Qualquer membro autenticado)

**Objetivo:** Permitir que o usuário personalize as informações de sua conta, gerencie suas traduções preferidas (favoritos), visualize o histórico de buscas e acompanhe seu progresso de aprendizado por meio de insígnias.

**Pré-condições:** O ator deve estar logado no aplicativo móvel.

**Fluxo Principal (Editar Dados do Perfil - RF44):**

1. O ator acessa a aba de Perfil Pessoal no menu do aplicativo.
2. O Sistema exibe as informações atuais da conta (nome, e-mail, foto/avatar e bio).
3. O ator aciona a opção "Editar Perfil".
4. O Sistema apresenta o formulário com os dados carregados e habilitados para edição.
5. O ator modifica as informações desejadas e aciona o botão de salvar.
6. O Sistema valida as alterações, atualiza os dados no banco de dados e recarrega a tela de Perfil com as novas informações.

**Fluxos Alternativos:**

* **FA01 - Favoritar e Listar Traduções (RF46, RF47):** 1. O ator acessa a tela de uma tradução específica no dicionário e aciona o ícone de "Favoritar" (estrela).
    2. O Sistema registra aquela tradução na lista de favoritos do ator (RF46).
    3. Posteriormente, dentro da sua tela de Perfil, o ator acessa a aba "Meus Favoritos".
    4. O Sistema exibe a listagem completa e atualizada de todas as traduções que o ator marcou (RF47), permitindo acesso rápido a elas.

* **FA02 - Visualizar Histórico de Consultas (RF45):** 1. Na tela de Perfil, o ator acessa a aba "Histórico de Traduções".
    2. O Sistema busca no banco de dados e exibe uma lista cronológica das últimas palavras ou expressões que o ator pesquisou e acessou na plataforma.

* **FA03 - Visualizar Conquistas e Insígnias (RF48):** 1. Na tela principal do Perfil, o ator navega até a seção de "Minhas Conquistas".
    2. O Sistema exibe a galeria com todos os "escudinhos" (insígnias) que aquele ator já desbloqueou ao completar atividades educacionais.

**Fluxos de Exceção:**

* **FE01 - Dados Inválidos na Edição:** No passo 6 do Fluxo Principal, se o ator tentar salvar o perfil com o campo "Nome" em branco ou inserir um formato de e-mail inválido, o Sistema interrompe o salvamento, destaca o campo com erro e solicita a correção imediata.

### UC13 - Sincronizar Acervo Offline

**Atores:** Usuário (Qualquer membro autenticado)

**Objetivo:** Permitir que o usuário realize o download prévio do acervo básico do dicionário (textos de traduções) para viabilizar consultas e a prática do idioma mesmo quando o dispositivo estiver sem acesso à internet.

**Pré-condições:** O ator deve estar logado no aplicativo. A conexão com a internet é obrigatória apenas durante a etapa de sincronização. O dispositivo móvel deve possuir espaço de armazenamento livre.

**Fluxo Principal (Fazer Download do Acervo - RF49):**

1. O ator acessa as configurações do aplicativo e seleciona a opção "Sincronização / Modo Offline".
2. O Sistema calcula o volume de dados das traduções atuais, exibe o tamanho estimado do pacote (em Megabytes) e solicita a confirmação do download.
3. O ator aciona o botão para iniciar a sincronização.
4. O Sistema conecta-se ao servidor, faz o download do pacote de dados textuais e salva as informações no armazenamento local seguro do dispositivo móvel.
5. Durante o processo, o Sistema exibe uma barra de progresso visual.
6. Ao finalizar, o Sistema registra no banco de dados local a data da última atualização do pacote e exibe uma notificação de sucesso para o ator.

**Fluxos Alternativos:**

* **FA01 - Realizar Consulta Offline (Ativação Automática):** 1. O ator (com o aplicativo já instalado e o acervo sincronizado) abre o sistema sem possuir conexão ativa (Wi-Fi ou Dados Móveis).
    2. O Sistema detecta a falta de rede e ativa automaticamente o "Modo Offline", bloqueando o acesso a funcionalidades estritamente online (como o Feed Social e Eventos), mas mantendo livre a aba de Dicionário.
    3. O ator pesquisa uma palavra, e o Sistema retorna a tradução lendo exclusivamente a base de dados interna do celular.

**Fluxos de Exceção:**

* **FE01 - Armazenamento Insuficiente:** No passo 3 do Fluxo Principal, se o Sistema detectar que a memória do celular do ator não tem espaço suficiente para comportar o pacote de traduções, a ação é bloqueada e um alerta solicita que o usuário libere espaço no dispositivo antes de tentar novamente.

* **FE02 - Queda de Conexão no Download:** No passo 5 do Fluxo Principal, caso o ator perca o sinal de internet antes de atingir 100% da sincronização, o Sistema pausa a operação, emite um aviso de "Falha de Rede" e guarda o progresso para retomar o download assim que o sinal for restabelecido.

## 10.3 Metodologia de Priorização do Backlog (Impacto vs. Esforço)

Para a definição do escopo do Produto Mínimo Viável (MVP) e do roteiro de entregas finais, as Características do Produto (CPs) e seus respectivos Requisitos Funcionais foram priorizados utilizando uma **Matriz de Impacto vs. Esforço Técnico**. Essa abordagem analítica apoia os princípios fundamentais do **OpenUP**, permitindo que a equipe minimize os riscos técnicos logo no início do ciclo de vida do projeto, focando no que entrega maior valor documentado para a cliente.

A dinâmica foi realizada de forma colaborativa pela equipe de desenvolvimento por meio da plataforma Miro. O processo consistiu na avaliação individual de cada um dos 49 Requisitos Funcionais (RFs) para a extração do **Valor de Priorização**, calculado em três etapas:

1. **Impacto de Negócio:** Mensurado em uma escala linear de 1 a 5, avaliando o quão crítica é a funcionalidade para atingir os Objetivos Estratégicos (OEs) do sistema, focando na mitigação do problema central.
2. **Esforço Técnico:** Estimado por meio de uma dinâmica de avaliação por consenso, baseada na projeção de horas totais de desenvolvimento necessárias para a implementação completa.
3. **Valor de Priorização (Métrica de Retorno):** Calculado por meio da razão matemática direta entre o Impacto e o Esforço através da fórmula **(Impacto / Esforço)**. Essa métrica atua como o indicador único e definitivo do projeto, determinando a densidade de retorno de cada requisito (quais itens trazem maior ganho estratégico em relação ao tempo investido).

### 10.3.1 Critérios Analíticos Básicos (Ingredientes)
A nota de **Impacto** foi derivada de uma priorização prévia realizada pela cliente, utilizando a técnica MoSCoW:

* **Nota 5:** Requisitos *Must Have*.

* **Nota 4:** Requisitos *Should Have*.

* **Notas 2 e 3:** Requisitos *Could Have*.

* **Nota 1:** Requisitos *Won't Have*.

O dimensionamento do **Esforço** foi convertido em uma escala linear de 1 a 5, definida pelos seguintes intervalos de horas-homem estimadas pela equipe:

* **Nota 1:** 1 a 8 horas totais.

* **Nota 2:** 9 a 15 horas totais.

* **Nota 3:** 17 a 29 horas totais.

* **Nota 4:** 30 a 42 horas totais.

* **Nota 5:** Acima de 42 horas totais.

### 10.3.2 Regras de Corte, MVP e Escopo Adicional

Uma vez calculado o **Valor de Priorização**, ele foi utilizado como a única métrica balizadora para alocar os requisitos funcionais em quatro quadrantes de desenvolvimento, definindo formalmente a composição do escopo:

* **Q1 - Ganhos Rápidos (*Quick Wins*):** Valor de Priorização ≥ 2.0. Funcionalidades de altíssimo retorno e implementação viável.
* **Q2 - Grandes Projetos (*Major Projects*):** Valor de Priorização entre 1.0 e 1.99. Itens essenciais, mas de maior complexidade e custo.
* **Q3 - Tarefas Complementares (*Fill-ins*):** Valor de Priorização entre 0.60 e 0.99. Tarefas que não atingem a linha de corte do MVP, mas agregam valor secundário.
* **Q4 - Consumidores de Tempo (*Time Sinks*):** Valor de Priorização ≤ 0.50. Itens de alto escorço e baixíssimo retorno.

**Linha de Corte do MVP (Iterações 6 a 9):**
O **Produto Mínimo Viável (MVP)** foi delimitado de forma estrita pela linha de corte do retorno sobre investimento: **compõem o MVP apenas os requisitos com Valor de Priorização ≥ 1.0.** Todos os requisitos alocados em Q1 e Q2 foram priorizados para as **Iterações 6 a 9** da Fase de Construção.

**Escopo Adicional Implementado (Iterações 10 e 11):**
Os módulos de **Gamificação (Insígnias)** e **Perfil do Usuário (Histórico e Favoritos)**, pertencentes ao Q3, não atingiram a nota matemática para integrar o núcleo duro do MVP. Contudo, por possuírem a **maior nota residual fora do MVP (Valor = 0.75)**, foram selecionados tecnicamente para ocupar a capacidade produtiva final da equipe nas **Iterações 10 e 11**.

**Requisitos Descartados:**
Os módulos de **Denúncias** e **Eventos** (Valor = 0.67), embora estivessem em Q3, apresentaram nota inferior aos itens de gamificação, sendo formalmente descartados do cronograma atual por restrição de prazo, juntamente com a totalidade do **Feed Social** (Q4, Valor = 0.40).

### 10.3.3 Matriz de Priorização Detalhada por Requisito Funcional (RF)

A tabela abaixo apresenta a distribuição detalhada dos 49 requisitos funcionais da plataforma Nativo, ordenados de forma decrescente pelo **Valor de Priorização** para evidenciar a linha de corte (1.0) e as alocações no cronograma:

| ID | Requisito Funcional (RF) | Impacto | Esforço | Valor (Imp/Esf) | Quadrante Resultante | Compõe a Entrega? |
| :--- | :--- | :---: | :---: | :---: | :--- | :--- |
| **RF34** | Cadastrar vídeo | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF35** | Exibir vídeo | 5 | 1 | 5.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF36** | Excluir vídeo | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF37** | Associar vídeo | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 7)** |
| **RF38** | Desassociar vídeo | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 7)** |
| **RF39** | Cadastrar áudio | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF40** | Reproduzir áudio | 5 | 1 | 5.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF41** | Excluir áudio | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 6)** |
| **RF42** | Associar áudio | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 7)** |
| **RF43** | Desassociar áudio | 4 | 1 | 4.00 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 7)** |
| **RF25** | Candidatar-se a professor | 5 | 2 | 2.50 | Q1 - Ganhos Rápidos | **SIM (MVP - Iteração 9)** |
| **RF49** | Baixar traduções (Acesso Offline) | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 8)** |
| **RF26** | Recuperar senha | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 9)** |
| **RF01** | Criar atividade educacional | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 7)** |
| **RF02** | Listar atividades educacional | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 7)** |
| **RF03** | Responder atividade educacional | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 8)** |
| **RF04** | Visualizar resultado da atividade | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 8)** |
| **RF05** | Editar atividade educacional | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 9)** |
| **RF06** | Excluir atividade educacional | 5 | 4 | 1.25 | Q2 - Grandes Projetos | **SIM (MVP - Iteração 9)** |
| **RF07** | Criar insígnia | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 10)** |
| **RF08** | Editar insígnia | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 10)** |
| **RF09** | Excluir insígnias | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 10)** |
| **RF20** | Banir usuário | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 9)** |
| **RF27** | Criar denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | **NÃO** |
| **RF21** | Atribuir cargos de usuário | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 9)** |
| **RF22** | Editar cargos de usuário | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 9)** |
| **RF23** | Listar cargos de usuário | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 9)** |
| **RF24** | Desatribuir cargos de usuário | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 9)** |
| **RF28** | Atualizar status de denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | **NÃO** |
| **RF15** | Criar eventos | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração Adicional)** |
| **RF16** | Editar eventos | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração Adicional)** |
| **RF17** | Listar eventos | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração Adicional)** |
| **RF18** | Excluir eventos | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração Adicional)** |
| **RF29** | Listar denúncias | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | **NÃO** |
| **RF19** | Compartilhar eventos | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração Adicional)** |
| **RF45** | Listar histórico de traduções | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 11)** |
| **RF46** | Favoritar tradução | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 11)** |
| **RF47** | Listar traduções favoritadas | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 11)** |
| **RF30** | Criar categoria de denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | **NÃO** |
| **RF44** | Editar usuário | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 11)** |
| **RF48** | Listar insígnias | 3 | 2 | 1.50 | Q3 - Tarefas Comp. | **SIM (Iteração 10)** |
| **RF31** | Editar categoria de denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | **NÃO** |
| **RF32** | Listar categorias de denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | **NÃO** |
| **RF33** | Excluir categoria de denúncia | 2 | 3 | 0.67 | Q3 - Tarefas Comp. | **NÃO** |
| **RF10** | Criar publicação | 2 | 5 | 0.40 | Q4 - Consumidores Tempo | **NÃO** |
| **RF11** | Editar publicação | 2 | 5 | 0.40 | Q4 - Consumidores Tempo | **NÃO** |
| **RF12** | Listar publicações | 2 | 5 | 0.40 | Q4 - Consumidores Tempo | **NÃO** |
| **RF13** | Excluir publicação | 2 | 5 | 0.40 | Q4 - Consumidores Tempo | **NÃO** |
| **RF14** | Interagir com a publicação | 2 | 5 | 0.40 | Q4 - Consumidores Tempo | **NÃO** |
