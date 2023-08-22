type BookProps = {
  book: {
    title: string,
    pages: number,
    isRead: boolean,
    isFavorite: boolean,
  }
};

function Book({ book }: BookProps) {
  return (
    <li>
      <span>{book.isRead ? '✅ ' : '⌛ '}</span>
      <span>{`${book.title} (${book.pages} Páginas)`}</span>
      {book.isFavorite && <span> 💚</span>}
    </li>
  );
}

export default Book;
