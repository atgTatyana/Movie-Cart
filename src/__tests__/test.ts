import Cart from '../Cart';
import Book from '../Book';
import Movie from '../Movie';
import MusicAlbum from '../MusicAlbum';

test('new card should be empty', () => {
    const cart = new Cart();
    expect(cart.items.length).toBe(0);
});

test('testing function class Book', () => {
    const cart = new Cart();
    const book = new Book(100, 'Хоббит', 'Д.Р. Толкин', 700, 500);
    cart.add(book);
    expect(cart.items).toEqual([{id: 100, name: 'Хоббит', author: 'Д.Р. Толкин', price: 700, pages: 500}]);
});

test('testing function class MusicAlbum', () => {
    const cart = new Cart();
    const musicAlbum = new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900);
    cart.add(musicAlbum);
    expect(cart.items).toEqual([{id: 1008, name: 'Meteora', author: 'Linkin Park', price: 900}]);
});

test('testing function class Movie', () => {
    const cart = new Cart();
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
    cart.add(movie);
    expect(cart.items).toEqual([{
        id: 101,
        img: 'https://upload.wikimedia.org/wikipedia/ru/3/3c/The_Avengers_2012_logo.jpg',
        name: 'Мстители',
        nameEn: 'The Avengers',
        format: 'IMAX',
        country: 'США',
        genre: 'фантастика, боевик, фэнтези, приключения, ...',
        price: 150,
        tagline: "Avengers Assemble!",
        time: "137 мин. / 02:17",
        year: 2012,
    }]);
});

test('testing functions summ, summDiscount', () => {
    const cart = new Cart();
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
    const book = new Book(100, 'Хоббит', 'Д.Р. Толкин', 700, 500);
    cart.add(book);
    cart.add(movie);
    const result = [ cart.summ(), cart.summDiscount(10)]
    expect(result).toEqual([850, 765]);
});

test('testing functions summ, addItemById, removeItemById', () => {
    const cart = new Cart();
    cart.add({
        id: 150,
        name: 'Apple iPhone 14',
        price: 150000,
        itemNumber: 2,
    })
    cart.addItemById(150);
    cart.removeItemById(150);
    const result = cart.summ();
    expect(result).toBe(300000);
});

test('testing functions getAll, removeItem', () => {
    const cart = new Cart();
    cart.add({
        id: 150,
        name: 'Apple iPhone 14',
        price: 150000,
        itemNumber: 1,
    })
    cart.removeItemById(150);
    const result = cart.getAll();
    expect(result).toEqual([]);
});