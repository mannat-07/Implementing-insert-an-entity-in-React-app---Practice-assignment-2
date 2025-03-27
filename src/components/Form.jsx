import { useNavigate } from "react-router-dom";
import "./Form.css";

export default function Form() {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate("/");
  };
  return (
    <div className="form-container">
      <button onClick={goToDashboard} className="go-back">
        Go Back
      </button>

      <form action="post">
        <label htmlFor="Title">Title</label>
        <input type="text" name="Title" id="title" />
        <br />

        <label htmlFor="director">director</label>
        <input type="text" name="director" id="director" />
        <br />

        <label htmlFor="genre">Genre</label>
        <select name="genre" id="genre">
          <option value="" selected>Select the genre</option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-fiction</option>
          <option value="mystery">Mystery</option>
          <option value="fantasy">Fantasy</option>
          <option value="romance">Romance</option>
        </select>
        <br />

        <label htmlFor="releaseYear">Release Year</label>
        <input type="number" name="releaseYear" id="releaseYear"/>

        <label htmlFor="synopsis">Synopsis</label>
        <textarea name="synopsis" id="sysnopsis"></textarea>
        <br />

        <label htmlFor="url">Poster Image URL</label>
        <input type="url" name="url" id="url" />

        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}