import aboutPageStyles from "@/pages/about/AboutPage.module.css";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {useState} from "react";

const AccordionItem = (props) => {

    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        {name: 'All', value: '1'},
        {name: 'CS related', value: '2'},
    ]

    return (
        <div className={aboutPageStyles.accordion}>
            <div className={aboutPageStyles.title}>
                <h5>{props.header}</h5>
                <button id={props.id} className={aboutPageStyles.plusButton}
                        onClick={props.collapse ? props.onPlusClickHandler : props.onMinusClickHandler}>
                    {props.collapse ? '+' : '-'}
                </button>
            </div>
            <hr className={aboutPageStyles.hrLine}/>
            <div id={`content-${props.id}`}
                 className={`${aboutPageStyles.hide} ${aboutPageStyles.content}`}>
                {
                    !props.collapse && props.setIsCsRelated &&
                    <ButtonGroup className={aboutPageStyles.toggleButton}>
                        {radios.map((radio, idx) => (
                            <ToggleButton
                                key={idx}
                                id={`radio-${idx}`}
                                type="radio"
                                variant={'outline-secondary'}
                                name="radio"
                                value={radio.value}
                                checked={radioValue === radio.value}
                                onChange={(e) => {
                                    setRadioValue(e.currentTarget.value);
                                    props.setIsCsRelated(prev => {
                                        prev[props.id] = !prev[props.id];
                                        return {...prev};
                                    });
                                }}
                            >
                                {radio.name}
                            </ToggleButton>
                        ))}
                    </ButtonGroup>
                }
                {!props.collapse && props.children}
            </div>
        </div>
    )
}

export default AccordionItem;