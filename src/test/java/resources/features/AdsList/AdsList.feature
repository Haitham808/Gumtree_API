@GumtreeAdsList
Feature: Get Ads List

  Background:
    * url baseURL

  Scenario: Get Gumtree Ads List

    Given path '/papi/ads/search'
    * params read ('//params/adsListParams.json')
    When method get
    Then status 200
    And match responseType == 'json'

    * print '######### --  Header validation  -- #########'
    * def AltSvc = responseHeaders['Alt-Svc'][0]
    * match AltSvc == read ('//Validation/header_AltSvc.txt')

    * print '######### --  Schema validation  -- #########'
    * match response.ads == '#[]'
    * match each response.ads contains { id: '#number', title:'#string' }




