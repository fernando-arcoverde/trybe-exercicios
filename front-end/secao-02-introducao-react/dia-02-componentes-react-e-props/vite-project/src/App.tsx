import Header from './components/Header';
import Footer from './components/Footer';
import Book from './components/Book';
import './App.css';

const book1 = {
  title: 'The GodFather',
  pages: 433,
  isRead: true,
  isFavorite: false,
};

const book2 = {
  title: 'The Little Prince',
  pages: 100,
  isRead: true,
  isFavorite: true,
};

const book3 = {
  title: 'Clean Code',
  pages: 572,
  isRead: false,
  isFavorite: false,
};

function App() {
  return (
    <>
      <Header />
      <p>Meus Livros:</p>
      <ul>
        <Book
          book={ book1 }
        />
        <Book
          book={ book2 }
        />
        <Book
          book={ book3 }
        />
      </ul>
      <Footer />
    </>
  );
}

export default App;
