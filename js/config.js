/* CAMBIAR POR DATOS REALES ANTES DE PUBLICAR. */
window.STORE_CONFIG = {
  brand: 'Lumen',
  product: { name: 'Lámpara decorativa para estanterías', singlePrice: 24.99, packPrice: 44.99, currency: 'EUR' },
  campaign: {
    demoMode: true, /* La campaña visible es una demostración de interfaz. */
    discount: 60, days: 3, stock: 3,
    headline: 'Oferta de lanzamiento — 60% de descuento'
  },
  stripe: {
    /* Payment Links de Stripe: no exponen claves privadas. */
    paymentLinks: {
      single: 'https://buy.stripe.com/9B614n0XD9Lu4vh90m2sM00',
      pack: 'https://buy.stripe.com/3cIdR9dKp2j24vhfoK2sM01'
    },
    checkoutEndpoint: '', publishableKey: 'STRIPE_PUBLISHABLE_KEY'
  },
  tracking: { endpoint: '', demoMode: true }, contact: { endpoint: 'https://formspree.io/f/meaqqezb' }
};
