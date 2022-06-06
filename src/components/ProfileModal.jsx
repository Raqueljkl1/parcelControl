import React from 'react'
import { Button, Row } from 'reactstrap'


export default function ProfileModal() {
  return (
    <Row>
      <Button color='link'>
          Trocar foto de Perfil
      </Button>
      <Button color='link'>
          Resetar a Senha
      </Button >
      <Button color='link'>
          Sair
      </Button>
    </Row>
  )
}
