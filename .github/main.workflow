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

action "Deploy" {
  uses = "maxheld83/ghpages@master"
  needs = ["Build"]
  secrets = ["GH_PAT"]
  env = {
    BUILD_DIR = "storybook-static/"
  }
}
