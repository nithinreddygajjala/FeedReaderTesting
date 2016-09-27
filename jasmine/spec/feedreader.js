/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
         it('are defined ', function() 
         {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
         });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
         it(' has Urls, Length greater than zero',function()
         {
            allFeeds.forEach(function(temp)
            {   
                expect(temp.url).toBeDefined();
                expect(temp.url.length).not.toBe(0);
                
            });
         });
           
       

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         it(' has name, and length greater than zero',function(){
            allFeeds.forEach(function(feed)
            {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).toBeTruthy();
            });
         });




    });


    /* TODO: Write a new test suite named "The menu" */

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
        describe ('The Menu',function(){

         // this spec is to ensure that the menu element is hidden by default .
        it('menu should be hidden',function()
        {
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });
            it(' is displayed or hidden on click',function()
            {
          // this makes the menu visible
                   $('.menu-icon-link').click();
                   expect($('body').hasClass('menu-hidden')).toBeFalsy();
          // this hides the menu.
                   $('.menu-icon-link').click();
                   expect($('body').hasClass('menu-hidden')).toBeTruthy();
            });

        });
    /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         describe('initial entries', function()
         {
            beforeEach(function(done)
             {
                loadFeed(0,done);
             });
              // contains atleast a single .entry with .feed content.
              it('contains atleast one entry in feed',function()
              {
                expect($('.feed').find('.entry').length).toBeGreaterThan(0);
                 
              });
         });

    /* TODO: Write a new test suite named "New Feed Selection"

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.

         */


        describe(' new feed selection ', function()
        {
            $('.feed').empty();
            var temp;
            // before ruuning the test load a feed and save its entry.
            beforeEach(function(done)
                 {
                loadFeed(0,function()
                    {
                    temp=$('.feed').html();
                    loadFeed(3,done);                      
                    });
                    
                 });
            
                 it(' loading feed after the content was changed',function(){
                
                expect($('.feed').html()).not.toBe(temp);
            });
        });
         
}());
