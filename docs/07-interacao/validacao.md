# 6.3. Processo de Validação

O processo de validação do produto seguirá os princípios iterativos e incrementais do OpenUP. Para garantir que a solução atenda às expectativas e mantenha a integridade técnica e cultural, a validação ocorrerá em três frentes principais:

### **1. Validação de Especificação (Critérios de Prontidão nos Casos de Uso):**

* Antes de iniciar o desenvolvimento de qualquer funcionalidade nas iterações, a equipe valida a Lista de Itens de Trabalho. Um cenário de Caso de Uso só será selecionado para implementação se a sua especificação textual estiver claramente definida — contendo pré-condições, pós-condições, fluxos principais, alternativos e de exceção mapeados —, documentada e com os respectivos critérios de aceitação e regras de negócio preestabelecidos em consenso com a representante (atendendo à Definition of Ready - DoR).

### **2. Validação Técnica Contínua (Micro-incrementos e Testes de Desenvolvedor):**

* Durante a fase de Construção, a equipe aplicará a prática de Testes de Desenvolvedor (Developer Testing), recomendada pelo OpenUP, garantindo que o código seja testado por quem o produziu em ciclos curtos. Um micro-incremento atrelado a um fluxo do Caso de Uso só será considerado concluído (atendendo à Definition of Done - DoD) quando cobrir com sucesso os testes unitários e de integração baseados nos cenários descritos, for anexado com sucesso à base de código principal e obtiver aprovação técnica e funcional em revisões de código internas da equipe.

### **3. Validação de Marcos e Aceitação do Cliente (Milestones):**

* Ao final de cada iteração, os incrementos funcionais e testados do aplicativo serão empacotados e disponibilizados para validação de negócio. Durante essa etapa de revisão, a cliente atuará como homologadora, testando a aplicação na prática para verificar se o sistema atende aos requisitos estabelecidos e aos Objetivos Específicos (OEs), à usabilidade esperada para a aldeia e às regras de integridade cultural da língua Munduruku. Funcionalidades só serão integradas à versão final (Transição) após o *feedback* positivo nesses marcos.