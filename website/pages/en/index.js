const React = require("react");
const STATIC_FILES_PATH = process.cwd();
const getExamplesScript = require(`${STATIC_FILES_PATH}/static/js/customExamplesScript.js`);
const getChangeLogoLinkScript = require(`${STATIC_FILES_PATH}/static/js/changeLogoLink.js`);
const ButtonLink = ({ className, children, link }) => {
  return (
    <a href={link}>
      <button className={`button medium ${className}`}>{children}</button>
    </a>
  );
};

const GettingStarted = (props) => {
  const { baseUrl } = props.siteConfig;
  return (
    <div className="getting-started-ctr">
      <div className="banner">
        <img
          className="hide-medium-screen"
          src={`${baseUrl}img/banner_desktop.png`}
          alt=""
        />
        <img
          className="show-medium-screen"
          src={`${baseUrl}img/banner_mobile.png`}
          alt=""
        />
      </div>
      <div className="content-ctr">
        <div className="content">
          <h1 className="title medium">Clamp</h1>
          <div className="description thin">
            An opinionated approach to micro-services orchestration using
            workflows. Build microservices ground up or strangulate existing
            monoliths seamlessly
          </div>
          <div className="actions">
            <ButtonLink className="transparent-button" link={`${baseUrl}docs/quickstart`}>GET STARTED</ButtonLink>
            <ButtonLink className="block-button" link={`${baseUrl}docs/installation`}>INSTALL</ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ title, description, iconUrl }) => {
  return (
    <div className="feature">
      <div className="title">
        <img src={iconUrl} alt="icon" />
        <h3 className="medium">{title}</h3>
      </div>
      <div className="description thin">{description}</div>
    </div>
  );
};

const FeaturesList = ({ siteConfig }) => {
  const blazinglyFastScalableIconPath = `${siteConfig.baseUrl}/img/feature_1.svg`;
  const technologyAgnosticIconPath = `${siteConfig.baseUrl}/img/feature_2.svg`;
  const multiProtocolIconPath = `${siteConfig.baseUrl}/img/feature_3.svg`;
  const transparentOrchestrationIconPath = `${siteConfig.baseUrl}/img/feature_4.svg`;

  return (
    <div className="features-list-ctr">
      <Feature
        iconUrl={blazinglyFastScalableIconPath}
        title="Blazingly fast and scalable"
        description={
          "Clamp handles large workloads with high throughput at low latency. It scales linearly to ensure that orchestration is never the bottleneck in your architecture. It equally favors low latency service calls as well as long running workflows"
        }
      />
      <Feature
        iconUrl={technologyAgnosticIconPath}
        title="Technology agnostic"
        description={
          "Clamp, written in GoLang, is a stand alone component that can be deployed as a binary or as a container within your infrastructure. It is independent of technology stack of services and continues to provide the same low latency throughput"
        }
      />
      <Feature
        iconUrl={multiProtocolIconPath}
        title="Multi-protocol support"
        description={
          "Clamp handles workflows that involve synchronous and asynchronous steps. It can work with HTTP, AMQP and Kafka. The GRPC and MQTT support is on the way. Suppport for multiple protocols allow you to pick the right architecture and tools that work for you"
        }
      />
      <Feature
        iconUrl={transparentOrchestrationIconPath}
        title="Transparent orchestration with no agents"
        description={
          "Clamp works transparently with diverse communication channels (HTTP, AMQP, Kafka). The services do not need consumer libraries or agents for orchestration. Clamp is an ideal tool to help build microservices ground up as well as strangulate existing monoliths to microservices"
        }
      />
    </div>
  );
};

const ClampSummary = ({ siteConfig }) => {
  return (
    <div className="summary-ctr">
      <div className="illustration">
        <img
          src={`${siteConfig.baseUrl}img/temp_gif.png`}
          alt="summary_image"
        />
      </div>
      <div className="content">
        <h2 className="title medium">Clamp overview</h2>
        <div className="description">
          A peek into Clamp framework, it's philosophy and the supporting
          toolchain
        </div>
      </div>
    </div>
  );
};

const ExampleList = ({ imgPath }) => {
  const exampleList = [
    {
      headerLabel: "Greenfield microservices",
      imagePath: `${imgPath}/microservices.gif`,
    },
    {
      headerLabel: "Monolith strangulation",
      imagePath: `${imgPath}/monolith-to-microservices.gif`,
    },
    {
      headerLabel: "Data ingestion and processing",
      imagePath: `${imgPath}/data-pipeline.gif`,
    },
  ];

  const script = getExamplesScript(exampleList);
  return (
    <div className="example-list-ctr">
      {exampleList.map((example, index) => {
        return (
          <div id={`example-${index}`} className="example-ctr" key={index}>
            <h3 className="title medium">{example.headerLabel}</h3>
            <div className="image">
              <img src={example.imagePath} alt="" />
            </div>
          </div>
        );
      })}
      <button id="previous-example" className="left arrow">
        <div />
      </button>
      <button id="next-example" className="right arrow">
        <div />
      </button>
      <script dangerouslySetInnerHTML={{ __html: script }} />
    </div>
  );
};

const Examples = ({ siteConfig }) => {
  return (
    <div className="examples-ctr">
      <div className="text-content">
        <h2 className="title medium">Use cases for Clamp</h2>
        <div className="description thin">
          Clamp is an opinionated approach to workflow orhcestration in
          microservices. There are many use cases where Clamp can help with
          right design and evolution of architecture. The most popular ones have
          been shown here. Refer to our documentation section to read about
          these in detail and understand how you can adopt clamp to evolve your
          architecture with right design
        </div>
      </div>
      <ExampleList imgPath={`${siteConfig.baseUrl}img`} />
    </div>
  );
};

const Index = (props) => {
  const { config: siteConfig } = props;
  const globalScript = getChangeLogoLinkScript();

  return (
    <div className="wrapper">
      <GettingStarted siteConfig={siteConfig} />
      <FeaturesList siteConfig={siteConfig} />
      <ClampSummary siteConfig={siteConfig} />
      <Examples siteConfig={siteConfig} />
      <script dangerouslySetInnerHTML={{ __html: globalScript }} />
    </div>
  );
};

module.exports = Index;
