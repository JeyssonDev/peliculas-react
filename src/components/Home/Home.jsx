import Discovers from '../Discovers/Discovers';
import './Home.css';
import StarIcon from '@mui/icons-material/Star';
import MoviesRow from '../MoviesRow/MoviesRow';

import {
    useGetDiscoverQuery,
    useGetComedyQuery,
    useGetTopRatedQuery,
    useGetTrendingQuery,
    useGetTvShowQuery,
    useGetDocumentariesQuery,
    useGetHorrorQuery,
    useGetRomanceQuery,
} from '../../hooks/Api';
import { useSelector } from 'react-redux';

function Home() {
    const { data } = useGetDiscoverQuery();
    const comedyData = useGetComedyQuery();
    const topRatedData = useGetTopRatedQuery();
    const trendingData = useGetTrendingQuery();
    const tvShowData = useGetTvShowQuery();
    const romanceData = useGetRomanceQuery();
    const horrorData = useGetHorrorQuery();
    const docData = useGetDocumentariesQuery();

    const recentlyAdded = useSelector(
        (state) => state.recentlyAdded.recentlyAdded
    );

    const res =
        data?.results[Math.floor(Math.random() * data.results.length - 1)];

    const resC = comedyData.data?.results;

    const resT = trendingData?.data?.results;

    const resTr = topRatedData?.data?.results;

    const resTv = tvShowData?.data?.results;

    const resR = romanceData?.data?.results;

    const resH = horrorData?.data?.results;

    const resD = docData?.data?.results;

    return (
        <>
            <div className="home">
                <div className="heading top__heading">
                    <h3>Discovers</h3>{' '}
                </div>
                <div className="home__boxx">
                    <Discovers
                        banner={res?.backdrop_path}
                        title={
                            res?.original_name ||
                            res?.name ||
                            res?.original_title
                        }
                        des={res?.overview}
                        Icon={StarIcon}
                        rate={res?.vote_average}
                        release_date={res?.release_date || res?.first_air_date}
                        id={res?.id}
                        type="movie"
                    />
                </div>
                {recentlyAdded.length > 0 && (
                    <>
                        <div className="heading">Recently Added</div>
                        <div className="home__box">
                            {recentlyAdded &&
                                recentlyAdded.map((data, key) => (
                                    <MoviesRow
                                        key={key}
                                        id={data?.id}
                                        urlImage={data?.img}
                                        title={data.title}
                                        release_date={Number(data.rate)}
                                        rate={Number(data.rate)}
                                        type={data.type}
                                    />
                                ))}
                        </div>
                    </>
                )}

                <div className="heading">Trending Movies</div>
                <div className="home__box">
                    {resT &&
                        resT.map((data, key) => (
                            <MoviesRow
                                key={key}
                                id={data?.id}
                                img={data?.poster_path}
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
                        ))}
                </div>

                <div className="heading">Tv Show</div>
                <div className="home__box">
                    {resTv &&
                        resTv.map((data, key) => (
                            <MoviesRow
                                key={key}
                                id={data?.id}
                                img={data?.poster_path}
                                title={data.original_name || data.name}
                                release_date={data.first_air_date}
                                rate={data.vote_average}
                                type="tv"
                            />
                        ))}
                </div>

                <div className="heading">Top Rated</div>
                <div className="home__box">
                    {resTr &&
                        resTr.map((data, key) => (
                            <MoviesRow
                                key={key}
                                id={data?.id}
                                img={data?.poster_path}
                                title={data.original_title || data.title}
                                release_date={data.release_date}
                                rate={data.vote_average}
                                type="movie"
                            />
                        ))}
                </div>

                <div className="heading">Comedy Movies</div>
                <div className="home__box">
                    {resC &&
                        resC.map((data, key) => (
                            <MoviesRow
                                key={key}
                                id={data?.id}
                                img={data?.poster_path}
                                title={data.original_title || data.title}
                                release_date={data.release_date}
                                rate={data.vote_average}
                                type="movie"
                            />
                        ))}
                </div>

                <div className="heading">Romance Movies</div>
                <div className="home__box">
                    {resR &&
                        resR.map((data, key) => (
                            <MoviesRow
                                key={key}
                                id={data?.id}
                                img={data?.poster_path}
                                title={data.original_title || data.title}
                                release_date={data.release_date}
                                rate={data.vote_average}
                                type="movie"
                            />
                        ))}
                </div>

                <div className="heading">Horror Movies</div>
                <div className="home__box">
                    {resH &&
                        resH.map((data, key) => (
                            <MoviesRow
                                key={key}
                                id={data?.id}
                                img={data?.poster_path}
                                title={data.original_title || data.title}
                                release_date={data.release_date}
                                rate={data.vote_average}
                                type="movie"
                            />
                        ))}
                </div>

                <div className="heading"> Documentaries Movies</div>
                <div className="home__box">
                    {resD &&
                        resD.map((data, key) => (
                            <MoviesRow
                                key={key}
                                id={data?.id}
                                img={data?.poster_path}
                                title={data.original_title || data.title}
                                release_date={data.release_date}
                                rate={data.vote_average}
                                type="movie"
                            />
                        ))}
                </div>
            </div>
        </>
    );
}

export default Home;
