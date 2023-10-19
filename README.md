# Canvas DAP2 Add-on for Splunk

Splunk Add-on that uses Canvas Data 2 API to get data snapshots and incremental data of Canvas Data Access Platform 2 (DAP2). 
Downloads files locally to a configured base folder for Splunk Enterprise to monitor and index by using props.conf and transforms.conf

The overall task of the Python code is to take configurations from the Inputs UI of the Add-on, then run the selected Node.js script and log CLI outputs.
Node.js code takes arguments from the Inputs UI. And uses REST API to get data from the Canvas Data API endpoint and then saves them to the local directory. 

Scripts that handle snapshot and incremental retrievals of Canvas Data 2 respectively. 
Each run of the snapshots retrieval script creates a new subfolder named 'snapshots-<timestamp>', 
while runs of the incrementals retrieval script create a subfolder named 'incrementals-<timestamp>'. 

The Incrementals script includes logic for finding the most recent file/s retrieved in previous runs for each particular table (it traverses folders previously created as it searches), extracting the timestamp of those files, and using those timestamps as the 'since' value in the next incremental retrieval of each table.


## Set-Up Instructions 
### Requirements:
Splunk Enterprise 8.1.x, 8.2.x, 9.0.x. (Splunk includes node 8.17.0 in the list of third-party credits for Splunk Enterprise. Splunk has been patching it consistently, but hasn't upgraded the version.)
Disk space for the data to download from the Canvas Data Access Platform 2 (DAP2).  (Data size may change depending on the Canvas data size.)


### Step 1: Upload and install the “dap2_addon_for_splunk-1.X.X.tar.gz” file to the Splunk Enterprise instance.

Please log in to Splunkbase then download the add-on from Splunkbase. If you don’t have a Splunkbase account, please create one.
(Alternatively, you can use the “+ Find More Apps” section of Splunk Enterprise to find this add-on and install it.)

Go to Manage Apps, and click Install app from file, then upload your “dap2_addon_for_splunk-1.X.X.tar.gz” file by clicking Choose file then Upload buttons.


### Step 2: Create an Input
Add an account under the Configuration tab, then create an input from the Inputs tab.
Please set an Interval to and select the Script to run and fill required details then click the Add button.
Changing the Status of the input will run the selected node.js (Snapshots or Incrementals) code each time.
Please see the files downloaded under the download directory. 
(Before you set the add-on, please be sure the download directory exists. Because the add-on will not create a download directory.)

Types of Inputs: 
Name: A unique name for the data input.
Interval: Interval of the data input, in seconds or Cron schedule.
Script: DAP2 Node.js script to use. (Snapshots or Incrementals)
dap_URL: DAP2 URL Endpoint that the add-on will use for REST API calls.
Account to use: Add-on account to use for this input. (Created under the Configuration tab.)
CD2ClientID: DAP2 Client ID for the REST API authentication.
CD2Secret: DAP2 Client Secret for the REST API authentication.
SleepMilliseconds: Number of milliseconds to wait while polling for job status.
MaxSimultaneousQueries: Controls the number of retrieval jobs -one per table- that are created simultaneously.
TopFolder: Download folder full path. (Please be sure the path exists.)


### Step 3: Monitoring.
If you see the files downloaded under the download directory. Please configure the instance to monitor directories for data.
The Splunk platform monitors and assigns a distinct Splunk source type to every CD2 table retrieved. (By using props.conf and transforms.conf)
Please click Add Data, then Files & Directories. Then please click the “+Add new” button. 

Note: Please set the “File or Directory” as the same as the directory set in the Input configuration.

Please select App Context as DAP2 Add-on for Splunk. Review the configuration, then press the “Submit” button.


### Step 0: Troubleshooting.
To see node.js CLI outputs, please check ../var/log/splunk/dap2.log file for Python logs please see ../var/log/splunk/dap2_input.log
The code that runs node.js is ../etc/apps/dap2_addon_for_splunk/dap2_input.py change section under collect_events function details if required. 


#### Note: This add-on is not Splunk supported. Please reach out to professional services if professional help is needed.

##### Created by using UCC Framework. [Apache-2.0 license]
https://github.com/splunk/addonfactory-ucc-generator


##### Python code is developed by Gurkan Gokdemir (ggokdemir@splunk.com) [Apache-2.0 license]


##### Node.js code (dap2-nodescripts-beta) developed and owned by @pgoldweic (Patricia Goldweic) [Apache-2.0 license]
https://github.com/pgoldweic/DAP-nodescripts-beta


