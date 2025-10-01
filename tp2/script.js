let taches = JSON.parse(localStorage.getItem("taches")) || [];
// III. DOM
function afficherTaches() {
  const liste = document.getElementById("liste");
  liste.innerHTML = "";

  const filtre = document.getElementById("recherche").value.toLowerCase();

  // VII. Boucle pour réafficher la liste
  taches.forEach((tache, index) => {
    if (tache.texte.toLowerCase().includes(filtre)) {
      const li = document.createElement("li");
      li.className = tache.terminee ? "terminee" : "";

      // V. Amélioration affichage
      li.innerHTML = `
        <span>${tache.texte}</span>
        <div class="actions">
          <button onclick="terminerTache(${index})">terminer</button>
          <button onclick="supprimerTache(${index})">supprimer</button>
        </div>
      `;
      liste.appendChild(li);
    }
  });

  //X.compteur
  const enCours = taches.filter(t => !t.terminee).length;
  const finies = taches.filter(t => t.terminee).length;
  document.getElementById("compteur").textContent =
    `En cours: ${enCours} | Terminées: ${finies}`;

  // IX.Sauvegarde
  localStorage.setItem("taches", JSON.stringify(taches));
}

// VI. Fonctions dédiées
function ajouterTache() {
  const input = document.getElementById("tacheInput");
  const texte = input.value.trim();

  if (texte !== "") {
    // VIII. Objet représentant une tâche
    taches.push({ texte: texte, terminee: false });
    input.value = "";
    afficherTaches();
  }
}

function supprimerTache(index) {
  taches.splice(index, 1);
  afficherTaches();
}

function terminerTache(index) {
  taches[index].terminee = !taches[index].terminee;
  afficherTaches();
}

// X.tout supprimer
document.getElementById("toutSupprimer").addEventListener("click", () => {
  taches = [];
  afficherTaches();
});

// IV. Gestion des événements
document.getElementById("ajouter").addEventListener("click", ajouterTache);

// X. recherche
document.getElementById("recherche").addEventListener("input", afficherTaches);

//Affichage
afficherTaches();
