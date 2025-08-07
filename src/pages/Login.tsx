import React from 'react';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#d8c9ae] to-[#575757] px-4">
      <div className="backdrop-blur-xl bg-white/30 dark:bg-white/10 w-full max-w-md rounded-2xl shadow-2xl p-8 sm:p-10 transition-all duration-300 border border-white/20">
        <h1 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">Sign In</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email address</label>
            <input type="email" id="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black transition" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Password</label>
            <input type="password" id="password" placeholder="Enter your password" className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-black transition" />
          </div>
          <div className="text-right">
            <button type="button" className="text-gray-900 dark:text-white hover:underline text-sm">Forgot password?</button>
          </div>
          <div>
            <Link to={'/'}>
              <button type="submit" className="w-full bg-white/30 hover:bg-[#575757] text-black py-2 rounded-full font-semibold transition duration-300">Log In</button>
            </Link>
          </div>
          <div className="text-center">
            <Link to="/" className="inline-block mt-4 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-800 transition">Go back</Link>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;