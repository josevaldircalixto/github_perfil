import { useState, useEffect } from "react"

const Formulario = () => {

  const [materiaA, setMateriaA] = useState(0);
  const [materiaB, setMateriaB] = useState(0);
  const [materiaC, setMateriaC] = useState(0);
  const [nome, setNome] = useState('');

  useEffect(() => {
    console.log("o estado nome mudou")

    return () => {
      console.log("Ocomponete finalizou")
    }
  }, [])


  useEffect(() => {
    console.log("o estado nome mudou")
  }, [nome])

  useEffect(() => {
    console.log("materia mudou: " + materiaA)
  }, [materiaA, materiaB, materiaC])




  const alteraNome = (evento) => {
    // console.log(evento.target.value)
    setNome(estadoAnterior => {


      return evento.target.value;
    })
  }

  const renderizaResultado = () => {
    const soma = materiaA + materiaB + materiaC;
    const media = soma / 3;

    if (media >= 7) {
      return (
        <p>Olá {nome} Você Foi Aprovado</p>
      )
    } else {
      return (
        <p>{nome} Você foi Reprovado</p>
      )
    }
  }

  return (
    <form>
      <ul>
        {[1, 2, 3, 4, 5].map(item => (

          <li key={item}>{item}</li>

        ))}
      </ul>
      <input type="text" placeholder="Seu Nome" onChange={alteraNome} />
      <input type="number" placeholder="Nota matéria A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
      <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriaB(parseInt(evento.target.value))} />
      <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriaC(parseInt(evento.target.value))} />
      {renderizaResultado()}
    </form>


  )
}

export default Formulario