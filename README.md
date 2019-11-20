# nodejs-api-mock-server
A quick setup for mocking api response

## Installations
1. Download and install the following:
- Node Version Manager
-- https://github.com/nvm-sh/nvm/blob/master/README.md
- Node JS 
-- If you downloaded installed the NVM, just execute nvm install <version of nodejs>
-- Then execute nvm use <version of nodejs>
  
2. Clone the sourcecode the execute : npm install
3. To start the server, just execute : node index.js (index.js located on the root folder of the sourcecode)


## How to use
### 1. Examples

- I already set the following sample API endpoint, given as follows: 
  - ENDPOINT 1. /rest/sample/get
    - Where the response json set on json file : payloads/get/sample-get-response-payload.json 

  - ENDPOINT 2. /rest/sample/post
    - Where the response json set on json file : payloads/post/sample-post-response-payload.json

  - ENDPOINT 3. /rest/sample/put
    - Where the response json set on json file : payloads/put/sample-put-response-payload.json

  - ENDPOINT 4. /rest/sample/delete
    - Where the response json set on json file : payloads/delete/sample-delete-response-payload.json

#### Sample response data

`{
    "id": "001",
    "method": "delete",
    "message": "This is the response for method DELETE",
    "api": "/rest/sample/delete"
}`




### 2. The Trick

a. Add the response json file of your choice regardless on what METHOD you want to (e.g. GET, POST etc.)
   - From the examples, I put all the response json file segregated under payloads folder.
   - Example, you placed your response json file under payloads/get/my-sample-response.json
   
   
b. Modify the file, `payloads/endpoint-data.json`
   - just add the following info with the same json data format given on the file.
    - let say you have the following data
      - method is GET
      - you API endpoint is `/sample/myapi/sampleendpoint`
      - given on section 2.a, your response json is placed on `payloads/get/my-sample-response.json`
      - then the json data you will add on the endpoint-data.json is
      
        `,{
            "method":"get",
            "endpoint":"/sample/myapi/sampleendpoint",
            "responseFile":"payloads/get/my-sample-response.json"
          }`
          
          
c. Then restart the server to take effect



### 3. The Testing

- Launch either POSTMAN app or any browser the navigate to your endpoint
-- http://localhost:3333//sample/myapi/sampleendpoint
- The response data should be the data in your payloads/get/my-sample-response.json



### 4. The PORT


- You can set any port you want, just modify the port under the index.js

 `app.listen(3333,(req,res)=>{`
 
- Just change the 3333 the the port you want


### 5. The Usage

- This is very useful during the development of the front-end (either mobile or web) especially on the situation where the API is not yet ready 
- This is also useful on UI/Functional testing when you need to test a static image that can be configured on any API response set on the response json.


### 6. The Bonus
- I also set logs on every request made on the mock server, to be able to monitor which api has been called in result, it is easy to debug the code.


