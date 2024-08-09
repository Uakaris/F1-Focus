# F1 Focus

[F1 Focus](https://harmonious-crumble-71422d.netlify.app/) was made as my capstone project for General Assembly's Software Engineering Bootcamp. The app was made over the course of a week and makes use of 2 different API's to get Formula 1 data. The aim of the project was to build something I would actually use in my day to day life. As I'm a big Formula 1 fan, the app will be something I use all the time. I hope that others will also enjoy using it.  

## How it works
*F1 Focus* displays basic race result information. 
* Users can check to see which drivers are racing in the 2024 season in the **Drivers** section.
* Users can check the latest race results in the **Results** section.
* Users can check on both the current Driver and Constructor standings in the **Standings** section.
* **Latest News** links to the offical Formula 1 site.

## Build
*F1 Focus* was build using [React](https://react.dev/).

## Features
* Interactive animations.
* Interactive bar graphs.
* Live **Results** and **Standings** updates.

## Credits

A sincere thank you to Sarma for helping me with some of the initial API call to Ergast as well as input and assistance with the styling on the driver cards. Sarma is always extremly generous with his time and his assistance has helped me through both this project and others.

More thanks also go to Joel and CJ who taught me React in the first place, as well as helping me with deployment, getting images for the race results cards and for also letting me bounce ideas of them throughout the week. I really appreciate the help guys!

Background image and Favicon were sourced from [Freepik](https://www.freepik.com/log-in?client_id=freepik&lang=en).

Charts were made using [Chart.js](https://www.chartjs.org/).

All F1 information was sourced from [Ergast Developer API](https://ergast.com/mrd/) and [OpenF1](https://openf1.org/).

One extremely valuable resource during this project was the [Formula One API Postman collection](https://documenter.getpostman.com/view/11586746/SztEa7bL) created by Matheus Bernardes for the Ergast Developer API. Having this information made the process of understanding the data structure smooth and fast.

## Next Steps

There is so much I would love to continue developing for this app. Ideas include:
* The very first thing would be to tidy up my file and folder structure 🤦
* Updating the results section to be able to render all race results. The plan being to make a new API call for this, and then allow the users to click on a race from a dropdown menu, which would then display the selected race results.
* Creating a new component that gets lap data from [OpenF1](https://openf1.org/) and displays this on a diagram of each circuit. This component would be updated live so that users could essentially watch a race take place.
* Updating the race results cards to display as a podium for the top three and display the remaining places in a table.
* Continue to work on the css and app appearance.
* Creating custom animations and graphics.
* Updating the drivers section to allow users to see drivers displayed based on season.
* A long term goal would be to create a back end to allow for user authentication, the ability for users to save favourite drivers, and be notified of their results as the season progresses.
