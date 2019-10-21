export interface AppState {
  readonly user: User;
  readonly gitHubUrl: string;
  readonly onGitHubUrlChange: Function;
  readonly onUserChange: Function;
}

export interface User {
  readonly password: string;
  readonly address: string;
  readonly country: string;
  readonly creditCard: Array<number>;
  readonly name: string;
  readonly email: string;
}

export interface GenericObject {
  [key: string]: string;
}

export enum LocalStorageKeys {
  USER_TOKEN = "user-token",
  EXPIRY_DATE = "expires_at"
}

export interface CommentRecord {
  user_id: number;
  content: string;
  date_created: string;
  date_updated: string;
}
