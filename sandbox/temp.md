# head

I'm working on a GitHub Flavoured Markdown linter and formatter, that  
can enforce conventions and autofix and format more than the existing formatters.  
its running on an altered version of [markdownlint] and is inspired the strict  
rules of [JavaScript Standard Style]. It follows the [GitHub Markdown Styleguide]  
and is meant to expand on it to make it as easy as possible to read in plain text.

[markdownlint]:<https://github.com/DavidAnson/markdownlint> "GitHub repo"
[JavaScript Standard Style]: <https://standardjs.com/index.html> "Homepage"
[GitHub Markdown Styleguide]: <https://github.com/style-guides/Markdown> "Styleguide repo"


## Goals

- It should be able to use autoformatting to help the Author to style-rules that  
  are less practicle to write.
- It should be easy to integrate it into a workflow. eg.
  - linting and formatting program documentation prepublish.
  - help in creating templates for issues or PRs and the like.
  - providing easy to read text to show on a terminal without the help of  
    additional tools like coloring. eg. Abouts, credits or loginmessages.

- It should help in creating an ordered document by:
  - creating a Table of Content
  - create reference links from inline links and move them to a more appropriate  
    position for plain text reading. eg. move them before the next header.
  - help in indenting and formatting tables.

- it should try to guarantee that documents are usefull to accessability tools.
- it should be able to use formatting option specified in a config file and  
  inside the document (using config comments and/or a frontmatter) to make it as  
  easy as possible to configure linting and formatting for different cases. eg:
  - disable requireing a title for posts that have a seperate tilte field
  - to disable/configure the creation of a ToC.

- it should be smart enough guess basic purpous of a document and automatically  
  adjust some of the formatting. eg.
  - only creating a ToC if the file has exeeded a certain length.
  - adjusting allowed line length when it is sensible.

- it should not only point out issues but also provide rationale.
- it should assist by suggesting ways to improve a document. eg.
  - by pointing out overly long paragraphs that could be split.
  - by interpreting keywords in context and provide feedback based on it. eg.  
    registering a reference like "see the link" or "discribed below" and ask  
    for a reference link to be added.


## need input


## some rules
