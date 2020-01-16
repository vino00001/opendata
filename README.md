# Opendata Group Project


## Introduction

The purpose of this program is to show the best lunch deals in a certain area (Växjo and Kalmar). 

We will be using 2 different API's for our site. Scraping data from foodora and display a map with openlayers.

We are using bulma and css for our styling of our site.

## Architecture

This app is built from three different sources; a MySQL database, a backend written in Java and a frontend made in React.js. The user is also able to log in to the site either by a user account of Oauth through github.

Data is firstly scraped from foodora by the backend and saved in the database. The backend then pulls the data from the database and creates endpoints for the frontend. The frontend fetches the data and makes use of it to display relevant information on the site. 
