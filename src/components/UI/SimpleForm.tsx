import React, {FC} from "react";
import { Form } from "react-final-form";

const SimpleForm: FC<SimFormProps> = ({children, onSend, validate, initialValue}) => {
  const onSubmit = (data: any, form: any) => {
    onSend(data)
    setTimeout(form.reset);
  };
  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValue}
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
  initialValue?: object | null
}

export default SimpleForm;
