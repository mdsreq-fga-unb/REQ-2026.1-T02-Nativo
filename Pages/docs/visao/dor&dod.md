
# 9 · DoR e DoD

Para apoiar a condução iterativa e incremental do projeto Nativo, foram definidos critérios de Definition of Ready (DoR) e Definition of Done (DoD). Esses acordos tornam explícito quando um item está suficientemente preparado para ser desenvolvido e quando uma entrega pode ser considerada concluída.

## 9.1 Definition of Ready (DoR)

O Definition of Ready estabelece os critérios mínimos para que um Caso de Uso ou cenário seja considerado apto a entrar em uma iteração de desenvolvimento. No projeto Nativo, um item só será considerado “Ready” quando possuir documentação suficiente, rastreabilidade explícita, regras compreendidas, validação registrada e escopo compatível com a iteração planejada.

### Checklist de DoR

| ID | Critério de aceite do DoR | Evidência obrigatória | Forma de verificação |
|---|---|---|---|
| DoR01 | O Caso de Uso possui identificador único, título, versão e data de atualização. | Documento do Caso de Uso com campos preenchidos. | Verificar se o documento contém ID, nome, versão e data. |
| DoR02 | O Caso de Uso possui atores claramente identificados. | Seção “Atores” preenchida. | Verificar se há pelo menos um ator principal e, quando necessário, atores secundários. |
| DoR03 | O Caso de Uso possui pré-condições descritas. | Seção “Pré-condições” preenchida. | Verificar se as condições necessárias para iniciar o fluxo estão registradas. |
| DoR04 | O Caso de Uso possui pós-condições descritas. | Seção “Pós-condições” preenchida. | Verificar se o estado esperado após a execução do fluxo está registrado. |
| DoR05 | O fluxo principal está descrito em passos numerados e sequenciais. | Seção “Fluxo principal” preenchida. | Verificar se o fluxo possui início, ações do usuário/sistema e resultado final. |
| DoR06 | Os fluxos alternativos ou de exceção estão descritos quando existirem variações no comportamento esperado. | Seção “Fluxos alternativos/exceções” preenchida ou marcada como “não se aplica”. | Verificar se erros, bloqueios, permissões negadas ou caminhos alternativos foram considerados. |
| DoR07 | O Caso de Uso possui critérios de aceitação objetivos. | Lista de critérios de aceitação associada ao Caso de Uso. | Verificar se cada critério pode ser marcado como atendido ou não atendido durante validação. |
| DoR08 | As regras de negócio necessárias estão registradas. | Seção “Regras de negócio” preenchida. | Verificar se permissões, restrições, validações e condições especiais estão descritas. |
| DoR09 | O Caso de Uso está rastreado na Matriz de Rastreabilidade. | Linha correspondente na matriz. | Verificar se o Caso de Uso possui vínculo com pelo menos um OE, CP, RF e/ou RNF. |
| DoR10 | Os requisitos funcionais e não funcionais relacionados estão identificados. | Campo “Requisitos relacionados” preenchido. | Verificar se o documento cita os IDs dos RFs e RNFs associados. |
| DoR11 | Quando houver impacto de interface, existe protótipo ou wireframe correspondente. | Link ou referência para protótipo/wireframe. | Verificar se o protótipo representa a tela ou fluxo afetado. Caso não haja impacto visual, registrar “não se aplica”. |
| DoR12 | As dependências técnicas estão identificadas. | Seção “Dependências técnicas” preenchida. | Verificar se há indicação de dependências com backend, frontend, banco, autenticação, mídia, permissões ou serviços externos. |
| DoR13 | Os riscos técnicos e funcionais foram analisados. | Seção “Riscos” preenchida. | Verificar se há pelo menos uma avaliação de risco ou registro explícito de ausência de riscos relevantes. |
| DoR14 | O Caso de Uso possui escopo compatível com uma iteração. | Estimativa ou justificativa de fatiamento. | Verificar se o item pode ser implementado dentro da iteração; caso contrário, deve ser dividido em cenários menores. |
| DoR15 | A cliente ou representante validou o entendimento do Caso de Uso. | Registro de validação com data, responsável e meio utilizado. | Verificar se há ata, comentário, mensagem, reunião registrada ou aprovação documentada. |

Um Caso de Uso só será considerado pronto para desenvolvimento quando todos os critérios aplicáveis do DoR estiverem marcados como atendidos. Critérios não aplicáveis devem ser justificados no próprio documento do Caso de Uso.

## 9.2 Definition of Done (DoD)

