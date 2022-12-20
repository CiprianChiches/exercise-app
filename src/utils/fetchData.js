export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '226fd2c54dmshc50cafc53bc2852p129b71jsn73e7dc843fed',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '226fd2c54dmshc50cafc53bc2852p129b71jsn73e7dc843fed',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};




export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}