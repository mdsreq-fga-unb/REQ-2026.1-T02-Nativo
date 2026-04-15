# 6 · Interação entre Equipe e Cliente

Esta seção descreve a composição da equipe, os canais de comunicação adotados e o processo de validação das entregas junto ao cliente.

<div class="section-cards">
  <a class="section-card" href="equipe/">
    <h3>6.1 Composição da Equipe</h3>
    <p>Papéis, responsabilidades e rodízio de funções ao longo das iterações.</p>
  </a>
  <a class="section-card" href="comunicacao/">
    <h3>6.2 Comunicação</h3>
    <p>Ferramentas, frequência de reuniões e interações com a cliente.</p>
  </a>
  <a class="section-card" href="validacao/">
    <h3>6.3 Processo de Validação</h3>
    <p>Critérios de prontidão, testes de desenvolvedor e homologação por marcos.</p>
  </a>
</div>

# **6. INTERAÇÃO ENTRE EQUIPE E CLIENTE**

## **6.1. Composição da Equipe**

A equipe de desenvolvimento será composta por:

| Papel | Descrição | Participantes |
| :---- | :---- | :---- |
| Gerente de projeto | Coordena o projeto, garante a comunicação entre cliente e equipe, controla prazos e entregas | Pedro Silva |
| Desenvolvimento Backend | Implementa a lógica de negócios, integração com banco de dados e APIs | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes, Pedro Silva, Renan Camara |
| Desenvolvimento Frontend | Implementa a interface do usuário, design e funcionalidades no lado do cliente | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes |
| Análise de requisitos  | Define os requisitos funcionais e não funcionais do sistema e garante que eles sejam atendidos | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes, Pedro Silva, Renan Camara |
| Análise de QA | Garante a qualidade do produto, executando testes de funcionalidade, performance e usabilidade. | André Henrique, Johnnatan Salles, Giovanna Felipe, Arthur Mendes, Pedro Silva, Renan Camara |

Os responsáveis pelo backend, frontend e qualidade serão rotacionados ao longo das iterações, com objetivo de melhorar o conhecimento dos integrantes em áreas de menor domínio e apoiar o entendimento do andamento do projeto no geral.

## **6.2. Comunicação**

### **Ferramentas de comunicação**

* **Teams/Google Meet:**Foram definidas entrevistas semanais para manter os conceitos e as ideias alinhadas. As reuniões serão realizadas na plataforma Teams ou, em caso de falhas, Google Meet.

* **Whatsapp/Discord:**O Whatsapp é o principal meio de comunicação por texto entre os membros da equipe. Além disso, foi criado um servidor do Discord para as reuniões entre os membros.

### **Frequência de Reuniões** 

* **Reunião de revisão da iteração (microciclo):** Ao final de cada iteração (1 semana), haverá uma reunião de revisão com a cliente e toda a equipe. Nessas reuniões, a equipe apresentará as funcionalidades desenvolvidas, desafios e soluções implementadas.

* **Reunião de Planejamento da iteração:** Após a reunião de revisão, a equipe e o cliente planejam a próxima iteração, revisando os requisitos e cronograma, definindo as prioridades de acordo com os feedbacks.

### **Frequência de Interações com a cliente**

* **Revisões de iteração:** A cliente estará envolvida nas revisões de iteração semanalmente, podendo testar, validar e fornecer feedbacks das entregas

* **Interações informais:** A cliente tem acesso ao grupo de Whatsapp da equipe, facilitando interações rápidas e dúvidas pontuais caso precise.

## **6.3. Processo de Validação**

O processo de validação do produto seguirá os princípios iterativos e incrementais do **OpenUP**. Para garantir que a solução atenda às expectativas e mantenha a integridade técnica e cultural, a validação ocorrerá em três frentes principais:

### **1\. Validação de Especificação (Critérios de Prontidão na *Work Items List*):**

* Antes de iniciar o desenvolvimento de qualquer funcionalidade nas *iterações*, a equipe valida a Lista de Itens de Trabalho. Um item ou História de Usuário só será selecionado para implementação se os seus requisitos estiverem claramente definidos, documentados e com os respectivos critérios de aceitação preestabelecidos em consenso com a representante.

### **2\. Validação Técnica Contínua (Micro-incrementos e Testes de Desenvolvedor):**

* Durante a fase de Construção, a equipe aplicará a prática de **Testes de Desenvolvedor** (*Developer Testing*), recomendada pelo OpenUP, garantindo que o código seja testado por quem o produziu em ciclos curtos. Um micro-incremento só será considerado concluído (*Done*) quando passar por testes unitários e de integração, for anexado com sucesso à base de código principal e obtiver aprovação funcional em revisões internas da equipe.

### **3\. Validação de Marcos e Aceitação do Cliente (*Milestones*):**

* Ao final de cada iteração, os incrementos funcionais e testados do aplicativo serão empacotados e disponibilizados para validação de negócio. Durante essa etapa de revisão, a cliente atuará como homologadora, testando a aplicação na prática para verificar se o sistema atende aos requisitos estabelecidos e aos Objetivos Específicos (OEs), à usabilidade esperada para a aldeia e às regras de integridade cultural da língua Munduruku. Funcionalidades só serão integradas à versão final (Transição) após o *feedback* positivo nesses marcos.
