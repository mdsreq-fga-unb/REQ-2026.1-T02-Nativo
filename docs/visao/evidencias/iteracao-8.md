# Evidências da Iteração 8

[Voltar para o Cronograma](../cronograma.md#visao-geral-do-cronograma)

## Atividade de Engenharia de Requisitos

**Declaração, representação, verificação e validação:** detalhamento das UCs, prototipação, verificação por DoR, validação por DoD e validações com cliente para perfil, acessos e recuperação de senha.

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

- **UC12 - Gerenciar Perfil Pessoal:** [_Link do PR_](https://github.com/Requisitos-Anawe/Nativo/pull/7)
- **UC06 - Gerenciar Acessos e Permissões:** [_Link do PR_](https://github.com/Requisitos-Anawe/Nativo/pull/14)
- **UC07 - Redefinir Senha de Acesso:** [_Link do PR_](https://github.com/Requisitos-Anawe/Nativo/pull/5)

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

### Ajuste na Visualização de Insígnias do Perfil

Após a validação da UC12, a equipe ajustou a apresentação das insígnias no perfil para melhorar a leitura das conquistas do usuário.

<div class="evidence-image-grid">
  <figure>
    <img src="../image-5.png" alt="Ajuste na visualização de insígnias do perfil">
    <figcaption>Ajuste na visualização de insígnias do perfil.</figcaption>
  </figure>
</div>

### Alinhamento Final de Escopo e Cronograma

**Objetivo:** Revisar o cronograma após a antecipação da entrega final e confirmar o escopo restante do MVP.

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/ico2EgFYpps" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Alinhamento Final de Escopo e Cronograma"></iframe>
</div>

**Resumo da Reunião:** A equipe revisou o cronograma após a antecipação da entrega final e discutiu se seria necessário retirar alguma funcionalidade do MVP. Foi decidido manter o escopo previsto, pois a UC12 já estava encaminhada, a gamificação/insígnias estava praticamente pronta e as UCs 06 e 07 seriam validadas e finalizadas na próxima iteração. Também ficou combinada uma nova validação com a cliente para apresentar acesso offline, perfil do usuário, administração de acesso e demais funcionalidades pendentes. A equipe ainda alinhou que a semana seguinte seria usada como fase de transição, com testes finais, geração do APK, correções e preparação da entrega.
