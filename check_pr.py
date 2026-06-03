import os
import re
import sys

def check_pr_description_for_issue_link(pr_body):
    # Verifica se o corpo do PR contém referências a issues (ex: #123, closes #123, fixes #123)
    issue_link_patterns = [
        r'(?:#|closes #|fixes #|resolves #)\d+',
        r'https://github.com/[^/]+/[^/]+/issues/\d+'
    ]
    for pattern in issue_link_patterns:
        if re.search(pattern, pr_body, re.IGNORECASE):
            return True
    return False

def check_for_doc_changes(changed_files):
    # Verifica se houve alterações em arquivos dentro da pasta 'docs/'
    for file in changed_files:
        if file.startswith('docs/') or file.startswith('documentation/') or file.endswith(('.md', '.rst')):
            return True
    return False

if __name__ == '__main__':
    pr_body = os.getenv('PR_BODY', '')
    changed_files_str = os.getenv('CHANGED_FILES', '')
    changed_files = changed_files_str.splitlines() if changed_files_str else []

    all_checks_passed = True

    # DoD04: Funcionalidade vinculada à Matriz de Rastreabilidade (via link para issue)
    if not check_pr_description_for_issue_link(pr_body):
        print("::error file=check_pr.py::DoD04: O Pull Request deve conter um link para uma issue relacionada para rastreabilidade.")
        all_checks_passed = False
    else:
        print("DoD04: Link para issue encontrado no Pull Request.")

    # DoD15: A documentação do Caso de Uso foi atualizada (verificando alterações na pasta docs)
    # Esta é uma verificação heurística. Idealmente, seria necessário verificar o conteúdo.
    if check_for_doc_changes(changed_files):
        print("DoD15: Alterações detectadas na documentação (pasta 'docs/' ou arquivos .md/.rst). Por favor, verifique se a documentação do Caso de Uso foi atualizada.")
    else:
        print("DoD15: Nenhuma alteração detectada na documentação (pasta 'docs/' ou arquivos .md/.rst). Se a funcionalidade exigir atualização de documentação, faça-o.")

    if not all_checks_passed:
        sys.exit(1)
    else:
        print("Verificações automatizadas do DoD concluídas com sucesso.")
