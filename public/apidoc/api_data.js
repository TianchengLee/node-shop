define({ "api": [
  {
    "type": "get",
    "url": "/v1/users/checkUsername/:username",
    "title": "检查用户名是否可用",
    "description": "<p>检查用户名是否可用</p>",
    "name": "checkUsername",
    "group": "1_Users_Sign",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>要检查的用户名</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"succMsg\": \"用户名可用!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/checkUsername/:username"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "1_Users_Sign"
  },
  {
    "type": "get",
    "url": "/v1/users/getVCode",
    "title": "获取验证码",
    "description": "<p>获取验证码</p>",
    "name": "getVCode",
    "group": "1_Users_Sign",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "svg",
            "optional": false,
            "field": "svg",
            "description": "<p>图片验证码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100\" height=\"50\" viewBox=\"0,0,100,50\"><path d=\"M1 39 C54 38,32 41,94 30\" stroke=\"#444\" fill=\"none\"/><path d=\"M9 37 C42 8,42 36,94 18\" stroke=\"#222\" fill=\"none\"/></svg>",
          "type": "string"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/getVCode"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "1_Users_Sign"
  },
  {
    "type": "post",
    "url": "/v1/users/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "1_Users_Sign",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息(带token)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"username\": \"ltc\",\n      \"id\": 1,\n      \"mobile\": \"13888888888\",\n      \"token\":\"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y\",\n  },\n  \"succMsg\": \"登录成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "1_Users_Sign"
  },
  {
    "type": "post",
    "url": "/v1/users/register",
    "title": "用户注册",
    "description": "<p>用户注册</p>",
    "name": "register",
    "group": "1_Users_Sign",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "username",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "vCode",
            "description": "<p>验证码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息(带token)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"ctime\": \"2018-12-14 21:27:18\",\n      \"username\": \"ltc\",\n      \"mobile\": \"13888888888\",\n      \"token\":\"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y\",\n      \"id\": 1\n  },\n  \"succMsg\": \"注册成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/register"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "1_Users_Sign"
  },
  {
    "type": "get",
    "url": "/v1/users/getUserInfo",
    "title": "获取当前登录的用户信息 (需要token)",
    "description": "<p>获取当前登录的用户信息</p>",
    "name": "getUserInfo",
    "group": "2_Users_Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"data\": {\n     \"id\": 33,\n     \"username\": \"ltc\",\n     \"mobile\": \"13888888888\",\n     \"token\":\"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y\",\n },\n \"succMsg\": \"获取用户信息成功!\",\n \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/getUserInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "2_Users_Profile"
  },
  {
    "type": "post",
    "url": "/v1/users/updatePassword",
    "title": "修改密码 (需要token)",
    "description": "<p>修改密码</p>",
    "name": "updatePassword",
    "group": "2_Users_Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "oldPassword",
            "description": "<p>旧密码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "newPassword",
            "description": "<p>新密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": null,\n  \"succMsg\": \"修改密码成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/updatePassword"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "2_Users_Profile"
  },
  {
    "type": "post",
    "url": "/v1/users/updateUserInfo",
    "title": "修改个人信息 (需要token)",
    "description": "<p>修改个人信息</p>",
    "name": "updateUserInfo",
    "group": "2_Users_Profile",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>用户信息(带token)</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"id\": 1,\n      \"username\": \"ltc\",\n      \"mobile\": \"13888888888\",\n      \"token\":\"eyJzxcciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJpdGNhc3Qtd2giLCJpYXQiOjE1NDQ3OTQwMzgsImV4cCI6MTU0NzM4NjAzOH0.BTSqwVIHsT8UPT2T7AYVCnG7pc_zCv9UrBAIoCmcR1Y\",\n  },\n  \"succMsg\": \"用户信息修改成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/updateUserInfo"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "2_Users_Profile"
  },
  {
    "type": "post",
    "url": "/v1/users/addReceiverAddress",
    "title": "添加收货人信息 (需要token)",
    "description": "<p>添加收货人信息</p>",
    "name": "addReceiverAddress",
    "group": "3_Users_Receiver",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "receiver_name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "postcode",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "area",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "detailed_address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>添加的收货人信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\":  {\n      \"id\": 1,\n      \"receiver_name\": \"传智人\",\n      \"mobile\": \"13838383838\",\n      \"postcode\": \"430000\",\n      \"province\": \"湖北省\",\n      \"city\": \"武汉市\",\n      \"area\": \"洪山区\",\n      \"detailed_address\": \"汤逊湖北路长城科技园6栋知乐楼\",\n      \"user_id\": 1\n  },\n  \"succMsg\": \"添加收货人成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/addReceiverAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "3_Users_Receiver"
  },
  {
    "type": "get",
    "url": "/v1/users/deleteReceiverAddress/:id",
    "title": "删除收货人信息 (需要token)",
    "description": "<p>删除收货人信息</p>",
    "name": "deleteReceiverAddress",
    "group": "3_Users_Receiver",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>收货人id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "null",
            "optional": false,
            "field": "data",
            "description": "<p>数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"data\": null,\n \"succMsg\": \"删除收货人成功!\",\n \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/deleteReceiverAddress/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "3_Users_Receiver"
  },
  {
    "type": "get",
    "url": "/v1/users/getReceiverAddress",
    "title": "获取所有收货人信息 (需要token)",
    "description": "<p>获取所有收货人信息</p>",
    "name": "getReceiverAddress",
    "group": "3_Users_Receiver",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>所有收货人信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"status\": 200,\n \"data\": [\n      {\n          \"id\": 2,\n          \"receiver_name\": \"传智大法好\",\n          \"mobile\": \"13030303030\",\n          \"postcode\": \"430070\",\n          \"province\": \"湖北省\",\n          \"city\": \"武汉市\",\n          \"area\": \"东湖高新区\",\n          \"detailed_address\": \"金融港B15栋\"\n      }\n  ],\n \"succMsg\": \"获取收货人列表成功!\",\n \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/getReceiverAddress"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "3_Users_Receiver"
  },
  {
    "type": "post",
    "url": "/v1/users/updateReceiverAddress/:id",
    "title": "修改收货人信息 (需要token)",
    "description": "<p>修改收货人信息</p>",
    "name": "updateReceiverAddress",
    "group": "3_Users_Receiver",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "string",
            "optional": false,
            "field": "Authorization",
            "description": "<p>token</p>"
          }
        ]
      }
    },
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "receiver_name",
            "description": "<p>收货人姓名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "mobile",
            "description": "<p>手机号</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "postcode",
            "description": "<p>邮编</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "province",
            "description": "<p>省</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "city",
            "description": "<p>市</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "area",
            "description": "<p>区</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "detailed_address",
            "description": "<p>详细地址</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "status",
            "description": "<p>状态码</p>"
          },
          {
            "group": "Success 200",
            "type": "json",
            "optional": false,
            "field": "data",
            "description": "<p>修改的收货人信息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "succMsg",
            "description": "<p>成功消息</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "errMsg",
            "description": "<p>错误消息</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": 200,\n  \"data\":  {\n      \"id\": 1,\n      \"receiver_name\": \"传智人\",\n      \"mobile\": \"13838383838\",\n      \"postcode\": \"430000\",\n      \"province\": \"湖北省\",\n      \"city\": \"武汉市\",\n      \"area\": \"洪山区\",\n      \"detailed_address\": \"汤逊湖北路长城科技园6栋知乐楼\",\n      \"user_id\": 1\n  },\n  \"succMsg\": \"修改收货人成功!\",\n  \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/users/updateReceiverAddress/:id"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/users.js",
    "groupTitle": "3_Users_Receiver"
  }
] });
