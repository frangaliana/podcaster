@home
Feature: Filter podcasts by text

    As a user,
    I want to have a list of Apple podcasts sorted by popularity
    So that I can view the 100 most popular Apple podcasts

    @ui
    Scenario: Filter podcasts by text
        Given the user navigates to the Home page
        When the user is in the Home page
        When the user specifies the search term as "drink" in the search input
        Then the user can view the list of Apple podcasts filtered by the search term