export interface AppState {
  userName: string;
  gitHubUrl: string;
  onGitHubUrlChange: Function;
  onUserNameChange: Function;
}

export interface GenericObject {
  [key: string]: string;
}
