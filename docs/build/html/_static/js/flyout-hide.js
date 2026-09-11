window.addEventListener('readthedocs-flyout:configure', (event) => {
  delete event.detail.config.on_readthedocs;
});
