workflow "Install, Test, Build and Deploy" {
  on = "push"
  resolves = [
    "Deploy",
  ]
}

action "Install" {
  uses = "actions/npm@master"
  args = "install"
}

action "Test" {
  uses = "actions/npm@master"
  runs = "npm run test:ci"
  needs = ["Install"]
  secrets = ["CODECOV_TOKEN"]
}

action "Master" {
  uses = "actions/bin/filter@master"
  args = "branch master"
  needs = ["Test"]
}

action "Build" {
  uses = "actions/npm@master"
  runs = "npm run build-storybook"
  needs = ["Master"]
}

action "Publish" {
  uses = "actions/npm@master"
  runs = "npm run semantic-release"
  needs = ["Build"]
  secrets = ["GITHUB_TOKEN", "NPM_TOKEN"]
  env = {
    CI = "true"
  }
}
action "Deploy" {
  uses = "maxheld83/ghpages@master"
  needs = ["Publish"]
  secrets = ["GH_PAT"]
  env = {
    BUILD_DIR = "storybook-static/"
  }
}
