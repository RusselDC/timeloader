import NavBar from "../../components/NavBar"
import NavigationButtons from "../../components/NavBar/navigations"
import { ActionButtonsConfig, NavigationItems } from "./helper"
import HeroSection from "./components/hero"
import Features from "./components/features"
import CallToAction from "./components/call-to-action"
import Footer from "../../components/Footer"
import PageContainer from "../../components/PageContainer"
import ActionButtons from "../../components/ActionButtons"
import { useNavigate } from "react-router-dom"


const WelcomePage = () => {
    const navigate = useNavigate()
    return <PageContainer>
        <NavBar navigation={<NavigationButtons buttons={NavigationItems()}/>} actionButtons={<ActionButtons buttons={ActionButtonsConfig(navigate)}/>} />
        <HeroSection/>
        <Features/>
        <CallToAction/>
        <Footer/>
    </PageContainer>
}


export default WelcomePage