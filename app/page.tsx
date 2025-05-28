import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark to-primary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-display font-bold text-light mb-6">
            OpenFront Tournaments
          </h1>
          <p className="text-xl text-light/80 mb-12">
            Suivez tous les résultats des tournois OpenFront en temps réel
          </p>
          <div className="space-x-4">
            <Link 
              href="/tournaments" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Voir les tournois
            </Link>
            <Link 
              href="/about" 
              className="bg-secondary hover:bg-secondary/90 text-dark px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              À propos
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
} 