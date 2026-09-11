window.addEventListener('readthedocs-flyout:configure', async () => {
  await new Promise(r => setTimeout(r, 400));
  const flyout = document.querySelector('readthedocs-flyout');
  if (!flyout) return;
  const shadow = flyout.shadowRoot;
  const style = document.createElement('style');
  style.textContent = `
    /* 仅隐藏 On Read the Docs */
    section:has(h3:is(:text("On Read the Docs"))) {
      display:none !important;
    }
  `;
  shadow.appendChild(style);
});
