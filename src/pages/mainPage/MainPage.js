import {Container} from "../../components/Container"
import {containerVariants} from "../../App"
import {useState} from "react"
import TabsComponent from "../../components/Tabs"
import Souz from "../../components/Souz"
import History from "../../components/History"
import Organ from "../../components/Organ"
import OurTeam from "../../components/OurTeam"
import Projects from "../../components/Projects"

const VALUES = {
    souz: 'souz',
    history: 'history',
    organ: 'organ',
    projects: 'projects',
    ourTeam: 'ourTeam'

}
const GetCategories = ({ value }) => {
    switch(value) {
        case VALUES.souz: {
            return  <Souz />
        }
        case VALUES.history: {
            return  <History  />
        }
        case VALUES.organ: {
            return  <Organ />
        }
        case VALUES.projects: {
            return  <Projects />
        }
        case VALUES.ourTeam: {
            return  <OurTeam />
        }

        default: return <></>
    }
}
const Main = () => {
    const categoriesSelect = [
        {value: VALUES.souz, label: 'О союзе'},
        {value: VALUES.history, label: 'История организации'},
        {value: VALUES.organ, label: 'Органы управления и их деятельность'},
        {value: VALUES.projects, label: 'Реализуемые проекты'},
        {value: VALUES.ourTeam , label: 'Наша команда '}
    ]
    const [value, setValue] = useState(categoriesSelect?.[0].value)
    return (
        <Container variant={containerVariants.small}>
            <TabsComponent categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories value={value } />
        </Container>
    )
}
export default Main