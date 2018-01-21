function getMoviePrice([movieTitle, dayOfWeek]) {
    movieTitle = movieTitle.toString().toLowerCase().trim();
    dayOfWeek = dayOfWeek.toString().toLowerCase().trim();

    if(movieTitle == 'the godfather'){
        switch (dayOfWeek){
            case 'monday': return 12;
            case 'tuesday': return 10;
            case 'wednesday': return 15;
            case 'thursday': return 12.50;
            case 'friday': return 15;
            case 'saturday': return 25;
            case 'sunday': return 30;
        }
    } else if(movieTitle == 'schindler\'s list'){
        switch (dayOfWeek){
            case 'monday': return 8.50;
            case 'tuesday': return 8.50;
            case 'wednesday': return 8.50;
            case 'thursday': return 8.50;
            case 'friday': return 8.50;
            case 'saturday': return 15;
            case 'sunday': return 15;
        }
    } else if(movieTitle == 'casablanca'){
        switch (dayOfWeek){
            case 'monday': return 8;
            case 'tuesday': return 8;
            case 'wednesday': return 8;
            case 'thursday': return 8;
            case 'friday': return 8;
            case 'saturday': return 10;
            case 'sunday': return 10;
        }
    } else if(movieTitle == 'the wizard of oz'){
        switch (dayOfWeek){
            case 'monday': return 10;
            case 'tuesday': return 10;
            case 'wednesday': return 10;
            case 'thursday': return 10;
            case 'friday': return 10;
            case 'saturday': return 15;
            case 'sunday': return 15;
        }
    }

    return 'error';
}

console.log(getMoviePrice(['The Godfather', 'Friday']));
console.log(getMoviePrice(['casablanca', 'sunday']));
console.log(getMoviePrice(['Schindler\'s LIST', 'monday']));
console.log(getMoviePrice(['SoftUni', 'Nineday']));