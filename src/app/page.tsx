'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function LoginPage() {
  const [role, setRole] = useState<'admin' | 'teacher' | 'student'>('student');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password, role });
    router.push(`/${role}`);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-400 to-violet-400">
      <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg border border-gray-200 relative">
        <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2">
        </div>
        <div className='flex items-center w-full justify-center'>
        <Image  src="/logo.png" alt="logo" width={50} height={50} />
        </div>
        <h2 className="text-center text-2xl font-semibold mb-4 mt-8 text-blue-900">ورود به پنل مدرسه</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-700">نقش</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value as 'admin' | 'teacher' | 'student')} className="w-full p-2 border rounded-lg bg-gray-50">
              <option value="admin">مدیر</option>
              <option value="teacher">مربی</option>
              <option value="student">دانش‌آموز</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">ایمیل</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="ایمیل خود را وارد کنید" className="w-full p-2 border rounded-lg bg-gray-50" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">رمز عبور</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="رمز عبور" className="w-full p-2 border rounded-lg bg-gray-50" />
          </div>
          <button type="submit" className="w-full p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800">ورود</button>
        </form>
      </div>
    </div>
  );
}
