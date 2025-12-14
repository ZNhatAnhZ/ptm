import {BackgroundArea, AppArea} from "../components/index.js";
import {ColorSchemeProvider} from "../contexts/index.js";
import StudentRegistrationForm from "../components/StudentRegistrationForm.jsx";
import {useState} from "react";
import styled from "styled-components";
import CourseFeeForm from "../components/CourseFeeForm.jsx";
import CourseScheduleForm from "../components/CourseScheduleForm.jsx";

const Steps = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1em;
`

export default function CourseMgntApp() {
    const [step, setStep] = useState(1);

    const changeStep = (value) => {
        if (step !== value) {
            setStep(value);
        }
    }

    return (
        <ColorSchemeProvider>
            <BackgroundArea>
                <AppArea>
                    <Steps>
                        <button onClick={() => {
                            changeStep(1);
                        }}>Bài 1
                        </button>
                        <button onClick={() => {
                            changeStep(2);
                        }}>Bài 2
                        </button>
                        <button onClick={() => {
                            changeStep(3);
                        }}>Bài 3
                        </button>
                    </Steps>
                    {step === 1 ? <StudentRegistrationForm></StudentRegistrationForm> : null}
                    {step === 2 ? <CourseFeeForm></CourseFeeForm> : null}
                    {step === 3 ? <CourseScheduleForm></CourseScheduleForm> : null}

                </AppArea>
            </BackgroundArea>
        </ColorSchemeProvider>
    )
}
