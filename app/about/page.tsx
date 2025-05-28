import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark to-dark-lighter">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-display font-bold text-light mb-8 text-center">
            À propos d'OpenFront Tournaments
          </h1>
          
          <div className="space-y-8 text-light">
            <section className="card">
              <h2 className="text-2xl font-display font-bold mb-4">Notre Mission</h2>
              <p className="text-lg">
                OpenFront Tournaments est la plateforme de référence pour suivre et participer aux tournois du jeu OpenFront. 
                Notre objectif est de créer une communauté dynamique et compétitive autour de ce jeu passionnant.
              </p>
            </section>

            <section className="card">
              <h2 className="text-2xl font-display font-bold mb-4">Fonctionnalités</h2>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Suivi en temps réel des tournois</li>
                <li>Statistiques détaillées des joueurs</li>
                <li>Inscriptions aux tournois</li>
                <li>Historique des matchs</li>
                <li>Classements et récompenses</li>
              </ul>
            </section>

            <section className="card">
              <h2 className="text-2xl font-display font-bold mb-4">Rejoignez-nous</h2>
              <p className="text-lg mb-4">
                Que vous soyez un joueur débutant ou expérimenté, OpenFront Tournaments est l'endroit idéal pour 
                participer à des compétitions et progresser dans le jeu.
              </p>
              <Link 
                href="/tournaments"
                className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Découvrir les tournois
              </Link>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
} 