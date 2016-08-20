export const ENV = {<% _.forEach(env, function(v, k) { %>
    <%= k %>: <%= _.isString(v) ? "\'"+v+"\'" : v %>,<% }) %>
};
