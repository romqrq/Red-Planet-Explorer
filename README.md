<h1>
  <a href="https://github.com/romqrq/Red-Planet-Explorer" target="_blank"><img src="https://github.com/romqrq/Red-Planet-Explorer/blob/master/assets/images/mars-surface.jpg" alt="Mars surface"/></a>
</h1>
<h2 align="center">
<a href="https://github.com/romqrq/Red-Planet-Explorer" target="_blank">Red Planet Explorer</a>
</h2>

<div align="center"> 

[Red Planet Explorer](https://github.com/romqrq/Red-Planet-Explorer) This project is an application that brings different and scattered information to one place. Using a combination of APIs and other third part content to create an intuitive and immersive experience.

The future on Mars is more of a "when" than an "if". The website shows the progress torwards Mars exploration accelerating more and more. With new technologies, new studies and planned missions, humans becoming an interplanetary species is a possibility rising on the horizon.

The design is responsive, changing the layout and content according to the size of the screen, loading data upon user actions and some buttons are shown or hidden depending on the screen resolution to make sure the user has the main actions always available on screen.

Features include images and video galleries, games, a weight calculator to compare the weight of things on Earth and Mars, accordion with facts and curiosities about rovers sent to Mars with an overall feel of a hightech outer space environment.
<br>

[View the Red Planet Explorer page](https://github.com/romqrq/Red-Planet-Explorer)

</div>

## Table of Contents
1. [**UX**](#ux)
    - [**Project Goals**](#project-goals)
    - [**User Stories**](#user-stories)
    - [**Design choices**](#design-choices)
    - [**Wireframes**](#wireframes)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

3. [**Technologies used**](#technologies-used)

4. [**Testing**](#testing)

5. [**Deployment**](#deployment)
    - [**How to run this project locally**](#how-to-run-this-project-locally)

6. [**Credits**](#credits)
    - [**Content**](#content)
    - [**Media**](#media)
    - [**Code**](#code)
    - [**Acknowledgements**](#acknowledgements)

7. [**Disclaimer**](#disclaimer)

## UX

### Project Goals

The primary goal of Red Planet Explorer is to provide a clean, intuitive, engaging experience and also entertain, inform and delight it's users.

### User Stories

Four main User Stories were used to structure the website:

1. I want to know how is the weather on Mars.
2. I want to know about other missions sent to Mars.
3. I want to find photos taken by the rovers.
4. I want to know what is behind the Mars exploration efforts.

For these stories we considered both tech savvy and the average internet user that are curious about Mars but aren't really sure of what kind of information is available to be explored.

### Design Choices

The overall feel of the application is one that is designed for users to have an immersive experience. The following design choices were made with this in mind:

**Fonts**

- The primary font **Jura** was chosen because it resembles classic digital characters. It's likeness to those is used with the intend to recall feelings on the user and make the experience closer and more engaging. 

- The secondary font **Revalia** was chosen for its exotic looks while still comfortably readable, while complementing the primary font adding more weight and attention capturing qualities to titles.

**Icons**

- All icons used were chosen for their obvious meaning and purpose so that they can be understood by everyone.

**Colours**

- The primary colour choices of orange and black as the main theme, these colors were chosen because they have a clean clear aspect while contrasting each other well while adding to the exotic martian feel of the application.
- Other colours used in the project such as white, aiming for higher contrast and readability and blue, to call attention to links, using a colour picker in Google Chrome Developer tools and setting the colors on reusable SCSS classes to make sure all colours used were consistent across the entire project.

**Styling**

- Elements across the application were given rounded corners to give it a smoother visual.
- Repeating the same rounded corner pattern throughout the page keeps consistency in design and maintains the feeling that all elements belong together. 

**Backgrounds**

- The background image for the body on desktop was chosen to give the user the sensation of being in space while scrolling through a futuristic sweeping pages device. 
- The background for the sections has a metallic look with colors that work well with the main color scheme while not competing for the user's attention.

**Video button images**

- Images were chosen to keep a close relation to the theme of the video linked to the button. There is the intention to use elements that will entice user's curiosity.

**Video popup**

- A hidden div manipulated through JavaScript was chosen over a modal as the solutions for user interaction with videos on modals haven't been as functional and reliable.


### Wireframes

These wireframes were created using [Mockflow](https://mockflow.com/) during the Scope Plane part of the design and planning process for this project. 

- [Mobile](https://github.com/romqrq/Red-Planet-Explorer/blob/master/wireframes/Wireframe_Mobile.pdf)
- [Tablet](https://github.com/romqrq/Red-Planet-Explorer/blob/master/wireframes/Wireframe_Tablet.pdf)
- [Desktop](https://github.com/romqrq/Red-Planet-Explorer/blob/master/wireframes/Wireframe_Desktop.pdf)


During development and testing processes, some changes from the original wireframes were made necessary to improve user experience and they were as listed:

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

1. **Landing Page**

    Section that contains the title of the website acting as a callout showing the user what is the purpose of the application.
    On arriving at the page for the first time, the user can press the launch button which will play an animation simulating a rocket launch and scrolling to the next content page. This feature is reset when the page is refreshed.
    
    **Navigation Bar:** 

    For desktop screen, navigation bar fixed at the side of the screen simulates a spaceship kind of console, keeping always visible the website name, section links and social media links. For tablets and mobile devices, the navigation bar is fixed to the top of the screen and the section buttons are grouped to represent the main subjects being also always visible. 

    **Side Console:**

    Visible above 769px screen width, the side console is a dress for the navigation bar and it emulates a futuristic device.
    For this version, the navigation bar has expanded buttons linked to subsections for a more precise user experience, it also displays the social media buttons and website logo.

2. **Mars Weather:**

    Contains a brief text about weather on Mars with the intent to create a reference on earth to help the user to understand the weather on Mars. External links are featured in this section and they bring extra facts about the InSight Lander, the source of the weather information on Mars.
    
    **API weather data:**

    A carousel of images related to Mars weather is the background for the data retrieved from NASA weather API. The data is processed and delivered in an intuitive way to the user. The inormation available is Sol number, temperature, atmospheric pressure and wind speed/direction.

3. **Rovers Manifest:**

    Section covering the importance of the rovers sent to Mars and a brief text introducing the topic.
    
    **Accordion:**
    Listing the 6 rovers sent to Mars until Mars2020 mission, the accordion displays facts about the different missions and offers links to external sources in case the user desires to find out more about that specific rover.

4. **Latest Pictures:**

    Information about the latest or last pictures sent by the rovers Spirit, Opportunity and Curiosity to give some context to the user and offers external links to further information.
    
    **Input Form:**

    The input form retrieves, through the NASA API, the latest pictures from the rover chosen by the user.

5. **Gallery Explorer:**

    Photo gallery section composed of a brief text explaining the content and how to use the search to look up for photos.

    **Gallery Search:**

    Search retrieves information from NASA's API. After the user choses one of the rovers, the application retrieves the number of Sols that rover covered, sets the last Sol number as input field value and updates the dropdown list of cameras to the types that are carried by that specific rover.

    **Gallery Results:**

    The results for the search are shown below the search form and the pictures are displayed as clickable thumbnails. Once clicked, the photos are loaded on a full screen modal. In case of no results for the search, the user will receive a message to let them know that there are no results for that specific parameters combination.

6. **Video Gallery:**

    The video gallery covers different stages of the efforts to explore Mars. 
    Buttons are displayed with an unique background image related to the theme covered on that specific video.
    On click, the video opens on a fullscreen popup div that, through JavaScript code, becomes full screen when the video is open and is hidden when the video is closed.

7. **Explore:**

    Section with different interactive activities related to Mars exploration and curious facts.

    **Guess Wheight:**
    
    The Guess Weight is a weight calculator that uses the mass, weight and gravitational acceleration to convert the input to the equivalent weight on Mars. The value can be obtained on Metric or Imperial systems through radio buttons selected by the user.

    **Explore and Drive Curiosity:**

    Explore and Drive Curiosity is an embeded 3D game that allows the user to explore some of the main features of Curiosity Rover and the user can also drive the rover on the virtual Martian surface while visiting specific points to reveal facts about the Curiosity rover.

    **Go Arcade!:**

    Go Arcade is a 2D arcade type of game where the user has to drive the rover as far as possible without damaging or going too slow. The section offers links for desktop and downloads for Android and IOS.

8. **Footer:**

    Visible on mobile and tablet, the footer displays a short description of the application and social media buttons.

### Features Left to Implement

- Photo gallery with scrollable thumbnails

## Technologies Used

- This project uses HTML, CSS and JavaScript programming languages.
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [AWSCloud9](https://eu-west-1.console.aws.amazon.com/cloud9) 
    - Developer used **AWSCloud9** for their IDE while building the website.
- [Visual Studio Code](https://code.visualstudio.com/)
    - Developer used **Visual Studio Code** as development platform for this project.
- [Bootstrap](https://getbootstrap.com/)
    - The project uses **Bootstrap** to simplify the structure of the website and make the website responsive easily.
    - The project also uses Bootstrap to provide icons from [FontAwesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/)
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google fonts** to style the website fonts.
- [GitHub](https://github.com/)
    - This project uses **GitHub** to store and share all project code remotely.
- [AutoPrefixer](https://autoprefixer.github.io/)
    - The project used **AutoPrefixer** to make sure all css prefixes were the most up to date versions. 


## Testing

During development process, the main tool for tests was the Google Chrome Developer Tools.
The website was deployed on GitHub and tested on different screen resolutions and manufacturers (mobile phones).
The link was shared through slack, whatsapp and facebook and we collected users feedback to re-evaluate our project and find ways to improve it from the user point of view.

We asked the users doing the test to fulfill the four tasks from our User Stories and we asked for their feedback for these specific stories. The results were productive, offering important insights from the users perspective and also reinforcing positive aspects of the project.

The website was also tested through Google Chrome Developer tools - Audits for performance, Progressive web app, best practices, accessibility and SEO, with a simulated fast 3g connection and 4x CPU slowdown.

Many of the tests were made manually. Testing the input fields with different formats of data such as data types and required fields not to be allowed for submition as blank.
We also tested the user stories as test path to ensure they work as desired.

We also tested manually the user stories to check if the buttons were accessible and easy to find, if the content is displayed with correct content and formatting.

Some issues rose up regarding some images file size. After trying to further compress, we decided to replace the ones that we couldn't get compressed any further and it improved the loading time.

The only loading issue that couldn't be addressed to this point due to technical limitations was to prioritize the loading of the content above the fold and then loading the rest of the content on the sequence.

The [W3C Validator](https://validator.w3.org/) was used to check the HTML code. To validate the CSS code it was used the [Jigsaw CSS Validator](https://jigsaw.w3.org/css-validator/).

### Bugs discovered: 
#### Solved bugs
1. **Desktop version pages weren't sliding and staying hidden**

- Even though the animations were set to slide in and out, on the background the previous pages would still be visible during transitions.
    - Fix: I added a setTimeout to the animation function that adds a class to the inactive pages so they stay hidden. 
```javascript
function switchPages() {
  let trigger = $(".sc-buttons > a");

  trigger.click(function () {
    let selectedSectionID = $(this).attr("href");
    $(`${selectedSectionID}`)
      .addClass("slide-show")
      .removeClass("slide-hide, move-back");

    let siblingsOnly = $(`${selectedSectionID}`).siblings("section");
    // console.log(siblingsOnly);
    siblingsOnly.each(function (i) {
      if (!$(this).hasClass('move-back')) {
        $(this).removeClass("slide-show").addClass("slide-hide")
      };
      let target = this
      setTimeout(function () { $(target).addClass("move-back"); }, 500);
    });
  });
}
```

2. **Partial data retrieved from API causing uncaught errors**

- When the data was fetched during an update from NASA, the application would throw an error as the data was incomplete. 
    - Fix: Added conditional test that gets the second last data point in case the last one isn't valid.
```javascript
else if ("weather-section") {
        const el = document.getElementById("dataWeather");
        el.innerHTML = "";
        let JSO = data;
        //data/validity_checks/
        let vc = data.validity_checks;
        //setting last sol number
        let sol = vc.sols_checked[vc.sols_checked.length - 1];
        //setting SECOND LAST sol number
        let SLsol = vc.sols_checked[vc.sols_checked.length - 2];
        //Checking if data is valid
        //data/validity_checks/"last sun number"/AT/valid:"true or false"
        let vcsATvalid = vc[sol].AT.valid;
        let vcsHWSvalid = vc[sol].HWS.valid;
        let vcsPREvalid = vc[sol].PRE.valid;
        let vcsWDvalid = vc[sol].WD.valid;
        //data/validity_checks/"SECOND LAST sun number"/AT/valid:"true or false"
        let vcSLsATvalid = vc[SLsol].AT.valid;

        //Setting sol number to use as reference to drill down to the other variables
        //tests the data for validity of all parameters
        if (vcsATvalid && vcsHWSvalid && vcsPREvalid && vcsWDvalid) {
          SOLnum = sol;
        } else if (vcSLsATvalid) {
          SOLnum = SLsol;
        }
        //(code contiues...)
```

3. **Weather data was being retrieved but no other call from other sections were working**

- The only call retrieving results was the weather section one. All the others were returning undefined or throwing an error. 
    - Fix: As the call from the weather-section is on ready state, it was setting the URL value for the other calls.
    with conditional tests, we moved the weather call to last on the chain. This way the call will still go through the conditional tests and allow the other calls to check for validity through the conditional chain.

#### Unsolved bugs

1. **Browser forward and backward arrows**

    - On desktop we found problems trying to use the arrows on the browser to move forwards and backwards. Our impression is that because the application is built on a single page, the browser doesn't see the change between sections as page changes.

## Further testing: 
1. Asked fellow students, friends and family to look at the site on their devices and report any issues they found.
2. Red Planet Explorer viewed on all devices and orientations available in Google Chrome Developer Tools.


## Deployment

This project was initially developed using the [AWSCloud9](https://eu-west-1.console.aws.amazon.com/cloud9) and later on moved to [Visual Studio Code](https://code.visualstudio.com/), committed to git and pushed to GitHub using the built in function within the applications. 

To deploy Red Planet Explorer to GitHub Pages from its [GitHub repository](https://github.com/romqrq/Red-Planet-Explorer), the following steps were taken: 
1. Log into GitHub. 
2. From the list of repositories on the screen, select **romqrq/Red-Planet-Explorer**.
3. From the menu items near the top of the page, select **Settings**.
4. Scroll down to the **GitHub Pages** section.
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, Red Planet Explorer is now deployed. 
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

The Red Planet Explorer project made use of branches for development, testing and bug fixing. 
The Master Branch has always been the one deployed to GitHUb Pages. When displaying the website life, the developer tries to keep the master branch to optimal code only.
At the moment of submitting this Milestone project the Development Branch (Branch1) and Master Branch are identical. 

### How to run this project locally

To clone this project from GitHub:
1. Follow this link to the [Red Planet Explorer GitHub repository](romqrq/Red-Planet-Explorer).
2. Under the repository name, click "Clone or download".
3. In the Clone with HTTPs section, copy the clone URL for the repository. 
4. In your local IDE open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type ```git clone```, and then paste the URL you copied in Step 3.
```console
git clone https://github.com/USERNAME/REPOSITORY
```
7. Press Enter. Your local clone will be created.

Further reading and troubleshooting on cloning a repository from GitHub [here](https://help.github.com/en/articles/cloning-a-repository).


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





