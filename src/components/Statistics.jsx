import styled from "styled-components";

const StatisticsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export function Statistics({tasks}) {
    const completedTasks = tasks.filter(task => task.isCompleted).length;
    const totalTasks = tasks.length;
    const completedPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);
    return <StatisticsDiv>
        <p>Total tasks: {totalTasks}</p>
        <p>Completed task percentage: {completedPercentage}%</p>
    </StatisticsDiv>
}