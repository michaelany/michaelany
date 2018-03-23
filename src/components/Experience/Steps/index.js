import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import Stepper, {Step, StepLabel, StepContent} from 'material-ui/Stepper';
import Icon from 'material-ui/Icon';

import './style.css';
import MuiButton from '../../_common/MuiButton';

const steps = [
    {id: 1, title: 'Октябрь 2008 - май 2010', content: <span>Работал <strong>инженером технической поддержки</strong> в компании "М.Видео".</span>},
    {id: 2, title: 'май 2010 - июнь 2014', content: 'Вел деятельность не связанную с разработкой и программированием.'},
    {id: 3, title: 'июнь 2014 - июль 2016', content: 'Создавал собственные и курсовые проекты в процессе обучения.'},
    {id: 4, title: 'июль 2016', content: <span>Выполнил тестовое задание для интервью (написал таймер на JavaScript + ООП + CSS). Прошел интервью. Выполнил заключительное задание (сверстал адаптивную страницу по макету, используя CSS + SASS + Handlebars). Был приглашен на работу <strong>верстальщиком</strong> в компанию "Everpoint".</span>},
    {id: 5, title: 'июль 2016 - ноябрь 2016', content: <span>Работал <strong>верстальщиком</strong> в компании "Everpoint".</span>},
    {id: 6, title: 'ноябрь 2016', content: <span>В результате хорошей работы получил повышение до <strong>frontend-разработчика</strong> в компании "Everpoint".</span>},
    {id: 7, title: 'ноябрь 2016 - апрель 2017', content: <span>Работал <strong>frontend-разработчиком</strong> в компании "Everpoint". В свободное время делал проект (переписывал сайт на React) для компании "7 glyphs".</span>},
    {id: 8, title: 'апрель 2017', content: <span>В результате успешной реализации проекта был приглашен в компанию "7 glyphs" на должность <strong>frontend-разработчика</strong> на более выгодных условиях. Принял взвешенное решение и перешел из "Everpoint" в "7 glyphs".</span>},
    {id: 9, title: 'апрель 2017 - настоящее время', content: <span>Работаю <strong>frontend-разработчиком</strong> в компании "7 glyphs".</span>},
];

export default class  extends Component {
    state = {
        activeStep: 0
    };

    handleStepNext = () => this.setState((prevState) => ({
        activeStep: prevState.activeStep + 1
    }));

    handleStepBack = () => this.setState((prevState) => ({
        activeStep: prevState.activeStep - 1
    }));

    handleStepReset = () => this.setState({activeStep: 0});

    renderSteps = () => steps.map(({id, title, content}) => {
        const {activeStep} = this.state;
        const nextButtonIcon = activeStep === steps.length - 1 ? 'check' : 'arrow_forward';
        return (
            <Step key={id}>
                <StepLabel>{title}</StepLabel>
                <StepContent>
                    <div className="steps__step-content">
                        <p>{content}</p>
                        <MuiButton variant="fab" disabled={activeStep === 0} onClick={this.handleStepBack}>
                            <Icon>arrow_back</Icon>
                        </MuiButton>
                        <MuiButton variant="fab"  kind="violet" onClick={this.handleStepNext}>
                            <Icon>{nextButtonIcon}</Icon>
                        </MuiButton>
                    </div>
                </StepContent>
            </Step>
        );
    });

    render() {
        const {activeStep} = this.state;
        return (
            <section className="steps section section_bg-color_violet">
                <Paper elevation={1}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {this.renderSteps()}
                    </Stepper>
                    {activeStep === steps.length && (
                        <div className="steps__refresh">
                            <p>Таков мой <strong>опыт работы</strong> на данный момент в ключевых этапах.</p>
                            <MuiButton variant="fab" kind="violet" onClick={this.handleStepReset}>
                                <Icon>refresh</Icon>
                            </MuiButton>
                        </div>
                    )}
                </Paper>
            </section>
        );
    }
}
