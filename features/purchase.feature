Feature: SauceDemo Purchase Flow

  Scenario: Complete end-to-end purchase
    Given user launches browser
    And user navigates to SauceDemo
    When user logs in with valid credentials
    And user sorts products low to high
    And user adds first three products to cart
    And user goes to cart
    And user clicks checkout
    And user fills checkout details
    And user completes the purchase
    Then user logs out
