import Table from './Table.js';
import '../index.css';

export type books = {
  Autor: string;
  Titel: string;
  Jahr: number;
  Seiten: number;
  Verlag: string;
}
export type audio = {
  Autor: string;
  Titel: string;
  Jahr: number;
  Laenge: number;
  Verlag: string;
}
function Main() {
  const BOOKS = [
    {
      Autor: 'Stephen King',
      Titel: 'Carrie',
      Jahr: 1974,
      Seiten: 199,
      Verlag: 'Doubleday',
    },
    {
      Autor: 'Stephen King',
      Titel: 'The Shining',
      Jahr: 1977,
      Seiten: 447,
      Verlag: 'Doubleday',
    },
    {
      Autor: 'Stephen King',
      Titel: 'Christine',
      Jahr: 1983,
      Seiten: 526,
      Verlag: 'Viking',
    },
    {
      Autor: 'Stephen King',
      Titel: 'It',
      Jahr: 1986,
      Seiten: 1138,
      Verlag: 'Viking',
    },
    {
      Autor: 'Stephen King',
      Titel: 'Misery',
      Jahr: 1987,
      Seiten: 310,
      Verlag: 'Viking',
    },
    {
      Autor: 'Stephen King',
      Titel: 'Joyland',
      Jahr: 2013,
      Seiten: 288,
      Verlag: 'Hard Case Crime',
    },
  ];

  const AUDIO = [
    {
      Autor: 'Stephen King',
      Titel: 'On Writing: A Memoir of the Craft ',
      Jahr: 2000,
      Laenge: 120,
      Verlag: 'Simon & Schuster Audio',
    },
    {
      Autor: 'Stephen King',
      Titel: "Salem's Lot (introduction)",
      Jahr: 2004,
      Laenge: 180,
      Verlag: 'Simon & Schuster Audio',
    },
    {
      Autor: 'Stephen King',
      Titel: 'Bag of Bones',
      Jahr: 2005,
      Laenge: 240,
      Verlag: 'Simon & Schuster Audio',
    },
  ];

  console.log(BOOKS)
  console.log(AUDIO)

  return (
    <main>
      <h2>Bücher</h2>
      <Table books={BOOKS} />
      <h2>Audio-Books</h2>
      <Table audio={AUDIO} />
    </main>
  );
}

export default Main;
