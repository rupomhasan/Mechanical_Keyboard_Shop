import { ReactNode } from "react";
import {
  FormProvider,
  SubmitHandler,
  useForm,
  UseFormReturn,
  FieldValues,
} from "react-hook-form";

type TFormProps<T extends FieldValues> = {
  children: ReactNode;
  onSubmit: SubmitHandler<T>;
};

const Form = <T extends FieldValues>({ children, onSubmit }: TFormProps<T>) => {
  const methods: UseFormReturn<T> = useForm<T>();

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default Form;
