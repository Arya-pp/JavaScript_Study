function showCircle(cx, cy, radius) {
    return new Promise(resolve => {
      let div = document.createElement('div');
      div.style.width = 0;
      div.style.height = 0;
      div.style.left = cx + 'px';
      div.style.top = cy + 'px';
      div.className = 'circle';
      document.body.append(div);

      // Start expanding on the next frame
      setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
        div.style.left = cx - radius + 'px';
        div.style.top = cy - radius + 'px';
      }, 0);

      // Resolve when transition finishes
      div.addEventListener('transitionend', function handler() {
        div.removeEventListener('transitionend', handler);
        resolve(div);
      });
    });
  }

  // Usage
  showCircle(150, 150, 100).then(div => {
    div.classList.add('message-ball');
    div.append("Hello, world!");
  });