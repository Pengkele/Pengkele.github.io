(() => {
  const list = document.getElementById('publication-list');
  if (!list) return;
  const tools = document.querySelector('.publication-tools');
  const search = document.getElementById('publication-search');
  const items = Array.from(list.querySelectorAll('.publication-item'));
  let filter = 'all';
  function update() {
    const q = search.value.toLocaleLowerCase().trim();
    let count = 0;
    for (const item of items) {
      item.hidden = !((filter === 'all' || item.dataset.category === filter) && item.textContent.toLocaleLowerCase().includes(q));
      if (!item.hidden) count++;
    }
    for (const heading of list.querySelectorAll('.publication-year')) {
      let sibling = heading.nextElementSibling, visible = false;
      while (sibling && !sibling.classList.contains('publication-year')) {
        if (!sibling.hidden) visible = true;
        sibling = sibling.nextElementSibling;
      }
      heading.hidden = !visible;
    }
    document.getElementById('publication-count').textContent = `${count} publication${count === 1 ? '' : 's'}`;
    document.getElementById('no-publications').hidden = count !== 0;
  }
  tools.hidden = false;
  search.addEventListener('input', update);
  tools.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
    filter = button.dataset.filter;
    tools.querySelectorAll('[data-filter]').forEach(b => b.setAttribute('aria-pressed', String(b === button)));
    update();
  }));
  update();
})();
