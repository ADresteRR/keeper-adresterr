import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import { useState } from 'react';
function App() {
    const [notes, setNotes] = useState([]);

    const addNote = (newNote) => {
        setNotes([...notes, newNote]);
    }
    const deleteNote = (id) => {
        setNotes(() => notes.filter((note, index) => index !== id));
    }
    return (
        <>
            <Header />
            <CreateArea addNote={addNote} />
            {notes.map((note, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    deleteNote={deleteNote}
                />
            })}
            <Footer />
        </>
    );
}

export default App;
