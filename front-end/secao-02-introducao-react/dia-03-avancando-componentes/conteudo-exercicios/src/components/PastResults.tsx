function PastResults() {
  const results = [
    {
      id: 1025,
      year: 2016,
      numbers: [1, 2, 3, 4, 5, 6],
      prize: 'R$ 3.500.000,00',
    },
    {
      id: 1030,
      year: 2017,
      numbers: [10, 25, 43, 42, 59, 60],
      prize: 'R$ 7.500.000,00',
    },
  ];

  return (
    <div>
      {results.map((result) => (
        <article key={ result.id }>
          <h3>
            Ano:
            {' '}
            {result.year}
          </h3>
          <h2>
            Prêmio:
            {' '}
            {result.prize}
          </h2>
        </article>
      ))}
    </div>
  );
}

export default PastResults;
