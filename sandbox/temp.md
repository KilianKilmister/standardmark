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
  - automatically highlite or otherwise modify configurable keywords and phrases.

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
  - help with smart linebreak placement. eg. after punctuation or clauses.
  - by interpreting keywords in context and provide feedback based on it. eg.  
    registering a reference like "see the link" or "discribed below" and ask  
    for a reference link to be added.


## Some Key Points

It mostly follows the rules of the [GitHub Markdown Styleguide] with
one major exception: The styleguide reccomends that ordered list-items all
start with `1.` because the parser will automatically assing the right ordinal
when rendering the file in a browser. This is obviously no good for
reading the source. And assigning the correct ordinal can be handled by
the formatter.


### Highlighting

Exlusive use of `*`for **bold** and *italics*.
The rational for this is that `_` is commonly used to denote special variables in
JS and co. and using it to highlight can cause confusion. Additionally, it is
easier to see what kind of highlighting is intended as multiple `_` in a row have
no gap between them in many fonts or when using ligratures. It also makes
it hard to read lists if the first word of a list is highlighted. Keyboard
text navigation is also doesn't work well, as `_` is often not counted as a
word separator and using `Opt/Ctrl + arrow-key` to jump to the end or beginning of
a word will jump over any underscores too.

```md
# For Comparison

## Using Asterix

- **this** is bold
  - *this* is italics
- ***this*** is bold-italics


## Using Underscore

- __this__ is bold
  - _this_ is italics
- ___this___ is bold-italics
```


### Uneven Spacing of Headings

Offsetting headers towards the section they introduce does wonders for
readability and the general aestethics of a document. A micro example of
this can be seen in the last codeblock. Adjacent headings and content under
a heading is separated by a single blank line, and introduction of
a new heading is preceded by two blank lines.  
Now this is in contrast to some common styleguides which prefer even spacing,
but uneven spacing naturally segments a document.


### Strict `Code-Block` Rules

As some of the inspiration comes from JS standard-style,
rules on `code-blocks` should be strict:

- no `~` or `indentx4` to indicate `code-blocks`
- inline `code` should be as short as possible and generally be avoided for
  things other than highlighting an expression or syntax.
- codeblocks should be seperated from text by a an empty line and:
  - start at the same indentation-level normal text would have
  - must have a language declaration (in case of doupt, chose "text")
  - in case of JS or any of it's sub scripts to largly comply with the
    standardjs-spec
  - ~~code inside of it must start at the same level as
    the codeblock they belong to~~
    - *[Note#1](#footnotes)*
      - and [*Note on footnotes*](#footnotes)


### 


### Simple Indenting Rules


[some popular style guides] reccomend using a different number of spaces after
list marker depending on if it's ordered or unordered and on wether a list item
has to be wrapped. Part of the reason for that is to keep the beginning of
the text at tabstop level and inlinewith *indent-style*-`code-blocks`
In my opinion, this is overly complicated, makes a document less uniform and
provides very little in terms of readability


[some popular style guides]: <https://cirosantilli.com/markdown-style-guide#spaces-after-list-marker>
"cirosantilli.com"


## need input


## some rules

---


### Footnotes

1. originally had example snippets for these points, but after finishing them,
  it would probably be smart to not use codeblocks within a list at all.
  They are cumbersom to write even with the help of a markdown-aware editor,
  waste a lot of space on the left side and easily fall off the
  right side of the page.
