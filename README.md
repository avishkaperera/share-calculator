# Share Calculator
A simple cross platform mobile application built using ionic framework to calculate share of partners using a fixed ratio.

## Getting Started
Make sure you have `nodejs`, `npm` and `ionic cordova` installed before continuing with this project.
More instructions can be found on [Ionic](http://ionicframework.com/docs/).

### Steps
* Run `git clone https://github.com/avishkaperera/share-calculator.git` to clone the project to your local machine.
* Run `npm install` to instal all the node modules and dependancies needed for the application.
* After everything looks okay, run `ionic serve` to compile and run the application. Once compiled, the app will open up in your default we browser and you are ready to test it :)

**If you want to deploy the app in your android phone**
* Make sure you have `JDK`, `Android Studio`/ `Android SDK` installed in your machine.
* Make sure you enable `USB Debugging` in your phone and connect it to your machine.
* Run `ionic cordova run android`. Ionic will install all the platform dependancies needed to compile the application into an android app (apk file) and run the application on your connected android device.
* You can run `ionic cordova run android --livereoad` to debug your application in your android device itself rather than in your browser.

----------------------------------------------------------------------------------------------------------------------

This is a starter template for [Ionic Documentation](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myBlank blank
```

Then, to run it, cd into `myBlank` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

