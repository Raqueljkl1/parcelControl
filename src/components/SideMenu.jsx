import React from 'react'
import {Card, CardBody, CardText, Button, Col} from 'reactstrap'

export default function SideMenu() {
  return (
    <div>
    <Card
      inverse
      outline
    >
      <CardBody className='d-flex flex-column mb-3'>
        <Col className='p-3' >
          <Button className='buttonSide'>
            Cadastrar Tipo
          </Button>
        </Col>
        <Col className='p-3'>
          <Button className='buttonSide'>
            Cadastrar Forma de Pagamento
          </Button>
        </Col>
        <Col className='p-3'>
        <Button className='buttonSide'>
          Cadastrar Cartão
        </Button>
        </Col>
        <Col className='p-3 mt-10'>
          <Button className='buttonSide'>
            Gerar Relatório
          </Button>
        </Col>
        <Col className='p-3'>
        <Button className='buttonSide'>
          Configurações
        </Button>
        </Col>
      </CardBody>
    </Card>
  </div>
  )
}
