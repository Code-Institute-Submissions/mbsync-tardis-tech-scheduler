# MBSync - TARDIS Tech Scheduler

This is a prototype website to be put forward as a test bed as an additional feature on the MBSync website: https://uk.mbsync.com/.

Website link: https://jamesgreen21.github.io/mbsync-tardis-tech-scheduler/

#### MBSync
Martin Brower is a Global Supply Chain Solutions company whom control a large estate of the McDonalds franchise for storage and supply of product. 

MBSync is a customer facing portal, which allows Martin Brower customers to access information such as delivery time, order details, restaurant KPIs, as well as communicate with Martin Brower. Since its launch, development has been carried out to utilise MBSync for internal functionality, such as performance reporting, a customer service dashboard and many other features.

As part of these development works, the TARDIS Tech Scheduler aims to facilitate the needs of the TARDIS department; an internal department within Martin Brower. The project aims to give quick and concise updates on SalesForce data with graphical displays, using d3, dc and crossfilter, as well as provide a technician Scheduler, which will display the whereabout of each TARDIS Technician, their weekly workload and a Google Maps API to display the desitinations.

#### Data

Please be aware that all data that has been used in this model has been extracted from Martin Brower systems as a CSV file and manipulated for the purposed of the project and test. Implementation would require a direct feed into MB Systems.

## UX
 
The site focus is on the TARDIS department within Martin Brower, to give up-to-date data feeds from SalesForce and display them in a graphical dashboard. This will allow managerial decisions to be implemented on where to focus resources and how the departments KPIs are performing. The website also aims to give critical information to the team regarding the TARDIS Technician's movements, in order to relay onto customers on request. 

-	A look and feel that captures the exiting MBSync website
-	Analytics Dashboard, which graphically displays the data from SalesForce to give users live information on KPIs and potential problems areas that need addressing
-	Interactive design to allow the user to highlight categories, areas or personel, to limit the graph data to those selections
-	A live update on open requests, to give fast information to the user regarding outstanding SalesForce requests and their locations
-	Tech Scheduler, which gives the user the details of each Technician's movements by week commencing dates
-	Nav buttons to allow the user to search the Tech Scheduler by restaurant/restaurant number, technician and WC date
-	A table of information displaying the movements by Tech by WC date
-	A map displaying all destinations for the table above. This is a Google Maps API with cluster markers
-	Where there is no work present in a week, the table will display empty and the map will default to center over London

## Features

There are currently a total of four features available on the site
 
### Current Features

- Analytics Dashboard
    - Open SalesForce Requests
    - Requests by Job Category
    - Requests by Distribution Centre
    - SalesForce Requests In
    - Reques by Service Manager
- Tech Scheduler
    - Nav Bar
    - Schedule of Weekly Tech Work
    - Map
- Data get from CSV file extract of SalesForce

### Features Left to Implement

