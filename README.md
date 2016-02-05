# blocks-solver
This repo should be able to solve puzzle similar to this one: http://armorgames.com/play/13707/blocks
##Instalation
Just clone the repo and type `npm install` to get all the dependencies (will get rid of them in the future)
##Usage
`solver.js` module has `solve` method that takes two parameters: **grid** and **step limit**. 

**grid** is a two dimentional array representing the blocks layout. Numbers (from 1 up) represent different types of blocks, 0 represents empty space.
With **steps limit** you set how long the maximum solution should be. Please note that algorithm will always provide the shortest solution.
If no solution is found error is thrown.

Result will be provided as array of objects each with 3 properties: **x**, **y** and **direction**. This represents order of moves needed to solve the puzzle. 
**x** and **y** are block coordinates counted from the top left and starting at 0, **direction** is...direction the block should go (left, right, up or down). 
##Important remark
Solver will always add two extra empty columns on the beginnig and on the end of the grid provided as input. Therefore you should substract 2 from **x** coordinate to get block you need to move. Look at example provided below.
###Example

``` 
solver.solve(
[
  [0,1,0],
  [1,1,0]
],1) 
```
This should return `[{ x:3, y:1, direction: "right"} ]` meaning you should move the second block in the bottom row to the right. 

Second block has cords (3,1) because of 2 extra columns added and because bottom row has y coordinate equal to 1 (top is 0)
 
