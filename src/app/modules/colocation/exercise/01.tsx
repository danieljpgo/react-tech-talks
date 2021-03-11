/* eslint-disable no-alert */
import * as React from 'react';

// Coloque o código o mais próximo possível de onde for relevante

// Login/index.tsx

interface Form {
  username: string,
  password: string,
}

function passwordValidation(password: string) {
  if (password.length < 6) {
    return 'password must be at least 6 characters';
  }
  if (!password.split('').some((a) => !Number.isNaN(Number(a)))) {
    return 'password must have at least one number';
  }
  return '';
}

const Login = () => {
  const [form, setForm] = React.useState<Form>({ username: '', password: '' });
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');

  function handleForgetPassword() {
    alert('Forgot');
  }

  function handleResetPassword() {
    setPasswordErrorMessage('');
  }

  function handleInputChange(name: string, value: string) {
    if (name === 'password') {
      setPasswordErrorMessage('');
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>, formValue: Form) {
    event.preventDefault();
    const errorPasswordValidation = passwordValidation(formValue.password);
    if (errorPasswordValidation) {
      setPasswordErrorMessage(errorPasswordValidation);
      return;
    }
    alert(`${formValue.username} ${formValue.password}`);
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="pb-2 text-xl text-center text-gray-400">Login</h2>
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
          onBlur={() => handleResetPassword()}
        />
        <hr />
        <div className="flex justify-end">
          <button
            type="button"
            className="block px-2 text-gray-400 rounded-md focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            onClick={() => handleForgetPassword()}
          >
            Forgot your password?
          </button>
        </div>
        <button
          type="submit"
          className="block w-full p-2 text-gray-400 uppercase border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        >
          Login
        </button>
        {passwordErrorMessage && (
          <div className="py-2 text-center">
            <p className="text-xs text-red-400">{passwordErrorMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};

const Exercise01 = () => (
  <div className="grid h-screen bg-gray-300 place-items-center">
    <Login />
  </div>
);

export default Exercise01;
