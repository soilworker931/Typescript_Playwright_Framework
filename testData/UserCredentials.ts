export type UserCredenials = {
  username: string;
  password: string;
};

export enum User {
  STANDARD_USER = 'standard_user',
  LOCKED_OUT_USER = 'locked_out_user',
  PROBLEM_USER = 'problem_user',
  PERFORMANCE_GLITCH_USER = 'performance_glitch_user',
  ERROR_USER = 'error_user',
  VISUAL_USER = 'visual_user',
}

export function getUserCredentials(username: User): UserCredenials {
  return { username, password: process.env.USER_PASSWORD };
}
