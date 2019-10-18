# Final Project 2
As an amatuer of painting, I always have some contraints on choosing colors. However, for those talented artists, do they have some preferrences on using colors? In this project, I chose \"seasons\", a subjective concept, as my research topic. I looked through all paintings that depicted any of the four seasons from 11th century collected by Metropolitan Museum of Art. For each exhibit, I extracted the dominant color and group color boxes for every 200 years. Within each time period, I sorted color boxes based on its hue in order to see which color was the most commonly used during the selected time range. <br />
Please view the project [here](https://yiranni.github.io/majorstudio1/final-project-2/)

## IDEATION
 - What *colors* do artists like to represent each season? 
 - Does this preference change over time? <br />



*******************
## PROCESS
### ITERATION I
- Download all images with tags of seasons, spring, summer, autumn, or winter based on API search
    - sort by `objectBeginDate`
- Extract the dominant color of each image with `color-thief`.
![final result](https://github.com/yiranni/majorstudio1/blob/master/final-project-2/src/img/sample.png)
- Group dominant colors based on 2 values
    - `objectBeginDate`
    - tags related to seasons
### ITERATION II
- Convert RGB values from ITERATION I into HSL values with `color-convert` to ease the process of group colors in similar hues.
### ITERATION III
![final result](https://github.com/yiranni/majorstudio1/blob/master/final-project-2/src/img/result.png)


 ************
## PACKAGES
- [Color Thief](https://lokeshdhakar.com/projects/color-thief/?utm_source=bypeople).
- [color-convert](https://www.npmjs.com/package/color-convert)