// Login.tsx is a component that is imported into App.tsx
import Boton from '../boton/boton';
import Logo from '../../img/Logo_PaperDoctor_Full.png'
import './login.css';

export default function Login() {
  return (
    <>
      <section className='login-container'>
        <img className='Logo-login' src={Logo} alt="Logo" />
        <input className='input-login' type="text" placeholder="Usuario" />
        <input className='input-login' type="password" placeholder="Contraseña" />
        <Boton texto="INICIAR SESIÓN" />
        <Boton texto="REGISTRATE" />
        <a className='link-login' > ¿olvidaste tu contraseña? </a>
      </section>
    </>
  );
}