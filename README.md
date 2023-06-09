# COMP2110 Portal: Group 2 Web Application Overview:
This web app was developed using [Lit Web Components](https://lit.dev/). 

It used ['Colourful rainbow geometric' by 'Manuchi'](https://pixabay.com/illustrations/colorful-rainbow-gradient-geometric-2174045/)
and ['Computer computer code' by 'Boskampi'](https://pixabay.com/illustrations/computer-computer-code-programming-1836330/)
both "Free to use under the Pixabay license. No attribution required."   

It also used a google font for h1; ['Press Start 2P' by 'CodeMan38'](https://fonts.google.com/specimen/Press+Start+2P), licensed under the Open Font License. 

## This application has the following functionality
* users can login and logout and the layout changes depending on whether a user is logged in or not
* displays the most recent blog posts
* displays the date and time of blog posts
* creating a new post refreshes the blog, not the whole page
* the user cannot enter a null title (the web app assigns a default title)
* if the user leaves the content field in their new post blank, they are prompted to enter text
    (the user is prevented from submitting blank content to the server)
* the blog loads new content automatically
* if the application loads a blogpost with a null title, it gives it a default title
* if the application loads a blogpost with null content, it displays a message indicating that the message was a blank post
* once the blog is posted the blog post popup will clear
* messages over a certain length scroll rather than stretching the window
* messages without spaces are still wrapped to fit rather than going off the screen

It also includes four widgets integrated into the overall design. 
## About our group: 
Group two is made up of the following individuals: 
* Stacey Purcell, 42123682 
* Tristan Norbury, 47308028
* Brigid McDermott, 46361804
* Nathan Lewis, 46606610

# Who did what?
## Integration of Individual Widgets 
(put your name and the name of your widget here. There is another area below to describe what your widget does and how it is integrated into the page.
* Tristan Norbury, 'meme' widget
* Stacey Purcell, 'tru-fact' widget
* Brigid McDermott, 'joke' widget
* Nathan Lewis, 'trivia' widget

## Design and Features
(put your name here any any design elements you contributed)
* Stacey Purcell, style and layout; particularly header and new blog post. Implemented user authentication token being used to change layouts.
* Tristan Norbury, blog post date and time; gets the timestamp from a blog post and returns it.
* Tristan Norbury, Post To Blog window - layout and style improvements; particularly aligning items using `flex`, placeholders, and button styling.
* Tristan Norbury, Post widget Implementation - Initial implementation of the ability to post widget content to the blog.
* Brigid McDermott, blog post title and content, style across website (button styling, blog post styling, log-in form styling)
* Tristan Norbury, implemented responsive widget layout; made widgets more similarly sized to each other and used `flex-wrap: wrap` to make widgets better scale to screen size.
* Nathan Lewis, general styling across website (pictures, colours and positioning)

## Bug Testing
(include major bugs here and the fix, eg Brigid's fix for null entries)
* Tristan Norbury, bug fixes; The website now displays only one widget on each side, instead of displaying three identical widgets for all of them.
* Stacey Purcell, bug fixes; basic null checking and sanitation. 
* Tristan Norbury, Fixed hardcoded Authorization for getting token for meme widget - ensures that widget cannot be posted to blog unless already logged in.
* Tristan Norbury, Added alert for when new posts fail to send to blog (e.g. no WiFi when posting)
* Brigid McDermott, fix for null entry posts to not crash the blog post displaying
* Nathan Lewis, widget not displaying, attempted fix was to put trivia in seperate file and import the file, but found a bypass for the API that worked

## Extension to blog-block: new-post.js
* Stacey Purcell: initial implementation of the ability to post to the blog
* Stacey Purcell: event listener to refresh blog-block only on successful post.  
* Stacey Purcell: new posts have default titles and the user cannot submit a null or blank content post
* Brigid McDermott: blog popup will clear once message has been posted and reset to default placeholder text

# Individual Widgets
## Trufact Widget by Stacey Purcell 42123682
- The trufact widget accesses the [Numbers API](http://numbersapi.com/#42) and retrieves a fact about today's date. 
- The user can click the new-fact button to access another random fact. 
- The user can click the share button to share the fact to the blog through the new blog post widget. The user can type a message about the fact as it has been passed to the text field.

## Meme Widget by Tristan Norbury 47308028
- The meme widget accesses the [IMGFLIP API](https://api.imgflip.com/get_memes) and fetches a meme and it's caption.
- posts meme image url and url (button) which is then fetched from the blog posts array and displayed as an image, 
- Post meme caption posts the associated meme's caption as a quote. 
- Fetch new meme (button) retrieves a new random meme by choosing a random index from the imgflip meme array.

## Joke Widget by Brigid McDermott 46361804
- The Joke widget accesses the [JokeAPI](https://v2.jokeapi.dev/) that has certain flags to only load two part jokes (setup and delivery - no single line jokes) and never to display NSFW content 
- The user can click a button to display and hide the punchline of each joke
- The user can click a button to load a new joke without the need to reload the page 

## Trivia Widget by Nathan Lewis 46006610
 - The Trivia Widget accessed the [JService API](http://jservice.io/api/random) and fetches a Jeopardy trivia question.
 - The trivia widget diaplays the prompt that the Jeopardy contestant recieved, and the answer to that prompt.
 - The user can click a button to dsplay a new trivia question without reloading the website.

# Boilerplate 'starter code' documentation: 
The boilerplate and starter code remains a product of the COMP2110 Web Development Collective © 2023. The following documentation was provided for the boilerplate.
## Installation

The project has no external dependencies, it uses Lit via a CDN load directly into
the HTML page.   Node is used only to run a local HTTP server.

```bash
npm install
```

Will install the `http-server` node module.

```bash
npm start
```

will run the server.

## Backend Server

Your portal will make use of a server that we have implemented that is running on <https://comp2110-portal-server.fly.dev/>.   Documentation for the services it provides
is in [this Github repository](https://github.com/COMP2110-2023/comp2110-portal-server/).

## Starter Code

The code included here implements the basic framework for the application, including
an overall page structure and the blog, login and advertising components.  If you run
the application you will see the basic page with space for a number of _widgets_.  
You will fill these slots with your own widgets - one per team member. (A _widget_
is a name for an element of a graphical user interface, basically the same as a
component).

The module `config.js` exports a variable `BASE_URL` that contains the address
of the backend server. This is used for example in the blog-block component
to define the URL endpoint.  You may also want to use it if you make use of
other API endpoints from the server (eg. tasks).

The code contains implementations of the following components:

### `<comp2110-portal>`

This is a container for the whole portal application and currently contains 
some of the pre-defined widgets.  You can modify this as you see fit to achieve
your overall application layout and behaviour.

### `<widget-column>`

This component implements a container for widgets and can be used to define
the style information and layout for the group.  You can modify this if you
wish or replace it with something else.

### `<login-widget>`

This component implements a login form that will allow a user to authenticate to the
backend server.   If the user is logged in, the component displays their name and
a logout button rather than the form.  

Authentication is implemented in the `auth.js` module.  Once a user login succeeds,
the current user details are stored in the browser [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) so that
they persist over browser sessions.  In your code, you can use the function
`getUser()` from the `auth.js` module to find out if a user is logged in and get
their details.  

### `<blog-block>`

This component implements a blog using the backend API from the COMP2110 portal server.
You can modify this component if you wish to change the layout of posts or the overall look and feel.  

This component only supports reading posts although the backend API allows posting new blog
posts if you are logged in.  One possible extension of this component would be to allow
posting in some way.

### `<ad-widget>`

This component displays an advertisement from the backend portal server. You should not
modify it and it should appear somewhere in your page design.
