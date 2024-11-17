import { Form, type ActionFunction, Link, redirect } from 'react-router-dom';
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FormInput, SubmitBtn } from '@/components';
import { customFetch } from '@/utils';
import { toast } from '@/hooks/use-toast';
import { AxiosError } from 'axios';

export const action: ActionFunction = async ({
  request,
}): Promise<Response | null> => {
  const formData = await request.formData();

  const data = Object.fromEntries(formData);

  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    await customFetch.post('/auth/local/register', data);
    toast({ description: 'Registration Success!' });
    return redirect('/login');
  } catch (error) {
    // console.log(error);
    const errorMessage =
      error instanceof AxiosError
        ? error.response?.data.error.message
        : 'Registration Failed';
    toast({ description: errorMessage });
    return null;
  }
};

function Register() {
  return (
    <section className="h-screen grid place-items-center">
      <Card className="w-96 bg-muted">
        <CardHeader>
          <CardTitle className="text-center">Register</CardTitle>
        </CardHeader>
        <CardContent>
          <Form method="POST">
            <FormInput type="text" name="username"></FormInput>
            <FormInput type="email" name="email"></FormInput>
            <FormInput type="password" name="password"></FormInput>
            <SubmitBtn text="Register" className="w-full mt-4" />
          </Form>
          <p className="text-center m-4">
            Already a member?{' '}
            <Button type="button" asChild variant="link">
              <Link to="/login">Login</Link>
            </Button>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

export default Register;
