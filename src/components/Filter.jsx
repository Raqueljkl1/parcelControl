import React from 'react';
import { Card, CardBody, Button, Input, Label, FormGroup, Row, Col } from 'reactstrap';
import { Formik, Field } from 'formik';
import moment from 'moment';

export default function Filter() {
  return (
    <div>
      <Card
        body
        color="secondary"
        // inverse
        outline
      >
        <CardBody>
          <Formik
            initialValues={{ 'initial-data': '', 'final-data':moment().format('YYYY-MM-DD') }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 5000);
            }}
          >
            {({
              values,
              handleChange,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className='d-flex align-items-center'>
                <FormGroup>                  
                <Label htmlFor="initial-data">Data de inicio: </Label>
                <Field
                  id="initial-data"
                  type="date"
                  name="initial-data"
                  component={Input}
                  onChange={handleChange}
                  value={values['initial-data']}
                />
                </FormGroup>
                <FormGroup>
                <Label htmlFor="final-data">Data final:</Label>
                <Field
                  id="final-data"
                  type="date"
                  name="final-data"
                  component={Input}
                  onChange={handleChange}
                  value={values['final-data']}
                />
                </FormGroup>
                <Col>
                  <Button type="submit" color='danger' outline disabled={isSubmitting}>
                    Buscar
                  </Button>
                </Col>
              </form>
            )}
          </Formik>
        </CardBody>
      </Card>
    </div>
  );
}
