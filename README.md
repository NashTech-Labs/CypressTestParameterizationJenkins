# Parameterized Execution of Cypress tests with Jenkins

In Cypress, we can parameterize our tests, with the help of scripts.
For achieving parameterization in cypress we can add scripts in our package.json file with all the required commands.

We can use following script for reference:

```
"scripts": {
    "test": "npx cypress run",
    "headedTest":"npm run test --headed",
    "chromeTest":"npm run test --browser chrome",
    "recordDashboardReport":"npm run test --record --key b01d0016-e848-4141-abb9-a8ae5e7be6af"
  }

  ```
As here we can see that, we have defined “test” as npx cypress run. This command used for running cypress test. In the second script, we have used the first script to run the desired command for running our tests.

we can integrate the same with Jenkins as well, for creating a parameterized build for executing the cypress test, but before that, we should know how to install and setup jenkins with our cypress tests.

## Jenkins Installation:
* For installing Jenkins on our local system, all we need to do hit some commands from our terminal and we are all set to work with Jenkins

* First of all, we will add this Debian package repository of Jenkins, and to use this repository we will add the key to our system.

```
$wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -
```

* Then we will add the following entry in our /etc/apt/sources.list:

```
deb https://pkg.jenkins.io/debian-stable binary/
```
* At the end we will update our local package index, then finally we will install Jenkins:
```
sudo apt-get update
sudo apt-get install jenkins
```
## Integration Of Cypress with jenkins:

* After Installing Jenkins we need to open Jenkins at http://localhost:8080/, here we will be able to see the Jenkins dashboard.
* Once the Dashboard is open, we will click on a new item but in the top left corner of the Dashboard. It will open a new pop-up window where we can set up our project.
* In this window, we will provide any name to the newly added build, and select the type of build. We can choose any option as per our requirement.
* After selecting the freestyle project we will click on the OK button, this action will redirect us to another window where we need to configure our project.
* In the next step, we need to click on the advanced button and provide the path of our workspace directory and a display name to our build.
* Now we will click on add build step and select the execute shell option from the drop-down menu.
* After selecting the build step, we can write our script in execute shell’s command section.
* Note: here $script will denote the selected parameter before execution.
* After adding our script we will click on the save button to save the latest changes. This will create a parameterized Jenkins build as per our requirements.

## Execution of the Parameterized Jenkins build

* For running the parameterized build, firstly we will select the build with parameter option for that particular project.
* From the drop-down menu, we need to select one option as per our requirement and after that, we will click on the build button.
* After/during the execution we can see the logs as well, for this we need to click on console output after selecting the running job.
