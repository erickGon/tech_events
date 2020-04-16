const events = [
  {
     "id":0,
     "isFree":true,
     "name":"CSS Grids: fact or fiction",
     "city":9,
     "startDate":"2019-07-14T02:00:00+00:00",
     "endDate":"2019-07-14T03:00:00+00:00"
  },
  {
     "id":1,
     "isFree":true,
     "name":"Git Deep: A look at some of Git's powerful, underused features",
     "city":1,
     "startDate":"2019-06-09T21:30:00+00:00",
     "endDate":"2019-06-09T23:50:00+00:00"
  },
  {
     "id":2,
     "isFree":false,
     "name":"Refactoring to clean code",
     "city":7,
     "startDate":"2019-08-17T09:00:00+00:00",
     "endDate":"2019-08-17T10:00:00+00:00"
  },
  {
     "id":3,
     "isFree":true,
     "name":"CSS VS SASS",
     "city":8,
     "startDate":"2019-07-03T17:00:00+00:00",
     "endDate":"2019-07-03T18:30:00+00:00"
  },
  {
     "id":4,
     "isFree":true,
     "name":"CSS VS SASS",
     "city":3,
     "startDate":"2019-07-07T13:00:00+00:00",
     "endDate":"2019-07-07T15:00:00+00:00"
  },
  {
     "id":5,
     "isFree":false,
     "name":"Leadership in Tech",
     "city":5,
     "startDate":"2019-08-26T14:00:00+00:00",
     "endDate":"2019-08-26T15:30:00+00:00"
  },
  {
     "id":6,
     "isFree":false,
     "name":"CSS Grids: fact or fiction",
     "city":3,
     "startDate":"2019-07-21T20:00:00+00:00",
     "endDate":"2019-07-21T22:00:00+00:00"
  },
  {
     "id":7,
     "isFree":true,
     "name":"Let's build an app",
     "city":5,
     "startDate":"2019-07-22T14:15:00+00:00",
     "endDate":"2019-07-22T15:00:00+00:00"
  },
  {
     "id":8,
     "isFree":true,
     "name":"Refactoring to clean code",
     "city":6,
     "startDate":"2019-09-13T19:00:00+00:00",
     "endDate":"2019-09-13T20:00:00+00:00"
  },
  {
     "id":9,
     "isFree":false,
     "name":"Refactoring to clean code",
     "city":2,
     "startDate":"2019-07-17T12:00:00+00:00",
     "endDate":"2019-07-17T14:00:00+00:00"
  },
  {
     "id":10,
     "isFree":true,
     "name":"Refactoring to clean code",
     "city":8,
     "startDate":"2019-09-14T15:00:00+00:00",
     "endDate":"2019-09-14T17:30:00+00:00"
  },
  {
     "id":11,
     "isFree":true,
     "name":"CSS VS SASS",
     "city":3,
     "startDate":"2019-08-27T22:00:00+00:00",
     "endDate":"2019-08-27T23:00:00+00:00"
  },
  {
     "id":12,
     "isFree":false,
     "name":"Design Thinking: creating value through problem-solving",
     "city":10,
     "startDate":"2019-09-27T11:00:00+00:00",
     "endDate":"2019-09-27T12:15:00+00:00"
  },
  {
     "id":13,
     "isFree":false,
     "name":"Leadership in Tech",
     "city":4,
     "startDate":"2019-09-22T04:00:00+00:00",
     "endDate":"2019-09-22T05:45:00+00:00"
  },
  {
     "id":14,
     "isFree":true,
     "name":"Design Thinking: creating value through problem-solving",
     "city":9,
     "startDate":"2019-09-03T15:00:00+00:00",
     "endDate":"2019-09-03T18:00:00+00:00"
  },
  {
     "id":15,
     "isFree":false,
     "name":"Refactoring to clean code",
     "city":5,
     "startDate":"2019-09-26T16:00:00+00:00",
     "endDate":"2019-09-26T16:45:00+00:00"
  },
  {
     "id":16,
     "isFree":true,
     "name":"Let's build an app",
     "city":10,
     "startDate":"2019-06-18T07:00:00+00:00",
     "endDate":"2019-06-18T09:00:00+00:00"
  },
  {
     "id":17,
     "isFree":true,
     "name":"Git Deep: A look at some of Git's powerful, underused features",
     "city":3,
     "startDate":"2019-08-25T22:00:00+00:00",
     "endDate":"2019-08-25T23:20:00+00:00"
  },
  {
     "id":18,
     "isFree":false,
     "name":"Top Frontend Frameworks",
     "city":2,
     "startDate":"2019-09-27T04:00:00+00:00",
     "endDate":"2019-09-27T07:00:00+00:00"
  },
  {
     "id":19,
     "isFree":true,
     "name":"Refactoring to clean code",
     "city":1,
     "startDate":"2019-07-14T14:00:00+00:00",
     "endDate":"2019-07-14T15:00:00+00:00"
  },
  {
     "id":20,
     "isFree":false,
     "name":"Top Frontend Frameworks",
     "city":4,
     "startDate":"2019-08-08T03:00:00+00:00",
     "endDate":"2019-08-08T05:00:00+00:00"
  },
  {
     "id":21,
     "isFree":true,
     "name":"Git Deep: A look at some of Git's powerful, underused features",
     "city":9,
     "startDate":"2019-08-05T18:15:00+00:00",
     "endDate":"2019-08-05T19:15:00+00:00"
  },
  {
     "id":22,
     "isFree":false,
     "name":"Git Deep: A look at some of Git's powerful, underused features",
     "city":3,
     "startDate":"2019-07-17T21:30:00+00:00",
     "endDate":"2019-07-17T22:30:00+00:00"
  },
  {
     "id":23,
     "isFree":true,
     "name":"Git Deep: A look at some of Git's powerful, underused features",
     "city":5,
     "startDate":"2019-08-02T14:00:00+00:00",
     "endDate":"2019-08-02T14:45:00+00:00"
  },
  {
     "id":24,
     "isFree":true,
     "name":"Let's build an app",
     "city":9,
     "startDate":"2019-09-16T22:00:00+00:00",
     "endDate":"2019-09-16T23:15:00+00:00"
  }
];

export default events;
