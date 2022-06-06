import React, {useState, useEffect} from 'react';
import { Button, Table, } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import { initialValues } from './utils/values';
import moment from 'moment';
import { meuStorage } from '../services/localStorage';


export default function CardContent() {
  const [data, setData] = useState(initialValues);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedData = meuStorage.getItem('debts');
    if(savedData) {
      const parsedValues = JSON.parse(savedData);
      console.log(parsedValues);
      setData(parsedValues);
      setIsLoading(false)
    }
    setIsLoading(false)
  }, [])
  

  function addData() {
    const newField = data.debts
    newField.push({
      type: "",
      value: "" ,
      formOfPayment: "",
      card: "",
      date: moment().format('YYYY-MM-DD'),
    })
    setData({...data, debts:newField});
  }

  return (
    <div>
    <h1>Contas</h1>
  {/* <tbody> */}
  {isLoading ? <h1>loading</h1> :  <Formik
      initialValues={data}
      onSubmit={values => {
        meuStorage.removeItem('debts');
        meuStorage.setItem('debts', JSON.stringify(values));
      }}
      >
      <Form className='d-flex flex-column'>
        <Table>
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>
                Tipo
              </th>
              <th>
                Valor
              </th>
              <th>
              Forma de Pagamento
              </th>
              <th>
              Cartao
              </th>
              <th>
              Data
              </th>
            </tr>
          </thead>
          <tbody>
            {data.debts.map((_,index) => (
              <tr>
                <th scope="row">
                {index + 1}
                </th>
                <td>
                <Field name={`debts[${index}].type`} />
                </td>
                <Field name={`debts[${index}].value`} />
                <td>
                <Field name={`debts[${index}].formOfPayment`} />
                </td>
                <Field name={`debts[${index}].card`} />
                <td>
                <Field name={`debts[${index}].date`}/>
                </td>
              </tr>
            ))}
          </tbody>
    </Table>
    <div className="align-self-end p-2">
      <button type="button" className="btn btn-w3r text-center me-3" onClick={addData}> <b>+</b> </ button>
      <button className="btn btn-dark" type="submit" >Submit </button>
    </div>
      </Form>
    </Formik>}
  </div>
  )
}
