import { EmptyMemories } from '@/components/EmptyMemories'

export default function Home() {
  return <EmptyMemories />
}

/*
const styles = {
  color: "#F00",
}

const name = 'Vicente'

<h1 style={styles}>{name}</h1>

props em Reatc:

quando se quer ultilizar um componente react, e voce quer passar propriedades 
para que ele (ex: um botao) se diferencia dos outros, voce pode criar instancias
e passar elas como se fossem passar parametros no escopo de uma função, essas
são as props,

ex: import {Button} from ...

<Button title="Nome Do Botão"/>

aqui, criamos um parametro, que será recebido da seguinte forma no componente:

export default function Button (props:ButtonProps)

em que ButtonProps é um objeto declarado que possui uma variavel chamada title,
que é uma string

interface ButtonProps {
    title: string
}
*/
