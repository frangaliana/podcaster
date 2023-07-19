@home
Feature: Get an Apple podcasts list sorted by popularity

    As a user,
    I want to have a list of Apple podcasts sorted by popularity
    So that I can view the 100 most popular Apple podcasts

    @ui
    Scenario: Get the Apple podcasts list
        Given the user navigates to the Home page
        When the user is in the Home page
        And the data has stopped loading
        Then the user can view the list of Apple podcasts sorted by popularity