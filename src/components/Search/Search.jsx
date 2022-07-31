import { useState } from 'react';
import './Search.css';
import { useGetSearchQuery } from '../../hooks/Api';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import MoviesRow from '../MoviesRow/MoviesRow';
import { search } from '../../redux/searchSlice';

function Search() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const query = useSelector((state) => state.search.search);
    const { data } = useGetSearchQuery(query);
    const res = data?.results;

    const queryHandler = (e) => {
        e.preventDefault();
        dispatch(search(value));
    };

    const popcorn =
        'https://as2.ftcdn.net/v2/jpg/02/07/53/73/1000_F_207537392_hQeHBy8BI4oFPzDmhjF94IHb1Tu8jZyG.jpg';

    return (
        <>
            <div className="searchh">
                <div className="search__top">
                    <div className="heading">{query} Results</div>
                    <form className="search" onSubmit={(e) => queryHandler(e)}>
                        <SearchIcon />
                        <input
                            type="text"
                            placeholder="Search..."
                            maxLength="20"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </form>
                </div>
                <div className="home__box">
                    {res ? (
                        res.map((data, key) => (
                            <MoviesRow
                                grid
                                key={key}
                                id={data?.id}
                                img={data?.poster_path || data?.backdrop_path}
                                popcorn={popcorn}
                                title={
                                    data.original_title ||
                                    data.original_name ||
                                    data.title
                                }
                                release_date={
                                    data.release_date || data.first_air_date
                                }
                                rate={data.vote_average}
                                type="movie"
                            />
                        ))
                    ) : (
                        <p style={{ color: 'white' }}>No Results</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Search;
