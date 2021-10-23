import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setmovieYear] = useState("");

    const resetForm = () => {
        setMovieTitle("");
        setmovieYear("");
    }

    const onSubmit = (event) => {
        event.preventDefault();
        addMovie({
            id: Date.now(),
            title: movieTitle,
            year: movieYear,
        });
        resetForm();
    };

    return (<form onSubmit={onSubmit}>
        <input
            type="text"
            value={movieTitle}
            placeholder="영화제목"
            onChange={(e) => setMovieTitle(e.target.value)}
        />
        <br />
        <input
            type="text"
            value={movieYear}
            placeholder="개봉연도"
            onChange={(e) => setmovieYear(e.target.value)}
        />
        <br />
        <button type="submit">영화추가</button>
    </form>);
}

export default MovieForm;