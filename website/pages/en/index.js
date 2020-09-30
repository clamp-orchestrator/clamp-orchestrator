const React = require('react');

const Button = ({ className, link, children }) => {
    return (
        <button className={`button medium ${className}`}>{children}</button>
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
                    <div className="description thin">An opinionated approach to micro-services orchestration using workflows. Build microservices ground up or strangulate existing monoliths seamlessly</div>
                    <div className="actions">
                        <Button className="transparent-button">GET STARTED</Button>
                        <Button className="block-button">INSTALL</Button>
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
                <img src={iconUrl} alt="icon"/>
                <h3 className="medium">{title}</h3>
            </div>
            <div className="description thin">{description}</div>
        </div>
    )
}

const FeaturesList = ({siteConfig}) => {
    const iconUrl = `${siteConfig.baseUrl}/img/feature_point.svg`

    return (
        <div className="features-list-ctr">
            <Feature
                iconUrl={iconUrl}
                title="Blazingly fast and scalable"
                description={"Clamp handles large workloads with high throughput at low latency. It scales linearly to ensure that orchestration is never the bottleneck in your architecture. It equally favors low latency service calls as well as long running workflows"}
            />
            <Feature
                iconUrl={iconUrl}
                title="Technology agnostic"
                description={"Clamp, written in GoLang, is a stand alone component that can be deployed as a binary or as a container within your infrastructure. It is independent of technology stack of services and continues to provide the same low latency throughput"}
            />
            <Feature
                iconUrl={iconUrl}
                title="Multi-protocol support"
                description={"Clamp handles workflows that involve synchronous and asynchronous steps. It can work with HTTP, AMQP and Kafka. The GRPC and MQTT support is on the way. Suppport for multiple protocols allow you to pick the right architecture and tools that work for you"}
            />
            <Feature
                iconUrl={iconUrl}
                title="Transparent orchestration with no agents"
                description={"Clamp works transparently with diverse communication channels (HTTP, AMQP, Kafka). The services do not need consumer libraries or agents for orchestration. Clamp is an ideal tool to help build microservices ground up as well as strangulate existing monoliths to microservices"}
            />
        </div>
    )
}

const ClampSummary = ({siteConfig}) => {
    return (
        <div className="summary-ctr">
            <div className="illustration">
                <img src={`${siteConfig.baseUrl}img/temp_gif.png`} alt="summary_image"/>
            </div>
            <div className="content">
                <h2 className="title medium">
                   Clamp overview
                </h2>
                <div className="description">
                    A peek into Clamp framework, it's philosophy and the supporting toolchain
                </div>
            </div>
        </div>
    )
}

const Examples = () => {
    return (
        <div className="examples-ctr">
            <div className="text-content">
                <h2 className="title medium">Use cases for Clamp</h2>
                <div className="description thin">
                    Clamp is an opinionated approach to workflow orhcestration in microservices. There are many use cases where Clamp can help with right design and evolution of architecture. The most popular ones have been shown here. Refer to our documentation section to read about these in detail and understand how you can adopt clamp to evolve your architecture with right design
                </div>
            </div>
            <div className="code-examples">
                Greenfield microservices
            </div>
        </div>
    )
}

const Index = (props) => {
    const {config: siteConfig} = props;

    return (
        <div className="wrapper">
            <GettingStarted siteConfig={siteConfig}/>
            <FeaturesList siteConfig={siteConfig}/>
            <ClampSummary siteConfig={siteConfig}/>
            <Examples siteConfig={siteConfig}/>
        </div>
    )
}

module.exports = Index;
