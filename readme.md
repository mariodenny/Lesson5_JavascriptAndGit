# How to initialize github repo and connect it to Local

1. Create new folder in local, open terminal or cmd, type cd to the folder and type 
    ```
        git init .
    ```
2. Create new repo in github, and copy the https for remote origin
3. setup your git account in local. by using git config
    ```
        git config --global user.name "Your username"
        git config --global user.email "youremail@domain.com"
    ```
4. connect local folder with github use command
    ```
        git remote add origin https://<your_url_repo>.com
    ```
5. rename the local branch into main
    ```
        git branch -m main
    ```
6. test push using 
    ```
        git add .
        git commit -m "Your message"
        git push origin main
    ```
