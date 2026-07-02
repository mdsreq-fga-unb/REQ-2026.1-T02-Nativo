# Evidências da Iteração 5

[Voltar para o Cronograma](../cronograma.md#visao-geral-do-cronograma)

## Atividade de Engenharia de Requisitos

**Declaração, representação, verificação e validação:** detalhamento das UCs, prototipação, verificação por DoR, validação por DoD e validações com cliente para vídeos e áudios.

## Evidências

### DoR registrado nas UCs { .evidence-link-heading }

- [DoR verificável da UC10 - Gerenciar Acervo de Vídeos](../casos-uso/uc10.md#10-aplicacao-do-dor)
- [DoR verificável da UC11 - Gerenciar Acervo de Áudios](../casos-uso/uc11.md#10-aplicacao-do-dor)

### Prototipação registrada nas UCs { .evidence-link-heading }

- [Protótipo da UC10 - Gerenciar Acervo de Vídeos](../casos-uso/uc10.md#9-prototipo)
- [Protótipo da UC11 - Gerenciar Acervo de Áudios](../casos-uso/uc11.md#9-prototipo)

### DoD registrado nos PRs { .evidence-link-heading }

Os links abaixo redirecionam para os Pull Requests onde o Definition of Done foi aplicado e verificado para cada UC.

- **UC10 - Gerenciar Acervo de Vídeos:** _adicionar link do PR_
- **UC11 - Gerenciar Acervo de Áudios:** _adicionar link do PR_

### Apresentação de Funcionalidades e Validação com a Cliente

**Objetivo:** Alinhar as próximas metas de desenvolvimento da equipe, demonstrar a funcionalidade de upload de mídias e validar o escopo de arquivos anexados nas traduções.

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/PGT2uSKav5I" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Apresentação de Funcionalidades e Validação com a Cliente"></iframe>
</div>

**Resumo da Reunião:** A reunião alinhou as próximas metas de desenvolvimento e validou tecnicamente a funcionalidade de upload de mídias. A equipe explicou que as mídias são salvas no Firebase Storage e que as URLs geradas são armazenadas no banco de dados. A cliente validou que cada tradução cadastrada deve suportar inclusão simultânea de foto, vídeo e áudio.

### Validação de Upload e Associação de Mídias

**Objetivo:** Validar os fluxos de associação, desvinculação e exclusão de mídias vinculadas às traduções, contemplando as UCs 10 e 11.

<div style="margin: 20px 0; border-radius: 8px; overflow: hidden; background-color: #111; display: flex; justify-content: center; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
  <iframe src="https://www.youtube.com/embed/cjg4QGUJ9zg" width="640" height="360" frameborder="0" scrolling="no" allowfullscreen title="Validação de Upload e Associação de Mídias"></iframe>
</div>

**Resumo da Validação:** A equipe apresentou à cliente o fluxo de mídias relacionadas à tradução, incluindo exibição de arquivos vinculados, adição de novas mídias, seleção de áudio ou vídeo e confirmação da associação. Também foram esclarecidas as diferenças entre desvincular uma mídia de uma tradução e excluí-la permanentemente do acervo, além da restrição dessas ações aos perfis autorizados.
