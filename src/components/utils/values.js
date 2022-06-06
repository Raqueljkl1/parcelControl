import moment from 'moment';
export const initialValues = {
    debts: [{
      type: "",
      value: "" ,
      formOfPayment: "",
      card: "",
      date: moment().format('YYYY-MM-DD'),
    },
  ],
}