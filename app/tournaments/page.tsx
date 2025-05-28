import Link from 'next/link'

// Données temporaires pour l'exemple
const tournaments = [
  {
    id: 1,
    name: "Tournoi d'Été 2024",
    date: "15 Juillet 2024",
    status: "À venir",
    participants: 32,
    prizePool: "1000€"
  },
  {
    id: 2,
    name: "Championnat National",
    date: "1 Juin 2024",
    status: "Inscriptions ouvertes",
    participants: 64,
    prizePool: "2500€"
  },
  {
    id: 3,
    name: "Tournoi Amical",
    date: "20 Mai 2024",
    status: "En cours",
    participants: 16,
    prizePool: "500€"
  }
]

export default function TournamentsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-dark to-dark-lighter">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-light mb-4">
            Tournois OpenFront
          </h1>
          <p className="text-xl text-light/80">
            Découvrez tous les tournois à venir et en cours
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tournaments.map((tournament) => (
            <div 
              key={tournament.id}
              className="card"
            >
              <h2 className="text-2xl font-display font-bold mb-2 text-light">{tournament.name}</h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-light/80">Date:</span>
                  <span className="font-semibold text-light">{tournament.date}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-light/80">Statut:</span>
                  <span className={`font-semibold ${
                    tournament.status === "En cours" ? "text-green-400" :
                    tournament.status === "À venir" ? "text-yellow-400" :
                    "text-blue-400"
                  }`}>
                    {tournament.status}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="text-light/80">Participants:</span>
                  <span className="font-semibold text-light">{tournament.participants}</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-light/80">Prix:</span>
                  <span className="font-semibold text-light">{tournament.prizePool}</span>
                </p>
              </div>
              <Link 
                href={`/tournaments/${tournament.id}`}
                className="mt-4 block w-full bg-primary hover:bg-primary/90 text-white text-center py-2 rounded-lg font-semibold transition-colors"
              >
                Voir les détails
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
} 