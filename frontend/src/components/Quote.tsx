import { Brain } from 'lucide-react';
export const Quote = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 h-screen flex justify-center items-center">
            <div className="text-center">
                <div className="mb-8">
                    <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
                        <path 
                            d="M100 180 C 100 180, 100 100, 100 20" 
                            stroke="#22c55e" 
                            strokeWidth="4" 
                            fill="none"
                            className="animate-grow-stem"
                        />
                        <path 
                            d="M100 20 C 100 20, 70 50, 40 20 M100 20 C 100 20, 130 50, 160 20" 
                            stroke="#22c55e" 
                            strokeWidth="4" 
                            fill="none"
                            className="animate-grow-leaves"
                        />
                        <circle 
                            cx="100" 
                            cy="180" 
                            r="10" 
                            fill="#22c55e" 
                            className="animate-pulse"
                        />
                    </svg>
                </div>
                <div className="flex justify-center items-center mb-4">
                    <Brain className="h-8 w-8 text-green-400 mr-2" />
                    <h1 className="text-4xl font-bold text-white">InsightSprout</h1>
                </div>
                <p className="text-xl text-gray-300 max-w-md mx-auto">
                    Cultivating ideas, nurturing knowledge, and growing success.
                </p>
            </div>
        </div>
    );
}