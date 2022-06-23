const Store = require('@electron-store');
const store = new Store();

function WelcomeCLosed() {
  store.set('welcome-closed', true);
}
