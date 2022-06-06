import React from 'react'
import { Button, Row } from 'reactstrap'


export default function ProfileModal() {
  return (
    <Row>
      <Button>
          Trocar foto de Perfil
      </Button>
      <Button>
          Resetar a Senha
      </Button>
      <Button>
          Sair
      </Button>
    </Row>
  )
}
