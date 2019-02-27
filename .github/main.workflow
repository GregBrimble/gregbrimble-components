workflow "Install and Test" {
  on = "push"
  resolves = [
    "Test",
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
