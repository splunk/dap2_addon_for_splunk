import import_declare_test

import sys
import json

from splunklib import modularinput as smi

import subprocess
import os
import traceback
import requests
from splunklib import modularinput as smi
from solnlib import conf_manager
from solnlib import log
from solnlib.modular_input import checkpointer
from splunktaucclib.modinput_wrapper import base_modinput  as base_mi 

bin_dir  = os.path.basename(__file__)
app_name = os.path.basename(os.path.dirname(os.getcwd()))


class ModInputDAP2_INPUT(base_mi.BaseModInput): 

    def __init__(self):
        use_single_instance = False
        super(ModInputDAP2_INPUT, self).__init__(app_name, "dap2_input", use_single_instance) 
        self.global_checkbox_fields = None

    def get_scheme(self):
        scheme = smi.Scheme('dap2_input')
        scheme.description = 'dap2_input'
        scheme.use_external_validation = True
        scheme.streaming_mode_xml = True
        scheme.use_single_instance = False

        scheme.add_argument(
            smi.Argument(
                'name',
                title='Name',
                description='Name',
                required_on_create=True
            )
        )
        
        scheme.add_argument(
            smi.Argument(
                'dap2_type',
                required_on_create=True,
            )
        )
        
        scheme.add_argument(
            smi.Argument(
                'account',
                required_on_create=True,
            )
        )
        
        return scheme

    def validate_input(self, definition):
        """validate the input stanza"""
        """Implement your own validation logic to validate the input stanza configurations"""
        pass

    def get_app_name(self):
        return "app_name" 

    def collect_events(helper, ew):


        #ONLY EDIT node.js code implementation
        """node.js code implementation: START """

        #Directory path selection.
        app_path = os.path.abspath(__file__)
        dap2_type = helper.get_arg('dap2_type')
        if (dap2_type == 'incrementals'):
            file_path = app_path.replace('dap2_input.py', '') + "DAP-nodescripts-beta-main/allIncrementals-beta.js"
        if (dap2_type == 'snapshots'):
            file_path = app_path.replace('dap2_input.py', '') + "DAP-nodescripts-beta-main/allSnapshots-beta.js"

        #Give permissions to the JS file path.
        command = ["chmod", "u+rx", file_path]
        try:
            subprocess.run(command, check=True)
        except subprocess.CalledProcessError as e:
            helper.log_error(f"An error occurred while changing the JS file permissions: {e}")

        #Give permissions to the .env file.
        env_path = app_path.replace('dap2_input.py', '') + "DAP-nodescripts-beta-main/.env"
        command = ["chmod", "u+rx", env_path]
        try:
            subprocess.run(command, check=True)
        except subprocess.CalledProcessError as e:
            helper.log_error(f"An error occurred while changing the .env file permissions: {e}")

        #Take variables from the UI.
        dap_URL = helper.get_arg("dap_URL")
        CD2ClientID = helper.get_arg("CD2ClientID")
        CD2Secret = helper.get_arg("CD2Secret")
        #includeSchemaVersionInFilenames = helper.get_global_setting("includeSchemaVersionInFilenames")
        sleepMilliseconds = helper.get_arg("sleepMilliseconds")
        maxSimultaneousQueries = helper.get_arg("maxSimultaneousQueries")
        topFolder = helper.get_arg("topFolder")
        

        #Create the download file directory. (Error: returns non-zero exit status 1)
        #command = ["mkdir", topFolder]
        #try:
        #    subprocess.run(command, check=True)
        #except subprocess.CalledProcessError as e:
        #    helper.log_error(f"An error occurred while creating \"topFolder\" file: {e}")

        try:
            #Run the node.js code.
            result = subprocess.run(['node', file_path, dap_URL, CD2ClientID, CD2Secret, sleepMilliseconds, maxSimultaneousQueries, topFolder], capture_output=True, text=True)
            with open(os.path.join(os.environ["SPLUNK_HOME"], "var", "log", "splunk", "dap2.log"), "a") as f_stdout:
                f_stdout.write(result.stdout)
                f_stdout.write(result.stderr)
                helper.log_info("The nodejs code is executed. Check dap2.log for details.")
        except FileNotFoundError:
            helper.log_error("Node.js is not installed or not found on your system.")

        """node.js code implementation: END """    
        #ONLY EDIT node.js code implementation


    def get_account_fields(self):
        account_fields = []
        return account_fields


    def get_checkbox_fields(self):
        checkbox_fields = []
        return checkbox_fields


    def get_global_checkbox_fields(self):
        if self.global_checkbox_fields is None:
            checkbox_name_file = os.path.join(bin_dir, 'global_checkbox_param.json')
            try:
                if os.path.isfile(checkbox_name_file):
                    with open(checkbox_name_file, 'r') as fp:
                        self.global_checkbox_fields = json.load(fp)
                else:
                    self.global_checkbox_fields = []
            except Exception as e:
                self.log_error('Get exception when loading global checkbox parameter names. ' + str(e))
                self.global_checkbox_fields = []
        return self.global_checkbox_fields


if __name__ == '__main__':
    exit_code = ModInputDAP2_INPUT().run(sys.argv)
    sys.exit(exit_code)


