/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const baseUrl = "/clamp-orchestrator/";

const siteConfig = {
  title: "Clamp", 
  tagline: "A workflow orchestrator for microservices",
  url: "https://clamp-orchestrator.github.io", 
  baseUrl: baseUrl, 
  
  projectName: "clamp-orchestrator",
  organizationName: "clamp-orchestrator",

  headerLinks: [
    { href: baseUrl, label: "Clamp" },
    { doc: "about-docs", label: "Documentation" },
    { href: "https://github.com/clamp-orchestrator", label: "Github" },
    { href: "https://gitter.im/ClampOrchestrator/community", label: "Help" },
  ],

  headerIcon: "img/logo.svg",

  colors: {
    primaryColor: "#FFFFFF",
    secondaryColor: "#FFFFFF",
  },

  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
  ],

  copyright: `Copyright © ${new Date().getFullYear()} Clamp`,

  highlight: {
    theme: "default",
  },

  scripts: ["https://buttons.github.io/buttons.js"],

  onPageNav: "separate",
  cleanUrl: true,
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",
  docsSideNavCollapsible: true,
};

module.exports = siteConfig;
