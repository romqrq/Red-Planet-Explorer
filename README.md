# Red Planet Explorer

## UX

This project is an application that brings different and scattered information to one place. Using a combination of APIs and other third part content to create an intuitive and immersive experience.

The future on Mars is more of a "when" than an "if". The website shows the progress torwards Mars exploration accelerating more and more. With new technologies, new studies and planned missions, humans becoming an interplanetary species is a possibility rising on the horizon.

The design is responsive, changing the layout and content according to the size of the screen, loading data upon user actions and some buttons are shown or hidden depending on the screen resolution to make sure the user has the main actions always available on screen.

Four main User Stories were used to structure the website:

1. I want to know how is the weather on Mars.
2. I want to know about other missions sent to Mars.
3. I want to find photos taken by the rovers.
4. I want to know what is behind the Mars exploration efforts.

For these stories we considered both tech savvy and the average internet user that are curious about Mars but aren't really sure of what kind of information is available to be explored.

During development process, some changes from the original wireframes were made necessary to improve user experience and they were as listed:

1. For tablet and mobile screens:
    - Sticky navigation bar at the top of the screen keeping the different sections always available to the user.
    - Reduced quantity of buttons, showing only the ones to the main sections to keep them always visible, readable and clean.
    - Swapped positioning of social media buttons and navigation bar. This way the dark background from the navigation bar hides on the black of the main screen background. With that we avoid introducing an unwanted shape to compete with the background and text information.
2. For desktop screen:
    - Expanded menu with links to all subsections allowing a higher selectivity to the user.
3. Photo Exploration section (all screen sizes):
    - Changed to display thumbnails instead of loading a gallery as sometimes searches might not bring any results. Thumbnails set to open in a modal.

All the sections and functionalities are easily accessible from the navigation bar and most of them won't take more than 3 clicks/taps from the home page to the end of the process.

## Features

### Existing Features

**Header:**

Contains responsive navigation bar with links to the different sections. The content is responsive to the resolution to keep the clean design. 

**Navigation Bar:** 

For desktop screen, navigation bar fixed at the side of the screen simulates a spaceship kind of console, keeping always visible the website name, section links and social media links. For tablets and mobile devices, the navigation bar is fixed to the top of the screen and the section buttons are grouped to represent the main subjects being also always visible. 

**Home:**

Section that contains the title of the website acting as a callout showing the user what is the purpose of the application.

**Mars Weather:**

Contains a brief text about weather on Mars with the intent to create a reference on earth to help the user to understand the weather on Mars. External links are featured in this section and they bring extra facts about the InSight Lander, the source of the weather information on Mars.
The section also contains a carousel of images related to the weather on Mars and it also shows data from NASA's API showing Sol number, temperature, atmospheric pressure and wind speed/direction.

**Rovers Manifest:**

Section covering the importance of the rovers sent to Mars and a brief text introducing the topic.
Accordion covering History and facts about all the rovers that were sent to Mars up to 2019.

**Latest Pictures:**

Contains short text explaining about the latest or last pictures sent by the rovers Spirit, Opportunity and Curiosity to give some context to the user.
The input form retrieves, through the NASA API, the latest pictures from the rover chosen by the user. This section also features some external links for further details about the topic.

**Gallery Explorer:**

Photo gallery section composed of a brief text explaining the content and how to use the search to look up for photos. Brief explanation with steps on how to use the search.
Search that retrieves information from NASA's API. After the user choses one of the rovers, the application retrieves the number of Sols that rover covered, displays the last Sol number as a placeholder on the input field and updates the dropdown list of cameras to the types that are carried by that specific rover.
The results for the search are shown below the search form and display the pictures as clickable thumbnails. Once clicked, the photos are loaded on a full screen modal. In case of no results for the search, the user will receive a message to let them know that there are no results for that specific parameters combination.

**Video Gallery:**

With a brief description text to tell the user the purpose of the content and a panel with links that play youtube videos on a div that, through JavaScript code, becomes full screen when the video is open and is hidden when the video is closed.

**Explore:**

Section with different interactive activities related to Mars exploration and curious facts.
The Guess Weight is a weight calculator that uses the mass, weight and gravitational acceleration to convert the input to the equivalent weight on Mars. The value can be obtained on Metric or Imperial systems through radio buttons selected by the user.
Explore and Drive Curiosity is an embeded 3D game that allows the user to explore some of the main features of Curiosity Rover and the user can also drive the rover on the virtual Martian surface while visiting specific points to reveal facts about the Curiosity rover.
Go Arcade is a 2D arcade type of game where the user has to drive the rover as far as possible without damaging or going too slow. The section offers links for desktop and downloads for Android and IOS.

**Footer:**

Visible on mobile and tablet, the footer displays a short description of the application and social media buttons.

### Features Left to Implement

- Photo gallery with scrollable thumbnails

## Technologies Used

