# style notes

<!-- markdownlint-disable-file -->

## ToC
<!-- TOC -->

- [style notes](#style-notes)
  - [ToC](#toc)
  - [File name](#file-name)
  - [sub-title](#sub-title)
  - [Line Length](#line-length)
  - [Bullet Point Spacing](#bullet-point-spacing)
    - [empty line before moving up the hirarchy](#empty-line-before-moving-up-the-hirarchy)
    - [empty line before any hirarchy change](#empty-line-before-any-hirarchy-change)

<!-- /TOC -->

## File name

Prefer to base the file name on the top-header level:

replace upper case letters with lower case
strip articles the, a, an from the start
replace punctuation and white space characters by hyphens
replace consecutive hyphens by a single hyphen
strip surrounding hyphens


## sub-title
*single line of text under a heading*

optional single line of text under a heading to keep headings short.  
contain additional information for the block

## Line Length
*discuss*

often recommended are 80 characters

## Bullet Point Spacing
*discuss*

### empty line before moving up the hirarchy

```md
- level 0
  - level 1
  - level 1
  
- level 0
  - level 1
  - level 1
```

### empty line before any hirarchy change

```md
- level 0

  - level 1
  - level 1
  
- level 0

  - level 1
  - level 1
```
