
import React from 'react'
import ReactDOM from 'react-dom'
import FoodImage from './images/food.jpg'
import MountainImage from './images/mountain.jpg'

var currentDate = new Date()

const rootElement = document.querySelector('.root')

const Header = (props) => (
    <header /*style={headerStyle}*/>
        <div className='header-wrapper'>
            <h1>{props.welcome}</h1>
            <h2>{props.title}</h2>
            <h3>{props.subtitle}</h3>
            <p>{props.author}</p>
            <small>{props.status}</small>
        </div>

    </header>
)

// const FoodCard = () => (
//     <div className='food-card'>
//         <img src={FoodImage} alt='food image'></img>
//         <h2>Good Food</h2>
//     </div>
// )
// class  component
class FoodCard extends React.Component {
    // 构造
    constructor(props) {
        super(props)
    }
    // 方法
    tellMeWhatThisOld(name) {
        this.setState({ name: 'This is ' + name })
    }
    tellMeWhatThis(env, name) {
        this.setState({ name: 'This is ' + name })
    }
    // 状态
    state = {
        name: 'mountain',
        showImg: this.props.secondImage
    }

    changeImage = () => {
        console.log("name:" + this.state.name)
        this.setState({ name: this.state.name === 'food' ? 'mountain' : 'food' })
        this.setState({ showImg: this.state.name === 'food' ? this.props.secondImage : this.props.firstImage })
    }

    render() {
        // const { n, i } = this.state
        // <img src={this.props.firstImage} onClick={this.tellMeWhatThisOld.bind(this, 'food')}></img>
        return (
            <div className='food-card'>
                <button type='button' onClick={this.changeImage}>ChangeImage</button>
                <h1>{this.state.name}</h1>

                {this.state.name === 'food' && (
                    <img src={this.props.firstImage} onClick={this.tellMeWhatThisOld.bind(this, 'food')}></img>
                )}
                <img src={this.state.showImg} onClick={(env) => { this.tellMeWhatThis(env, this.state.name) }}></img>
            </div>
        )
    }
}

const TechList = () => {
    const techs = ['HTML', 'CSS', 'JavaScript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
}

const Skill = (props) => {
    const skillList = props.skills.map((tech) => <li>{tech}</li>)
    return <ul>{skillList}</ul>
}

const Language = ({ lang: [tech, level] }) => {
    return <li>{tech} {level}</li>
}

const Languages = ({ langs }) => {
    const langList = langs.map((tech) => <Language lang={tech} />)
    return <ul>{langList}</ul>
}

const Main = (props) => {
    const skills = ['HTML', 'CSS', "JavaScript"]
    const languages = [
        ['Cpp', 10],
        ['Java', 3],
        ['Python', 6]
    ]
    return (
        <main>
            <div className='main-wrapper'>
                <p>Prerequisite to get started react.js</p>
                <Skill skills={skills} />
                <Languages langs={languages} />
                <FoodCard firstImage={FoodImage} secondImage={MountainImage} />
            </div>

        </main>
    )
}

const Footer = () => (
    <footer>
        <div className='footer-wrapper'>
            <p>Copyright {currentDate.toLocaleTimeString()}</p>
        </div>
    </footer>
)

const App = () => (
    <div className='app'>
        <Header welcome='Welcome This is 30 days of react' status={true}
            title='Getting started react' subtitle='javascript library' author='Cooper Gin' />
        <Main />
        <Footer />
    </div>
)

ReactDOM.render(<App />, rootElement)