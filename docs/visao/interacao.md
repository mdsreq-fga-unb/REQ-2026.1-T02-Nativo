## 6.1 Composição da Equipe

A equipe de desenvolvimento será composta por:

| Papel | Descrição | Participantes |
| :---- | :---- | :---- |
| Gerente de projeto | Coordena o projeto, garante a comunicação entre cliente e equipe, controla prazos e entregas | Pedro Silva |
| Desenvolvimento Backend | Implementa a lógica de negócios, integração com banco de dados e APIs | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes, Pedro Silva, Renan Camara |
| Desenvolvimento Frontend | Implementa a interface do usuário, design e funcionalidades no lado do cliente | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes |
| Análise de requisitos  | Define os requisitos funcionais e não funcionais do sistema e garante que eles sejam atendidos | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes, Pedro Silva, Renan Camara |
| Análise de QA | Garante a qualidade do produto, executando testes de funcionalidade, performance e usabilidade. | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes, Pedro Silva, Renan Camara |

!!! info "Rodízio de Papéis"
    Os responsáveis pelo backend, frontend e qualidade serão rotacionados ao longo das iterações, com objetivo de melhorar o conhecimento dos integrantes em áreas de menor domínio e apoiar o entendimento do andamento do projeto no geral.

## 6.2 Comunicação

**Ferramentas de comunicação**

* **Teams/Google Meet:**Foram definidas entrevistas semanais para manter os conceitos e as ideias alinhadas. As reuniões serão realizadas na plataforma Teams ou, em caso de falhas, Google Meet.

* **Whatsapp/Discord:**O Whatsapp é o principal meio de comunicação por texto entre os membros da equipe. Além disso, foi criado um servidor do Discord para as reuniões entre os membros.

**Frequência de Reuniões** 

* **Reunião de revisão da iteração (microciclo):** Ao final de cada iteração (1 semana), haverá uma reunião de revisão com a cliente e toda a equipe. Nessas reuniões, a equipe apresentará as funcionalidades desenvolvidas, desafios e soluções implementadas.

* **Reunião de Planejamento da iteração:** Após a reunião de revisão, a equipe e o cliente planejam a próxima iteração, revisando os requisitos e cronograma, definindo as prioridades de acordo com os feedbacks.

**Frequência de Interações com a cliente**

* **Revisões de iteração:** A cliente estará envolvida nas revisões de iteração semanalmente, podendo testar, validar e fornecer feedbacks das entregas

* **Interações informais:** A cliente tem acesso ao grupo de Whatsapp da equipe, facilitando interações rápidas e dúvidas pontuais caso precise.

## 6.3 Processo de Validação

O processo de validação do produto seguirá os princípios iterativos e incrementais do OpenUP. Para garantir que a solução atenda às expectativas e mantenha a integridade técnica e cultural, a validação ocorrerá em três frentes principais:

**1. Validação de Especificação (Critérios de Prontidão nos Casos de Uso):**

* Antes de iniciar o desenvolvimento de qualquer funcionalidade nas iterações, a equipe valida a Lista de Itens de Trabalho. Um cenário de Caso de Uso só será selecionado para implementação se a sua especificação textual estiver claramente definida — contendo pré-condições, pós-condições, fluxos principais, alternativos e de exceção mapeados —, documentada e com os respectivos critérios de aceitação e regras de negócio preestabelecidos em consenso com a representante (atendendo à Definition of Ready - DoR).

**2. Validação Técnica Contínua (Micro-incrementos e Testes de Desenvolvedor):**

* Durante a fase de Construção, a equipe aplicará a prática de Testes de Desenvolvedor (Developer Testing), recomendada pelo OpenUP, garantindo que o código seja testado por quem o produziu em ciclos curtos. Um micro-incremento atrelado a um fluxo do Caso de Uso só será considerado concluído (atendendo à Definition of Done - DoD) quando cobrir com sucesso os testes unitários e de integração baseados nos cenários descritos, for anexado com sucesso à base de código principal e obtiver aprovação técnica e funcional em revisões de código internas da equipe.

**3. Validação de Marcos e Aceitação do Cliente (Milestones):**

* Ao final de cada iteração, os incrementos funcionais e testados do aplicativo serão empacotados e disponibilizados para validação de negócio. Durante essa etapa de revisão, a cliente atuará como homologadora, testando a aplicação na prática para verificar se o sistema atende aos requisitos estabelecidos e aos Objetivos Específicos (OEs), à usabilidade esperada para a aldeia e às regras de integridade cultural da língua Munduruku. Funcionalidades só serão integradas à versão final (Transição) após o *feedback* positivo nesses marcos.
