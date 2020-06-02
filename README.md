[![Build Status](https://travis-ci.org/jcstang/not-reddit.svg?branch=master)](https://travis-ci.org/jcstang/not-reddit)
[![GitHub stars](https://img.shields.io/github/stars/jcstang/not-reddit)](https://github.com/jcstang/not-reddit/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/jcstang/not-reddit)](https://github.com/jcstang/not-reddit/network)
[![GitHub license](https://img.shields.io/github/license/jcstang/not-reddit)](https://github.com/jcstang/not-reddit/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/jcstang/not-reddit)](https://github.com/jcstang/not-reddit/issues)

# Seenit - A visual based forum for the curious.
A visual based social media site, where you can post, share, discuss and like your favorite topics and engage and share with others by invoking curiosity through a clean and very visual forward interface.

## Table of Contents

* Application Use
* Technology Used
* Details of the Applicaiton and Challenges
* List of future developments/features
* Link to the Live Project on Heroku

## Application Use
The application uses ideas from a number of different social platforms and focuses on a visual curiosity as it's driver. The site uses a simple local auth strategy to sign up and login users, and then allows them to view the listed of saved posts. The posts are visual only, with a very clean and easy to take in format. The idea is to invoke curiosity in your content by choosing a good image to represent and draw in users. 

Clicking on a chosen article will open it, allowing the user to review the contents, then returning them to where they left off when they close it. Users can like posts they enjoyed, and the number of likes a post has received is displayed on the main page. Users may also select the create a post option, and can then enter in their own content, which will be posted to the main site for others to review. 

## Technology Used

* [React](https://reactjs.org/)
* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [React-Icons](https://www.npmjs.com/package/react-icons)
* [Bootstrap](https://getbootstrap.com/)
* [React-bootstrap](https://react-bootstrap.github.io/)
* [Node js](https://nodejs.org/en/)
* [Express js](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/)
* [Mongoose](https://mongoosejs.com/)
* [Passport js](http://www.passportjs.org/)
* [Google Fonts](https://fonts.google.com/)
* [Travis CI](https://travis-ci.org)
* [Bcrypt js](https://www.npmjs.com/package/bcryptjs)
* [lodash](https://lodash.com/)

## Details of the Application and Challenges

## List of future developments/features

* Comments - Ability for users to leave comments on articles and discuss within the opened article page.
* Saved Posts - An interface allowing users to drag and drop items from the home page into a container that saves them to the users unique profile for reviewing at any time. 
* Dislike/Seenit - Ability to either flag a post as boring, or not liked, and have dislikes displayed as well. 
* Search - Ability to search for posts by user, topic, or community. 
* Communities - Add categories to articles like tags and be able to view only content from communities you are interested in. 
* Advanced Auth - Ability to use Github, Twitter, Google or other 3rd party auth instead of just local.
* Permission roles - Ability to view all content without logging in, but restricting posting and commenting to users logged in only. 

### Link to the Live Project on Heroku: https://not-reddit-seenit.herokuapp.com/
