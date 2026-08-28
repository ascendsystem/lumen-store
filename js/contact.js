document.querySelector('[data-form]')?.addEventListener('submit', async e => {
  e.preventDefault();
  const s = document.querySelector('[data-status]');

  if (!STORE_CONFIG.contact.endpoint) {
    s.textContent = 'No se ha podido enviar el mensaje. Inténtalo de nuevo más tarde.';
    return;
  }

  const form = e.currentTarget;
  const formData = new FormData(form);

  try {
    const response = await fetch(STORE_CONFIG.contact.endpoint, {
      method: 'POST',
      headers: { Accept: 'application/json' },
      body: formData
    });

    if (!response.ok) {
      throw new Error('Error al enviar el formulario');
    }

    s.textContent = 'Mensaje enviado correctamente.';
    form.reset();
  } catch (error) {
    s.textContent = 'Ha ocurrido un error. Inténtalo de nuevo.';
  }
});
