window.addEventListener('readthedocs-flyout:configure', async () => {
  await new Promise(r => setTimeout(r, 500));
  const flyout = document.querySelector('readthedocs-flyout');
  if (!flyout) return;
  const shadow = flyout.shadowRoot;
  const allDl = shadow.querySelectorAll('dl');
  for (const dl of allDl) {
    const dt = dl.querySelector('dt');
    if (!dt) continue;
    const text = dt.textContent.trim();
    // 匹配 On Read the Docs
    if (text === "On Read the Docs") {
      dl.style.display = 'none';
    }
    // 如果你还想隐藏Versions，把下面这行取消注释
    // if (text === "Versions") {
    //   dl.style.display = 'none';
    // }
    // 如果你想保留Search，直接删掉下面这一段
    if (text === "Search") {
      dl.style.display = 'none';
    }
  }
});