- Live feed to SalesForce
- Implementation into MBSync

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [Bootstrap](https://stackpath.bootstrapcdn.com) - **Bootstrap 4.3.1** as part of the basic layout and structure of the website, utilising the grid system. Several components have been used from the framework, with CSS modification made to ensure a unique look and feel to the page, based on the current MBSync website
- [Bootstrap Font Awesome](https://fontawesome.bootstrapcheatsheets.com) - The **Font Awesome 5.7.2** add-on has been used in creating the warehouse icons for each Distribution Centre within the 
- [Bootstrap JS](https://stackpath.bootstrapcdn.com) - **Bootstrap JS** has been used in the navbar collapse functionality, to allow users on smaller devices a better UX 
- [DC - Dimensional Charting Javascript Library](https://dc-js.github.io/dc.js/) - **DC** has been used in the navbar collapse functionality, to allow users on smaller devices a better UX 
- [D3 - Data-Driven Documents](https://d3js.org/) - **D3** has been used in the navbar collapse functionality, to allow users on smaller devices a better UX 
- [Crossfilter](http://square.github.io/crossfilter/) - **Crossfilter** has been used in the navbar collapse functionality, to allow users on smaller devices a better UX 
- [jQuery](https://jquery.com/) - **jQuery 3.3.1** has been used in the navbar collapse functionality, to allow users on smaller devices a better UX 
- [jQuery UI](https://jquery.com/) - **jQuery UI 1.12** has been used in the navbar collapse functionality, to allow users on smaller devices a better UX 
- [Google Map API](https://cloud.google.com/maps-platform/) - **Google Map API** has been used in the navbar collapse functionality, to allow users on smaller devices a better UX 


## Testing

The website has undergone testing on all features:

### Links

Due to the nature of the website being a page linked from MBSync website, there are no links on the page. The MBSync has a built in footer and nav control which would be intergrated if made live, which would allow users to navigate back to other areas of MBSync.

### Nav Bar

The Tech Scheduler Nav Bar uses jQuery and JS functions to populate the Schedule of Works table and Google Map markers. This has been tested and limited to the options available for the purpose of the prototype. The final version would pull the data directly from SalesForce in order to populate the options on the dropdowns and proceeding table details and Google Map markers.

The Restaurant Search Input Bar also uses jQuery and JS to populate the Schedule of Works table and Google Map markers as above, and in addition, uses jQuery UI to gernate an autofill list of available options. 

### Analytics Dashboard

All charts displayed within the Analytics Dashboard have been tested to ensure all data is accurate and as expected. Responsive design is fully functional. 

UX:

1. Change the 'Filter by Request Status' filter box to 'Open' to confirm 'Open SalesForce Requests' summary
2. All charts react to the filter changes
3. Select 'Closed' will result in the 'Open SalesForce Requests' summary to display all zeros, as a sense check the data is live and responsive
4. Select a segment of any of the charts to perform a filter of the selection, across all charts on the disaply

### Tech Scheduler

The Tech Scheduler has been tested for all types of inputs and changes to each nav option.

UX:

1. Type a restaurant number or name to display an autofill list of available options. If there are no options, this denotes that the restaurant typed has no outstanding Tech works
2. Select the relevant restaurant and press the 'Update Scheduler' button to update the Info, Google Map API and table of works
3. Hover over the 'Tech' dropdown button to reveal all available TARDIS Technicians
4. Hover over the desired Tech, which will highlight the name. Select to update the Info, Google Map API and table of works
5. Hover over the 'Date' dropdown button to reveal all available Week Commencing dates from the data
6. Hover over the desired WC date, which will highlight the date. Select to update the Info, Google Map API and table of works
7. Google Map - select the clusters displayed as a blue circle with a number denoting the number of markers
8. Navigate around the map and use the + and - zoom buttons to check and confirm all locations plotted that have been populated within the table of works

### Display **

The website is mobile-first responsive design, making use of the Bootstrap grid system to layout the DC charts in a way that allows the user to interact with them, whatever their display configurations. 

Mobile Display

Tablet Display

Laptop, Desktop and other larger

### Bugs

There are currently two bugs that appear in the console once the website has been generated. The TypeError refers to a .length command that returns the count of records within the data set, and is used in a For loop. The count and loop both work having tested it through the console log, however, I have been unable to determine the reason for the bug.

 - Uncaught (in promise) TypeError: Cannot read property 'length' of undefined
    at getMapLocations (scheduler.js:666)
    at initMap (scheduler.js:514)
    at js?key=AIzaSyCsI1fq6JVdHRu4UgMmIuZXCTO0UPzF8JQ&callback=initMap:123
    at js?key=AIzaSyCsI1fq6JVdHRu4UgMmIuZXCTO0UPzF8JQ&callback=initMap:123
    
 - GET https://mbsync-tardis-tech-scheduler-jamesgreen21.c9users.io/favicon.ico 404 (Not Found)

## Deployment

I have used Cloud9 for developing the website, as well as using the dev tools and console on both Firefox and Google Chrome to fine tune areas of the code and test elements of the scripts. The code has been pushed up to my GitHub, with continuous commits throughout the project as it has progressed.

## Credits

The following links and sites have been used within the coding and development:

- https://blog.codepen.io/2016/05/13/new-instagram-logo-in-css-four-ways/
- https://www.jeremycookson.com/top-10-css-hover-effects/

### Content

- All content has been supplied by Martin Brower UK Ltd for test base purposes. The data used in the model has been extract from MB SalesForce systems

### Media

- All photos have been provided by Martin Brower UK Ltd