Feature: I price home page

  Background:
    Given Open iprice home page

  @home
  Scenario: Open iprice home page and verify and count Best deals
    Given Verify the find the best deals
    Then I grab and count all the links

  @home
  Scenario: Open iprice home page and verify and Top Trending products
    Given Verify the top trending product
    And Verify list of product in top trending product
    Then Verify all the trending product contains attr data-vars-cgt

  @coupons
  Scenario:Verify coupon page top stores links
    Given Open iprice coupons page
    And I can see top stores
    Then Verify all links in top stores are active
    And Verify all the urls in top stores are redirected sucessfully

  @sitemap
  Scenario: Perform Site map testing for iprice home page
    Then Fetch all the links on iprice and check if they are active or not