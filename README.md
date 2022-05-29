# Introduction

* Gumtree - API Automation framework using Karate

# Getting Started

TODO: Guide users through getting your code up and running on their own system. In this section you can talk about:

1.	Installation process

* To install - use one the following build & test commands

2.	Software dependencies

* Maven - https://maven.apache.org/
* Java - https://www.oracle.com/java/technologies/javase-jdk8-downloads.html

3.	Latest releases

4.	API references

* Karate - https://github.com/intuit/karate



## Run Framework
```
mvn clean test -Dkarate.env=dev -Dkarate.options="--tags @GumtreeAdsList"
```

## Report

* Two reports will be generated, Karate and Cucumber
  * karate report path: target/karate-reports/karate-summary.html
  * Cucumber report path: target/cucumber-html-reports/overview-features.html




