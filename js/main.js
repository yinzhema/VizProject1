let good_designs = ["good1.jpg","good2.jpg","good3.jpg"];
let bad_designs = ["bad1.jpg","bad2.jpg","bad3.jpg"];
let good_critiques = [
"The audience for this visualization is pretty wide and can apply to anyone interested in learning about the gender and diversity gap in the tech industry. The data that is encoded is the employee breakdown in the US in many different companies based on gender and ethnicity. There are nominal properties in this visualization are the companies, gender, US population, year etc. It also has quantitative aspects by showing the percentages of employees by category. Hue and color is also used to organize the encoded data. Overall, this visualization is good because it conveys the data in a function, beautiful and enlightening way. In addition, it is interactive and allows the user to sort and view the data.",
"This visualization intends to inform people on the ages of buildings in Cincinnati,OH between the years of 1800 to 2016. We can see the addition of the buildings being constructed over time in Ohio as the visualization utilizes a time lapse video to portray the shift and growth of buildings within the city. The visualization displays data on the year the buildings are built, the geographic distribution of the buildings. This data is displayed through use of colors to represent the year built, different hues of colors to show the transition of years as time passes by. Through this visualization, readers are able to see trends in where buildings are being constructed in Ohio as during specific time periods, buildings are being clustered in specific areas. This visualization portrays the five principles of visualizations because it portrays the data truthfully and accurately and is functional in the sense it shows a time lapse. The colors make it beautiful and helps to differentiate the clusters in which the buildings are constructed each year. Overall, the visualization is insightful because it allows the readers to picture the distribution of buildings over time. Therefore, this is a good visualization because it accurately informs the reader of the information it is trying to portray in an organized and clear manner",
"The data visualization above demonstrates a beautiful and clear understanding of the  gender pay gap in both the US and the UK. We can sort the data by salary and job category. By using one categorical value and one quantitative value, we are able to use point marks, length and lines to demonstrate the gap between the two genders. This data visualization should be used by anyone who is interested in learning about the difference between wage in the US and the UK. This data can be used for lawmakers and any policy advocate to demonstrate the need for stricter rules and regulation regarding gender pay. In each line, we see that there are two points connected by a line. The two points represent the two gender and the line that connects to two points represents the gap between gender wages. As a result the visualization clearly demonstrates the difference between the two genders. The longer the line, the larger the gender wage gap. When looking at these visualizations, readers are able to clearly see the yearly salary or salary gap by the thousands. They can clearly see the trend that men make more than women in many categories. This visualization is truthful, functional, beautiful, insightful and enlightening. We see clearly the purpose of the visualization and it tells a story about gender wage gap inequality. This would be considered a good visualization"];
let bad_critiques = ["The audience for this visualization is clearly for people who drink alcohol and are looking for hangover cures. The message that it conveys is that there are different types of hangover cures and they have different ingredients. The data that is encoded in this visualization is the type of hangover cure, the ingredients, and the proportions of the ingredients. The visualization is beautiful and includes the color of all the ingredients. However, it lacks organization and could be more functional and include more insightful information about each hangover cures’ properties. Considering all aspects of the visualization, it could be more enlightening and identify a trend within the different drinks, so this is a bad visualization.",
"The audience of this visual is intended for people who want to analyze spending habits per year during the holidays. This visualization attempts to convey information on the average spending amount per person during the holiday for each year. The data that is encoded in the visual is the year and average money spent. The visualization encodes this data by tracking the year via the x axis and average amount spent via the y axis. We find that that visualization uses 3D bars to represent the amount spent within the year. The year is also differentiated by the different colors. This visualization allows readers to view and analyze trends with spending during the holidays. Although the visualization is beautiful, it is a little messy because the colors are repeated in a pattern for every 4 years even though it would be more effective to use a different color for a different year. In addition, the bars are in 3-D which can distort the viewpoints when trying to compare two different years and therefore readers cannot obtain accurate measurements. Therefore the visualization can be more functional and insightful in the way it attempts to convey the data more accurately. ",
"CAGR stands for compound annual growth rate and represents the rate of return of an investment or market over a certain period of time. In this example, the compound annual growth rate of the Global Vegan Cheese Market from 2019-2026 is 8.3%. The formula is calculated with ((Ending Balance/Beginning Balance)^(1/n)-1) where beginning and ending balance represents the value of the investment or market and n represents the number of years. This visualization is for anyone who is interested in learning about the annual growth rate of the vegan cheese market. Here we see that the market value is 2.48 billion USD in 2018 and 4.72 billion USD in 2026. This visualization leaves us with many questions since 3 parts of the pie graph are unlabel and unnumbered. With 7 years in between 2018 and 2026, we have no clue what the pink, green and red piece represent. The visualization is encoded using pie charts to demonstrate the market value of two years: 2018 and 2026. However, the pie chart itself doesn’t show the values or the breakdowns of other years. 2018 and 2026 are denoted by different colors and different pieces of the pie chart. Readers do not gain any information on the data besides two numbers representing the market value of 2018 and 2026. To find the values of other years, they would have to redo the calculations. The visualization is neither truthful, functional, beautiful, insightful, nor enlightening since it fails to provide us with any information and doesn’t tell a story. Overall this is a terrible visualization since it fails to give us any information rather than the annual growth rate and the beginning and ending balance. For example we would have to personally calculate the market value for 2019-2025."];
let good_links=["https://informationisbeautiful.net/visualizations/diversity-in-tech/","https://www.dataplusscience.com/AgeofCincinnati.html","https://informationisbeautiful.net/visualizations/gender-pay-gap/"];
let bad_links=["https://informationisbeautiful.net/visualizations/worlds-best-hangover-cure/","https://visual.ly/community/infographic/lifestyle/christmas-and-new-year-holidays-around-world","https://viz.wtf/image/626448746411114496"];
let good_index=1;
let bad_index=1;

