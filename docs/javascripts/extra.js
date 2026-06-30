document.addEventListener('DOMContentLoaded', function() {
  function makeButton(className, label, text) {
    var button = document.createElement('button');
    button.type = 'button';
    button.className = className;
    button.setAttribute('aria-label', label);
    button.textContent = text;
    return button;
  }

  function addCloseButton(sidebarSelector, button) {
    var sidebar = document.querySelector(sidebarSelector);
    var scrollwrap = sidebar ? sidebar.querySelector('.md-sidebar__scrollwrap') : null;

    if (!scrollwrap) {
      document.body.appendChild(button);
      return;
    }

    var row = document.createElement('div');
    row.className = 'sidebar-control-row';
    row.appendChild(button);
    scrollwrap.insertBefore(row, scrollwrap.firstChild);
  }

  var primaryClose = makeButton(
    'sidebar-control-btn sidebar-control-btn--close sidebar-control-btn--primary-close',
    'Fechar a navegação principal',
    '×'
  );
  var primaryOpen = makeButton(
    'sidebar-control-btn sidebar-control-btn--open sidebar-control-btn--primary-open',
    'Abrir a navegação principal',
    '☰'
  );

  var secondaryClose = makeButton(
    'sidebar-control-btn sidebar-control-btn--close sidebar-control-btn--secondary-close',
    'Fechar o índice de seção',
    '×'
  );
  var secondaryOpen = makeButton(
    'sidebar-control-btn sidebar-control-btn--open sidebar-control-btn--secondary-open',
    'Abrir o índice de seção',
    '☰'
  );

  addCloseButton('.md-sidebar--primary', primaryClose);
  addCloseButton('.md-sidebar--secondary', secondaryClose);
  document.body.appendChild(primaryOpen);
  document.body.appendChild(secondaryOpen);

  function updatePrimary() {
    var collapsed = document.body.classList.contains('sidebar-collapsed-primary');
    primaryClose.setAttribute('aria-expanded', String(!collapsed));
    primaryOpen.setAttribute('aria-expanded', String(!collapsed));
  }

  function updateSecondary() {
    var collapsed = document.body.classList.contains('sidebar-collapsed-secondary');
    secondaryClose.setAttribute('aria-expanded', String(!collapsed));
    secondaryOpen.setAttribute('aria-expanded', String(!collapsed));
  }

  primaryClose.addEventListener('click', function() {
    document.body.classList.add('sidebar-collapsed-primary');
    updatePrimary();
  });

  primaryOpen.addEventListener('click', function() {
    document.body.classList.remove('sidebar-collapsed-primary');
    updatePrimary();
  });

  secondaryClose.addEventListener('click', function() {
    document.body.classList.add('sidebar-collapsed-secondary');
    updateSecondary();
  });

  secondaryOpen.addEventListener('click', function() {
    document.body.classList.remove('sidebar-collapsed-secondary');
    updateSecondary();
  });

  updatePrimary();
  updateSecondary();
});