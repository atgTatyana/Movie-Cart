import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly img: string,
        readonly name: string,
        readonly nameEn: string,
        readonly format: string,
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: string,
        readonly time: string,
        readonly price: number,
    ) {
    }
}
    