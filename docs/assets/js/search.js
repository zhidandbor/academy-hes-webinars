const search = document.getElementById('webinar-search');
const cards = Array.from(document.querySelectorAll('.webinar-card'));
const empty = document.getElementById('empty-search');

search.addEventListener('input', () => {
  const query = search.value.trim().toLocaleLowerCase('ru');
  let visible = 0;
  for (const card of cards) {
    const match = card.dataset.search.toLocaleLowerCase('ru').includes(query);
    card.hidden = !match;
    if (match) visible += 1;
  }
  empty.hidden = visible !== 0;
});
