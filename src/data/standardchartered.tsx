import { ReactElement } from "react";

interface HeaderData {
    title?: ReactElement | string,
    description?: ReactElement | string,
    description1?: ReactElement | string,
    description2?: ReactElement | string,
}

const HeaderData: HeaderData = {
    description1: `Standard Chartered is a leading international bank championing sustainable growth, unique diversity, and inclusivity as a leading international bank.  My team and I were on the journey of transforming their customer experience for all digital products in CCIB (Corporate & Investment Banking) department.`,
    description2: `We gathered data-driven research, built scalable design systems, and collaborated seamlessly within teams to achieve one goal: Improve Standard Chartered's core banking experience for their customers.`,
};

const ProblemStatementData: HeaderData = {
    title: `Fragmented design operations greatly hindered scalability and cohesion.`,
    description: `The business and product owner aimed to expand and reposition their offerings to better serve corporate banking clients with speed and reliability, leveraging Standard Chartered's strong corporate rebrand. However, the design team operated in silos, lacking cohesion and consistency, highlighting the need for a unified, cost-effective design process.`,
};

const InsightsData: HeaderData = {
    title: `Speed is essential, but organic ecosystem is the key to the long-term sustainability.`,
    description: `Streamlining design efforts across teams, through agreed process would significantly boost output. Aligning designers, technologists, and business stakeholders to speak a common language would reduce friction and move everyone towards the same page.`,
};

const SolutionData1: HeaderData = {
    title: `One Team, One Vision`,
    description: `A centralized design team, backed by a unified design system, ensuring consistency and stability from design patterns through to handoff with the technology team.`,
};

const SolutionData2: HeaderData = {
    title: `Humanized & Systemized Process`,
    description: `Implemented DesignOps with a human-centered approach and sustainable processes, enhancing communication and collaboration across departments.`,
};

const SolutionData3: HeaderData = {
    title: `Design Culture for Excellency`,
    description: `Improved design culture and employee's experience by continuously upgrading the team's skills with the latest tools and trends to accelerate operational pace and efficiency.`,
};

const ImpactData: HeaderData = {
    title: `Products grow exponentially in consistent and shared understanding of design knowledge.`,
    description: `Reduced efforts to tackle UI/UX defects lead to more time investment to produce new ideas, fresh leads and customer-centric needs. My team and I have contributed in shaping the CCIB products from both mobile and desktop version, across multiple streams (accounts, cash, fx, reporting, E&I, post-trade, etc). We handed over the process & standard of output to let the Standard Chartered team fly on their own for future development. `,
};

const exports = {HeaderData, ProblemStatementData, InsightsData, SolutionData1, SolutionData2, SolutionData3, ImpactData};
export default exports;