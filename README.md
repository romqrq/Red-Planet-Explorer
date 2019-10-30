# Red Planet Explorer

## UX

This project is an application that brings different and scattered information to one place. Using a combination of APIs and other third part content to create an intuitive and immersive experience.

The future on Mars is more of a "when" than an "if". The website shows the progress torwards Mars exploration accelerating more and more. With new technologies, new studies and planned missions, humans becoming an interplanetary species is a possibility rising on the horizon.

The design is responsive, changing the layout and content according to the size of the screen, loading data upon user actions and some buttons are shown or hidden depending on the screen resolution to make sure the user has the main actions always available on screen.

Four main User Stories were used to structure the website:

1. I want to know how is the weather on Mars.
2. I want to know about other missions sent to mars.
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

## Features <---->

### Existing Features

1. Header - Contains responsive navigation bar with links to the different sections. The content is responsive to the resolution to keep the clean design. 
2. Navigation Bar - For desktop screen, navigation bar fixed at the side of the screen simulates a spaceship kind of console, keeping always visible the website name, section links and social media links. For tablets and mobile devices, the navigation bar is fixed to the top of the screen and the section buttons are grouped to represent the main subjects being also always visible. 
3. Footer - On small and medium resolutions, it gives access to a short description of the website and social media buttons.
4. Home - Section that contains the title of the website acting as a callout showing the user what is the purpose of the application.
5. Mars Weather - Contains a brief text about weather on Mars with the intent to create a reference on earth to help the user to understand the weather on Mars. External links are featured in this section and they bring extra facts about the InSight Lander, the source of the weather information on Mars.
6. Mars Weather - The section also contains a carousel of images related to the weather on Mars and it also shows data from NASA's API showing Sol number, temperature, atmospheric pressure and wind speed/direction.
7. Rovers Manifest - Section covering the importance of the rovers sent to Mars and a brief text introducing the topic.
8. Rovers Manifest - Accordion covvering History and facts about all the rovers that were sent to Mars up to 2019.
9. Latest Pictures - Contains some text explaining about the latest or last pictures sent by the rovers Spirit, Opportunity and Curiosity to give some context to the user.
10. Latest Pictures - The input form retrieves, throught the NASA API, the latest pictures from the rover chosen by the user. This section also features some external links for further details about the topic.
11. Gallery Explorer - Photo gallery section composed of a brief text explaining the content and how to use the search to look up for photos. Brief explanation with steps on how to use the search.
12. Gallery Explorer - Search that retrieves information from NASA's API. After the user choses one of the rovers, the application retrieves the number of Sols that rover covered, displays the last Sol number as a placeholder on the input field and updates the dropdown list of cameras to the types that are carried by that specific rover.
13. Video Gallery - With a brief description text to tell the user the purpose of the content and a panel with links that automatically play youtube videos in modals.
14. Explore - Section with different interactive activities related to mars exploration and curious facts.
15. Explore - The Guess Weight is a weight calculator that uses the mass, weight and gravitational acceleration to convert the input to the equivalent weight on Mars. The value can be obtained on Metric or Imperial systems through radio buttons selected by the user.
16. Explore - Explore and Drive Curiosity is an embeded 3D game that allows the user to explore some of the main features of Curiosity Rover and the user can also drive the rover on the virtual Martian surface while visiting specific points to reveal facts about the Curiosity rover.
17. Explore - Go Arcade is a 2D arcade type of game where the user has to drive the rover as far as possible without damaging or going too slow. The section offers links for desktop and downloads for Android and IOS.

### Features Left to Implement

- Animated counter (counting from 0)
- Live chat
- Shopping cart
- Interactive animation where buttons can turn on and off appliances on the screen.

## Technologies Used

- [Mockflow](https://mockflow.com/) - Used to create initial wireframe for the structure.
- [HTML](https://en.wikipedia.org/wiki/HTML5) - HTML 5 is the latest version of the Hypertext Markup Language and it is the standard programming language across the internet for structure and content.
- [CSS](https://getbootstrap.com/docs/3.3/) - CSS 3 makes possible to implement responsiveness and style to the HTML document.
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Allowed the creation of animations and effects for menus and other features.
- [JQuery](https://jquery.com/) - Allowed the creation of animations such as the collapsed button.
- [Font Awesome](https://origin.fontawesome.com/) - It allows the introduction of icons that behave as normal text and are hardwired to users mind across the internet making it more recognizable and requiring minimal effort in understanding.
- [Hover Library](http://ianlunn.github.io/Hover/) - Allows the utilization of pre-made hover effects, accelerating the development and styling process.
- [Google Fonts](https://fonts.google.com/) - Offers a wide variety of font styles.
- [Favicon generator](https://realfavicongenerator.net) - Website used to generate a custom favicon.

## Testing

During development process, the main tool for tests was the Developer Tools from Google Chrome.
The website was deployed on GitHub and tested on different screen resolutions and manufacturers (mobile phones).
The link was shared through slack, whatsapp and facebook and we collected users feedback to re-evaluate our project and find ways to improve it from the user point of view.

We asked the users doing the test to fulfill the four tasks from our User Stories and we asked for their feedback for these specific stories. The results were productive, offering important insights from the users perspective and also reinforcing positive aspects of the project.

The website was also tested through Google Chrome Developer tools - Audits for performance, Progressive web app, best practices, accessibility and SEO, with a simulated fast 3g connection and 4x CPU slowdown.
Some aspects weren't tackled due to our present technical limitations.

Many of the tests were made manually. Using browser "forward and back" arrows for navigating the website, testing the input fields with different formats of data such as email formats and required fields not to be allowed for submition as blank.
We also tested the user stories as test path to ensure they work as desired.

After the tests, we are satisfied with the way the website works on different devices and browsers.

The accessibility features on the code are still a part that we aren't very confident that is implemented correctly but is one of the main priorities on the improvements list as people who have sensorial impairments would be an important part of the potential customer base for the company.

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

From this point, all the changes on the pages were made straight from my local file/branch management through GitKraken as I pushed the content.

If you wish to run the code locally, it is possible once you have saved the files for the page you wish to run (html, css, images and/or videos).

1. Make sure you have a browser installed on your computer.
2. Find the saved files
3. Right-click (Windows/Linux) or two-finger-click (Mac) on the file and select "Open with" from the action menu.

## Credits

### Media

The photos used in this site were obtained from:

- Carousel images :
- [Different devices](https://www.pexels.com/photo/accessories-business-computer-desk-511425/)
- [Tablet on the beach](https://www.publicdomainpictures.net/en/view-image.php?image=261344&picture=tablet-internetbeach-vacation)
- [Man in the jungle](https://pixabay.com/photos/forest-mobile-phone-camera-vacation-2347079/)
- [Man in the mountains](https://www.goodfreephotos.com/other-landscapes/man-taking-photo-of-mountain-landscape-with-cellphone.jpg.php)
- [Woman sitting on the couch](https://www.pexels.com/photo/woman-sitting-on-sofa-while-looking-at-phone-with-laptop-on-lap-920382/)
- [Work environment](https://pxhere.com/en/photo/1547057)
- [Logos and icons](https://fontawesome.com/icons?d=gallery&m=free)
- [Robert Doe](https://pxhere.com/en/photo/1457989)
- [Doe Family](https://pxhere.com/en/photo/1060077)
- [Janice Doe](https://pxhere.com/en/photo/1565903)
- [Family on the beach](https://allaboutplaya.com/record-number-of-tourists-visited-mexico-in-first-quarter/)
- [Demo video](https://www.youtube.com/embed/hYMpMt0lwUY)
