const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker gak support');
    return;
  }

  try {
    await navigator.serviceWorker.register('./sw.bundle.js');
    console.log('Serivce worker registered');
  } catch (error) {
    console.log('Failed to register service worker', error)
  }
}

export default swRegister;