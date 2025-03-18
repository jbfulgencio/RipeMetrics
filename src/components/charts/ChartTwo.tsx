import * as d3 from "d3";
import { useEffect, useRef } from "react";
import ComponentCard from "../common/ComponentCard.tsx";

const ChartOne = () => {
    const ref = useRef();

    useEffect(() => {
        // set the dimensions and margins of the graph
        const margin = {top: 30, right: 30, bottom: 70, left: 60},
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const root = d3
            .select(ref.current)
            .append("svg")
            .attr("height", height + margin.top + margin.bottom)
            .attr("width", width + margin.left + margin.right)
            .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        root.append('defs')
            .append('style')
            .attr('type', 'text/css')
            .text("@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap);");
        const svg = root.append('g').attr('class', 'root');
        // Parse the Data
        d3.csv(
            "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/7_OneCatOneNum_header.csv"
        ).then(function (data) {
            // X axis
            const x = d3
                .scaleBand()
                .range([0, width])
                .domain(data.map((d) => d.Country))
                .padding(0.2);
            svg
                .append("g")
                .attr("transform", `translate(0, ${height})`)
                .attr("color", "white")
                .call(d3.axisBottom(x))
                .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                // .style('font-size', '24px')
                .style('font-family', '"Outfit", sans-serif')
                // .style('font-weight', '500')
                .style("text-anchor", "end");

            // Add Y axis
            const y = d3.scaleLinear().domain([0, 13000]).range([height, 0]);
            svg.append("g").call(d3.axisLeft(y)).style('font-family', '"Outfit", sans-serif').attr("color", "white")
            ;

            // Bars
            svg
                .selectAll("mybar")
                .data(data)
                .join("rect")
                .attr("x", (d) => x(d.Country))
                .attr("y", (d) => y(d.Value))
                .attr("width", x.bandwidth())
                .attr("height", (d) => height - y(d.Value))
                .attr("fill", "#465fff")
                .on("mouseover", function() {
                    d3.select(this).style("fill", "#696969");
                })
                .on("mouseout", function() {
                    d3.select(this).style("fill", "#465fff");
                });
        });
    }, []);

    return (
                    <ComponentCard title="Revenue Trends">
                        <svg width={460} height={400} id="barchart" ref={ref}/>
                    </ComponentCard>
            )
        };

        export default ChartOne;