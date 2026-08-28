document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('[data-track-form]');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const input = form.querySelector('input[name="order"]');
    const code = (input ? input.value : '').trim();

    if (!code) {
      alert('Introduce un número de seguimiento.');
      return;
    }

    const target = 'https://parcelsapp.com/en/tracking/' + encodeURIComponent(code);
    window.open(target, '_blank', 'noopener,noreferrer');
  });
});

