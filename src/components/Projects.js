import React, { useState } from 'react';
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material';
import Button from '@mui/material/Button';
import ExpandLessSharpIcon from '@mui/icons-material/ExpandLessSharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Projects() {
    const [showFullText1, setShowFullText1] = useState(false)
    const [showFullText2, setShowFullText2] = useState(false)
    const toggleText1 = () => {
        setShowFullText1(!showFullText1)
    };
    const toggleText2 = () => {
        setShowFullText2(!showFullText2)
    };

    return (
        <div>
            <h1 style={{ fontSize:'27px', marginTop: '20px', marginBottom: '20px' }}>Реализуемые проекты</h1>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <div style={{ flex: '0 0 auto', marginRight: '20px' }}>
                    <img src="https://mucciniufficio.com/wp-content/uploads/2019/05/riunione12-1.jpg" alt="image" style={{maxWidth: '250px', maxHeight: '250px', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '1 1 auto' }}>
                    {showFullText1 ? (
                        <>
                            <h2 style={{ fontSize:'20px' }}>Проект «Учет интересов местных сообществ Жогорку Кенешем при обсуждении законопроектов»</h2>
                            <p>
                                Цель проекта, усиление подотчетности жк кр перед местными сообществами и улучшеные контрольной
                                функции парламентов через внедрение нового механизма оценки воздействия законов на развитие местных сообществ состояние парламентской демократии на уровне местных кенешей.
                                В результате в 2018 году в целях дальнейшего совершенствования местного самоуправления повышения эффективности деятельности депутатов айылных кенешей и усиления роли местных
                                сообществ в процессах принятия решения в ходе обсуждения с представителями органов местного самоуправления вопросов соблюдения депутатами местных кенешей  общепризнанных норм
                                этики разработан Типовой Кодекс этики депутатов местных кенешей Кыргызской Республики и рекомендован местным кенешем для его принятия.
                                В 2019-2020 годы оказано содействие 30 местным кенешам являющимися пилотным проектом «Успешный аймак» в принятии собственных Кодексов депутатов.
                                В результате в 2018 году в целях дальнейшего совершенствования местного самоуправления повышения эффективности деятельности депутатов айылных кенешей и усиления роли местных
                                сообществ в процессах принятия решения в ходе обсуждения с представителями органов местного самоуправления вопросов соблюдения депутатами местных кенешей  общепризнанных норм
                                этики разработан Типовой Кодекс этики депутатов местных кенешей Кыргызской Республики и рекомендован местным кенешем для его принятия.
                                В 2019-2020 годы оказано содействие 30 местным кенешам являющимися пилотным проектом «Успешный аймак» в принятии собственных Кодексов депутатов.
                            </p>
                            <Button onClick={toggleText1} variant="outlined">Скрыть текст<ExpandLessSharpIcon/></Button>
                        </>
                    ) : (
                        <>
                            <h2 style={{ fontSize:'20px' }}>Проект «Учет интересов местных сообществ Жогорку Кенешем при обсуждении законопроектов»</h2>
                            <p>
                                Цель проекта, усиление подотчетности жк кр перед местными сообществами и улучшеные контрольной
                                фцункции парламентов через внедрение нового механизма оценки воздействия законов на развитие местных сообществ состояние парламентской демократии на уровне местных кенешей.
                            </p>
                            <Button onClick={toggleText1} variant="outlined">Показать текст полностью<ExpandMoreIcon/></Button>
                        </>
                    )}
                </div>
            </div>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
                <div style={{ flex: '0 0 auto', marginRight: '20px' }}>
                    <img src="https://mucciniufficio.com/wp-content/uploads/2019/05/riunione12-1.jpg" alt="image" style={{maxWidth: '250px', maxHeight: '250px', objectFit: 'cover' }} />
                </div>
                <div style={{ flex: '1 1 auto' }}>
                    {showFullText2 ? (
                        <>
                            <h2 style={{ fontSize:'20px' }}>Проект «Учет интересов местных сообществ Жогорку Кенешем при обсуждении законопроектов»</h2>
                            <p>
                                Цель проекта, усиление подотчетности жк кр перед местными сообществами и улучшеные контрольной
                                функции парламентов через внедрение нового механизма оценки воздействия законов на развитие местных сообществ состояние парламентской демократии на уровне местных кенешей.
                                В результате в 2018 году в целях дальнейшего совершенствования местного самоуправления повышения эффективности деятельности депутатов айылных кенешей и усиления роли местных
                                сообществ в процессах принятия решения в ходе обсуждения с представителями органов местного самоуправления вопросов соблюдения депутатами местных кенешей  общепризнанных норм
                                этики разработан Типовой Кодекс этики депутатов местных кенешей Кыргызской Республики и рекомендован местным кенешем для его принятия.
                                В 2019-2020 годы оказано содействие 30 местным кенешам являющимися пилотным проектом «Успешный аймак» в принятии собственных Кодексов депутатов.
                                В результате в 2018 году в целях дальнейшего совершенствования местного самоуправления повышения эффективности деятельности депутатов айылных кенешей и усиления роли местных
                                сообществ в процессах принятия решения в ходе обсуждения с представителями органов местного самоуправления вопросов соблюдения депутатами местных кенешей  общепризнанных норм
                                этики разработан Типовой Кодекс этики депутатов местных кенешей Кыргызской Республики и рекомендован местным кенешем для его принятия.
                                В 2019-2020 годы оказано содействие 30 местным кенешам являющимися пилотным проектом «Успешный аймак» в принятии собственных Кодексов депутатов.
                            </p>
                            <Button onClick={toggleText2} variant="outlined" >Скрыть текст<ExpandLessSharpIcon/></Button>
                        </>
                    ) : (
                        <>
                            <h2 style={{ fontSize:'20px' }}>Проект «Учет интересов местных сообществ Жогорку Кенешем при обсуждении законопроектов»</h2>
                            <p>
                                Цель проекта, усиление подотчетности жк кр перед местными сообществами и улучшеные контрольной
                                фцункции парламентов через внедрение нового механизма оценки воздействия законов на развитие местных сообществ состояние парламентской демократии на уровне местных кенешей.
                            </p>
                            <Button onClick={toggleText2} variant="outlined">Показать текст полностью<ExpandMoreIcon/></Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Projects;