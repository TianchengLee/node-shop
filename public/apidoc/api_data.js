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
  },
  {
    "type": "get",
    "url": "/v1/news/getNews",
    "title": "获取新闻信息",
    "description": "<p>获取新闻信息</p>",
    "name": "getNews",
    "group": "4_News_Info",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": true,
            "field": "keys",
            "description": "<p>搜索关键字,不传表示获取所有</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "page",
            "description": "<p>页码数</p>"
          },
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "pageSize",
            "description": "<p>每页条数</p>"
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
          "content": "{\n  \"status\": 200,\n  \"data\": {\n      \"news\": [\n          {\n              \"id\": 1,\n              \"title\": \"华为旗舰从4199到800也没人买？用户：老余贼尴尬！\",\n              \"icon\": \"https://m.360buyimg.com/mobilecms/s460x300_jfs/t1/7963/22/8242/69293/5c0b8ed6Eece81a99/826842f8f0dbe29d.jpg!q70.jpg\",\n              \"description\": \"华为手机从曾经的“中华酷联”时代到现在的“华米OV”时代，一步步走向了国产大哥的存在。如今的华为旗下的产品受到了国内外手机用户的认可，在通讯技术上也有了不小的*成就。这都得益于这些年来华为在技术研发上的巨大投入和努力，才有了今天的这些成果。但是价值提升了，华为的手机也越来越贵了。\",\n              \"content\": \"<div class=\\\"_3DxVSWjoqsghQdmNPYtFxK _2RXg7l_BWEMqTnH7z_3eXh\\\"><div class=\\\"_6KXjmZXt4URp4NonrOWFB\\\"><div class=\\\"_2HOCMwa4f5nu5ghetrumiN\\\"><div class=\\\"_2CD7_2MZBYElpXw5FMiwuK\\\"><h3 clstag=\\\"newstxt|main_a\\\">华为旗舰从4199到800也没人买？用户：老余贼尴尬！*</h3></div><div class=\\\"undefined\\\"><div class=\\\"undefined\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM zG7SQS_t1_Jg1IV2xtbo_\\\"><img src=\\\"//m.360buyimg.com/mobilecms/jfs/t17707/53/1797412963/89469/822356b1/5ad5d1a5N5cb28cbb.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/jfs/t17707/53/1797412963/89469/822356b1/5ad5d1a5N5cb28cbb.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\"></div><div class=\\\"_3Z3585d03aL1refvDecItG\\\">MrSix</div></div></div></div></div><div class=\\\"yCtYoR9aaUJ6gLLeZpGlr\\\"><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">华为手机从曾经的“中华酷联”时代到现在的“华米OV”时代，一步步走向了国产大哥的存在。如今的华为旗下的产品受到了国内外手机用户的认可，在通讯技术上也有了不小的成就。这都得益于这些年来华为在技术研发上的巨大投入和努力，才有了今天的这些成果。但是价值提升了，华为的手机也越来越贵了。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s1026x739_jfs/t1/28214/33/641/79054/5c0b8ef2E6b62b1ef/9388db85f1d9dc68.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s1026x739_jfs/t1/28214/33/641/79054/5c0b8ef2E6b62b1ef/9388db85f1d9dc68.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c01\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">都说从前没钱买华为，现在还是没钱买华为，因为现在的华为旗舰确实变贵了。华为从一开始走的就是高端路线，针对的目标用户是高端商务人群，所以手机一开始就不算是很便宜，现在质量性能和外观都提升了，高端品牌有溢价也是正常的。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s1026x684_jfs/t1/27349/9/688/93898/5c0b8f02E9e3b0950/fd84296cd0e51d7d.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s1026x684_jfs/t1/27349/9/688/93898/5c0b8f02E9e3b0950/fd84296cd0e51d7d.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c02\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">虽然现在的华为手机变贵了，但销量上并不少，可见除了目标用户，其他的很多消费者也都认可了华为。对溢价的宽容是因为华为的旗舰机性能确实强，质量对得起价格，比如今年的Mate20系列，还有P20系列，在性能配置和外观设计方面都是顶级旗舰的水准。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/jfs/t1/28285/36/670/169637/5c0b8f13E705582c8/6bdf5f9029e4356f.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/jfs/t1/28285/36/670/169637/5c0b8f13E705582c8/6bdf5f9029e4356f.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c03\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">但凡事总有例外，华为的旗舰也不是每一款都物有所值，也不是每一款消费者都能容忍它的高价，比如在2015年的9月份上市的华为MateS。这款手机的上市价是4199元，但是现在跌到了949元，但是尽管跌到了百元机的价位，但是却依然没人乐意买了用。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s800x600_jfs/t1/24727/1/662/250046/5c0b8f22E96629a77/ef5772789d750b1a.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s800x600_jfs/t1/24727/1/662/250046/5c0b8f22E96629a77/ef5772789d750b1a.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c04\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">华为MateS搭载的是麒麟935处理器，3+64G内存醋和，采用的是5.5英寸的2.5D弧面显示屏，外观上还是以前华为旗舰的风格，满满的商务风。另外，这款手机在拍照功能上采用的是前置800万，后置1300万单摄，虽然不强，但是对于当时来讲还算不错，这款手机还采用了升级版指纹识别，解锁更快。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s1026x660_jfs/t1/25059/28/621/181809/5c0b8f32E92c181e8/85b556231d4d7f37.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s1026x660_jfs/t1/25059/28/621/181809/5c0b8f32E92c181e8/85b556231d4d7f37.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c05\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">这款手机在当时算是不错的，但是现在的华为不是三年前的华为能比的，不管是品牌影响力还是手机的知名度，4199元的价格确实有点高了。这款手机的定价让它成为了华为最尴尬的一款旗舰，15年的时候正是iPhone 6sP开售，两种高端品牌一对比，消费者肯定会倾向于苹果手机一些。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s1026x631_jfs/t1/24442/37/662/148910/5c0b8f42E5b9cf618/91d9816ba2cee1f2.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s1026x631_jfs/t1/24442/37/662/148910/5c0b8f42E5b9cf618/91d9816ba2cee1f2.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c06\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">很多网友对于这款手机的评价也是一针见血。当时的华为手机是支撑不起这么高的定价的，买的人数可想而知，再看看同期上市的iPhone 6sP，现在的售价还在3000左右，就知道当年的华为手机和苹果差距有多大了，虽然现在已经缩小甚至赶超，但华为还需要再接再厉。</p></div></div>\",\n             \"views\": 0\n         },\n         {\n             \"id\": 2,\n             \"title\": \"荣耀V20来袭，挖孔屏＋4800万单摄，但售价吃不消啊\",\n             \"icon\": \"https://m.360buyimg.com/mobilecms/s460x300_jfs/t1/18250/13/1277/105469/5c10df0bEe5d3369d/a68ee70e8f908a7f.jpeg!q70.jpg\",\n             \"description\": \"18年已经接近年底了，各大手机厂商并没有停止发布新机的频率，反而想要抓住年底的机会，再次发布一波新机，为自己的18年画上一个完美的句号。而18年底的手机之争简*直就是一场挖孔屏手机的战争，据目前公布的消息，在12月份，三星、华为、联想都会正式发布于挖孔屏手机，全面屏手机似乎要向挖孔屏方面发展了。\",\n             \"content\": \"<div class=\\\"_3DxVSWjoqsghQdmNPYtFxK _2RXg7l_BWEMqTnH7z_3eXh\\\"><div class=\\\"_6KXjmZXt4URp4NonrOWFB\\\"><div class=\\\"_2HOCMwa4f5nu5ghetrumiN\\\"><div class=\\\"_2CD7_2MZBYElpXw5FMiwuK\\\"><h3 clstag=\\\"newstxt|main_a\\\">荣耀V20来袭，挖孔屏＋4800万单摄，但售价吃不消啊*</h3></div><div class=\\\"undefined\\\"><div class=\\\"undefined\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM zG7SQS_t1_Jg1IV2xtbo_\\\"><img src=\\\"//m.360buyimg.com/mobilecms/jfs/t16156/280/531365076/20691/69f1b1da/5a34d5f8Nd96be00d.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/jfs/t16156/280/531365076/20691/69f1b1da/5a34d5f8Nd96be00d.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\"></div><div class=\\\"_3Z3585d03aL1refvDecItG\\\">Alpha科技</div></div></div></div></div><div class=\\\"yCtYoR9aaUJ6gLLeZpGlr\\\"><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">18年已经接近年底了，各大手机厂商并没有停止发布新机的频率，反而想要抓住年底的机会，再次发布一波新机，为自己的18年画上一个完美的句号。而18年底的手机之争简直就是一场挖孔屏手机的战争，据目前公布的消息，在12月份，三星、华为、联想都会正式发布于挖孔屏手机，全面屏手机似乎要向挖孔屏方面发展了。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s795x1026_jfs/t1/26798/6/1280/273070/5c10df1dE1be894ae/073de4c84bbb56a5.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s795x1026_jfs/t1/26798/6/1280/273070/5c10df1dE1be894ae/073de4c84bbb56a5.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c01\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">而在近日，荣耀官方也正式官宣了，将在12月26日正式发布荣耀V20。不出所料，这款新机也采用了挖孔屏设计，而且和华为nova 4彻底撞机了，同样都是将挖孔屏设计在了屏幕最上角，而且外观设计非常详细，简直就是一个模子里刻出来的。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s774x1026_jfs/t1/6166/36/9121/271835/5c10df2cE4f51c9e2/f9f9493b5a7508ab.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s774x1026_jfs/t1/6166/36/9121/271835/5c10df2cE4f51c9e2/f9f9493b5a7508ab.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c02\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">虽然外观相似，但荣耀V20却是首款搭载Link Turbo技术的手机，能够智能检测网络拥塞情况，同时同步使用或者切换Wi-Fi/4G网络，让手机永远处于一个不断网的状态。当然了，这个技术虽然看上去确实很厉害，但我个人觉得实用性一般，有些鸡肋。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s775x1026_jfs/t1/22815/2/1266/238514/5c10df3eEc0ad9518/fd98e6feecfac242.jpg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s775x1026_jfs/t1/22815/2/1266/238514/5c10df3eEc0ad9518/fd98e6feecfac242.jpg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c03\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">不得值得称赞的是荣耀V20的后置主摄像头采用了索尼IMX586，像素高达4800万，分辨率更是达到8000x6000。不出意外的话，荣耀V20将会是首款4800万像素手机。这也就意味着荣耀V20的拍照能力不会弱与华为nova 4。毕竟从各方面的爆料来看，华为nova 4将会采用与mate20相似的摄像头设计。</p><div class=\\\"_1KzSpgz7dV2fQi0DA7rBNO _37gzSu5Hae3LGdP4jdoYRh\\\"><div class=\\\"_3VbmUI3ZuVpoS7-YNYXcJo c7DNzkcG7rbA6gFkZPklM\\\"><img src=\\\"//m.360buyimg.com/mobilecms/s1026x795_jfs/t1/11889/2/2098/119222/5c10df57E285081ae/a70dfa1d3248a49a.jpeg!q70.jpg\\\" data-lazy-src=\\\"//m.360buyimg.com/mobilecms/s1026x795_jfs/t1/11889/2/2098/119222/5c10df57E285081ae/a70dfa1d3248a49a.jpeg!q70.jpg\\\" class=\\\"_1ly13xh54Zg8BuvNqyKAZW\\\" alt=\\\"加载图\\\" clstag=\\\"newstxt|main_c04\\\"></div></div><p class=\\\"_1KzSpgz7dV2fQi0DA7rBNO ekdgpaS7Doc3bGdSvcWwK\\\">至于在售价方面，想必大家都知道，荣耀虽然属于华为旗下的，但相比华为手机，荣耀的售价相对都会便宜一些，所以我觉得此次的荣耀V20在售价方面，可能会相比华为nova 4更便宜。不过考虑到首批挖孔屏手机，以及首款4800万单摄手机的关系，荣耀V20以及华为nova 4两款手机的售价都会远高于上一代，一般的学生党和工薪党就别考虑了。</p></div></div>\",\n             \"views\": 0\n         },\n     ],\n     \"totalCount\": 3\n },\n \"succMsg\": \"获取新闻数据成功!\",\n \"errMsg\": null\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "/v1/news/getNews"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/v1/news.js",
    "groupTitle": "4_News_Info"
  }
] });
