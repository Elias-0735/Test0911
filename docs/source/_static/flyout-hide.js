window.addEventListener('readthedocs-flyout:configure', async (evt) => {
  const flyoutEl = evt.target;
  const shadow = flyoutEl.shadowRoot;
  if (!shadow) return;

  const styleSheet = document.createElement('style');
  styleSheet.textContent = `
    dl {
      position: relative;
    }
    dt {
      position: relative;
    }
  `;
  shadow.appendChild(styleSheet);

  // 监听菜单DOM更新，每次渲染后执行隐藏
  const observer = new MutationObserver(() => {
    const dls = shadow.querySelectorAll('dl');
    for (const dl of dls) {
      const dt = dl.querySelector('dt');
      if (dt && dt.textContent.trim() === "On Read the Docs") {
        dl.hidden = true;
      }
    }
  });
  observer.observe(shadow, {childList:true, subtree:true});
});
