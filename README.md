# dap2_addon_for_splunk

DAP2 Addon for Splunk 
# Set-Up Instructions 
(Gurkan Gokdemir - ggokdemir@splunk.com)

## Before start:
Reference for the engagement summary, all the communication, links, and data documented here for further usage by professional services or product teams.
(https://splunk.atlassian.net/browse/FDSE-1597)

Install video: Install-dap2_addon_for_splunk.mp4 file.

## Step 1: Upload the “dap2_addon_for_splunk-1.1.0.tar.gz” file to Splunk Enterprise instance.
Go to Manage Apps, and click Install app from file, then upload your “dap2_addon_for_splunk-1.1.0.tar.gz” file by clicking Choose file then Upload buttons.

## Step 2: Create an Input
Add an account under Configuration tab, then create an input from Inputs tab.
Please set an Interval to and select the Script to run and fill required details then click the Add button.
Changing the Status of the input will run node.js code each of the time.

Please see the files downloaded under the download directory. 

## Step 3: Monitoring.
If you see the files downloaded under the download directory. Please configure the instance to monitor directories for data.
To monitor all objects in a directory, select the directory. The Splunk platform monitors and assigns a single source type to all objects within the directory.  
Please click Add Data, then Files & Directories. Then please click the “+Add new” button. 

Note: Please set the “File or Directory” as the same as directory set in the Input configuration.

Please select App Context as DAP2 Add-on for Splunk. Review the configuration, then press the “Submit” button.
Now, we are monitoring the directory, whenever a new file added, Splunk platform will be indexing it.

## Step 0: Troubleshooting.
To see node.js outputs, please check ../var/log/splunk/dap2.log file. (Use grep args to see assignments in the log file.)
Changing the code in ../etc/apps/dap2_addon_for_splunk/bin/DAP-nodescripts-beta-main is recommended depending on your needs.
Code that runs node.js is ../etc/apps/dap2_addon_for_splunk/dap2_input.py change node.js code implementation section under collect_events function details if required. 

### Note: This add-on is not Splunk supported. Please reach out to professional services if professional help is needed.

#### Created by using UCC Framework. 
https://splunk.github.io/addonfactory-ucc-generator/

#### Node.js code (dap2-nodescripts-beta) developed and owned by @pgoldweic (Patricia Goldweic)
https://github.com/pgoldweic/DAP-nodescripts-beta
