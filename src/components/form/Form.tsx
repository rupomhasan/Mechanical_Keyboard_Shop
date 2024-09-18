import { ReactNode } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { TFormInput } from "./LoginForm";

type TFormProps = {
  children: ReactNode;
  onSubmit: SubmitHandler<TFormInput>;
};

const Form = ({ children, onSubmit }: TFormProps) => {
  const methods: UseFormReturn<TFormInput> = useForm<TFormInput>();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
