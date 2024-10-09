import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Search } from 'lucide-react'

export default function MainPage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark">
      <header className="p-4 border-b">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <BookOpen className="mr-2" />
            BookNook
          </Link>
          <div className="flex items-center space-x-4">
            <Link href="/browse">Browse</Link>
            <Link href="/login">Login</Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
      </header>
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4">Discover Your Next Great Read</h1>
        <p className="text-xl mb-8">Join our community of book lovers. Review, rate, and discuss your favorite books.</p>
        <div className="flex max-w-md">
          <Input type="text" placeholder="Search for books..." className="mr-2" />
          <Button>
            <Search className="mr-2" />
            Search
          </Button>
        </div>
      </main>
    </div>
  )
}