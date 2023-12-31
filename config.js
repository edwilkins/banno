module.exports = {
  issuer: {
    'garden': 'https://digital.garden-fi.com/a/consumer/api/v0/oidc'
  },
  client: {
    'garden': {
      client_id: '3f85ce95-00e7-4f3e-abbe-132d95f96d4e', // These credentials are designed for *demonstration* purposes only.
      client_secret: 'ab85fae7-64df-43e8-bb02-474f2eaae613', // These credentials are designed for *demonstration* purposes only.
      grant_types: ['authorization_code'],
      response_types: ['code'],
      token_endpoint_auth_method: 'client_secret_post',
      redirect_uris: ['http://localhost:8080/auth/cb']
    }
  },
  consumerApi: {
    environment: 'https://digital.garden-fi.com',
    usersBase: '/a/consumer/api/v0/users/'
  }
}
