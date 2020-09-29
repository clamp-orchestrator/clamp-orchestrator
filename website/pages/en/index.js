const React = require('react');

const Button = (props) => {
    return (
        <button className="button medium">{props.children}</button>
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
                    <h1 className="title medium">Clamp</h1>
                    <div className="description thin">An opinionated approach to microservices orchestration, by Sahaj
                        Software.
                    </div>
                    <div className="actions">
                        <Button>GET STARTED</Button>
                        <Button>INSTALL</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Feature = ({title, description, iconUrl}) => {
    return (
        <div className="feature">
            <div className="title">
                <img src={iconUrl}/>
                <h3 className="medium">{title}</h3>
            </div>
            <div className="description thin">{description}</div>
        </div>
    )
}

const FeaturesList = ({ siteConfig }) => {
    const iconUrl = `${siteConfig.baseUrl}/img/feature_point.svg`

    return (
        <div className="features-list-ctr">
            <Feature
                iconUrl={iconUrl}
                title="Feature Point"
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"}
            />
            <Feature
                iconUrl={iconUrl}
                title="Feature Point"
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"}
            />
            <Feature
                iconUrl={iconUrl}
                title="Feature Point"
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"}
            />
            <Feature
                iconUrl={iconUrl}
                title="Feature Point"
                description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex"}
            />
        </div>
    )
}

const Index = (props) => {
    const {config: siteConfig} = props;

    return (
        <div className="wrapper">
            <GettingStarted siteConfig={siteConfig}/>
            <FeaturesList siteConfig={siteConfig}/>
        </div>
    )
}

module.exports = Index;
