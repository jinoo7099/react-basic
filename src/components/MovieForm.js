import React, { useState } from 'react';

const MovieForm = ({ addMovie }) => {
    const [movieTitle, setMovieTitle] = useState("");
    const [movieYear, setmovieYear] = useState("");
    const [titleError, setTitleError] = useState('');
    const [yearError, setYearError] = useState('');

    const resetForm = () => {
        setMovieTitle("");
        setmovieYear("");
    }

    const validateForm = () => {
        resetErrors();
        let validated = true;
        if (!movieTitle) {
            setTitleError('영화제목을 넣어주세요')
            validated = false;
        }

        if (!movieYear) {
            setYearError("개봉연도를 넣어주세요");
            validated = false;
        }

        return validated;
    }

    const resetErrors = () => {
        setTitleError('');
        setYearError('');
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (validateForm()) {
            addMovie({
                id: Date.now(),
                title: movieTitle,
                year: movieYear,
            });
            resetErrors();
            resetForm();
        }
    };

    return (<form onSubmit={onSubmit}>
        <input
            type="text"
            value={movieTitle}
            placeholder="영화제목"
            onChange={(e) => setMovieTitle(e.target.value)}
        />
        <br />
        <div style={{ color: 'red' }}>{titleError}</div>
        <input
            type="text"
            value={movieYear}
            placeholder="개봉연도"
            onChange={(e) => setmovieYear(e.target.value)}
        />
        <br />
        <div style={{ color: 'red' }}>{yearError}</div>
        <button type="submit">영화추가</button>
    </form>);
}

export default MovieForm;