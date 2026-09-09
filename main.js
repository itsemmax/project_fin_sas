const {trips,tickets} = require("./trips");
const prompt = require("prompt-sync")();



function afficher_trajects(){
    console.log("╔══════════════════════════════════════════╗");
    console.log("║           🚆 TRAJETS DISPONIBLES         ║");
    console.log("╚══════════════════════════════════════════╝");
    console.log("                                           ");

    for(let i=0;i< trips.length ; i++){
        console.log(`  #${trips[i].id}  ${trips[i].departure} → ${trips[i].destination}`);
        console.log("  ─────────────────────────────────────────");
        console.log(`  🕐 Départ        : ${trips[i].departureTime}`);
        console.log(`  🕐 Arrivée       : ${trips[i].arrivalTime}`);
        console.log(`  💰 Prix          : ${trips[i].price} DH`);
        console.log(`  💺 Places        : ${trips[i].availableSeats}`);
        console.log("                                           ");
    }
    while(1){
    let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
        if(c == 0)
            return menu();
        console.log("❌ Choix invalide. Tapez 0 pour revenir.")
    }
}

function acheter_ticket(){
    while(1){
    let str = prompt("Nom du passager :").trim();
    while(str === ""){
        console.log("❌Nom invalide, veuillez réessayer.");
        str = prompt("Nom du passager : ");
    }
    let num = Number(prompt("Numéro du trajet : "));
        while(num < 0 || num > 20){
            console.log("❌ Numéro de trajet invalide. Veuillez choisir un numéro entre 1 et 20.");
            num = Number(prompt("Numéro du trajet : "));
        }
        if(trips[num -1])
        console.log(`  #${trips[num - 1].id}  ${trips[num - 1].departure} → ${trips[num -1].destination}`);
        console.log("  ─────────────────────────────────────────");
        console.log(`  🕐 Départ        : ${trips[num -1].departureTime}`);
        console.log(`  🕐 Arrivée       : ${trips[num -1].arrivalTime}`);
        console.log(`  💰 Prix          : ${trips[num-1].price} DH`);
        console.log(`  💺 Places        : ${trips[num-1].availableSeats}`);
        console.log("                                           ");
    }
}


function menu(){
        console.log("=================================");
        console.log("        RAILWAY MANAGER          ");
        console.log("=================================");
        console.log("1. Afficher les trajets");
        console.log("2. Acheter un ticket");
        console.log("3. Afficher les tickets");
        console.log("4. Annuler un ticket");
        console.log("5. Rechercher un ticket");
        console.log("6. Filtrer les trajets");
        console.log("7. Trier les trajets");
        console.log("0. Quitter");

        while(1){
        let x = Number(prompt("Entrez votre choix (0-7) :"));
        switch (x){
            case 1:
                return(afficher_trajects());
            case 2:
                return(acheter_ticket());
            case 3:
                break;
            case 4:
                break;
            case 5:
                break;
            case 6:
                break;
            case 7:
                break;
            case 0:
                console.log("Au revoir! 👋");
                return;
            default:
                console.log("❌ Choix invalide. Veuillez choisir un nombre entre 0 et 7.");
                break;
        }
}
}
menu();


