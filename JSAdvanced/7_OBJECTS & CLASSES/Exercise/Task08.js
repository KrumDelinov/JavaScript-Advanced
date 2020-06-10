function solve(array = [], criterion) {
    class Ticket {

        constructor(destination, price, status){

            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    const tickets = [];

    for (let index = 0; index < array.length; index++) {
        const row = array[index];

        let [dst, prc, sts] = row.split("|");

        let ticket = new Ticket(dst, prc, sts);
        
        tickets.push(ticket);
    }

  

    return criterion == "price"?tickets.sort((a, b) => a[criterion] - b[criterion]):tickets.sort((a, b) => a[criterion].localeCompare(b[criterion]))

    
}

console.log( solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'status'

))