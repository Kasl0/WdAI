export class Trip {

    key?: string;

    name: string;
    country: string;
    start: string;
    end: string;
    price: number;
    currency: string;
    max: number;
    description: string;
    link: string;
    available: number;
    counter: number = 0;

    constructor(name: string, country: string, start: string, end: string, price: number, currency:string, max: number, description: string, link: string) {
        this.name = name;
        this.country = country;
        this.start = start;
        this.end = end;
        this.price = price;
        this.currency = currency;
        this.max = max;
        this.description = description;
        this.link = link;
        this.available = max;
    }
}
