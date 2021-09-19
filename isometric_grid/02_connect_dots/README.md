# Connect the dots

So I have a few ideas for how to go about connecting the dots.

# Random points

In all of these options, it doesn't really matter how close the points are, it will just be random lines.

1. The simplest is to randomly choose points from the coordinates matrix. This could go on forever, but may be the basis of something neat if color/weight is played around with
   * So letting this run forever creates an interesting texture for sure
   * I much prefer letting only draw a finite number of lines though
   * Changing the weight and colors makes some pretty neat looking drawings
   * My least favorite part is when lines are drawn over. This would be prevented by keeping track of which points were used, but I'm fine with points being re-used to an extent, so perhaps keeping track of used lines is importand. Unfortunately, this may make it more difficult, because we need to check if a proposed line falls anywhere in a used line, I guess we could just store all one unit sub lines. If a proposed line has any sublines in the dictionary, don't draw it! 
2. A simple expansion of the first option is to remove points from the option list as they are chosen. THis may require restructuring the matrix as a list or hash table of sorts. The nice thing about this is it would have a finite finishing point.
	* It may not require restructuring the matrix. In fact, what I can try to do is have a list of the possible row and col values, then just drop them as I choose them
    	* So I need to really make a list of all pairwise coordinates.. not separate lists 
	* Beyond that, I can consider an alternative approach as mentioned in the final point of the 1st approach to prevent lines from overlapping, will take a bit more work though
3. The first two just randomly make lines, it could be cool to draw a single contiguous line. This could be done by keeping track of the last coordinate from the previous line
4. To expand on the third, we could also remove points as we go so that it terminates at a determined point
   * Something that might be interesting as well is to figure out how to record the coordinates where the lines intersect. There are only a finite list of points where this can occur, and also this could be used as a feedback of sorts, by feeding the intersecting points back into the initial algorithm, so on and so forth, until chaos ensues??
5. A bit more advanced would be not letting the line cross! This would be a bit involved honestly. It would require knowing if a proposed line intersects with a previously drawn line, so you would have to be keeping up with all the previously drawn lines. Also for a given set of proposals it would probably need to discard impossible ones to prevent from crossing. That way once it runs out of viable options it terminates. On a small grid, it could be a fun way of generating 

# Incremental

This will be a fun extension of some of the previous methods. For a starting point, you can only draw lines between neighbors. Honestly, I'm pretty sure it would be neat to apply all the five methods to this approach. Except the 4th one, lines can't intersect, only retraced, which would be handled by the 4th approach.
