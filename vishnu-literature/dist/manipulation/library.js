(() => {
  const tools = document.querySelector('.library-tools');
  if (!tools) return;
  const search = document.getElementById('paper-search');
  const year = document.getElementById('paper-year');
  const topic = document.getElementById('paper-topic');
  const cards = [...document.querySelectorAll('.paper')];
  const groups = [...document.querySelectorAll('.paper-group')];
  const texts = new Map(cards.map(card => [card, card.textContent.toLowerCase()]));
  function filter() {
    const terms = search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let count = 0;
    cards.forEach(card => {
      const date = Number(card.dataset.year);
      const matchesYear = year.value === 'all' || (year.value === 'recent' && date >= 2022 && date <= 2024) || (year.value === 'older' && date < 2022) || String(date) === year.value;
      const matchesTopic = topic.value === 'all' || card.closest('.paper-group').id === topic.value;
      card.hidden = !(matchesYear && matchesTopic && terms.every(term => texts.get(card).includes(term)));
      if (!card.hidden) count++;
    });
    groups.forEach(group => {
      const items = [...group.querySelectorAll('.paper')];
      const visible = items.filter(card => !card.hidden).length;
      group.hidden = visible === 0;
      group.querySelector('.section-head > span').textContent = visible === items.length ? `${String(items.length).padStart(2, '0')} papers` : `${visible} of ${items.length} shown`;
    });
    document.getElementById('result-count').textContent = `${count} of ${cards.length} papers shown`;
    document.getElementById('no-results').hidden = count > 0;
  }
  function clear() { search.value = ''; year.value = 'all'; topic.value = 'all'; filter(); }
  search.addEventListener('input', filter);
  year.addEventListener('change', filter);
  topic.addEventListener('change', filter);
  document.getElementById('clear-filters').addEventListener('click', clear);
  function revealLinkedCard() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const card = document.getElementById(id);
    if (card?.matches('.paper')) { clear(); card.open = true; card.scrollIntoView({block: 'start'}); }
  }
  window.addEventListener('hashchange', revealLinkedCard);
  tools.hidden = false;
  filter();
  revealLinkedCard();
})();
