import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignupInput } from "@tanujch/insightsprouts";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Brain } from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

export const Auth = ({ type }: { type: "signup" | "signin" }) => {
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    });

    async function sendRequest() {
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
            const jwt = response.data;
            localStorage.setItem("token", jwt);

            // Display success toast at top-left corner
            toast.success(`${type === "signup" ? "Signup" : "Signin"} successful!`);
            
            navigate("/blogs");
        } catch(e) {
            console.log(e);

            // Display error toast at top-left corner
            toast.error(`Error during ${type === "signup" ? "signup" : "signin"}`);
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 flex justify-center items-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
                {/* Toaster with position set to top-left */}
                <Toaster position="top-left" reverseOrder={false} />
                <div className="flex justify-center mb-6">
                    <Brain className="h-12 w-12 text-green-400" />
                </div>
                <div className="text-3xl font-extrabold text-center mb-2">
                    {type === "signup" ? "Create an account" : "Welcome back"}
                </div>
                <div className="text-gray-400 text-center mb-6">
                    {type === "signin" ? "Don't have an account?" : "Already have an account?" }
                    <Link className="ml-2 text-green-400 hover:underline" to={type === "signin" ? "/signup" : "/signin"}>
                        {type === "signin" ? "Sign up" : "Sign in"}
                    </Link>
                </div>
                <div>
                    {type === "signup" && (
                        <LabelledInput 
                            label="Name" 
                            placeholder="John Doe" 
                            onChange={(e) => {
                                setPostInputs({
                                    ...postInputs,
                                    name: e.target.value
                                });
                            }} 
                        />
                    )}
                    <LabelledInput 
                        label="Username" 
                        placeholder="johndoe@example.com" 
                        onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                username: e.target.value
                            });
                        }} 
                    />
                    <LabelledInput 
                        label="Password" 
                        type="password" 
                        placeholder="••••••••" 
                        onChange={(e) => {
                            setPostInputs({
                                ...postInputs,
                                password: e.target.value
                            });
                        }} 
                    />
                    <button 
                        onClick={sendRequest} 
                        type="button" 
                        className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200 ease-in-out"
                    >
                        {type === "signup" ? "Sign up" : "Sign in"}
                    </button>
                </div>
            </div>
        </div>
    );
};

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

function LabelledInput({ label, placeholder, onChange, type }: LabelledInputType) {
    return (
        <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-300">{label}</label>
            <input 
                onChange={onChange} 
                type={type || "text"} 
                className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" 
                placeholder={placeholder} 
                required 
            />
        </div>
    );
}

export default Auth;
