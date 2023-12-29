/**
 * @todo List crew members using the endpoint you created
 * @description Use tanstack/react-query or swr to fetch data from the endpoint. Prepare pagination.
 */

import { CrewInformationContainer } from '@/components/crewInformation/CrewInformationContainer';
import { checkPageQuery } from '@/lib/utils';
import { NextPageContext } from 'next';

export const getServerSideProps = async ({
    query: { page },
}: NextPageContext) => {
    const queryValue = checkPageQuery(page);

    return {
        notFound: !queryValue,
        props: {
            page: queryValue,
        },
    };
};

const Task = () => {
    return <CrewInformationContainer />;
};

export default Task;
