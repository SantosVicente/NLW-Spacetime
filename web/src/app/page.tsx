import { EmptyMemories } from '@/components/EmptyMemories'
import { api } from '@/lib/api'
import { cookies } from 'next/headers'

import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

dayjs.locale(ptBR)

interface Memory {
  id: String
  coverUrl: String
  excerpt: String
  createdAt: String
}

export default async function Home() {
  const isAuthenticated = cookies().has('token')

  if (!isAuthenticated) {
    return <EmptyMemories />
  }

  const token = cookies().get('token')?.value
  const response = await api.get('/memories', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const memories: Memory[] = response.data

  if (memories.length === 0) {
    return <EmptyMemories />
  }

  return (
    <div className="flex flex-col gap-10 p-8">
      {memories.map((memory) => {
        return (
          <div key={memory.id} className="space-y-4">
            <time className="-ml-8 flex items-center gap-2 text-sm text-gray-100 before:h-px before:w-5 before:bg-gray-50">
              {dayjs(memory.createdAt).format('D[ de ]MMMM[, ]YYYY')}
            </time>
            <Image
              src={memory.coverUrl}
              alt=""
              width={592}
              height={280}
              className="aspect-video w-full rounded-lg object-cover"
            />
            <p className="break-words text-lg leading-relaxed text-gray-100">
              {memory.excerpt}
            </p>
            <Link
              href={`/memories/${memory.id}`}
              className="flex items-center gap-2 text-sm text-gray-200 transition-colors hover:text-gray-100"
            >
              Ler mais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )
      })}
    </div>
  )
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
