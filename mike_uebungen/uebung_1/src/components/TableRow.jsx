import React from 'react';

function TableRow({ Autor, Titel, Jahr, Seiten, Länge, Verlag }) {
  /*  
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
    <tr>
      <td>{Autor}</td>
      <td>{Titel}</td>
      <td>{Jahr}</td>
      <td>{Seiten || ''}</td>
      <td>{Länge || ''}</td>
      <td>{Verlag}</td>
    </tr>
  );
}

export default TableRow; 
