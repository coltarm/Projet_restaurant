// Exemple d'appel API avec Fetch

const apiUrl = 'http://localhost:3000/commentary';

// Configuration de la requête
const requestOptions = {
  method: 'POST',
  body: JSON.stringify({
    username: 'Vasino',
    rest_name: '3 Brasseurs',
    city: 'Annecy',
    price: 12.8,
    public: true,
    rating: 2.5,
    commentary: "ahhhhhhhhhhhhhhhhhhhhhhhhhhhf",
  }),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

// Effectuer la requête avec Fetch
fetch(apiUrl, requestOptions)
  .then(response => {
    // Vérifier si la requête a réussi (statut HTTP 2xx)
    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }
    // Convertir la réponse en JSON
    return response.json();
  })
  .catch(error => {
    // Gérer les erreurs
    console.error('Erreur lors de la requête API:', error);
  });


  db.users.aggregate([{ $unwind: '$Comments' },{ $match: { 'Comments.public': true } }])
  