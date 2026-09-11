// 等待readthedocs-flyout元素挂载，监听它shadow dom内部DOM变动
function hideRTDFlyoutItems() {
  const flyout = document.querySelector('readthedocs-flyout');
  if (!flyout) {
    setTimeout(hideRTDFlyoutItems, 300);
    return;
  }
  const shadow = flyout.shadowRoot;

  // 监听到DOM变化（点开下拉菜单时触发渲染）
  const observer = new MutationObserver(() => {
    const allDl = shadow.querySelectorAll('dl');
    for (const dl of allDl) {
      const dt = dl.querySelector('dt');
      if (!dt) continue;
      const text = dt.textContent.trim();
      if (text === "On Read the Docs") {
        dl.style.display = 'none';
      }
    }
  });
  observer.observe(shadow, { childList: true, subtree: true });
}
hideRTDFlyoutItems();
