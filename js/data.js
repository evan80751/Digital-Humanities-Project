// All the census data for Iliff from 1900-2020
// Got this from US Census Bureau website
const populationData = {
    years: [1900, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020],
    population: [397, 238, 266, 322, 235, 204, 193, 218, 174, 213, 266, 246],
    percentChange: [null, null, 11.8, 21.1, -27.0, -13.2, -5.4, 13.0, -20.2, 22.4, 24.9, -7.5]
};

// Sugar beet acreage data - shows the boom and bust of the industry
const sugarBeetData = {
    years: [1910, 1929, 1985],
    acreage: [5352, 14623, 0], // zero in 1985 because factory closed
    labels: ['1910\n5,352 acres', '1929\n14,623 acres (Peak)', '1985\nFactory Closure']
};

// Business data over time
const businessData = {
    years: [1900, 1957, 1970, 2000],
    businesses: [15, 11, 7, 3]
};

// Timeline of major events that affected Iliff
// Organized by category: infrastructure, industry, disaster, demographics
const timelineEvents = [
    {
        date: '1881',
        title: 'Union Pacific Railroad Completed',
        description: 'LaSalle-Julesburg line provided crucial transportation for cattle and agricultural products.',
        impact: 'Established the transportation infrastructure that would enable Iliff\'s founding and growth. The railroad connection made the region economically viable for agricultural development.',
        category: 'infrastructure'
    },
    {
        date: '1887',
        title: 'Town Platted; Logan County Created',
        description: 'Iliff officially platted; Logan County carved from Weld County.',
        impact: 'Official founding of the town and establishment of local government structures. Named after John Wesley Iliff, the "Cattle King of Colorado."',
        category: 'demographics'
    },
    {
        date: '1900',
        title: 'Population Reaches 397',
        description: 'First census records show 397 residents in early boom period.',
        impact: 'Peak of early growth driven by railroad access and agricultural opportunities. The town was establishing itself as a viable agricultural community.',
        category: 'demographics'
    },
    {
        date: '1902-1907',
        title: 'Diverse Immigration Wave',
        description: 'German Russian immigrants (1902+), Japanese workers (1903-1907) arrive.',
        impact: 'Created the diverse labor force necessary for agricultural expansion. Immigrant communities, including the Kosuge-Shichirobei family, brought agricultural expertise and provided labor for sugar beet cultivation.',
        category: 'demographics'
    },
    {
        date: '1905',
        title: 'Sterling Sugar Company Factory Built',
        description: 'Beet-processing factory construction triggered "unprecedented growth."',
        impact: 'This single event transformed Iliff\'s economy. The sugar beet industry would sustain the town for the next 80 years, driving population growth, business development, and agricultural expansion throughout the region.',
        category: 'industry'
    },
    {
        date: '1906',
        title: 'Town Incorporated',
        description: 'Iliff officially incorporated on February 20, 1906.',
        impact: 'Formal municipal status allowed for local governance, taxation, and public services. Reflected the town\'s growth and economic stability during the sugar beet boom.',
        category: 'demographics'
    },
    {
        date: '1910',
        title: 'Sugar Beet Era Begins',
        description: 'Logan County sugar beet acreage reaches 5,352 acres.',
        impact: 'Beginning of systematic agricultural data collection. The industry was establishing itself as the dominant economic force in the region.',
        category: 'industry'
    },
    {
        date: '1927',
        title: 'St. Catherine\'s Catholic Church Built',
        description: 'Church construction indicates stable, growing community.',
        impact: 'Religious institutions signal community permanence and investment. The church served immigrant communities and demonstrated the town\'s confidence in its future.',
        category: 'demographics'
    },
    {
        date: '1929',
        title: 'Sugar Beet Acreage Peaks',
        description: 'Logan County acreage reaches 14,623 acres—peak expansion.',
        impact: 'Maximum agricultural productivity before the Great Depression. This peak represented the height of the sugar beet industry\'s regional dominance, just before economic catastrophe.',
        category: 'industry'
    },
    {
        date: '1930s-1940s',
        title: 'Great Depression & World War II',
        description: 'Economic depression and war cause prolonged population decline.',
        impact: 'Combined effects of economic collapse and wartime disruption. Population fell from 322 (1940) to 235 (1950), a 27% decline. Young men went to war; economic opportunities dried up.',
        category: 'demographics'
    },
    {
        date: 'January 2, 1949',
        title: 'Major Blizzard Strikes',
        description: 'Devastating blizzard hits northeastern Colorado.',
        impact: 'Led to Operation Haylift—U.S. Air Force relief effort to save stranded cattle. Demonstrated the vulnerability of agricultural communities to natural disasters and the economic fragility of rural life.',
        category: 'disaster'
    },
    {
        date: 'August 1958',
        title: 'Interstate 76 Construction Begins',
        description: 'Highway initially designated I-80S (renumbered to I-76 in 1976).',
        impact: 'This infrastructure decision bypassed Iliff entirely. Residents could now drive directly to Sterling, 12 miles away. Businesses in Iliff lost their captive customer base. Business count peaked at 11 in 1957, then steadily declined.',
        category: 'infrastructure'
    },
    {
        date: 'June 14-20, 1965',
        title: 'South Platte River Flood',
        description: 'Major flooding affects Sterling-Julesburg region.',
        impact: 'Natural disaster compounded existing economic decline. Damaged infrastructure and agricultural land, adding another blow to an already struggling community.',
        category: 'disaster'
    },
    {
        date: '1985',
        title: 'Sugar Factory Closure',
        description: 'Great Western Sugar Company bankruptcy; Sterling factory closes.',
        impact: 'Catastrophic end of 80-year economic foundation. Without the sugar beet processing infrastructure, Iliff lost its primary reason for economic existence. The agricultural system that had sustained the town since 1905 collapsed entirely.',
        category: 'industry'
    },
    {
        date: '2010',
        title: 'Modern Population Peak',
        description: 'Population reaches 266, highest since 1930.',
        impact: 'Brief resurgence suggests some resilience, possibly due to affordable housing or regional economic factors. However, population declined again to 246 by 2020, indicating the recovery was temporary.',
        category: 'demographics'
    },
    {
        date: '2020',
        title: 'Current Status',
        description: 'Census records 246 residents, down 7.5% from 2010.',
        impact: 'Ongoing slow decline continues. Without a replacement economic base, Iliff remains vulnerable to the same forces that devastated hundreds of similar Great Plains towns.',
        category: 'demographics'
    }
];
