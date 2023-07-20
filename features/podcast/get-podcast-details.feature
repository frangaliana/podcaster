@podcast
Feature: Get the podcast details with their episodes

    As a user,
    I want to have a section with the information about a specific podcast
    So that I can see the episodes of the podcast and access them

    @ui
    Scenario: Get the podcast details
        Given the user is on the Home page
        When the user clicks on one podcast
        Then the user can view the information about this podcast
        And the user can see the number of episodes of this podcast
        And the user can see the list of episodes with their information