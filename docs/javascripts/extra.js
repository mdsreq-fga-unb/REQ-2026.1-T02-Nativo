document.addEventListener('DOMContentLoaded', function() {
  var primaryBar = document.createElement('div');
  primaryBar.className = 'sidebar-mini-bar sidebar-mini-bar--primary';

  var primaryButton = document.createElement('button');
  primaryButton.type = 'button';
  primaryButton.className = 'sidebar-mini-bar__button';
  primaryButton.setAttribute('aria-expanded', 'true');
  primaryButton.setAttribute('aria-label', 'Fechar a navegação principal');
  primaryButton.textContent = '☰';
  primaryBar.appendChild(primaryButton);

  var secondaryBar = document.createElement('div');
  secondaryBar.className = 'sidebar-mini-bar sidebar-mini-bar--secondary';

  var secondaryButton = document.createElement('button');
  secondaryButton.type = 'button';
  secondaryButton.className = 'sidebar-mini-bar__button';
  secondaryButton.setAttribute('aria-expanded', 'true');
  secondaryButton.setAttribute('aria-label', 'Fechar o índice de seção');
  secondaryButton.textContent = '☰';
  secondaryBar.appendChild(secondaryButton);

  document.body.appendChild(primaryBar);
  document.body.appendChild(secondaryBar);

  function updatePrimary() {
    var collapsed = document.body.classList.contains('sidebar-collapsed-primary');
    primaryButton.setAttribute('aria-expanded', String(!collapsed));
    primaryButton.setAttribute('aria-label', collapsed ? 'Abrir a navegação principal' : 'Fechar a navegação principal');
    primaryButton.textContent = collapsed ? '☰' : '×';
  }

  function updateSecondary() {
    var collapsed = document.body.classList.contains('sidebar-collapsed-secondary');
    secondaryButton.setAttribute('aria-expanded', String(!collapsed));
    secondaryButton.setAttribute('aria-label', collapsed ? 'Abrir o índice de seção' : 'Fechar o índice de seção');
    secondaryButton.textContent = collapsed ? '☰' : '×';
  }

  primaryButton.addEventListener('click', function() {
    document.body.classList.toggle('sidebar-collapsed-primary');
    updatePrimary();
  });

  secondaryButton.addEventListener('click', function() {
    document.body.classList.toggle('sidebar-collapsed-secondary');
    updateSecondary();
  });

  updatePrimary();
  updateSecondary();
});
