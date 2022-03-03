import { Container, Header, Content } from './styles'
import { useState } from 'react'

export function GetCep() {
  fetch('https://viacep.com.br/ws/69086280/json/')
    .then(response => {
      if (response.status !== 200) {
        console.log('error ao buscar cep')
      } else {
        return response.json()
      }
    })

    .then(data => {
      if (data.erro) {
        console.log('cep não encontrado')
      } else {
        setStreet(data.logradouro)
        setNeighbourhood(data.bairro)
        setUf(data.uf)
        setLocation(data.localidade)
      }
    })

  const [street, setStreet] = useState('')
  const [neighbourhood, setNeighbourhood] = useState('')
  const [uf, setUf] = useState('')
  const [location, setLocation] = useState('')

  // function handleInputChange(event:any){
  //   setStreet (event.target.value)
  // }

  return (
    <Container>
      <Header>
        <h1>GET MY CEP</h1>
      </Header>

      <Content>
        <input type="text" placeholder="Digite seu CEP" maxLength={10} />
        <input  
          type="text" 
          disabled={true} 
          // onChange={handleInputChange}
          placeholder="Rua" 
          value={street} />
        <input
          type="text"
          disabled={true}
          placeholder="Bairro"
          value={neighbourhood}
        />
        <input 
          type="text" 
          disabled={true} 
          placeholder="Estado" 
          value={uf} />
        <input
          type="text"
          disabled={true}
          placeholder="Localidade"
          value={location}
        />
      </Content>
    </Container>
  )
}
