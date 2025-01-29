import { Button } from '@/views/components/ui/button';
import { Card, CardContent } from '@/views/components/ui/card';
import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowUpRight, Eye, EyeSlash, SpinnerGap } from '@phosphor-icons/react';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

export type AuthProps = {
  login: string;
  password: string;
};

import { useAuth } from '@/app/context';
import { Form } from '@/views/components/ui/form';
import { InputFormItem } from '@/views/components/ui/input-form-item';
import { Link } from 'react-router-dom';

export const schema = z.object({
  login: z
    .string({
      required_error: 'Esse campo não pode ser nulo.',
    })
    .min(1, { message: 'Insira valores nesse campo.' }),
  password: z
    .string({
      required_error: 'Este campo não pode ser vazio.',
    })
    .min(1, { message: 'Este campo deve ser preenchido.' }),
});

export function Login() {
  const { signIn } = useAuth();

  const [password, setPassword] = useState(true);

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      login: '',
      password: '',
    },
  });

  const submit = useMutation({
    mutationFn: async (params: AuthProps) => {
      try {
        const data = {
          login: params.login,
          password: params.password,
        };

        return await signIn(data.login, data.password);
      } catch (error) {
        toast.error('CPF ou Senha inválidos!');
        throw error;
      }
    },
  });

  function onSubmit(data: z.infer<typeof schema>) {
    submit.mutate(data);
  }

  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <div className="flex flex-col gap-6">
          <Card className="overflow-hidden">
            <CardContent className="grid p-0 md:grid-cols-2">
              <Form {...form}>
                <form
                  noValidate
                  className="p-6 md:p-8"
                  onSubmit={form.handleSubmit(onSubmit)}>
                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center text-center">
                      <h1 className="text-2xl font-bold">Welcome back</h1>
                      <p className="text-balance text-muted-foreground">
                        Login to your Acme Inc account
                      </p>
                    </div>
                    <div className="grid gap-2">
                      <InputFormItem
                        control={form.control}
                        name="login"
                        label="CPF/Email"
                        type="text"
                        className="h-fit px-4 py-2 text-base"
                        placeholder="000.###.###-00"
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <InputFormItem
                        control={form.control}
                        name="password"
                        label="Senha"
                        type={password ? 'password' : 'text'}
                        className="h-fit px-4 py-2 text-base"
                        required
                        actions={
                          <button
                            type="button"
                            className="absolute right-4 top-2.5"
                            onClick={() => setPassword((prev) => !prev)}>
                            {password ? (
                              <Eye className="w-5 h-5" />
                            ) : (
                              <EyeSlash className="w-5 h-5" />
                            )}
                          </button>
                        }
                        children={<Link to="#">Esqueceu?</Link>}
                        placeholder="Digite sua senha"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={submit.isPending}>
                      Login
                      {submit.isPending ? (
                        <SpinnerGap className="w-5 h-5 animate-spin" />
                      ) : (
                        <ArrowUpRight />
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
              <div className="relative hidden bg-muted md:block">
                <img
                  src="https://ui.shadcn.com/placeholder.svg"
                  alt="Image"
                  className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
