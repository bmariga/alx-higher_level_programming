#!/usr/bin/python3
""" python script that fetches https://alx-intranet.hbtn.io/status using package urllib"""

from urllib import request

if __name__ == "__main__":
    url = 'https://alx-intranet.hbtn.io/status'

    # open the URL
    with request.urlopen(url) as response:
        
        # read the response body, and automatically closes
        response_body = response.read()

        # Display the response body with tabulation
        print("Body response:")
        print("\t- type: {}".format(type(response_body)))
        print("\t- content: {}".format(response_body))
        print("\t- utf8 content: {}".format(response_body.decode('utf-8')))
