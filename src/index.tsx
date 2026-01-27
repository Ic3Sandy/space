import { render } from 'preact';
import App from './app';

const appElement = document.getElementById('app');
if (appElement) {
  render(<App />, appElement);
}
