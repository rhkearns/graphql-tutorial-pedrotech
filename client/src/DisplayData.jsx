import React, { useState } from 'react';
import { useQuery, gql, useLazyQuery } from '@apollo/client';

const QUERY_ALL_USERS = gql`
	query GetAllUsers {
		users {
			id
			name
			age
			username
			nationality
		}
	}
`;

const QUERY_ALL_MOVIES = gql`
	query GetAllMovies {
		movies {
			id
			name
		}
	}
`;

const GET_MOVIE_BY_NAME = gql`
	query Movie($name: String!) {
		movie(name: $name) {
			name
			year
		}
	}
`;

const DisplayData = () => {
	const { data, loading, error } = useQuery(QUERY_ALL_USERS);
	const { data: movieData } = useQuery(QUERY_ALL_MOVIES);
	const [movieSearch, setMovieSearch] = useState();
	const [fetchMovie, { data: movieSearchData, movieError }] =
		useLazyQuery(GET_MOVIE_BY_NAME);

	if (loading) {
		return <h1>Data Is Loading</h1>;
	}

	if (error) {
		console.log(error);
  }
  
  if (movieError) {
    console.log(movieError);
  }

	return (
		<div>
			<h1>List Of Users</h1>
			{data &&
				data.users.map(user => {
					return (
						<div>
							<h1>Name: {user.name}</h1>
							<h1>Username: {user.username}</h1>
							<h1>Age: {user.age}</h1>
							<h1>Nationality: {user.nationality}</h1>
						</div>
					);
				})}
			<h1>List Of Movies</h1>
			{movieData &&
				movieData.movies.map(movie => {
					return (
						<div>
							<h1>Title: {movie.name}</h1>
						</div>
					);
				})}
			<div>
				<input
					type="text"
					placeholder="Interstellar..."
					onChange={e => {
						setMovieSearch(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						fetchMovie({
							variables: {
								name: movieSearch,
							},
						});
					}}
				>
					Fetch Data
				</button>
				<div>
					{movieSearchData && (
						<div>
							<h1>Title: {movieSearchData.movie.name}</h1>
							<h1>Year: {movieSearchData.movie.year}</h1>
						</div>
          )}
          {movieError && 
            <h1>Movie Not Found</h1>
          }
				</div>
			</div>
		</div>
	);
};

export default DisplayData;
