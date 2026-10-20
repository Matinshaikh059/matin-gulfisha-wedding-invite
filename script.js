
const sceneButtons = document.querySelectorAll('[data-target]');
const scenes = document.querySelectorAll('.scene');
const tabButtons = document.querySelectorAll('.tab-button');
const walimaPanels = document.querySelectorAll('.walima-panel');

function showScene(targetId) {
  scenes.forEach((scene) => {
    const isActive = scene.id === targetId;
    scene.classList.toggle('active', isActive);
  });

  const targetScene = document.getElementById(targetId);
  if (targetScene) {
    targetScene.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'start',
    });
  }
}

function activateTab(panelName) {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.panel === panelName;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  walimaPanels.forEach((panel) => {
    const shouldShow = panel.dataset.panelContent === panelName;
    panel.classList.toggle('active', shouldShow);
    panel.hidden = !shouldShow;
  });
}

sceneButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const targetId = button.dataset.target;
    if (targetId) {
      showScene(targetId);
    }
  });
});

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activateTab(button.dataset.panel);
  });
});
