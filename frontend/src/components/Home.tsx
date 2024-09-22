import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Lightbulb } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-gray-800">
        <Link className="flex items-center justify-center" href="#">
          <Lightbulb className="h-6 w-6 text-yellow-400" />
          <span className="ml-2 text-2xl font-bold text-yellow-400">InsightSprout</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#">
            Insights
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-yellow-400 transition-colors" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-yellow-400">
                  Welcome to InsightSprout
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Discover and share valuable insights to grow your knowledge and inspire others.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-yellow-400 text-gray-900 hover:bg-yellow-500">Get Started</Button>
                <Button variant="outline" className="border-yellow-400 text-yellow-400 hover:bg-yellow-400/10">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-yellow-400">
              Featured Insights
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-yellow-400">The Power of Mindfulness</CardTitle>
                  <CardDescription className="text-gray-400">By John Doe</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Explore how mindfulness can improve your daily life and boost productivity.
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-yellow-400">Future of AI in Healthcare</CardTitle>
                  <CardDescription className="text-gray-400">By Jane Smith</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Discover the potential impact of artificial intelligence on the healthcare industry.
                </CardContent>
              </Card>
              <Card className="bg-gray-700 border-gray-600">
                <CardHeader>
                  <CardTitle className="text-yellow-400">Sustainable Living Tips</CardTitle>
                  <CardDescription className="text-gray-400">By Alex Johnson</CardDescription>
                </CardHeader>
                <CardContent className="text-gray-300">
                  Learn practical ways to reduce your carbon footprint and live more sustainably.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800">
        <p className="text-xs text-gray-400">© 2023 InsightSprout. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:text-yellow-400 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:text-yellow-400 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}