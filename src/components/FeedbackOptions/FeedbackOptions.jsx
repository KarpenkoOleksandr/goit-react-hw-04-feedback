import { ButtonList, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonList>
            {options.map(option => (<Button key={option} onClick={() => onLeaveFeedback(option)}>{option}</Button>))}
        </ButtonList>
    )
}