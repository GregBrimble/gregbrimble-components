workflow "Install, Test, Build and Deploy" {
  on = "push"
  resolves = [
    "Test",
    "Build",
    "Deploy"
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
  uses = "actions/npm@master"
  runs = "npm run deploy"
  needs = ["Build"]
  secrets = ["GITHUB_TOKEN"]
}
