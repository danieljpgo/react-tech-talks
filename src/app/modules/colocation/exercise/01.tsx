import * as React from 'react';

// Login/Form/index.tsx
interface Form {
  username: string,
  password: string,
}

interface LoginFormProps {
  onSubmit: (form: Form) => void;
}

const LoginForm = (props: LoginFormProps) => {
  const { onSubmit } = props;
  const [form, setForm] = React.useState<Form>({ username: '', password: '' });

  function handleInputChange(name: string, value: string) {
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>, formValue: Form) {
    event.preventDefault();
    onSubmit(formValue);
  }

  return (
    <form className="grid gap-4" onSubmit={(event) => handleSubmit(event, form)}>
      <hr />
      <input
        type="email"
        name="username"
        placeholder="username"
        autoComplete="username"
        value={form.username}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={(event) => handleInputChange(event.target.name, event.target.value)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        autoComplete="current-password"
        value={form.password}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        onChange={(event) => handleInputChange(event.target.name, event.target.value)}
      />
      <hr />
      <button
        type="submit"
        className="block w-full p-2 text-gray-400 uppercase border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      >
        Login
      </button>
    </form>
  );
};

// Login/index.tsx
const Login = () => {
  function handleSubmit(form: Form) {
    alert(`${form.username} ${form.password}`);
  }

  return (
    <div className="p-6 rounded-lg shadow-lg">
      <h2 className="pb-2 text-xl text-center text-gray-400">Login</h2>
      <LoginForm onSubmit={(form) => handleSubmit(form)} />
    </div>
  );
};

const Exercise01 = () => (
  <div className="grid h-screen place-items-center">
    <Login />
  </div>
);

export default Exercise01;
