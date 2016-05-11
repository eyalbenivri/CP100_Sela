# Lab 03 - Compute Engine
## Prerequisites
This lab assumes that you already have:
1. An active google cloud account
2. Basic familiraity with the unix command line interface
## Steps
### 1. Create an ubuntu based VM
a. Open the Google Cloud Developer Console
b. Within the side navigation menu, go to Compute Engine
c. Click "Create Instance"
d. Give a name to the new machine (e.g. 'twitter-streamer')
e. Choose a Zone for the new VM. The zone should fit to your production needs.
f. Choose a Size for your new VM (for this lab, any size will be good, so better stay on the low end, and mind the pricing details on the right side)
g. For the boot disk, click change, and choose Ubuntu 16.04LTS for the list (scroll down if necessary)
h. Click OK
i. Check 'Allow HTTP traffic' and 'Allow HTTPS traffic'
j. Click Create
### 2. SSH Into Machine, and get the files for this lab
a. Once the instance is ready (Green Checkmark), click on the "SSH" link that appears at the end of the row.
b. When the terminal loads, enter the following command:
``` git clone https://github.com/eyalbenivri/CP100_Sela.git```
c. Change directories into the lab-03 folder
``` cd CP100_Sela/lab-03-compute ```
d. Print a list of the files
`` ll ``
e. Review the bash script to install node
``` less install-node.sh ```
f. Execute (with super user permissions) the install-node.sh file.
``` sudo ./install-node.sh ```
