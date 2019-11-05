# Bamazon

<p align="center">
<a href="https://drive.google.com/file/d/1EvGMgwxtATOxJzSFpcmNqsdWkVbcTwKW/view" target="blank">Video Demo</a>
</P>

## Overview

The goal here was to make a CLI app called Liri that would search Spotify for songs, Bands in Town for concerts and OMDB for movies. LIRI is a Language Interpretation and Recognition Interface and for this project the main form of interaction will be through Node.js

## Technology Used

* JavaScript 
* Node Package - Axios
* Node Package - DotEnv
* Node Package - Moment
* Node Package - API - Spotify API
* API - [OMDB](http://omdbapi.com/)
* API - [Bands In Town](https://app.swaggerhub.com/apis-docs/Bandsintown/PublicAPI/3.0.0)

## Instructions

You will need to create your own .env file with your own API keys for spotify and [Node](https://nodejs.org/en/download) installed. 

### .env file format
* SPOTIFY_ID=
* SPOTIFY_SECRET=

### Installation
1. Clone the repo: 
```sh
git clone https://github.com/bflatbader/liri-node-app.git
```
2. Install NPM packages:
```sh
npm install
```

## Commands
| App Command       | A Short Description                               |
| ----------------- |:-------------------------------------------------:|
| movie-this        | searches Spotify for info about a band or artist  |
| concert-this      | searches Bands in Town API for an artist's events |
| spotify-this-song | searches Spotify for info about a band or artist  |
| do-what-it-says   | runs the text in random.txt                       |


### movie-this

This will output the following information to your terminal/bash window:

*  Title of the movie.
*  Year the movie came out.
*  IMDB Rating of the movie.
*  Rotten Tomatoes Rating of the movie.
*  Country where the movie was produced.
*  Language of the movie.
*  Plot of the movie.
*  Actors in the movie.

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
do-what-it-says

LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

*  It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
*  Edit the text in random.txt to test out the feature for movie-this and concert-this.

```sh
node liri.js movie-this _movie title_
```

![movie-this Example](/images/movie-this.jpg)

### concert-this
This will search the Bands in Town Artist Events API for an artist and render the following information about each event to the terminal:

*  Name of the venue
*  Venue location
*  Date of the Event (use moment to format this as "MM/DD/YYYY")

```sh
node liri.js concert-this _band_
```

![concert-this Example](/images/concert-this.jpg)

### spotify-this-song

This will show the following information about the song in your terminal/bash window

*  Artist(s)
*  The song's name
*  A preview link of the song from Spotify
*  The album that the song is from

If no song is provided then your program will default to "The Sign" by Ace of Base.

```sh
node liri.js spotify-this-song _song name_
```

![spotify-this-song Example](/images/spotify-this.jpg)

### do-what-it-says

## Description

Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

```sh
node liri.js do-what-it-says
```

![do-what-it-says Example](/images/do-what-it-says.jpg)