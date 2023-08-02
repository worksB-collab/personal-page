import aboutPageStyles from "@/pages/about/AboutPage.module.css";

const AccordionItem = (props) => {
    return (
        <div className={aboutPageStyles.accordion}>
            <div className={aboutPageStyles.title}>
                <h4>{props.header}</h4>
                <button id={props.id} className={aboutPageStyles.plusButton}
                        onClick={props.collapse ? props.onMinusClickHandler : props.onPlusClickHandler}>
                    {props.collapse ? '-' : '+'}
                </button>
            </div>
            <hr className={aboutPageStyles.hrLine}/>
            <div id={`content-${props.id}`}
                 className={`${aboutPageStyles.hide} ${aboutPageStyles.content}`}>
                {props.children}
            </div>
        </div>
    )
}

export default AccordionItem;