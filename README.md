# codesRus - The Karens - SEI-Project 2 - Ranter

## Product Description:

### Social media over the last decade has been tasked with keeping their apps interesting and fun while allowing the opinionated to have a place to speak their mind. Statistics show that this combination has lead to a decline in usage because a user cannot meter whether there feed represents their current mood. Our development team saw the need for a new type of social media platform that aims to create a home for what people have to say. Allowing the user to get their views out in public without adding any negativity to their goto social media platform. Ranter is an application designed to let you vent without concern, judment, or alerting your relatives to any conflicting opinions they may have. Similar to Twitter, our platform allows the user to create a profile, post their feelings, and peruse their fellow Ranter's post. Should you develop regret over a past post, Ranter allows you to edit!! Our platform is free of advertisements and flashy design choices that may further agrivate the poster. Implementing a simple layout that resembles a comment card or lengthy letter to the management. Ranter wants the user to have an authentic experience. Furthermore, we  don't allow other Ranters to comment on your posts. Though you may have developed your opinion in the heat of the moment,  we want the thought to remain yours and free judgment.

## User Story:

### As a Ranter, I want to be able to register for a Ranter account so I can share or post my stories on a public page so that other Ranters may revel in my opinions and assertions. The ability to edit a Rant once it has been posted ensures you get out exactly what you want and can remove any regrettable post. Using this platform will keep Facebook, Twitter, and Instagram are free of negativity and preserve a rational disposition with my peers.  


## Technology Used:

### We utilized express app to render our html pages from ejs templates.
### Our RESTful routes utilized a 3 controller system that allowed us to create users with multiple posts and user authentication. 
### Mongodb was utilized to host our users, posts, and authorizing databases.
### Github was utilized so that all developers could proceed on their tasks and merge onto a final working product.
### CSS was used to style the application.

## Ranter Pictures:


![Register](https://user-images.githubusercontent.com/100719674/188496192-ace0b6fe-1e5e-4535-8917-a0e2d0cbb68f.png)
### To maintain the privacy of our fellow Ranters, we require the user to register in order to access the Ranter Feed. Select a username, a profile photo, and password to get started. Your email and password are used to validate your identity.


![Login](https://user-images.githubusercontent.com/100719674/188496386-f07f39c7-f2b2-48ad-bf21-aa8efa0d4586.png)
### The login page asks the user to enter their email and password. Incorrect passwords redirect the user to an error page promting them to re-enter their password. An incorrect username redirects them to register. 


![Home Page](https://user-images.githubusercontent.com/100719674/188495242-02538004-0b0a-46f4-88c4-7c6b00cf2b8c.png)
### Ranter's Home Page maintains a simple and approachable aesthetic. Displaying the logo at the top and user posts front and center on the page. The navigation bar to the left allows the user to create a Rant, view other users and their posts, and view individual user information. When a user clicks on a specific Rant, they are able to see who posted it.


![Post Info](https://user-images.githubusercontent.com/100719674/188497787-411f9176-e456-4823-b56a-0d092910ccb0.png)
### Rants show the specific user that posted it and allows the poster to edit and delete the Rant.

![User Index](https://user-images.githubusercontent.com/100719674/188498549-efa20953-ac7e-48ad-9192-c156178f939f.png)
### The User Index allows the Ranter to view other users and what they have to say.


## Challenging Code:

### Utilizing three controllers (user, posts, auth) gave us the ability to connect a Ranter to their posts and allow them to navigate by Rants or other Ranters. Getting photos and usernames to populate with a post was tricky but we were able to get the desired result by using proper routing and injector use.


## Link to Game


https://ranter-demo.herokuapp.com/post

## Next Steps:

### We would like to add comments and likes.
### Optimize the app for mobile use
### We want to give users the ability to upload photos and videos.
