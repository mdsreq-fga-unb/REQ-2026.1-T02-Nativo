## 7.1 Lista de Requisitos Funcionais (Especificação Suplementar)

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
| <span id="req-rf10" class="rf-anchor">RF10</span> | Criar publicação | Permitir que todos os usuários publiquem conteúdos na área de feed. |
| <span id="req-rf11" class="rf-anchor">RF11</span> | Editar publicação | Permitir que os usuários editem suas próprias publicações no feed. |
| <span id="req-rf12" class="rf-anchor">RF12</span> | Listar publicações | Permitir que os usuários visualizem o histórico de postagens no feed comunitário. |
| <span id="req-rf13" class="rf-anchor">RF13</span> | Excluir publicação | Permitir que o autor da publicação e moderadores excluam uma postagem. |
| <span id="req-rf14" class="rf-anchor">RF14</span> | Interagir com a publicação | Permitir que todos os usuários interajam (ex: curtir/comentar) com as publicações postadas. |
| <span id="req-rf15" class="rf-anchor">RF15</span> | Criar eventos | Permitir que usuários criem eventos da comunidade na plataforma. |
| <span id="req-rf16" class="rf-anchor">RF16</span> | Editar eventos | Permitir que os criadores de um evento alterem suas informações e datas. |
| <span id="req-rf17" class="rf-anchor">RF17</span> | Listar eventos | Permitir que os usuários visualizem a agenda de eventos da comunidade. |
| <span id="req-rf18" class="rf-anchor">RF18</span> | Excluir eventos | Permitir que o criador do evento e moderadores excluam o evento do sistema. |
| <span id="req-rf19" class="rf-anchor">RF19</span> | Compartilhar eventos | Permitir que o usuário compartilhe eventos da comunidade para outras redes ou usuários. |

---

### (OE2) Assegurar a integridade e segurança do acervo cultural

**CP3 - Controle de usuário**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| <span id="req-rf20" class="rf-anchor">RF20</span> | Banir usuário | Permitir que administradores banam usuários infratores da aplicação. |
| <span id="req-rf21" class="rf-anchor">RF21</span> | Atribuir cargos de usuário | Permitir que administradores atribuam permissões específicas (ex: professor, moderador) aos usuários. |
| <span id="req-rf22" class="rf-anchor">RF22</span> | Editar cargos de usuário | Permitir que administradores modifiquem os níveis de acesso de um usuário existente. |
| <span id="req-rf23" class="rf-anchor">RF23</span> | Listar cargos de usuário | Permitir que administradores visualizem os cargos disponíveis e quem os ocupa. |
| <span id="req-rf24" class="rf-anchor">RF24</span> | Desatribuir cargos de usuário | Permitir que administradores removam um cargo atribuído a um usuário. |
| <span id="req-rf25" class="rf-anchor">RF25</span> | Candidatar-se a professor | Permitir que usuários solicitem oficialmente o papel de professor no sistema. |
| <span id="req-rf26" class="rf-anchor">RF26</span> | Recuperar senha | Permitir que o usuário recupere o acesso à sua conta via redefinição de senha por e-mail. |

**CP4 - Sistema de denúncias**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| <span id="req-rf27" class="rf-anchor">RF27</span> | Criar denúncia | Permitir que os usuários relatem publicações, comportamentos indevidos ou traduções incorretas. |
| <span id="req-rf28" class="rf-anchor">RF28</span> | Atualizar status de denúncia | Permitir que moderadores e administradores alterem o status (ex: em análise, resolvida) de uma denúncia. |
| <span id="req-rf29" class="rf-anchor">RF29</span> | Listar denúncias | Permitir que moderadores e administradores visualizem todas as denúncias realizadas na aplicação. |
| <span id="req-rf30" class="rf-anchor">RF30</span> | Criar categoria de denúncia | Permitir que administradores criem novas classificações para organizar os tipos de denúncia. |
| <span id="req-rf31" class="rf-anchor">RF31</span> | Editar categoria de denúncia | Permitir que administradores alterem o título ou descrição de uma categoria existente. |
| <span id="req-rf32" class="rf-anchor">RF32</span> | Listar categorias de denúncia | Permitir que o sistema exiba as categorias disponíveis no momento do preenchimento de uma denúncia. |
| <span id="req-rf33" class="rf-anchor">RF33</span> | Excluir categoria de denúncia | Permitir que administradores removam categorias de denúncias obsoletas. |

---

### (OE3) Enriquecer a experiência do usuário na aplicação

