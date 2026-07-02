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
| RNF01 | Tempo de busca de tradução | O sistema deve apresentar o resultado de uma tradução em até 2 segundos para 95% das requisições realizadas com conexão mínima de 5 Mbps. | Desempenho |
| RNF02 | Navegação da tradução | O usuário deve conseguir acessar a funcionalidade de tradução em no máximo 2 interações a partir da tela inicial. | Usabilidade |
| RNF03 | Navegação da rede social | O usuário deve conseguir acessar publicações da comunidade em no máximo 3 cliques a partir da tela inicial. | Usabilidade |
| RNF04 | Suporte simultâneo geral | O sistema deve suportar no mínimo 100 usuários simultâneos nas funcionalidades assíncronas mantendo tempo médio de resposta inferior a 3 segundos. | Desempenho |
| RNF05 | Tempo de carregamento | Todas as telas do aplicativo devem carregar em até 4 segundos em dispositivos Android intermediários sob conexão de internet com largura de banda mínima de 100 kbps e latência máxima de 300 ms. | Desempenho |
| RNF06 | Funcionamento offline | O aplicativo deve permitir acesso às traduções previamente salvas mesmo sem conexão com a internet. | Confiabilidade |
| RNF07 | Backup de dados | O sistema deve realizar backup automático da base de dados ao menos uma vez a cada 24 horas. | Confiabilidade |
| RNF08 | Compatibilidade Android | O aplicativo deve ser compatível com dispositivos Android a partir da versão 10.0. | Confiabilidade |
| RNF09 | Escalabilidade de mídia | O sistema deve suportar upload de arquivos de mídia de até 100 MB. | Desempenho |

## 7.3 Matriz-síntese de Rastreabilidade

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

**Observação:** Apesar de não estarem mencionados em cada uma das características de produto, os requisitos **RNF04**, **RNF05**, **RNF07** e **RNF08** (referentes a desempenho, confiabilidade e compatibilidade global) aplicam-se transversalmente a todas as Características de Produto, Requisitos Funcionais e Casos de Uso, por definirem a base da solução. Assim, embora não estejam repetidos em cada linha da matriz de rastreabilidade, eles devem ser considerados válidos, aplicáveis e rastreáveis para todo o produto.

De maneira análoga, o requisito **RNF09** (Escalabilidade de mídia) possui aplicação transversal às características **CP2** e **CP5** , regendo o limite de upload para todas as operações de arquivos vinculadas a esses módulos sem a necessidade de repetição individualizada.
