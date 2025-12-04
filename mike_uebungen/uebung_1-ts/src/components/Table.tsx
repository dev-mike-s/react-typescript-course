import TableRow from './TableRow.js';
import type { books, audio } from './Main.tsx'

type Props = {
  books?: books[];
  audio?: audio[];
}

function Table(props: Props) {
  // Destrukturierung
  const { books, audio } = props;
  return (
    <>
      { /* if the first expressions are false - it will return false, 
      react ignores it and renders nothing */}
      {books && books.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Autor</th>
              <th>Titel</th>
              <th>Jahr</th>
              <th>Seiten</th>
              <th>Verlag</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item, index) => (
              /* {...item} instead of: autor={item.autor} titel={item.titel} ... */
              <TableRow key={`book-${index}`} {...item} />
            ))}
          </tbody>
        </table>
      )}
      {audio && audio.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Autor</th>
              <th>Titel</th>
              <th>Jahr</th>
              <th>Laenge</th>
              <th>Verlag</th>
            </tr>
          </thead>
          <tbody>
            {audio.map((item, index) => (
              <TableRow key={`audio-${index}`} {...item} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
