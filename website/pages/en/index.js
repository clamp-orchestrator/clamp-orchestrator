const React = require('react');

const Button = (props) => {
    return (
        <button className="button">{props.children}</button>
    )
}

const GettingStarted = (props) => {
    const {baseUrl} = props.siteConfig;
    return (
        <div className="getting-started-ctr">
            <div className="banner">
                <img src={`${baseUrl}img/banner.png`} alt=""/>
            </div>
            <div className="content-ctr">
                <div className="content">
                    <h1 className="title">Clamp</h1>
                    <div className="description">An opinionated approach to microservices orchestration, by Sahaj Software.</div>
                    <div className="actions">
                        <Button>GET STARTED</Button>
                        <Button>INSTALL</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Features = () => {
    return (
        <div className="features-ctr">
            Features here
        </div>
    )
}

const Index = (props) => {
    const {config: siteConfig} = props;

    return (
        <div className="wrapper">
            <GettingStarted siteConfig={siteConfig}/>
            <Features />
        </div>
    )
}

module.exports = Index;
