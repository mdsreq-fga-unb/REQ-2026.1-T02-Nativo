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

  function initTraceabilityTree() {
    var container = document.querySelector('[data-trace-tree]');
    if (!container) {
      return;
    }

    var requirementTitles = {
      RF01: 'Criar atividade educacional',
      RF02: 'Listar atividades educacionais para gerenciamento',
      RF03: 'Responder atividade educacional',
      RF04: 'Visualizar resultado da atividade',
      RF05: 'Editar atividade educacional',
      RF06: 'Excluir atividade educacional',
      RF07: 'Criar insígnia',
      RF08: 'Editar insígnia',
      RF09: 'Excluir insígnias',
      RF10: 'Criar publicação',
      RF11: 'Editar publicação',
      RF12: 'Listar publicações',
      RF13: 'Excluir publicação',
      RF14: 'Interagir com a publicação',
      RF15: 'Criar eventos',
      RF16: 'Editar eventos',
      RF17: 'Listar eventos',
      RF18: 'Excluir eventos',
      RF19: 'Compartilhar eventos',
      RF20: 'Banir usuário',
      RF21: 'Atribuir cargos de usuário',
      RF22: 'Editar cargos de usuário',
      RF23: 'Listar cargos de usuário',
      RF24: 'Desatribuir cargos de usuário',
      RF25: 'Candidatar-se a professor',
      RF26: 'Recuperar senha',
      RF27: 'Criar denúncia',
      RF28: 'Atualizar status de denúncia',
      RF29: 'Listar denúncias',
      RF30: 'Criar categoria de denúncia',
      RF31: 'Editar categoria de denúncia',
      RF32: 'Listar categorias de denúncia',
      RF33: 'Excluir categoria de denúncia',
      RF34: 'Cadastrar vídeo',
      RF35: 'Exibir vídeo',
      RF36: 'Excluir vídeo',
      RF37: 'Associar vídeo',
      RF38: 'Desassociar vídeo',
      RF39: 'Cadastrar áudio',
      RF40: 'Reproduzir áudio',
      RF41: 'Excluir áudio',
      RF42: 'Associar áudio',
      RF43: 'Desassociar áudio',
      RF44: 'Editar usuário',
      RF45: 'Listar histórico de traduções',
      RF46: 'Favoritar tradução',
      RF47: 'Listar traduções favoritadas',
      RF48: 'Listar insígnias',
      RF49: 'Baixar traduções',
      RF50: 'Listar atividades disponíveis para resolução'
    };

    function rfNodes(ids) {
      return ids.map(function(id) {
        return { id: id, type: 'rf', title: requirementTitles[id] || id };
      });
    }

    var implementedUcs = {
      UC01: true,
      UC02: true,
      UC03: true,
      UC06: true,
      UC07: true,
      UC10: true,
      UC11: true,
      UC12: true,
      UC13: true
    };

    var implementedRfs = {};

    function markImplementedRfs(node) {
      if (node.type === 'uc' && implementedUcs[node.id]) {
        (node.children || []).forEach(function(child) {
          implementedRfs[child.id] = true;
        });
      }
      (node.children || []).forEach(markImplementedRfs);
    }

    function nodeUrl(node) {
      if (node.type === 'problem') {
        return '../cenario/#14-identificacao-da-oportunidade-ou-problema';
      }
      if (node.type === 'oe') {
        return '../solucao/#' + node.id.toLowerCase();
      }
      if (node.type === 'cp') {
        return '../solucao/#' + node.id.toLowerCase();
      }
      if (node.type === 'uc') {
        return '../casos-uso/' + node.id.toLowerCase() + '/';
      }
      if (node.type === 'rf') {
        return '../requisitos/#req-' + node.id.toLowerCase();
      }
      return '#';
    }

    var tree = {
      id: 'PROBLEMA',
      type: 'problem',
      label: 'Uso pontual do Nativo limita a prática contínua e o fortalecimento da língua Munduruku.',
      title: 'Problema central',
      children: [
        {
          id: 'OE1',
          type: 'oe',
          title: 'Aumentar a retenção e o engajamento na plataforma',
          children: [
            {
              id: 'CP1',
              type: 'cp',
              title: 'Mecanismos interativos de aprendizagem e engajamento',
              children: [
                { id: 'UC01', type: 'uc', title: 'Gerenciar Atividades Educacionais', children: rfNodes(['RF01', 'RF02', 'RF05', 'RF06']) },
                { id: 'UC02', type: 'uc', title: 'Responder Atividades Educacionais', children: rfNodes(['RF50', 'RF03', 'RF04']) },
                { id: 'UC03', type: 'uc', title: 'Gerenciar Insígnias', children: rfNodes(['RF07', 'RF08', 'RF09']) }
              ]
            },
            {
              id: 'CP2',
              type: 'cp',
              title: 'Feed Social Comunitário',
              children: [
                { id: 'UC04', type: 'uc', title: 'Gerenciar Feed Social', children: rfNodes(['RF10', 'RF11', 'RF12', 'RF13', 'RF14']) },
                { id: 'UC05', type: 'uc', title: 'Gerenciar Eventos', children: rfNodes(['RF15', 'RF16', 'RF17', 'RF18', 'RF19']) }
              ]
            }
          ]
        },
        {
          id: 'OE2',
          type: 'oe',
          title: 'Assegurar a integridade e segurança do acervo cultural',
          children: [
            {
              id: 'CP3',
              type: 'cp',
              title: 'Controle de usuário',
              children: [
                { id: 'UC06', type: 'uc', title: 'Gerenciar Acessos e Permissões', children: rfNodes(['RF20', 'RF21', 'RF22', 'RF23', 'RF24']) },
                { id: 'UC14', type: 'uc', title: 'Candidatar-se a Professor', children: rfNodes(['RF25']) },
                { id: 'UC07', type: 'uc', title: 'Redefinir Senha de Acesso', children: rfNodes(['RF26']) }
              ]
            },
            {
              id: 'CP4',
              type: 'cp',
              title: 'Sistema de denúncias',
              children: [
                { id: 'UC08', type: 'uc', title: 'Gerenciar Moderação de Conteúdo', children: rfNodes(['RF27', 'RF28', 'RF29']) },
                { id: 'UC09', type: 'uc', title: 'Gerenciar Tipos de Denúncias', children: rfNodes(['RF30', 'RF31', 'RF32', 'RF33']) }
              ]
            }
          ]
        },
        {
          id: 'OE3',
          type: 'oe',
          title: 'Enriquecer a experiência do usuário na aplicação',
          children: [
            {
              id: 'CP5',
              type: 'cp',
              title: 'Suporte a Multimídia nas Traduções',
              children: [
                { id: 'UC10', type: 'uc', title: 'Gerenciar Acervo de Vídeos', children: rfNodes(['RF34', 'RF35', 'RF36', 'RF37', 'RF38']) },
                { id: 'UC11', type: 'uc', title: 'Gerenciar Acervo de Áudios', children: rfNodes(['RF39', 'RF40', 'RF41', 'RF42', 'RF43']) }
              ]
            },
            {
              id: 'CP6',
              type: 'cp',
              title: 'Perfil de Usuário',
              children: [
                { id: 'UC12', type: 'uc', title: 'Gerenciar Perfil Pessoal', children: rfNodes(['RF44', 'RF45', 'RF46', 'RF47', 'RF48']) }
              ]
            },
            {
              id: 'CP7',
              type: 'cp',
              title: 'Sincronização e Acesso Offline de Traduções',
              children: [
                { id: 'UC13', type: 'uc', title: 'Baixar Traduções para Acesso Offline', children: rfNodes(['RF49']) }
              ]
            }
          ]
        }
      ]
    };

    markImplementedRfs(tree);

    function computeStatus(node) {
      if (node.type === 'rf') {
        node.status = implementedRfs[node.id] ? 'done' : 'not-started';
        return node.status;
      }

      if (!node.children || node.children.length === 0) {
        node.status = 'not-started';
        return node.status;
      }

      var childStatuses = node.children.map(computeStatus);
      var allDone = childStatuses.every(function(status) {
        return status === 'done';
      });
      var anyStarted = childStatuses.some(function(status) {
        return status === 'done' || status === 'partial';
      });

      node.status = allDone ? 'done' : anyStarted ? 'partial' : 'not-started';
      return node.status;
    }

    computeStatus(tree);

    var depthY = [28, 155, 275, 395, 510];
    var leafGap = 82;
    var sidePadding = 70;
    var nodes = [];
    var links = [];
    var leafIndex = 0;

    function layout(node, depth, parent) {
      node.depth = depth;
      node.y = depthY[depth] || depthY[depthY.length - 1] + (depth - depthY.length + 1) * 115;

      if (!node.children || node.children.length === 0) {
        node.x = sidePadding + leafIndex * leafGap;
        leafIndex += 1;
      } else {
        node.children.forEach(function(child) {
          layout(child, depth + 1, node);
        });
        node.x = node.children.reduce(function(sum, child) {
          return sum + child.x;
        }, 0) / node.children.length;
      }

      nodes.push(node);
      if (parent) {
        links.push({ source: parent, target: node });
      }
    }

    layout(tree, 0, null);

    var svgWidth = Math.max(1120, sidePadding * 2 + leafIndex * leafGap);
    var svgHeight = 640;
    var viewport = { x: Math.max(0, tree.x - 560), y: 0, w: Math.min(1120, svgWidth), h: 640 };
    var svg = createSvg('svg');
    svg.setAttribute('viewBox', viewBoxString());
    svg.setAttribute('aria-hidden', 'true');

    var linkLayer = createSvg('g');
    var nodeLayer = createSvg('g');
    svg.appendChild(linkLayer);
    svg.appendChild(nodeLayer);

    links.forEach(function(link) {
      var path = createSvg('path');
      var source = nodeBounds(link.source);
      var target = nodeBounds(link.target);
      var startX = source.x + source.w / 2;
      var startY = source.y + source.h;
      var endX = target.x + target.w / 2;
      var endY = target.y;
      var midY = startY + (endY - startY) * 0.5;
      path.setAttribute('class', 'trace-link');
      path.setAttribute('d', 'M ' + startX + ' ' + startY + ' C ' + startX + ' ' + midY + ', ' + endX + ' ' + midY + ', ' + endX + ' ' + endY);
      linkLayer.appendChild(path);
    });

    nodes.forEach(function(node) {
      var bounds = nodeBounds(node);
      var anchor = createSvg('a');
      var group = createSvg('g');
      var rect = createSvg('rect');
      var title = createSvg('title');
      var text = createSvg('text');

      anchor.setAttribute('href', nodeUrl(node));
      anchor.setAttribute('target', '_self');
      anchor.setAttribute('aria-label', (node.title || node.id) + ' - ' + statusLabel(node.status));
      anchor.setAttribute('data-trace-url', nodeUrl(node));
      group.setAttribute('class', 'trace-node trace-node--' + node.type + ' trace-node--' + node.status);
      group.setAttribute('transform', 'translate(' + bounds.x + ' ' + bounds.y + ')');
      title.textContent = (node.title || node.id) + ' - ' + statusLabel(node.status);
      rect.setAttribute('width', bounds.w);
      rect.setAttribute('height', bounds.h);
      rect.setAttribute('rx', node.type === 'problem' ? 8 : 7);

      group.appendChild(title);
      group.appendChild(rect);

      if (node.type === 'problem') {
        var lines = ['Uso pontual do Nativo', 'limita a prática contínua', 'e o fortalecimento da', 'língua Munduruku.'];
        lines.forEach(function(line, index) {
          var tspan = createSvg('tspan');
          tspan.setAttribute('x', bounds.w / 2);
          tspan.setAttribute('y', 18 + index * 16);
          tspan.textContent = line;
          text.appendChild(tspan);
        });
      } else {
        text.setAttribute('x', bounds.w / 2);
        text.setAttribute('y', bounds.h / 2 + 1);
        text.textContent = node.id;
      }

      group.appendChild(text);
      anchor.appendChild(group);
      nodeLayer.appendChild(anchor);
    });

    container.textContent = '';
    container.appendChild(svg);

    var pointer = null;
    var didDrag = false;

    function createSvg(tag) {
      return document.createElementNS('http://www.w3.org/2000/svg', tag);
    }

    function nodeBounds(node) {
      var dimensions = {
        problem: { w: 245, h: 78 },
        oe: { w: 68, h: 32 },
        cp: { w: 62, h: 30 },
        uc: { w: 66, h: 30 },
        rf: { w: 58, h: 28 }
      };
      var size = dimensions[node.type] || dimensions.rf;
      return { x: node.x - size.w / 2, y: node.y, w: size.w, h: size.h };
    }

    function statusLabel(status) {
      if (status === 'done') {
        return 'implementado';
      }
      if (status === 'partial') {
        return 'parcialmente implementado';
      }
      return 'não implementado';
    }

    function viewBoxString() {
      return viewport.x + ' ' + viewport.y + ' ' + viewport.w + ' ' + viewport.h;
    }

    function updateViewBox() {
      viewport.w = Math.max(260, Math.min(svgWidth * 1.4, viewport.w));
      viewport.h = Math.max(220, Math.min(svgHeight * 1.4, viewport.h));
      viewport.x = Math.max(-80, Math.min(svgWidth - viewport.w + 120, viewport.x));
      viewport.y = Math.max(-80, Math.min(svgHeight - viewport.h + 120, viewport.y));
      svg.setAttribute('viewBox', viewBoxString());
    }

    function zoomAt(scale, clientX, clientY) {
      var rect = svg.getBoundingClientRect();
      var px = (clientX - rect.left) / rect.width;
      var py = (clientY - rect.top) / rect.height;
      var nextW = viewport.w * scale;
      var nextH = viewport.h * scale;
      viewport.x += (viewport.w - nextW) * px;
      viewport.y += (viewport.h - nextH) * py;
      viewport.w = nextW;
      viewport.h = nextH;
      updateViewBox();
    }

    function resetView() {
      viewport = { x: Math.max(0, tree.x - 560), y: 0, w: Math.min(1120, svgWidth), h: 640 };
      updateViewBox();
    }

    container.addEventListener('wheel', function(event) {
      event.preventDefault();
      zoomAt(event.deltaY < 0 ? 0.86 : 1.16, event.clientX, event.clientY);
    }, { passive: false });

    function traceUrlFromTarget(target) {
      var element = target;
      while (element && element !== svg) {
        if (element.getAttribute && element.getAttribute('data-trace-url')) {
          return element.getAttribute('data-trace-url');
        }
        element = element.parentNode;
      }
      return null;
    }

    container.addEventListener('pointerdown', function(event) {
      pointer = {
        id: event.pointerId,
        x: event.clientX,
        y: event.clientY,
        viewX: viewport.x,
        viewY: viewport.y,
        url: traceUrlFromTarget(event.target)
      };
      didDrag = false;
      container.setPointerCapture(event.pointerId);
    });

    container.addEventListener('pointermove', function(event) {
      if (!pointer || pointer.id !== event.pointerId) {
        return;
      }
      var rect = svg.getBoundingClientRect();
      if (Math.abs(event.clientX - pointer.x) > 3 || Math.abs(event.clientY - pointer.y) > 3) {
        didDrag = true;
      }
      viewport.x = pointer.viewX - (event.clientX - pointer.x) * viewport.w / rect.width;
      viewport.y = pointer.viewY - (event.clientY - pointer.y) * viewport.h / rect.height;
      updateViewBox();
    });

    container.addEventListener('pointerup', function(event) {
      if (pointer && pointer.id === event.pointerId) {
        if (!didDrag && pointer.url) {
          window.location.assign(pointer.url);
        }
        pointer = null;
      }
    });

    container.addEventListener('pointercancel', function() {
      pointer = null;
    });

    svg.addEventListener('click', function(event) {
      if (didDrag) {
        event.preventDefault();
        didDrag = false;
        return;
      }

      var url = traceUrlFromTarget(event.target);
      if (url) {
        event.preventDefault();
        window.location.assign(url);
      }
    }, true);

    function updateFullscreenButton() {
      document.querySelectorAll('[data-trace-action="fullscreen"]').forEach(function(button) {
        button.textContent = document.fullscreenElement ? 'Sair da tela cheia' : 'Tela cheia';
      });
    }

    document.querySelectorAll('[data-trace-action]').forEach(function(button) {
      button.addEventListener('click', function() {
        var action = button.getAttribute('data-trace-action');
        var rect = svg.getBoundingClientRect();
        if (action === 'zoom-in') {
          zoomAt(0.84, rect.left + rect.width / 2, rect.top + rect.height / 2);
        } else if (action === 'zoom-out') {
          zoomAt(1.18, rect.left + rect.width / 2, rect.top + rect.height / 2);
        } else if (action === 'reset') {
          resetView();
        } else if (action === 'fullscreen') {
          var shell = container.closest('.traceability-shell') || container;
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else if (shell.requestFullscreen) {
            shell.requestFullscreen();
          }
        }
      });
    });

    document.addEventListener('fullscreenchange', updateFullscreenButton);

    updateViewBox();
    updateFullscreenButton();
  }

  initTraceabilityTree();
});
