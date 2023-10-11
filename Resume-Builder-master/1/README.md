# Resume generator
Web based editor to create Resume in a customizable template with the facility to save the file in .pdf formate.  
  
###### Live Demo : https://vinaysomawat.github.io/Resume-Builder/

###### Technologies: HTML, CSS, JavaScript


**Note** : Click the "VIEW INSTRUCTIONS" button in the editor to read usage instructions.

#### Features
- Resume content can be edited just like a normal document editor (cut,copy,undo etc).
- Entire sections can be added, reordered, removed just by cut,copy,pasting method.
- Section visibility can be toggled while retaining the content.
- Options provided in the left panel to modify the template and formatting.
- Sub-points can be added with various bullet styles and adjustable indentation.
- Script provided to merge multiple pages and compress the PDF.

#### Using the merge & compress script
- You must be able to run python file on your system for this.
- Save the individual pages in PDF format with name ```1.pdf``` , ```2.pdf```
- Download the ```compress_pdf.py``` file and open it in a text editor.
- Set the following variables :
	- ```dir_path``` : Directory path where you saved the PDFs for individual page
	- ```num_of_pages``` : Number of files to merge (i.e. pages in your Resume)
	- ```out_file``` : Name of output file
- Run this python file.
- Note: As this creates a new PDF file, you may have to see permission settings or run with sudo on terminal.

**Note** : Use Google Chrome

----------------------------------------------------------------------------------------------------------------
To setup the project on your local machine:

1. Click on `Fork`.
2. Go to your fork and `clone` the project to your local machine.
3. `git clone https://github.com/vinaysomawat/Resume-Builder.git`

To contribute to the project:

1. Choose any open issue from [here](https://github.com/vinaysomawat/Resume-Builder/issues). 
2. Comment on the issue: `Can I work on this?` and get assigned.
3. Make changes to your fork and send a PR.

To create a PR:

Follow the given link to make a successful and valid PR: https://help.github.com/articles/creating-a-pull-request/

To send a PR, follow these rules carefully,**otherwise your PR will be closed**:

1. Make PR title in this format: `Fixes #IssueNo : Name of Issue`

For any doubts related to the issues, i.e., to understand the issue better etc, comment down your queries on the respective issue.
