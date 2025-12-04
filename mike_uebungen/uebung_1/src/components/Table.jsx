import TableRow from './TableRow.jsx';

function Table(props) {
  // Destrukturierung
  const { books, audio } = props;
  /* props = Books-Objekt
   * props.autor:
   * - autor: string 
   * - titel: string
   * - jahr: number
   * - seiten: number
   * - verlag: string
   */
  /* props = Audio-Objekt
   * props.autor:
   * - autor: string 
   * - titel: string
   * - länge: number
   * - verlag: string
   */
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
              <th>Länge</th>
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
