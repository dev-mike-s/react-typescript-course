import React from 'react';
import type { books as BookType, audio as AudioType } from './Main.tsx';

// Union type
type TableRowProps = BookType | AudioType;

function TableRow({ Autor, Titel, Verlag, Jahr, Seiten, Laenge }: TableRowProps) {

  return (
    <tr>

      <td>{Autor}</td>
      <td>{Titel}</td>
      <td>{Verlag}</td>
      <td>{Jahr || ''}</td>
      <td>{Seiten || ''}</td>
      <td>{Laenge || ''}</td>
    </tr>
  );
}

export default TableRow; 
