import { Container, Item, Value } from "./Statistics.styled";
import { Notification } from "components/Notification/Notification";

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {
    return total ? (
        <Container>
            <Item>Good:<Value>{good}</Value></Item>
            <Item>Neutral:<Value>{neutral}</Value></Item>
            <Item>Bad:<Value>{bad}</Value></Item>
            <Item>Total:<Value>{total}</Value></Item>
            <Item>Positive percentage:<Value>{positivePercentage}%</Value></Item>
        </Container>
    ) : (<Notification message="There is no feedback" />)
}