import { ReactElement } from 'react';

interface HomepageData {
    title?: ReactElement | string,
    description?: ReactElement | string,
}

interface ProjectDescriptions {
    scb?: string,
    uob?: string,
    dbs?: string,
    ocb?: string,
    imda?: string,
    circles?: string,
}
// This file contains the homepage data for the portfolio site.
// Modify the text within the HomepageData object to change the homepage content.

const HomepageData: HomepageData = {
    title: `Your go-to-wizard for digital transformation, impactful design and product innovation`,
    description: `With over 13 years of experience in digital products, my expertise and creative leadership spans various industries, including but not limited to retail banking, corporate banking, financial services, government projects, etc.`,
};

const ProjectDescriptions : ProjectDescriptions = {
    scb: `Standard Chartered Bank Corporate Banking Experience`,
    dbs: `DBS Credit Architecture Program`,
    uob: `UOB TMRW Retail Banking `,
    ocb: `OCB OMNI Product Rebrand`,
    imda: `Infocomm Media Development Authority (SG): Design Thinking`,
    circles: `Circles X: Product Strategy & Concepts`,
}

// If you want to add formatting to the title or description, you can use <></> to wrap the text.
// Example: title: <>Your <b>formatted</b> title</>

const SectionData1: HomepageData = {
    title: <>Transformation always starts with the shift of <b>mindset</b>.</>,
    description: `One of my personal joys is to see how my client's behaviour, thought process and approach change after learning the design thinking. As a self-taught design thinker, I run workshops/training to drive multiple businesses achieve more impactful outcomes.`,
};


const SectionData2: HomepageData = {
    title: <>Concept powered with <b>research</b> is a magic in the making.</>, 
    description: `I believe that understanding and analysis are the foundations of creative practice that lead to holistic end-to-end design solutions.`,
};

const exports = {HomepageData, ProjectDescriptions, SectionData1, SectionData2};
export default exports;
