const {trips,tickets} = require("./trips");
const prompt = require("prompt-sync")();
let counter =1;
let arr_removed_id = [];



function afficher_trajects(){
    console.log("╔══════════════════════════════════════════╗");
    console.log("║           TRAJETS DISPONIBLES            ║");
    console.log("╚══════════════════════════════════════════╝");
    console.log("                                           ");

    for(let i=0;i< trips.length ; i++){
        console.log(`  #${trips[i].id}  ${trips[i].departure} → ${trips[i].destination}`);
        console.log("  ─────────────────────────────────────────");
        console.log(`     Départ        : ${trips[i].departureTime}`);
        console.log(`     Arrivée       : ${trips[i].arrivalTime}`);
        console.log(`     Prix          : ${trips[i].price} DH`);
        console.log(`     Places        : ${trips[i].availableSeats}`);
        console.log("                                           ");
    }
    while(1){
    let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
        if(c == 0)
            return menu();
        console.log("Choix invalide. Tapez 0 pour revenir.")
    }
    let str = prompt()
}

function acheter_ticket(){
    while(1){
    let str = prompt("Nom du passager :");
    while(str === ""){
        console.log("Nom invalide, veuillez réessayer.");
        str = prompt("Nom du passager : ");
    }
    let num = Number(prompt("Numéro du trajet : "));
        while(num <= 0 || num > 20 || !Number.isInteger(num)){
            console.log("Numéro de trajet invalide. Veuillez choisir un numéro entre 1 et 20.");
            num = Number(prompt("Numéro du trajet : "));
        }
        if(trips[num -1].availableSeats > 0){
        console.log(`  #${trips[num - 1].id}  ${trips[num - 1].departure} → ${trips[num -1].destination}`);
        console.log("  ─────────────────────────────────────────");
        console.log(`     Départ        : ${trips[num -1].departureTime}`);
        console.log(`     Arrivée       : ${trips[num -1].arrivalTime}`);
        console.log(`     Prix          : ${trips[num-1].price} DH`);
        console.log(`     Places        : ${trips[num-1].availableSeats}`);
        console.log("                                           ");
        }
        else{
            console.log("╔══════════════════════════════════════╗");
            console.log("║             TRAIN COMPLET            ║");
            console.log("╚══════════════════════════════════════╝");
            console.log("                                        ");
            console.log("Désolé, ce trajet est complet. Aucune place disponible.");
            while(1){
            let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
            if(c == 0)
                return menu();
            continue;
            }
        }
        console.log("Êtes-vous sûr de vouloir acheter ce ticket ?");
        console.log("1. Confirmer l'achat");
        console.log("0. Retour au menu principal");
        let b =Number(prompt("Entrez votre choix : "));
        if(b == 0)
            return menu();
        else if(b ==1){
            let tck = {
                id : counter++,
                passengerName: str,
                tripId: num,
                seatNumber: (50 - trips[num - 1].availableSeats) + 1,
                price: trips[num -1].price
            }
            trips[num - 1].availableSeats--;
            tickets.push(tck);
            console.log("╔══════════════════════════════════════╗");
            console.log("║        TICKET ACHETÉ AVEC SUCCÈS     ║");
            console.log("╚══════════════════════════════════════╝");
            console.log(`Ticket #${tck.id}`);
            console.log(`Passager : ${tck.passengerName}`);
            console.log(`Trajet   : ${trips[num -1].departure} → ${trips[num -1].destination}`);
            console.log(`Place    : ${tck.seatNumber}`);
            console.log(`Prix     : ${tck.price} DH`);
            while(1){
            let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
            if(c == 0)
                return menu();
            console.log("Choix invalide. Tapez 0 pour revenir.")
            }
        }
        else{
            while(1){
            let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
            if(c == 0)
                return menu();
            console.log("Choix invalide. Tapez 0 pour revenir.")
            }
        }

    }
}
function afficher_ticket(){
    console.log("╔══════════════════════════════════════╗");
    console.log("║               TICKETS                ║");
    console.log("╚══════════════════════════════════════╝");
    if(tickets.length == 0){
        if (tickets.length === 0) {
        console.log("Aucun ticket enregistré.");
        while(1){
            let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
            if(c == 0)
                return menu();
            console.log("Choix invalide. Tapez 0 pour revenir.")
            }
    }
    }
    for (let i = 0; i < tickets.length; i++) {
    let trip = trips.find(trips => trips.id === tickets[i].tripId);
    console.log("");
    console.log(`Ticket #${tickets[i].id}`);
    console.log(`Passager : ${tickets[i].passengerName}`);
    console.log(`Trajet   : ${trip.departure} → ${trip.destination}`);
    console.log(`Place    : ${tickets[i].seatNumber}`);
    console.log(`Prix     : ${tickets[i].price} DH`);
    }
    while(1){
        let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
        if(c == 0)
            return menu();
        console.log("Choix invalide. Tapez 0 pour revenir.")
        }
}
function annuler_ticket(){
    while(1){
        console.log("╔══════════════════════════════════════╗");
        console.log("║          ANNULER UN TICKET           ║");
        console.log("╚══════════════════════════════════════╝");
        let n = Number(prompt("Identifiant du ticket :"));
        if (tickets.length === 0 || n <= 0) {
            console.log("Aucun ticket enregistré.");
        while(1){
            let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
            if(c == 0)
                return menu();
            console.log("Choix invalide. Tapez 0 pour revenir.")
            }
        }
        for(let i =0;i < tickets.length;i++){
            if(n === tickets[i].id){
                arr_removed_id.push(i + 1);
                tickets.splice(i,1);
                console.log("╔══════════════════════════════════════╗");
                console.log("║        TICKET ANNULÉ AVEC SUCCÈS     ║");
                console.log("╚══════════════════════════════════════╝");
                console.log("Ticket annulé avec succès.");
                while(1){
                let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
                if(c === 0)
                    return menu();
                }
            }
        }
        console.log("Aucun ticket enregistré.");
        while(1){
        let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
        if(c == 0)
            console.log("Choix invalide. Tapez 0 pour revenir.")
            return menu();
        }
    }
}
function rechercher_ticket(){
    while(1){
        console.log("╔══════════════════════════════════════╗");
        console.log("║          RECHERCHER UN TICKET        ║");
        console.log("╚══════════════════════════════════════╝");
        let str = prompt("Nom du passager :");
        
        for(let i =0;i< tickets.length;i++){
            if(str.toLowerCase() === tickets[i].passengerName.toLowerCase()){
                console.log("");
                console.log(`Ticket #${tickets[i].id}`);
                console.log(`Passager : ${tickets[i].passengerName}`);
                console.log(`Trajet   : ${tickets[i].departure} → ${tickets[i].destination}`);
                console.log(`Place    : ${tickets[i].seatNumber}`);
                console.log(`Prix     : ${tickets[i].price} DH`);
                while(1){
                let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
                if(c == 0)
                    return menu();
                console.log("Choix invalide. Tapez 0 pour revenir.")
                }
            }
        }
        console.log("❌ Aucun ticket trouvé pour ce passager.");
        while(1){
        let c = Number(prompt("Tapez 0 pour revenir au menu principal :"));
        if(c == 0)
            return menu();
        console.log("Choix invalide. Tapez 0 pour revenir.")
        }
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
                return(afficher_ticket());
            case 4:
                return(annuler_ticket());
            case 5:
                return(rechercher_ticket());
            case 6:
                return(filter_trajet());
            case 7:
                return(trier_trajet());
            case 0:
                console.log("Au revoir!");
                return;
            default:
                console.log("Choix invalide. Veuillez choisir un nombre entre 0 et 7.");
                break;
        }
}
}
menu();

