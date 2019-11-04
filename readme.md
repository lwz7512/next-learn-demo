# nextjs.org/learn demo content

This repository is meant to be used with the Next.js tutorial on https://nextjs.org/learn.

**Restructured with yarn workspace**

@2019/11/03


> Move all the projects into packages folder as each workspace, and reuse the node modules under the root folder, thus, remove the repeated modules installation.


## Installation

```
$ git clone https://github.com/lwz7512/next-learn-demo.git
$ cd next-learn-demo
$ yarn
```

## Start each workspace server

to run the each workspace under packages:

```
$ yarn run dev1
$ yarn run dev2
$ yarn run dev3
$ yarn run dev4
$ yarn run dev6
$ yarn run dev7
$ yarn run dev8

and so on...
```

When additional module requried in nextjs tutorial, just install it under the next-learn-demo directory, no need to enter the project folder every time.

