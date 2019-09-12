const config = {
  baseURL: 'https://viacep.com.br/ws/',
  headers: {
    token: 'nóis é sguro heim, não mexe com nóis',
  },
  validateStatus: (status) => status >= 200 && status < 300,
};

export default { ...config };
