import { Input, InputProps } from '@/views/components/ui/input';

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/views/components/ui/form';

interface InputFormItemProps extends InputProps {
  control: any;
  name: string;
  label: string;
  description?: string;
  children?: React.ReactNode;
  actions?: React.ReactNode;
}

export function InputFormItem({
  control,
  name,
  label,
  description,
  children,
  actions,
  type,
  ...props
}: InputFormItemProps) {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      type === 'number' &&
      !/[0-9]/.test(event.key) &&
      event.key !== 'Backspace'
    ) {
      event.preventDefault();
    }
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel
            className={`text-slate-900 dark:text-slate-100 ${
              children && 'flex justify-between items-center'
            }`}>
            <div>
              {label}
              {props.required && <span className="!text-red-500">*</span>}
            </div>

            {children}
          </FormLabel>
          <FormControl>
            <div className="relative">
              {actions}
              <Input
                {...field}
                {...props}
                type={type}
                onKeyDown={handleKeyPress}
              />
            </div>
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
