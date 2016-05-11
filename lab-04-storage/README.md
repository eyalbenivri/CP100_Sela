# Lab 04 - Compute Engine
## Prerequisites
This lab assumes that you already have:

1. An active google cloud account

2. Basic familiraity with the unix command line interface

## Steps

### 1. Create a Storage Bucket

a. Open the Google Cloud Developer Console

b. Withtin the side navigation menu, got to Storage

c. Click "Create Bucket"

d. Give the new bucket a name

e. Choose a location. The location should fit to your production needs

### 2. Create an ubuntu based VM

a. Open the Google Cloud Developer Console

b. Within the side navigation menu, go to Compute Engine

c. Click "Create Instance"

d. Give a name to the new machine (e.g. 'twitter-streamer')

e. Choose a Zone for the new VM. The zone should fit to your production needs.

f. Choose a Size for your new VM (for this lab, any size will be good, so better stay on the low end, and mind the pricing 
details on the right side)

g. For the boot disk, click change, and choose Ubuntu 16.04LTS for the list (scroll down if necessary)

h. Click OK

i. Check 'Allow HTTP traffic' and 'Allow HTTPS traffic'

j. Click Create

### 3. SSH Into Machine, and get the files for this lab

a. Once the instance is ready (Green Checkmark), click on the "SSH" link that appears at the end of the row.

b. When the terminal loads, enter the following command:

``` git clone https://github.com/eyalbenivri/CP100_Sela.git```

### 4. Install nodejs

a. Change directories into the lab-04 folder

``` cd CP100_Sela/lab-04-compute ```

b. Print a list of the files

``` ll ```

c. Review the bash script to install node

``` less install-node.sh ```

(press q to exit)

d. Execute (with super user permissions) the install-node.sh file.

``` sudo sh ./install-node.sh ```

e. Make sure Nodejs was installed

``` node -v ```

### 5. Review the code, install dependencies, change configurations and Run the code

a. Make sure your current working directory is the lab-04-compute directory

``` cd ~/CP100_Sela/lab-04-compute ```

b. Install dependecies for the node application

``` npm install ```

c. Review the code - Main entry point

``` less index.js ```

(press q to exit)

d. Review the code - Configuration parser

``` less config.js ```

e. Review the code - Configuraiton object

``` less config.json ```

f. Edit the config.json file and change parameters for project id and bucket name

``` nano config.json ```

(Edit the appropriate entries, press Ctrl + W to save and Ctrl + X to exit)

f. Install dependencies

``` npm install ```

g. Run the code

``` node index.js ```

(Ctrl + C to exit the program)