**CP5 - Suporte a Multimídia nas Traduções**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| <span id="req-rf34" class="rf-anchor">RF34</span> | Cadastrar vídeo | Permitir o cadastro de vídeos, pelos administradores e moderadores, ao sistema. |
| <span id="req-rf35" class="rf-anchor">RF35</span> | Exibir vídeo | Permitir que os usuários visualizem os vídeos vinculados a uma tradução. |
| <span id="req-rf36" class="rf-anchor">RF36</span> | Excluir vídeo | Permitir que os moderadores apaguem definitivamente um vídeo da base de dados. |
| <span id="req-rf37" class="rf-anchor">RF37</span> | Associar vídeo | Permitir que administradores e moderadores vinculem vídeos cadastrados a uma tradução específica. |
| <span id="req-rf38" class="rf-anchor">RF38</span> | Desassociar vídeo | Permitir que administradores e moderadores removam a vinculação entre um vídeo e uma tradução. |
| <span id="req-rf39" class="rf-anchor">RF39</span> | Cadastrar áudio | Permitir o cadastro de arquivos de áudio, pelos administradores e moderadores, no sistema. |
| <span id="req-rf40" class="rf-anchor">RF40</span> | Reproduzir áudio | Permitir que os usuários reproduzam os áudios vinculados às traduções. |
| <span id="req-rf41" class="rf-anchor">RF41</span> | Excluir áudio | Permitir que os moderadores apaguem definitivamente um arquivo de áudio da base de dados. |
| <span id="req-rf42" class="rf-anchor">RF42</span> | Associar áudio | Permitir que administradores e moderadores vinculem áudios cadastrados a uma tradução específica. |
| <span id="req-rf43" class="rf-anchor">RF43</span> | Desassociar áudio | Permitir que administradores e moderadores removam a vinculação entre um áudio e uma tradução. |

**CP6 - Perfil de Usuário**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| <span id="req-rf44" class="rf-anchor">RF44</span> | Editar usuário | Permitir que os usuários editem as informações pessoais de seus perfis. |
| <span id="req-rf45" class="rf-anchor">RF45</span> | Listar histórico de traduções | Permitir que os usuários visualizem o histórico de traduções realizadas, com data e resultado. |
| <span id="req-rf46" class="rf-anchor">RF46</span> | Favoritar tradução | Permitir que o usuário marque traduções específicas como favoritas. |
| <span id="req-rf47" class="rf-anchor">RF47</span> | Listar traduções favoritadas | Permitir que o usuário visualize rapidamente a lista de suas traduções marcadas como favoritas. |
| <span id="req-rf48" class="rf-anchor">RF48</span> | Listar insígnias | Permitir que os usuários visualizem as insígnias conquistadas em seus perfis. |

**CP7 - Sincronização e Acesso Offline de Traduções**

| ID | Nome do requisito | Descrição |
| :--- | :--- | :--- |
| <span id="req-rf49" class="rf-anchor">RF49</span> | Baixar traduções | Permitir que os usuários façam o download das traduções textuais e auditivas para acesso offline. |

## 7.2 Lista de Requisitos Não Funcionais (Especificação Suplementar)

Os requisitos não funcionais definem critérios de qualidade do sistema Nativo. A tabela a seguir apresenta os RNFs com sua categoria segundo a sigla URPS (Usabilidade, Confiabilidade, Desempenho, Segurança).

| ID | Nome | Descrição | Categoria (URPS) |
|---|---|---|---|
| <span id="req-rnf01" class="rf-anchor">RNF01</span> | Tempo de busca de tradução | O sistema deve apresentar o resultado de uma tradução em até 2 segundos para 95% das requisições realizadas com conexão mínima de 5 Mbps. | Desempenho |
| <span id="req-rnf02" class="rf-anchor">RNF02</span> | Navegação da tradução | O usuário deve conseguir acessar a funcionalidade de tradução em no máximo 2 interações a partir da tela inicial. | Usabilidade |
| <span id="req-rnf03" class="rf-anchor">RNF03</span> | Navegação da rede social | O usuário deve conseguir acessar publicações da comunidade em no máximo 3 cliques a partir da tela inicial. | Usabilidade |
| <span id="req-rnf04" class="rf-anchor">RNF04</span> | Suporte simultâneo geral | O sistema deve suportar no mínimo 100 usuários simultâneos nas funcionalidades assíncronas mantendo tempo médio de resposta inferior a 3 segundos. | Desempenho |
| <span id="req-rnf05" class="rf-anchor">RNF05</span> | Tempo de carregamento | Todas as telas do aplicativo devem carregar em até 4 segundos em dispositivos Android intermediários sob conexão de internet com largura de banda mínima de 100 kbps e latência máxima de 300 ms. | Desempenho |
| <span id="req-rnf06" class="rf-anchor">RNF06</span> | Funcionamento offline | O aplicativo deve permitir acesso às traduções previamente salvas mesmo sem conexão com a internet. | Confiabilidade |
| <span id="req-rnf07" class="rf-anchor">RNF07</span> | Backup de dados | O sistema deve realizar backup automático da base de dados ao menos uma vez a cada 24 horas. | Confiabilidade |
| <span id="req-rnf08" class="rf-anchor">RNF08</span> | Compatibilidade Android | O aplicativo deve ser compatível com dispositivos Android a partir da versão 10.0. | Confiabilidade |
| <span id="req-rnf09" class="rf-anchor">RNF09</span> | Escalabilidade de mídia | O sistema deve suportar upload de arquivos de mídia de até 100 MB. | Desempenho |

