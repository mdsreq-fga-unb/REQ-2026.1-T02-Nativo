# Evidências da Iteração 8

[Voltar para o Cronograma](../cronograma.md#visao-geral-do-cronograma)

## Atividade de Engenharia de Requisitos

**Gestão de mudanças, detalhamento final e rastreabilidade:** evidências de perfil, favoritos, histórico, acesso e recuperação de senha.

## Evidências

### DoR registrado nas UCs { .evidence-link-heading }

- [DoR verificável da UC12 - Gerenciar Perfil Pessoal](../casos-uso/uc12.md#10-aplicacao-do-dor)
- [DoR verificável da UC06 - Gerenciar Acessos e Permissões](../casos-uso/uc06.md#10-aplicacao-do-dor)
- [DoR verificável da UC07 - Redefinir Senha de Acesso](../casos-uso/uc07.md#10-aplicacao-do-dor)

### Prototipação registrada nas UCs { .evidence-link-heading }

- [Protótipo da UC12 - Gerenciar Perfil Pessoal](../casos-uso/uc12.md#9-prototipo)
- [Protótipo da UC06 - Gerenciar Acessos e Permissões](../casos-uso/uc06.md#9-prototipo)
- [Protótipo da UC07 - Redefinir Senha de Acesso](../casos-uso/uc07.md#9-prototipo)

### DoD registrado nos PRs { .evidence-link-heading }

Os links abaixo redirecionam para os Pull Requests onde o Definition of Done foi aplicado e verificado para cada UC.

- **UC12 - Gerenciar Perfil Pessoal:** _adicionar link do PR_
- **UC06 - Gerenciar Acessos e Permissões:** _adicionar link do PR_
- **UC07 - Redefinir Senha de Acesso:** _adicionar link do PR_

### Revisão de Casos de Uso e Regras de Moderação

**Objetivo:** Retomar decisões de permissão, moderação e perfil para orientar o fechamento das funcionalidades implementadas nesta etapa.

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/-R0w7m4u6xA" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Revisão de Casos de Uso e Regras de Moderação"></iframe>
</div>

**Resumo da Reunião:** Para esta iteração, o registro foi usado como referência para fechar funcionalidades ligadas ao perfil e ao controle de acesso. A decisão de alocar traduções favoritas no perfil orientou a implementação de favoritos, histórico e organização das informações do usuário. As definições sobre permissões também serviram de base para separar responsabilidades entre moderadores e administradores, mantendo a avaliação de denúncias com moderadores e a ação de banimento ao administrador. Assim, as funcionalidades finais de perfil, permissões e recuperação de senha foram alinhadas às regras previamente validadas com a cliente.

### Decisões sobre a UC12 - Gerenciar Perfil Pessoal

**Objetivo:** Registrar as decisões específicas tomadas para fechar o escopo da UC12, principalmente sobre perfil, histórico de traduções e traduções favoritas.

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/A7SVhM5Egpk" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Decisões sobre a UC12 - Gerenciar Perfil Pessoal"></iframe>
</div>

**Resumo da Decisão:** A reunião definiu como a equipe iria implementar a UC12. Foram alinhados os dados editáveis do perfil, como nome, data de nascimento, e-mail e foto. Também ficou decidido que o fluxo deveria incluir tanto favoritar traduções pela tela de tradução quanto listar as favoritas no perfil. A equipe ainda registrou cuidados ligados à LGPD, especialmente sobre CPF, finalidade de uso dos dados e termo de uso.

### Validação da UC12 com a Cliente

**Objetivo:** Apresentar à cliente o andamento da UC12 e coletar ajustes sobre perfil, histórico de traduções, favoritos e interface de tradução.

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/ftsr0s4Cs_M" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Validação da UC12 com a Cliente"></iframe>
</div>

**Resumo da Reunião:** A equipe apresentou à cliente o andamento da UC12, incluindo histórico de traduções, traduções favoritas e edição de perfil. A cliente validou a proposta geral, mas sugeriu ajustes de interface, como deixar os cards de histórico e favoritos mais resumidos e evitar poluição visual. Também foi discutido que a edição de perfil funcionaria melhor como página, e não como modal. A reunião ainda registrou decisões sobre remover opções sem uso na tela de tradução e ajustar ícones de favorito e áudio.

### Alinhamento Final de Escopo e Cronograma

**Objetivo:** Revisar o cronograma após a antecipação da entrega final e confirmar o escopo restante do MVP.

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/ico2EgFYpps" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Alinhamento Final de Escopo e Cronograma"></iframe>
</div>

**Resumo da Reunião:** A equipe revisou o cronograma após a antecipação da entrega final e discutiu se seria necessário retirar alguma funcionalidade do MVP. Foi decidido manter o escopo previsto, pois a UC12 já estava encaminhada, a gamificação/insígnias estava praticamente pronta e a UC06 ainda seria concluída dentro do prazo. Também ficou combinada uma nova validação com a cliente para apresentar acesso offline, perfil do usuário, administração de acesso e demais funcionalidades pendentes. A equipe ainda alinhou que a semana seguinte seria usada como fase de transição, com testes finais, geração do APK, correções e preparação da entrega.

### Implementações aguardando validação

**Refatoração de telas:** O protótipo no Figma já havia sido apresentado e aprovado pela cliente. Assim, a equipe implementou as telas e ficou no aguardo da próxima reunião para validação.

<div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
  <img src="../../../entregas/login.png" alt="Login" style="width: 30%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <img src="../../../entregas/cadastro.png" alt="Cadastro" style="width: 30%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <img src="../../../entregas/usuario.png" alt="Perfil" style="width: 30%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <img src="../../../entregas/traducao.png" alt="Tradução" style="width: 30%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
  <img src="../../../entregas/infos.png" alt="Informações" style="width: 30%; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
</div>
