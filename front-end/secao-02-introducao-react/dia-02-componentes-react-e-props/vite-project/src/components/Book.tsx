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
      <span>{`${book.title} (${book.pages} Páginas)`}</span>
    </li>
  );
}

export default Book;
