'use client'

import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { FaChrome, FaStethoscope } from 'react-icons/fa6';
import { toast } from 'react-toastify';
import { useState } from "react";
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { FiMail } from 'react-icons/fi';
import { Eye, EyeClosed, Lock } from '@gravity-ui/icons';


const SignIn = () => {
    const [showPass, setShowPass] = useState(false);

    const router = useRouter();
    const searchParams = useSearchParams();

    const redirect = searchParams.get("redirect") || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignIn = async (data) => {

        const { data: res, error } = await authClient.signIn.email({
            email: data.email,
            password: data.password,
            rememberMe: true,
        })

        if (error) {
            toast.error(error.message);
        }

        if (res) {
            toast.success('Sign in successful')
        }

        router.push(redirect);
    }

    const googleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        console.log(process.env.BETTER_AUTH_URL)
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-100 p-8 lg:p-10 relative z-10">


                <div className="flex items-center gap-2 hover:opacity-80 transition-opacity w-full justify-center mb-5">
                    <div className="bg-primary text-primary-content p-2 rounded-lg">
                        <FaStethoscope className="text-2xl" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-base-content">
                        Doc<span className="text-primary">Appoint</span>
                    </span>
                </div>

                <div className='text-center mb-3'>
                    Welcome Back. Please choose a method to continue.
                </div>

                <button onClick={googleSignIn} className="flex items-center justify-center gap-3 w-full py-3.5 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 active:scale-90 transition-all font-semibold text-slate-700 group">
                    <FaChrome size={20} className="text-[#2563eb] group-hover:scale-110 transition-transform" />
                    Sign in with Google
                </button>

                <div className="relative my-8 text-center">
                    <hr className="border-slate-200" />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs uppercase tracking-widest text-slate-400">
                        Or use email
                    </span>
                </div>


                <form className="space-y-6" onSubmit={handleSubmit(handleSignIn)}>
                    <div>
                        <label className="block font-bold text-sm text-slate-700 mb-2 font-anta uppercase tracking-wider">Email Address</label>
                        <div className="relative">
                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="email"
                                {...register("email", { required: "Email is required" })}
                                placeholder="you@example.com"
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        {
                            errors.email && <p className="text-red-500" >{errors.email.message}</p>
                        }
                    </div>

                    <div>
                        <label className="block font-bold text-sm text-slate-700 mb-2 font-anta uppercase tracking-wider">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type={showPass ? "text" : "password"}
                                {...register("password", { required: "Password is required" })}
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                            />
                            <span onClick={() => setShowPass(!showPass)} className='absolute right-4 top-3.5'>
                                {
                                    showPass ? <Eye /> : <EyeClosed />
                                }
                            </span>
                        </div>
                        {
                            errors.password && <p className="text-red-500" >{errors.password.message}</p>
                        }
                    </div>

                    <button className="w-full py-4 bg-[#2563eb] text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all transform hover:-translate-y-0.5">
                        Sign In
                    </button>
                </form>

                <p className="text-center mt-8 text-slate-600">
                    Don&apos;t have an account?
                    <a href="/register" className="text-[#10b981] font-bold hover:underline underline-offset-4 decoration-2"> Create Account</a>
                </p>
            </div>
        </div>
    );
};

export default SignIn;