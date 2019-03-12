workflow "Install, Test, Build and Publish" {
  on = "push"
  resolves = [
    "Publish",
  ]
}

action "Install" {
  uses = "Borales/actions-yarn@master"
  args = "install"
}

action "Lint" {
  uses = "actions/npm@master"
  runs = "npm run lint"
  needs = ["Install"]
}

action "Test" {
  uses = "actions/npm@master"
  runs = "npm run test:ci"
  needs = ["Lint"]
  secrets = ["CODECOV_TOKEN"]
}

action "Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
  needs = ["Test"]
}

action "Build" {
  uses = "actions/npm@master"
  runs = "npm run build"
  needs = ["Master"]
}

action "Publish" {
  uses = "actions/npm@master"
  runs = "npm run semantic-release"
  needs = ["Build"]
  secrets = [
    "NPM_TOKEN",
    "GH_TOKEN",
  ]
  env = {
    CI = "true"
  }
}


workflow "Deploy Storybook" {
  on = "release"
  resolves = ["Deploy"]
}

action "Install Storybook" {
  uses = "Borales/actions-yarn@master"
  args = "install"
}

action "Build Storybook" {
  uses = "actions/npm@master"
  runs = "npm run build-storybook"
  needs = ["Install Storybook"]
}

action "Deploy" {
  uses = "maxheld83/ghpages@master"
  needs = ["Build Storybook"]
  secrets = ["GH_PAT"]
  env = {
    BUILD_DIR = "storybook-static/"
  }
}
