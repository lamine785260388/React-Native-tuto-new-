export const TMTB_CONFIG = {
    BASE_URL:'https://api.themoviedb.org/3',
    API_KEY:process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept:'application/json',
        Authorization:`Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}
export const fetchMovies= async({query}:{query:string}) => {
    const endpoint= query
        ? `/search/movie?query=${encodeURIComponent(query)}`
       : '/discover/movie?sort_by=popularity.desc';
    const response = await fetch(endpoint,{
        method:'GET',
        headers:TMTB_CONFIG.headers,
    });
    if(!response.ok){
        throw new Error(`Failed to fetch movies: ${response.statusText}`);

    }
    const data = await response.json();
    return data.results;
}

// const url = 'https://api.themoviedb.org/3/keyword/keyword_id/movies?include_adult=false&language=en-US&page=1';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYzFlY2ZjMzZiYWE4NmVmYTQwZGQ5MmU4ODZkMTQzNyIsIm5iZiI6MTc2Nzg5MjQwNS43NjcsInN1YiI6IjY5NWZlNWI1N2VkMmNjMDVmNzM2M2I0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7CqJTi9gl3qz0a6h2xmT4_s7gbmPxeuX-gwLYFvi9Jc'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));