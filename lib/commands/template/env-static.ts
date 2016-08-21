import { AppEnv } from './app-env.interface';

export const ENV: AppEnv = {<% _.forEach(env, function(v, k) { %>
    <%= k %>: <%= _.isString(v) ? "\'"+v+"\'" : v %>,<% }) %>
};
