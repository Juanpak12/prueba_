import './boton.css';
import { FC } from 'react';

type BotonProps = {
  texto: string;
};

const Boton: FC<BotonProps> = (props) => {
  return (
    <button >{props.texto}</button>
  );
}

export default Boton;