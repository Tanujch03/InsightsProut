import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, Lightbulb, TrendingUp, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"
export default function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/signup");

  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="h-8 w-8 text-green-400" />
          <span className="text-2xl font-bold text-white">InsightSprout</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-300 hover:text-green-400">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400">Features</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400">Pricing</a></li>
            <li><a href="#" className="text-gray-300 hover:text-green-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Grow Your Insights, Sprout Success</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            InsightSprout helps you cultivate ideas, nurture knowledge, and harvest success in your personal and professional life.
          </p>
          <Button className="bg-green-500 hover:bg-green-600 text-gray-900 px-8 py-3 rounded-full text-lg font-semibold" onClick={handleGetStarted}>
            Get Started
          </Button>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Why Choose InsightSprout?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Lightbulb className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Idea Generation</h3>
              <p className="text-gray-300">Spark creativity and innovation with our advanced ideation tools.</p>
            </div>
            <div className="text-center">
              <Brain className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Knowledge Management</h3>
              <p className="text-gray-300">Organize and access your insights with our intuitive knowledge base.</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Growth Tracking</h3>
              <p className="text-gray-300">Monitor your progress and celebrate milestones along your journey.</p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 bg-gray-800 rounded-lg">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Sprout New Insights?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of thinkers, innovators, and achievers who are growing their potential with InsightSprout.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full sm:w-64 px-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 border-gray-600"
              />
              <Button className="bg-green-500 hover:bg-green-600 text-gray-900 px-6 py-2 rounded-full flex items-center">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>&copy; 2023 InsightSprout. All rights reserved.</p>
      </footer>
    </div>
  )
}