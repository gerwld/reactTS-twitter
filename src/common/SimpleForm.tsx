import React, {FC} from "react";
import { Form } from "react-final-form";
import PropTypes from 'prop-types';

const SimpleForm: FC<SimFormProps> = ({children, onSend, validate}) => {
  const onSubmit = (data: any, form: any) => {
    onSend(data)
    setTimeout(form.reset);
  };
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
         {children}
        </form>
      )}
    />
  );
};

interface SimFormProps {
  children: React.ReactNode
  onSend(arg0: object): void
  validate?(): any
}

export default SimpleForm;
