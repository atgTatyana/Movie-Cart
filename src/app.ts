import Cart from "./Cart";
import Book from "./Book";
import Movie from "./Movie";
import MusicAlbum from "./MusicAlbum";

const cart = new Cart;
cart.add({
    id: 150,
    name: 'Apple iPhone 14',
    price: 150000,
    itemNumber: 1,
})
const book = new Book(100, 'Хоббит', 'Д.Р. Толкин', 700, 500);
const movie = new Movie(
    101,
    'https://upload.wikimedia.org/wikipedia/ru/3/3c/The_Avengers_2012_logo.jpg',
    'Мстители',
    'The Avengers',
    'IMAX',
    2012,
    'США',
    'Avengers Assemble!',
    'фантастика, боевик, фэнтези, приключения, ...',
    '137 мин. / 02:17',
    150
)
cart.add(book);
cart.add(movie);
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
// cart.removeItem(150);
cart.addItemById(150);
cart.removeItemById(150);
// cart.removeItemById(150);
// cart.removeItemById(150);
console.log(cart.summ(), cart.summDiscount(10))
console.log(cart.getAll());