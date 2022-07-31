import { useState } from 'react';
import './AddMovie.css';
import MovieIcon from '@mui/icons-material/Movie';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarIcon from '@mui/icons-material/Star';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import ImageIcon from '@mui/icons-material/Image';
import { useDispatch } from 'react-redux';
import { recentlyAddedAdd } from '../../redux/recentlyAddedSlice';
import newid from '../../helpers/newid';
import { useNavigate } from 'react-router-dom';
import { onlyNumbers } from '../../helpers/only-numbers';
import { isValidUrl } from '../../helpers/is-valid-url';

function AddMovie() {
    const [name, setName] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const [year, setYear] = useState('');
    const [rate, setRate] = useState('');
    const [type, setType] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onSubmit = () => {
        dispatch(
            recentlyAddedAdd({
                id: newid(),
                img: urlImage,
                title: name,
                type: type,
                release_date: year,
                rate: rate,
            })
        );
        setName('');
        setUrlImage('');
        setYear('');
        setRate('');
        setType('');
        navigate('/');
    };

    return (
        <>
            <div className="add-movie">
                <h3>Add a movie</h3>
                <form className="add-movie-form" onSubmit={onSubmit}>
                    <div className="add-movie-field">
                        <MovieIcon />
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            maxLength="20"
                        />
                    </div>
                    <div className="add-movie-field">
                        <ImageIcon />
                        <input
                            type="text"
                            value={urlImage}
                            onChange={(e) => setUrlImage(e.target.value)}
                            placeholder="Url Image"
                        />
                    </div>
                    <div className="add-movie-field">
                        <AccessTimeIcon />
                        <input
                            type="text"
                            value={year}
                            onChange={(e) =>
                                setYear(onlyNumbers(e.target.value))
                            }
                            placeholder="Year"
                            maxLength="4"
                        />
                    </div>
                    <div className="add-movie-field">
                        <StarIcon />
                        <input
                            type="text"
                            value={rate}
                            onChange={(e) =>
                                setRate(onlyNumbers(e.target.value))
                            }
                            placeholder="Rate"
                            maxLength="10"
                        />
                    </div>
                    <div className="add-movie-field">
                        <BorderAllIcon />
                        <input
                            type="text"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                            placeholder="Type"
                            maxLength="10"
                        />
                    </div>
                    <input
                        className="add-movie-button"
                        type="submit"
                        value="Submit"
                        disabled={
                            name === '' ||
                            type === '' ||
                            year === '' ||
                            rate === '' ||
                            urlImage === '' ||
                            !isValidUrl(urlImage)
                        }
                    />
                </form>
            </div>
        </>
    );
}

export default AddMovie;
