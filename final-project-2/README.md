# Final Project 2
## IDEATION
 - What *colors* do artists like to represent each season? 
 - Does this preference change over time?
 <br />
Please view the project [here](https://yiranni.github.io/majorstudio1/final-project-2/).


*******************
## PROCESS
### ITERATION I
- Download all images with tags of seasons, spring, summer, autumn, or winter based on API search
    - sort by `objectBeginDate`
- Extract the dominant color of each image with `color-thief`.
- Group dominant colors based on 2 values
    - `objectBeginDate`
    - tags related to seasons
### ITERATION II
- Convert RGB values from ITERATION I into HSL values with `color-convert` to ease the process of group colors in similar hues.
### ITERATION III
![final result](https://github.com/yiranni/majorstudio1/tree/master/final-project-2/src/img/result.png)


 ************
## PACKAGES
- [Color Thief](https://lokeshdhakar.com/projects/color-thief/?utm_source=bypeople).
- [color-convert](https://www.npmjs.com/package/color-convert)