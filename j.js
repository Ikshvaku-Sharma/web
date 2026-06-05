// SECTION V: AI ENGINE CORE INTERACTIVE TOGGLE PIPELINE
function switchEngineCore(moduleName) {
  // 1. Cycle active utility classes across Module Cards
  document.querySelectorAll('.module-card').forEach(card => {
    card.classList.remove('active');
  });
  
  const currentCard = document.querySelector(`.module-card[data-target="${moduleName}"]`);
  if (currentCard) {
    currentCard.classList.add('active');
  }

  // 2. Manipulate 3D Transform Matrices on the Graphic Hardware Core
  const hardwareCore = document.getElementById('core-hardware');
  if (!hardwareCore) return;

  if (moduleName === 'skillmatrix') {
    // Structural orientation for Machine Learning module
    hardwareCore.style.transform = 'rotateY(45deg) rotateX(15deg) scale(1.1)';
    // Quick switch core node visual properties to accent ML theme
    document.querySelector('.core-node').style.stroke = '#00f5c4';
    document.querySelector('.core-node').style.fill = 'rgba(0, 245, 196, 0.2)';
  } else if (moduleName === 'kernel') {
    // Bare metal layout rotation profile
    hardwareCore.style.transform = 'rotateY(-45deg) rotateZ(-10deg) scale(1)';
    // Modify vector path profile styles instantly
    document.querySelector('.core-node').style.stroke = '#7b5cff';
    document.querySelector('.core-node').style.fill = 'rgba(123, 92, 255, 0.2)';
  }
}

// Instantiate default rotation properties on system bootstrap execution
document.addEventListener('DOMContentLoaded', () => {
  switchEngineCore('skillmatrix');
});