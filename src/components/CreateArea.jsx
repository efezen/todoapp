import React, { useState } from "react";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateArea = (props) => {
  const [isExpended, setExpended] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  };

  const submitNote = (event) => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
    event.preventDefault();
  };

const expand = () => {
  setExpended(true);
}

  return (
    <div>
      <form className="create-note">
        {isExpended && (
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          rows={isExpended ? 3 : 1}
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
        />
        <Fab onClick={submitNote}>
          <AddIcon />
        </Fab>
      </form>
    </div>
  );
};

export default CreateArea;
