## Vídeo da Apresentação

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="LINK-----------------------AQUI" width="640" height="360" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen title="Apresentação unidade 3"></iframe>
</div>

## Reuniões e Validações com a Cliente

Abaixo estão os registros e players de gravação de reuniões realizadas com a cliente

### Revisão de Casos de Uso e Regras de Moderação 

**Objetivo:** Validar os fluxos de interação, permissões de sistema e funcionalidades de tradução da plataforma.

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/-R0w7m4u6xA" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Reunião Requisitos Nativo-20260414_190754-Gravação de Reunião.mp4"></iframe>
</div>

**Resumo da Reunião:** A reunião teve como foco principal a revisão dos casos de uso de um sistema, para receber o feedback e a validação de Alexia. Durante a apresentação, a equipe discutiu o gerenciamento de insígnias, com Alexia destacando a necessidade de estabelecer categorias pré-definidas para que o código possa rastrear adequadamente o progresso do usuário. Outro ponto importante do debate foi a definição das permissões de acesso e moderação, onde ficou acordado que os moderadores avaliarão as denúncias de publicações e traduções, mas a ação final de banir um usuário será uma responsabilidade exclusiva do administrador. A equipe também definiu que o formulário de denúncias incluirá opções pré-definidas, uma categoria "outros" e uma caixa de texto opcional para mais detalhes, além de decidirem alocar a área de traduções favoritas no perfil do usuário.

### Validação de Protótipo e Identidade Visual

**Objetivo:** Apresentar e validar as telas do aplicativo com a cliente, focando no novo branding, usabilidade e na definição de campos de login e cadastro.

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/QmS1St5v31s" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Reunião Requisitos Nativo-20260414_190754-Gravação de Reunião.mp4"></iframe>
</div>

**Resumo da Reunião:** A reunião concentrou-se na apresentação do novo protótipo do aplicativo. Exibimos telas lado a lado com a versão antiga para evidenciar as mudanças de design e organização. A equipe e Alexia debateram detalhes do cadastro e login, definindo que o e-mail será a única forma de login, mas mantendo o campo de CPF no cadastro sem ser obrigatório. Outros pontos discutidos incluíram a adição opcional de foto de perfil no momento do cadastro e a implementação do login via Google. Johnnatan também apresentou telas de perfil do usuário (com histórico e favoritos),a tela de informações, a tela central de tradução e o feed social que destaca eventos no topo. Alexia aprovou as telas e o direcionamento visual do projeto. 
**Link do figma:** https://www.figma.com/design/uTKEQkRbmnBttLtu5jbt1w/Nativo?node-id=18-477&p=f

### Apresentação de Funcionalidades e Validação com a Cliente

**Objetivo:** Alinhar as próximas metas de desenvolvimento da equipe, demonstrar a funcionalidade de upload de mídias e validar o escopo de arquivos anexados nas traduções.

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/PGT2uSKav5I" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Reunião Requisitos Nativo-20260414_190754-Gravação de Reunião.mp4"></iframe>
</div>

**Resumo da Reunião:** A reunião teve como foco o alinhamento das entregas e a validação técnica com a cliente, Alexia. Inicialmente, foi apresentado o planejamento das próximas etapas, destacando a finalização dos casos de uso, a criação de templates de Definition of Ready (DOR) no repositório e o desenvolvimento do gerenciamento dos acervos de áudio e vídeo. Em seguida, foi demonstrado o andamento da tela de cadastro e a funcionalidade de upload, explicando a arquitetura adotada: as mídias são salvas no Firebase Storage e as URLs geradas são armazenadas no banco de dados. Durante essa demonstração, Alexia validou um requisito importante, confirmando que cada tradução cadastrada no sistema deve suportar a inclusão simultânea de foto, vídeo e áudio.

### Validação com a Cliente da área de atividades

![print alexia validação](wpp.png)
**Comunicação por WhatsApp:** A cliente teve que cancelar a nossa reunião semanal, então a validação ocorreu por meio do Whatsapp. Segue as fotos da aplicação (que estão no PR):
![alt text](ativ1.png)
![alt text](ativ2.jpeg)
![alt text](ativ3.jpeg)

### Implementações aguardando validação
**Refatoração de telas:**  Já havíamos mostrado o protótipo no figma para a cliente Alexia, e ela havia aprovado. Assim, implementamos e estamos no aguardo da próxima reunião para validação.

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <img src="../login.png" alt="Login" style="width: 30%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <img src="../cadastro.png" alt="Cadastro" style="width: 30%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <img src="../usuario.png" alt="Perfil" style="width: 30%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <img src="../traducao.png" alt="Tradução" style="width: 30%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <img src="../infos.png" alt="Informações" style="width: 30%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
</div>