- [HTML](https://en.wikipedia.org/wiki/HTML5) - HTML 5 is the latest version of the Hypertext Markup Language and it is the standard programming language across the internet for structure and content.
- [CSS](https://getbootstrap.com/docs/3.3/) - CSS 3 makes possible to implement responsiveness and style to the HTML document.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Allowed the creation of animations and effects for menus and other features.
- [JQuery](https://jquery.com/) - Allowed acceleration of processes such as fetching API data.
- [Font Awesome](https://origin.fontawesome.com/) - It allows the introduction of icons that behave as normal text and are hardwired to users mind across the internet making it more recognizable and requiring minimal effort in understanding.
- [Google Fonts](https://fonts.google.com/) - Offers a wide variety of font styles.
- [Bootstrap] (https://getbootstrap.com/)


## Testing

During development process, the main tool for tests was the Google Chrome Developer Tools.
The website was deployed on GitHub and tested on different screen resolutions and manufacturers (mobile phones).
The link was shared through slack, whatsapp and facebook and we collected users feedback to re-evaluate our project and find ways to improve it from the user point of view.

We asked the users doing the test to fulfill the four tasks from our User Stories and we asked for their feedback for these specific stories. The results were productive, offering important insights from the users perspective and also reinforcing positive aspects of the project.

The website was also tested through Google Chrome Developer tools - Audits for performance, Progressive web app, best practices, accessibility and SEO, with a simulated fast 3g connection and 4x CPU slowdown.

Many of the tests were made manually. Testing the input fields with different formats of data such as data types and required fields not to be allowed for submition as blank.
We also tested the user stories as test path to ensure they work as desired.

Some issues rose up regarding some images file size. After trying to further compress, we decided to replace the ones that we couldn't get compressed any further and it improved the loading time.

After the tests, we are satisfied with the way the website works on different devices and browsers.

The only loading issue that couldn't be addressed to this point due to technical limitations was to prioritize the loading of the content above the fold and then loading the rest of the content on the sequence.

The [W3C Validator](https://validator.w3.org/) was used to check the HTML code. To validate the CSS code it was used the [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/).

## Deployment

The project deployment was made using GitHub.

1. Created the local environment and files.
2. Created the equivalent repository on GitHub.
3. Pushed the local files to the GitHub repository.
4. On GitHub environment, opened the tab "Settings"
5. Accessed the "github Pages" section
6. Selected "master branch" and saved.
7. After a few seconds the page was published.

From this point, all the changes on the pages were made straight from Visual Studio Code, from where I pushed the content. From time to time I merged the branches on GitHub.

If you wish to run the code locally, it is possible once you have saved the files for the page you wish to run (html, css, images and/or videos).

1. Make sure you have a browser installed on your computer.
2. Find the saved files
3. Right-click (Windows/Linux) or two-finger-click (Mac) on the file and select "Open with" from the action menu.

## Credits

- [Favicon generator](https://realfavicongenerator.net) - Website used to generate a custom favicon.
- [Mockflow](https://mockflow.com/) - Used to create initial wireframe for the structure.
- [Compress or die](https://compress-or-die.com/)- website used to compress image files..

### Media

The photos used in this site were obtained from:

- [Favicon] (https://pngimg.com/uploads/mars_planet/mars_planet_PNG26.png)
- [Body Background from 769px up](https://upload.wikimedia.org/wikipedia/commons/8/87/LH_95.jpg)
- [Side Panel Background](https://pixnio.com/free-images/2019/01/21/2019-01-21-13-02-14-1200x800.jpg)
- [Sections Background](https://images.pexels.com/photos/383639/pexels-photo-383639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
- [Main screen image Background](https://commons.wikimedia.org/wiki/File:Mars_atmosphere.jpg)
- Weather Carousel:
    - [InSight Lander](https://photojournal.jpl.nasa.gov/jpeg/PIA22227.jpg)
    - [Dune Field](https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia23056.jpg)
    - [Pathfinder Rover](https://www.jpl.nasa.gov/images/mars/20170622/PIA01466-16.jpg)
    - [Dunes](https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia22869.jpg)
- Video Gallery:
- [Earth from space](https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA11066_hires.jpg)
- [Body Background from 769px up](https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA11066_hires.jpg)
- [Space Module](https://www.jpl.nasa.gov/images/orion/20141024/orion20141024-16.jpg)
- [Landing Pod](https://images.pexels.com/photos/700015/pexels-photo-700015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)
- [Landing Curiosity](https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA14841_hires.jpg)
- [Orbiter](https://www.jpl.nasa.gov/images/mro/20081126/mro-concept-browse.jpg)
- [Mars Rover](https://upload.wikimedia.org/wikipedia/commons/a/a3/Rover1.jpg)
- [Organic Molecule](https://storage.needpix.com/rsynced_images/uracil-2901413_1280.png)
- [Mars from space](https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA14293_hires.jpg)
https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA18244_hires.jpg
https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23239_hires.jpg



### Content

- [Skies and Scopes](https://skiesandscopes.com/mars-rovers/)
- [Wikipedia - Sojourner](https://en.wikipedia.org/wiki/Sojourner_(rover))
- [Wikipedia - Mars 2](https://en.wikipedia.org/wiki/Mars_2)
- [Wikipedia - Mars 3](https://en.wikipedia.org/wiki/Mars_3#cite_note-Perminov1-3)
- [Wikipedia - Spirit](https://en.wikipedia.org/wiki/Spirit_(rover))
- [Wikipedia - Opportunity](https://en.wikipedia.org/wiki/Opportunity_(rover))
- [Wikipedia - Curiosity](https://en.wikipedia.org/wiki/Curiosity_(rover))
- [Space.com](https://www.space.com/mars-rover-opportunity-last-photographs.html)
- [NASA - Curiosity Rover](https://mars.nasa.gov/msl/spacecraft/rover/summary/)
- [NASA - Opportunity Status](https://mars.jpl.nasa.gov/mer/mission/rover-status/opportunity/recent/)
- [NASA - Spirit Status](https://mars.jpl.nasa.gov/mer/mission/rover-status/spirit/2010/)





