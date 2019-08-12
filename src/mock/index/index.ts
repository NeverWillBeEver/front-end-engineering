import Mock from 'mockjs';

const mockResult = { code: 0,  message: 'success', data: {}};

Mock.mock('url', 'method', {...mockResult});


