
Q2. OO design example
======================

Create a class design to represent a filesystem. If you prefer, you may use diagrams and pseudo code instead of a working example.

Outline
========

This class would be quite big and as per the requirements not entirely fit into the single responsibility methodology, but i will outline how this could work, although the basic outline of this is very simple it allows for CRUD operations and directory listing.

### Private variables
Each of the following will require getters and setters so that they can be used with the methods
* root (root directory)
* directory outline (an array of the entire structure of the root directory, files and children directories)

### Constructor
Do nothing, everything needs to be injected.

### List (directory)
Use glob to list all the files and directories in the root directory, self reference this method to progress into all children. Set the directory outline variable.

### Create (name, type[file,directory,parent directory)
Create files and directories in the parent directory. Update the directory outline via List().

### Delete (id, name)
Discover the type of file or directory to delete, remove from filesystem. Update directory outline via List().

## Update (id, name, parent directory)
Update the name of a directory or file. Alternatively this element can be moved to new directory. Update directory outline via List().


Creation
=========

This class simply requires the following creation:

$dir = new fileSystem();
$dir->setRoot('./');
print_r($dir->getDirectoryOutline());