## 7.3 Lista de Regras de Negócio

As regras de negócio consolidam restrições, condições e políticas do domínio que orientam a execução dos requisitos e dos casos de uso.

| ID | Regra de negócio |
| :--- | :--- |
| <span id="req-rn01" class="rf-anchor">RN01</span> | Apenas usuários com perfil de Professor criam atividades educacionais, as visualizam, editam e excluem. |
| <span id="req-rn02" class="rf-anchor">RN02</span> | A criação de atividade exige título e no mínimo uma questão estruturada com enunciado, no mínimo duas alternativas e exatamente uma alternativa correta vinculada às opções. |
| <span id="req-rn03" class="rf-anchor">RN03</span> | Atividades sem questões válidas são inativadas para listagem e resolução. |
| <span id="req-rn04" class="rf-anchor">RN04</span> | A alternativa correta é ocultada da interface. |
| <span id="req-rn05" class="rf-anchor">RN05</span> | O processamento da pontuação das atividades é realizado após a submissão de todas as questões obrigatórias. |
| <span id="req-rn06" class="rf-anchor">RN06</span> | O registro de entidades exige preenchimento de campos obrigatórios: nome, objetivo e imagem para insígnias; título, data futura, horário, local e descrição para eventos; e texto ou mídia para publicações. |
| <span id="req-rn07" class="rf-anchor">RN07</span> | As insígnias referentes à taxa de acertos de uma atividade possuem dependência direta, devendo ser excluídas caso a respectiva atividade seja removida do sistema. |
| <span id="req-rn08" class="rf-anchor">RN08</span> | A edição e exclusão de publicações no feed e de eventos são permitidas ao usuário autor do registro e ao moderador. |
| <span id="req-rn09" class="rf-anchor">RN09</span> | O sistema aplica o marcador textual Editado em publicações que sofreram alteração após o envio original. |
| <span id="req-rn10" class="rf-anchor">RN10</span> | A ordenação exibe publicações e históricos de tradução em ordem cronológica decrescente, e eventos comunitários em ordem cronológica crescente. |
| <span id="req-rn11" class="rf-anchor">RN11</span> | A alteração de nível de acesso entra em vigor imediatamente nas regras de sessão, e o banimento inativa as credenciais do usuário, o que é reversível. |
| <span id="req-rn12" class="rf-anchor">RN12</span> | O sistema bloqueia a autoexclusão ou o autobanimento de um Administrador caso não exista outro perfil de mesma permissão ativo na plataforma. |
| <span id="req-rn13" class="rf-anchor">RN13</span> | A recuperação de senha exibe mensagens genéricas para evitar enumeração de contas, exige intervalo de 3 minutos para reenvio e invalida códigos anteriores associados ao usuário. |
| <span id="req-rn14" class="rf-anchor">RN14</span> | A alteração de perfil restringe-se aos dados da própria conta e exige correspondência exata nos caracteres dos campos de nova senha e confirmação. |
| <span id="req-rn15" class="rf-anchor">RN15</span> | A denúncia exige a seleção de categoria existente, inicia com status Aberta, e sua alteração para Resolvida ou Improcedente é exclusiva de Administradores. |
| <span id="req-rn16" class="rf-anchor">RN16</span> | O sistema aborta o registro da denúncia se o conteúdo alvo for excluído da plataforma antes da confirmação da submissão. |
| <span id="req-rn17" class="rf-anchor">RN17</span> | Apenas Administradores gerenciam categorias de denúncia. |
| <span id="req-rn18" class="rf-anchor">RN18</span> | Apenas Administradores e Professores gerenciam mídias de vídeo e áudio. |
| <span id="req-rn19" class="rf-anchor">RN19</span> | O upload restringe vídeos a formatos MP4, MOV, AVI até 30MB, e áudios a formatos MP3, WAV, OGG até 10MB. |
| <span id="req-rn20" class="rf-anchor">RN20</span> | O cadastro de mídias exige vinculação a uma tradução existente; a desassociação remove apenas esse vínculo, mantendo o arquivo preservado no acervo. |
| <span id="req-rn21" class="rf-anchor">RN21</span> | O sistema bloqueia a inclusão duplicada na lista de favoritos e oculta traduções inativadas ou removidas da base de dados. |
| <span id="req-rn22" class="rf-anchor">RN22</span> | O pacote de sincronização offline omite as mídias audiovisuais e exige armazenamento livre no dispositivo. |
| <span id="req-rn23" class="rf-anchor">RN23</span> | A candidatura a Professor exige justificativa, é restrita a usuários sem este perfil e registrada com status Pendente, bloqueando novos envios do mesmo usuário simultaneamente. |
| <span id="req-rn24" class="rf-anchor">RN24</span> | A alteração de status da solicitação de candidatura para aprovação ou rejeição é de execução exclusiva dos Administradores. |
