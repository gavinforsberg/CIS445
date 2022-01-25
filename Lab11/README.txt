# Lab11: Web Server with Node.js and ngrok

* Objective: Use **Node.js** and **ngrok** to build a simple asynchronous web server
  
0. You may skip the steps if you have previously installed both Node.js and ngrok

1. Download [Node.js](https://nodejs.org/en/)

* Note: if you are using **playground.bradley.edu**, you don't have to download it.

2. Download and sign-up an account at [ngrok](https://ngrok.com)

* Note: to download the file to **playground.bradley.edu**, you first log in to the page and find the **Download ngrok** link for the corresponding system (here we use Linux as an example). Right-click on the link and copy the link. Then, go to your Putty screen (I assume that you all have learned how to use Putty) and type

        wget  [right-click to paste the copied link]

Then, you do the following to unzip the file.

    unzip ngrok-stable-linux-amd64.zip

1. You can now create a file **httpd.js**.

* You can use **nano** or other editors you like in the terminal.

If you use **nano**, just type

        nano httpd.js

Initially, the file has the following content

    const http = require('http')
    const hostname = '127.0.0.1'
    const port = 30000
    const server = http.createServer((req, res) => {
        res.statusCode = 200
        res.setHeader('Content-Type', 'text/plain')
        res.end('Hello World\n')
    })
    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
    }) 

* Note: the hostname here (**127.0.0.1**) means the machine running the code, which is equivalent to **localhost**

* Note: the port number here (30000) should be adjusted accordingly. Your designated port numbers are given in [PortAssignment.md](PortAssignment.md).

1. Once you're done, you can save the file and run the code by running

    ```
    node httpd.js
    ```

2. Since **playground.bradley.edu** is behind the firewall (you cannot access most of its services off-campus), we use the **ngrok** as the bridge to access our web server through a generated URL.

3. Go to your **ngrok** account and you'll find your **Auth** token on both the **Explore ngrok** tab or **Auth** tab. Then, connect your ngrok account through the following command

    ```
    ./ngrok authtoken [the token you have in the web page]
    ```

* Note: here, the **.** (single dot) means the current working directory. Since, by default, the executable path under Linux systems does not include the current working directory, you CANNOT run any command directly under yor current working directory. So, you need to add **./** before your executable file to tell Linux that you want to run the command under the same directory you are at.

* Note: similarly, if you want to run executable in the directory above the current directory, you can run

    ```
    ../your-executable-file
    ```

7. Finally, we connect the HTTP/web service written in Node.js and ngrok together. Open another Putty connection to **playground**.

    7.1. Terminal one:
    ```
        node httpd.js
    ```

    7.2. Terminal two:
    ```
        ./ngrok http 30000
    ```

* Note: You need *two* terminals/Putty connections for this.

* Note: The port number (30000) should be adjusted based on what you choose in your code.

8. Once you run the **ngrok** command, you will see the output similar to the following

```
Session Status                online
Account                       Tachun Lin (Plan: Free)
Version                       2.2.8
Region                        United States (us)
Web Interface                 http://127.0.0.1:4040
Forwarding                    http://e3fe2353.ngrok.io -> localhost:30000
Forwarding                    https://e3fe2353.ngrok.io -> localhost:30000
```

This is telling you that your web server is accessible through the two Forwarding URLs provided.

9. You are now ready to go. This time, you will learn how to use the **file descriptor** to open, read, and check the file status.

10.  [TODO] Create a simple HTML file under the same directory as the **httpd.js** file.

Note: You may use one of the HTML file created in the previous lab.

11.  [TODO] Use the file descriptor to check if the file exists.

Hint: [Working with file descriptors in Node.js](https://nodejs.dev/working-with-file-descriptors-in-nodejs)

12.  [TODO] Print the content of the file in the terminal.

13.  [TODO] Return the content of the file when you receive the request.

For example, if someone accesses **http://e3fe2353.ngrok.io/abc.html**, your web server will first identify if there is a file **abc.html** under the designated directory. Here, for simplicity, we assume that the web directory is the current working directory (the same directory where you store the **httpd.js**).

Note: If such file (**abc.html**) exists, then your web server will send the **content** of the file back; otherwise, the server will send back an error message **404: ERROR** as the content.