document.querySelector("#generate_good").onclick = function(){

	document.getElementById('good_design_pic').src=good_designs[good_index];
	document.getElementById("good_design_critique").innerHTML=good_critiques[good_index];
	document.getElementById('good_link').href=good_links[good_index];
	

	if (good_index<2){
		good_index++;
	} else{ good_index=0;}
}



document.querySelector("#generate_bad").onclick = function(){

	document.getElementById('bad_design_pic').src=bad_designs[bad_index];
	document.getElementById("bad_design_critique").innerHTML=bad_critiques[bad_index];
	document.getElementById('bad_link').href=bad_links[bad_index];

	if (bad_index<2){
		bad_index++;
	} else{ bad_index=0;}
}

let redesign_pic=["redesign1.jpg","redesign2.jpg","redesign3.jpg","redesign4.jpg","redesign5.jpg","redesign6.jpg",
"redesign7.jpg","redesign8.jpg","redesign9.jpg"];
let redesign_critique=["We chose this as the final redesign for Hangover Cures because it functionally and visually organizes all the drinks well where you can analyze common ingredients among each drink. We chose to include a key in the bar chart so that each color represents an ingredient in the drink. This way we can see the amount that a single ingredient is in each different drink. I think my redesign is a more organized way and makes the ingredients a nominal category. The y-axis for the volume of the drink also adds quantitative data to the visualization. Overall, I think this makes the visualization easier to read and derive trends from. Before, it was just a list of drinks, but I think you will be able to gather more insight from the stacked barchart redesign. The tradeoff that I made for this design is that you cannot envision the picture of the drink in a cup but a bar is pretty similar in that shape.",
"This histogram is the best redesign for displaying data on holiday spending per person annually. It visually and functionally tracks the spending per year during the holidays by using different colors to differentiate between the years. In addition, the data is shown more effectively through the 2D bars because it creates an equal level to compare the data between each year. The bars are aligned to make the judgement easier to read and compare and there is enough white space between each of the bars to be able to differentiate between the bars. The x axis depicts ordinal data represented as years and the y axis represents quantitative data that measures average spending.",
"We decided to go with a line graph for the Global Vegan Cheese Market graph since it clearly demonstrates the linear relationship between year and the market value. Here we see that there is a positive relationship between the two and it gives a better estimate of the market value year by year."];
let index=1;

document.querySelector("#generate_design").onclick = function(){

	document.getElementById("design_pic").src=bad_designs[index]
	document.getElementById("redesign_explanation").innerHTML=redesign_critique[index];
	for (i=0;i<3;i++){
		console.log(index*3+1+i)
		document.getElementById('redesign_pic'+String(i)).src=redesign_pic[index*3+i];
	}


	if (index<2){
		index++;
	} else{ index=0;}
}