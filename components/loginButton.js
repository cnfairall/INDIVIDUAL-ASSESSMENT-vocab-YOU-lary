import { signIn } from '../utils/auth';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>';
  document.querySelector('#navigation').innerHTML += domString;
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
