'use client'

import Link from 'next/link';
import { FaChrome, FaStethoscope, FaUser } from 'react-icons/fa6';
import { FaImage } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useState } from 'react';
import { redirect } from 'next/navigation';
import { FiMail } from 'react-icons/fi';
import { Eye, EyeClosed, Lock } from '@gravity-ui/icons';


const SignUp = () => {
    const [showPass, setShowPass] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = async (data) => {
        const { name, email, image, password } = data;
        const { data: res, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            image: image,
            callbackURL: "/login",
        })

        if (error) {
            toast.error(error.message);
        }

        if (res) {
            toast.success('Sign up successful');
            redirect('/login')
        }
    }

    const googleSignIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center p-6">

            <div className="w-full max-w-lg bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl border border-slate-100 p-8 lg:p-12 relative z-10">

                <div className="flex items-center gap-2 hover:opacity-80 transition-opacity w-full justify-center mb-5">
                    <div className="bg-primary text-primary-content p-2 rounded-lg">
                        <FaStethoscope className="text-2xl" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-base-content">
                        Doc<span className="text-primary">Appoint</span>
                    </span>
                </div>

                <div className='text-center mb-3'>
                    Welcome. Please choose a method to get registered continue your journey with us.
                </div>

                <div className="mb-8">
                    <button onClick={googleSignIn} className="flex items-center justify-center gap-3 w-full py-3.5 border-2 border-slate-100 rounded-2xl hover:bg-slate-50 transition-all font-semibold text-slate-700 group">
                        <FaChrome size={20} className="text-[#2563eb] group-hover:scale-110 transition-transform" />
                        Sign in with Google
                    </button>

                    <div className="relative my-8 text-center">
                        <hr className="border-slate-100" />
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-4 text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">
                            Or register manually
                        </span>
                    </div>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit(handleSignUp)}>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 font-anta uppercase tracking-wider">Full Name</label>
                        <div className="relative">
                            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="text"
                                {...register("name", { required: "Please enter your name" })}
                                placeholder="John Doe"
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        {
                            errors.name && <p className="text-red-500" >{errors.name.message}</p>
                        }
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 font-anta uppercase tracking-wider">Email Address</label>
                        <div className="relative">
                            <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="email"
                                {...register("email", { required: "Please enter your email" })}
                                placeholder="name@email.com"
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        {
                            errors.email && <p className="text-red-500" >{errors.email.message}</p>
                        }
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 font-anta uppercase tracking-wider">Image URL</label>
                        <div className="relative">
                            <FaImage className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type="url"
                                {...register("image", { required: "Please enter your image url" })}
                                placeholder="https://example.com/photo.jpg"
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        {
                            errors.image && <p className="text-red-500" >{errors.image.message}</p>
                        }
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2 font-anta uppercase tracking-wider">Create Password</label>
                        <div className="relative">
                            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                            <input
                                type={showPass ? "text" : "password"}
                                {...register("password", {
                                    required: "Please enter your password",
                                    minLength: {
                                        value: 6,
                                        message: "Minimum length is 6"
                                    },

                                    validate: {
                                        hasUpperCase: value =>
                                            /[A-Z]/.test(value) ||
                                            "Must contain at least 1 uppercase letter",

                                        hasLowerCase: value =>
                                            /[a-z]/.test(value) ||
                                            "Must contain at least 1 lowercase letter",
                                    }
                                })}
                                placeholder="••••••••"
                                className="w-full pl-12 pr-4 py-3.5 bg-slate-50/50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#2563eb] focus:border-transparent outline-none transition-all"
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

                    <button className="w-full py-4 mt-4 bg-[#2563eb] text-white rounded-2xl font-bold shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all transform hover:-translate-y-1 active:scale-95">
                        Create Account
                    </button>
                </form>

                <p className="text-center mt-10 text-slate-600 font-medium">
                    Already have an account?{' '}
                    <Link href="/login" className="text-[#10b981] font-bold hover:underline underline-offset-4 decoration-2">
                        Login here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUp;