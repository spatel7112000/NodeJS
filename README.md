…or create a new repository on the command line

echo "# NodeJS" >> README.md
git init
git add README.md
git commit -m "My First API"
git branch -M main
git remote add origin https://github.com/spatel7112000/NodeJS.git
git push -u origin main



…or push an existing repository from the command line


git remote add origin https://github.com/spatel7112000/NodeJS.git
git branch -M main
git push -u origin main

change a directory

cd "drag a folder or file"
To change to your home directory, type the following:
cd

To change to the /usr/include directory, type the following:
cd /usr/include

To go down one level of the directory tree to the sys directory, type the following:
cd sys

If the current directory is /usr/include and it contains a subdirectory named sys, then /usr/include/sys becomes the current directory.
To go up one level of the directory tree, type the following:
cd ..

The special file name, dot dot (..), refers to the directory immediately above the current directory, its parent directory.



//Nodemon Module Problem 
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
BTW, this should be executed in Powershell, not windows's cmd.