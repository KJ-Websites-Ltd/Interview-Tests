Q1. Shortest word
=================

Write a program to find the shortest word on each line of a text file and display the results, one word per line.
Your program will be invoked from the command line as ./command input.txt and should write the answer
to the standard output stream.
Example text file: some line with text
another line
Example output: some
line
In case of multiple equally short words in a line, select only the first one.
Make a note of any other assumptions that could affect the outcome.
You may use any programming language.

Outline
=======

I have created a simple class that simply reads the text content from input.txt in this directory and outputs in the cmdline the shortest word from each line.

This should be invoked via:

> php ./command input.txt

In this directory.