@episode
Feature: Get the episode details with its playing

    As a user,
    I want to have a section with the information about a specific episode
    So that I can see the episode information and play

    @ui
    Scenario: Get the episode details
        Given the user is on the Podcast page
        When the user clicks on one episode
        Then the user can view the information about this episode
        And the user can play the episode