O Definition of Done define os critérios necessários para que uma funcionalidade seja considerada concluída pela equipe. No projeto Nativo, uma funcionalidade só será considerada “Done” quando estiver implementada, integrada, testada, documentada, rastreada e validada conforme os critérios definidos para o Caso de Uso.

### Checklist de DoD

| ID | Critério de aceite do DoD | Evidência obrigatória | Forma de verificação |
|---|---|---|---|
| DoD01 | A funcionalidade foi implementada conforme o Caso de Uso aprovado. | Pull Request ou commit associado ao Caso de Uso. | Verificar se o comportamento implementado corresponde ao fluxo principal descrito. |
| DoD02 | Os fluxos alternativos e exceções previstos foram implementados. | Evidência no código, teste ou validação funcional. | Verificar se os cenários alternativos descritos no Caso de Uso foram contemplados. |
| DoD03 | Todos os critérios de aceitação do Caso de Uso foram atendidos. | Checklist de critérios de aceitação preenchido. | Marcar cada critério como “atendido” ou “não atendido”; não pode haver critério obrigatório pendente. |
| DoD04 | A funcionalidade está vinculada ao RF, RNF, CP e/ou OE correspondente na Matriz de Rastreabilidade. | Matriz de Rastreabilidade atualizada. | Verificar se a entrega possui vínculo rastreável com os artefatos relacionados. |
| DoD05 | O incremento foi integrado à branch principal de desenvolvimento sem conflitos pendentes. | Pull Request aprovado e merge realizado. | Verificar se o PR foi aceito e incorporado à base definida pela equipe. |
| DoD06 | A pipeline do GitHub Actions foi executada com sucesso. | Status verde da pipeline no Pull Request. | Verificar se as etapas automatizadas obrigatórias foram aprovadas. |
| DoD07 | O código foi revisado por pelo menos um integrante da equipe que não seja o autor principal. | Aprovação no Pull Request. | Verificar se há revisão registrada antes do merge. |
| DoD08 | A funcionalidade não quebrou funcionalidades existentes. | Testes executados ou validação de regressão registrada. | Verificar se os fluxos relacionados continuam funcionando após a alteração. |
| DoD09 | Os requisitos não funcionais relacionados foram verificados. | Checklist de RNFs preenchido. | Verificar os RNFs aplicáveis, como usabilidade, desempenho, segurança/moderação, baixa conectividade e restrição de implementação. |
| DoD10 | Quando houver alteração de interface, a tela implementada está coerente com o protótipo ou wireframe aprovado. | Comparação entre implementação e protótipo. | Verificar se os elementos principais do fluxo visual foram respeitados. |
| DoD11 | Quando houver regra de permissão, usuários sem autorização não conseguem acessar a funcionalidade. | Teste ou validação manual registrada. | Verificar acesso com perfil autorizado e não autorizado. |
| DoD12 | Quando houver criação, edição, exclusão, denúncia ou moderação de conteúdo, a ação fica registrada com usuário responsável e data/hora. | Evidência no banco, log ou registro da aplicação. | Verificar se a ação pode ser auditada posteriormente. |
| DoD13 | Quando houver funcionalidade relacionada a conteúdo multimídia, o arquivo pode ser cadastrado, associado, acessado e removido conforme o Caso de Uso. | Evidência funcional ou teste manual registrado. | Validar o fluxo completo da mídia envolvida. |
| DoD14 | Quando houver funcionalidade offline ou de baixa conectividade, o comportamento esperado foi validado sem conexão. | Registro de teste offline. | Verificar se o conteúdo previamente sincronizado permanece acessível quando o dispositivo está sem internet. |
| DoD15 | A documentação do Caso de Uso foi atualizada conforme a implementação final. | Documento atualizado. | Verificar se diferenças entre especificação inicial e implementação foram registradas. |
| DoD17 | A funcionalidade foi apresentada em revisão para a cliente ou representante. | Registro de reunião, ata, comentário ou aprovação. | Verificar se houve validação funcional por execução prática ou demonstração. |
| DoD18 | Pendências, bugs ou limitações conhecidas foram registradas. | Issue, comentário no PR ou registro de pendência. | Verificar se problemas não resolvidos foram documentados e não ocultados. |
| DoD19 | A funcionalidade está pronta para ser demonstrada sem necessidade de ajustes manuais fora do fluxo normal da aplicação. | Execução prática da funcionalidade. | Verificar se a entrega pode ser apresentada diretamente no ambiente definido pela equipe. |

Uma funcionalidade só será considerada concluída quando todos os critérios aplicáveis do DoD estiverem atendidos e registrados. Critérios não aplicáveis devem ser justificados. Caso algum critério obrigatório não seja cumprido, o item deve retornar para ajustes antes de ser considerado finalizado.

