import Header from './components/Header';
import Footer from './components/Footer';
import Book from './components/Book';
import './App.css';

const booksList = [
  {
    title: 'The GodFather',
    pages: 433,
    isRead: true,
    isFavorite: false,
  },
  {
    title: 'The Little Prince',
    pages: 100,
    isRead: true,
    isFavorite: true,
  },
  {
    title: 'Clean Code',
    pages: 572,
    isRead: false,
    isFavorite: false,
  },
  {
    title: 'Runa System - RPG',
    pages: 900,
    isRead: true,
    isFavorite: false,
  },
  {
    title: 'Game of Thrones - Ice and Fire',
    pages: 1200,
    isRead: true,
    isFavorite: true,
  },
];

function App() {
  return (
    <>
      <Header />
      <p>Meus Livros:</p>
      <ul>
        {booksList.map((book) => (
          <Book
            key={ book.title }
            book={ book }
          />
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default App;
