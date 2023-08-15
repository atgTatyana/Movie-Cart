import Buyable from './Buyable';

export default class Cart {
    items: Buyable[] = [];
    add(item: Buyable): void {
        this.items.push(item);
    }

    addItemById(id: number): void {
        this.items.forEach(item => {
            if (item.itemNumber && item.id === id) {
                item.itemNumber += 1;
            }
        })
    }

    removeItemById(id: number): void {
        this.items.forEach(item => {
            if (item.itemNumber && item.id === id) {
                item.itemNumber -= 1;
                if (item.itemNumber === 0) {
                    this.removeItem(id);
                }
            }
        })
    }

    getAll(): Buyable[] {
        return this.items;
    }

    summ(): number {
        return this.items.reduce((sum, item) => {
            return item.itemNumber ? sum + item.price * item.itemNumber : sum + item.price;
        }, 0)
    }

    summDiscount(discount: number): number {
        return this.summ() * (100 - discount)/100;
    }

    removeItem(id: number): void {
        this.items = this.items.filter(item => item.id !== id);
    }
}

/* через геттер
export class Cart1 {
    private _items: Buyable[] = [];
    add(item: Buyable): void {
        this._items.push(item);
    }
    get items(): Buyable[] {
        return [...this._items];
    }
} */